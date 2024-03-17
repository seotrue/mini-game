import React, { useMemo } from 'react';
import Board from 'pages/MoleGame/components/Board';
import { Button } from 'components/Button';
import { useTimer } from 'pages/MoleGame/hooks/useTimer';
import { CONSTANT } from 'helpers/constant';
import { Timer } from 'pages/MoleGame/components/Timer';

const Index = () => {
  const { internalTime, isGamePlaying, onStartGame, onStopGame, onEndGame } = useTimer(CONSTANT.TIME.TIME_LIMIT);

  const progressButtonText = useMemo(
    () => (!isGamePlaying ? (CONSTANT.TIME.TIME_LIMIT === internalTime ? '시작하기' : '재개하기') : '일시정지'),
    [internalTime, isGamePlaying],
  );
  return (
    <>
      <Timer internalTime={internalTime} />
      <Board />
      <Button onClickAction={() => (!isGamePlaying ? onStartGame() : onStopGame())}>{progressButtonText}</Button>
      <Button onClickAction={onEndGame}> 그만하기</Button>
    </>
  );
};

export default Index;
