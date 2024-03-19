import TextField from 'components/TextField';
import React, { useState } from 'react';
import { isNull } from 'helpers/Util';
import { useValidation } from 'pages/GameSetting/hooks/useValidation';
import { Button } from 'components/Button';

const Index = () => {
  const {
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
  } = useValidation();

  return (
    <section>
      <h2 hidden>준비화면</h2>
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
      <span>{rowErrorMsg || colErrorMsg}</span>
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
      <Button onClickAction={() => handleStartGame()} disabled={isNull(moleValue) || !isNull(moleValueErrorMsg)}>
        시작
      </Button>
    </section>
  );
};

export default Index;
