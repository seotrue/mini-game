import React, { useEffect, useMemo, useState } from 'react';
import Board from 'pages/MoleGame/components/Board';
import { Button } from 'components/Button';
import { useTimer } from 'pages/MoleGame/hooks/useTimer';
import { CONSTANT } from 'helpers/constant';
import { Timer } from 'pages/MoleGame/components/Timer';
import { useMoleGame } from 'pages/MoleGame/hooks/useMoleGame';
const Index = () => {
  const { internalTime, isGamePlaying, onStartGame, onPausedGame, onEndGame, gameStatus } = useTimer(
    CONSTANT.TIME.TIME_LIMIT,
  );
  const { moles, score, onWhack } = useMoleGame(gameStatus, isGamePlaying);

  return (
    <section>
      <h2 hidden>게임화면</h2>
      <Timer internalTime={internalTime} />
      <span>점수:{score}</span>
      <Board moles={moles} onWhack={onWhack} />
      <Button onClickAction={() => (!isGamePlaying ? onStartGame() : onPausedGame())}>
        {CONSTANT.GAME_STATUS[gameStatus].BUTTON_TEXT}
      </Button>
      <Button onClickAction={onEndGame}> 그만하기</Button>
    </section>
  );
};

export default Index;
