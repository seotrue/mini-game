import React, { useEffect, useState } from 'react';
import { userInputGameSettingTypes } from '../../../types/gameSettingTypes';
import { userGameSettingState } from '../../../store/gameSettingAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isNull } from '../../../helpers/Util';
import { useNavigate } from 'react-router-dom';
import { useInputGameSetting } from './useInputGameSetting';
import { CONSTANT } from '../../../helpers/constant';

export const useValidation = () => {
  const navigate = useNavigate();
  const [rowValue, handleChangeRow, , rowErrorMsg] = useInputGameSetting(null, userInputGameSettingTypes.row);
  const [colValue, handleChangeCol, , colErrorMsg] = useInputGameSetting(null, userInputGameSettingTypes.col);
  const [moleValue, handleChangeMole, , moleValueErrorMsg, setMoleValueErrorMsg] = useInputGameSetting(
    null,
    userInputGameSettingTypes.mole,
  );

  const handleValidationCheck = () => {
    const inputValue = Math.floor((rowValue * colValue) / 2);
    const msg = moleValue > inputValue ? '최소 1마리에서 전체 굴 개수에 절반 미만으로 입력 가능합니다' : null;

    setMoleValueErrorMsg(msg);
    return isNull(msg);
  };

  const handleStartGame = () => {
    if (!handleValidationCheck()) return;
    navigate(CONSTANT.URL.MOLE_GAME);
  };
  return {
    rowValue,
    colValue,
    moleValue,
    handleChangeRow,
    handleChangeCol,
    handleChangeMole,
    rowErrorMsg,
    colErrorMsg,
    moleValueErrorMsg,
    handleStartGame,
  };
};
