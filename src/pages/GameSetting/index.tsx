import TextField from 'components/TextField';
import React from 'react';
import { useInputGameSetting } from 'pages/GameSetting/hooks/useInputGameSetting';
import { isNull } from 'helpers/Util';
import { userInputGameSettingTypes } from 'types/gameSettingTypes';
import { useNavigate } from 'react-router-dom';
import { CONSTANT } from 'helpers/constant';

const Index = () => {
  const navigate = useNavigate();
  const [rowValue, handleChangeRow, , RowErrorMsg] = useInputGameSetting(null, userInputGameSettingTypes.row);
  const [colValue, handleChangeCol, , ColErrorMsg] = useInputGameSetting(null, userInputGameSettingTypes.col);
  const [moleValue, handleChangeMole, , moleValueErrorMsg] = useInputGameSetting(null, userInputGameSettingTypes.mole);
  return (
    <>
      <TextField
        label={'열'}
        id={'row'}
        value={rowValue as number}
        type={'number'}
        onChange={handleChangeRow}
        min={2}
        max={6}
      />
      <TextField
        label={'행'}
        id={'col'}
        value={colValue as number}
        type={'number'}
        onChange={handleChangeCol}
        min={2}
        max={6}
      />
      <span>{RowErrorMsg || ColErrorMsg}</span>
      <TextField
        label={'두더지'}
        id={'mole'}
        value={moleValue as number}
        type={'number'}
        onChange={handleChangeMole}
        disabled={isNull(rowValue) || isNull(colValue)}
        min={1}
      />

      <span>{moleValueErrorMsg}</span>
      <button
        type="button"
        onClick={() => navigate(CONSTANT.URL.MOLE_GAME)}
        disabled={isNull(moleValue) || !isNull(moleValueErrorMsg)}
      >
        시작
      </button>
    </>
  );
};

export default Index;
