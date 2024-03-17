import TextField from 'components/TextField';
import React from 'react';
import { useInputGameSetting } from 'pages/GameSetting/useInputGameSetting';
import { isNull } from 'helpers/Util';
import { userInputGameSettingTypes } from 'types/gameSettingTypes';

const Index = () => {
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
    </>
  );
};

export default Index;
