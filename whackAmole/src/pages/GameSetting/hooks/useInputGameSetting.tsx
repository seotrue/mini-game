import React, { useEffect, useState } from 'react';
import { userInputGameSettingTypes } from '../../../types/gameSettingTypes';
import { userGameSettingState } from '../../../store/gameSettingAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isNull } from '../../../helpers/Util';

export const useInputGameSetting = (initValue, validationType) => {
  const [value, setter] = useState(initValue);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [userGameSettingValue, setUserGameSettingValue] = useRecoilState(userGameSettingState);

  useEffect(() => {
    if (!isNull(userGameSettingValue.row) && !isNull(userGameSettingValue.col && !isNull(userGameSettingValue.mole))) {
      let updateState;
      switch (validationType) {
        case userInputGameSettingTypes.row:
          updateState = userGameSettingValue.row;
          break;
        case userInputGameSettingTypes.col:
          updateState = userGameSettingValue.col;
          break;
        case userInputGameSettingTypes.mole:
          updateState = userGameSettingValue.mole;
          break;
      }
      setter(updateState);
    }
  }, [userGameSettingValue]);

  const handleValidationCheck = (value: number, type) => {
    //1.1. 열과 행은 최소 2, 최대 6까지만 입력 받습니다.
    let msg = null;
    let inputValue = value;
    if ([userInputGameSettingTypes.row, userInputGameSettingTypes.col].includes(type)) {
      msg = value < 2 || value > 6 ? '최소 2, 최대 6까지만 입력 받을 수 있습니다.' : null;
    }
    //최소 1마리에서 전체 굴 개수에 절반 미만으로 입력 가능합니다.
    if (type === userInputGameSettingTypes.mole) {
      const { row, col } = userGameSettingValue;
      inputValue = Math.floor((row * col) / 2);
      msg = value > inputValue ? '최소 1마리에서 전체 굴 개수에 절반 미만으로 입력 가능합니다' : null;
    }

    setUserGameSettingValue({ ...userGameSettingValue, [type]: value });
    setErrorMsg(msg);
  };

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    handleValidationCheck(val, validationType);
    if (typeof val === 'number') {
      setter(val);
    }
  };
  return [value, handler, setter, errorMsg, setErrorMsg];
};
