import TextField from 'components/TextField';
import React, { useState } from 'react';
import { isNull } from 'helpers/Util';
import { useValidation } from 'pages/GameSetting/hooks/useValidation';
import { Button } from 'components/Button';
import 'styles/index.scss';
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
    <section className={'inner-wrap'}>
      <h2>[두더지 게임 준비화면]</h2>
      <TextField
        label={'열'}
        id={'row'}
        value={rowValue as number}
        type={'number'}
        onChange={handleChangeRow}
        min={2}
        max={6}
        errMsg={rowErrorMsg}
      />
      <TextField
        label={'행'}
        id={'col'}
        value={colValue as number}
        type={'number'}
        onChange={handleChangeCol}
        min={2}
        max={6}
        errMsg={colErrorMsg}
      />
      <TextField
        label={'두더지'}
        id={'mole'}
        value={moleValue as number}
        type={'number'}
        onChange={handleChangeMole}
        disabled={isNull(rowValue) || isNull(colValue)}
        min={1}
        errMsg={moleValueErrorMsg}
      />
      <Button onClickAction={() => handleStartGame()} disabled={isNull(moleValue) || !isNull(moleValueErrorMsg)}>
        시작
      </Button>
    </section>
  );
};

export default Index;
