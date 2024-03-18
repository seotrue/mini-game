import React, { useEffect, useMemo, useState } from 'react';
import Board from 'pages/MoleGame/components/Board';
import { Button } from 'components/Button';
import { useTimer } from 'pages/MoleGame/hooks/useTimer';
import { CONSTANT } from 'helpers/constant';
import { Timer } from 'pages/MoleGame/components/Timer';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { gameScoreListState, userScoreState } from 'store/ScoreAtom';

const Index = () => {
  const navigate = useNavigate();
  const { internalTime, isGamePlaying, onStartGame, onPausedGame, onEndGame, gameStatus } = useTimer(
    CONSTANT.TIME.TIME_LIMIT,
  );
  const [score, setScore] = useState(0);
  const setUserScoreState = useSetRecoilState(userScoreState);
  const setGameScoreListState = useSetRecoilState(gameScoreListState);

  useEffect(() => {
    // 시간 초과
    if (gameStatus === CONSTANT.GAME_STATUS.TIME_OVER.ID) {
      const date = new Date();
      const addState = { score, date: date.toLocaleString() };
      setUserScoreState(addState);
      setGameScoreListState((prev) => [...prev, addState]);
      navigate(CONSTANT.URL.SCORE_RESULT);
    }
  }, [gameStatus]);
  const onWhack = () => setScore((prevState) => prevState + 1);

  return (
    <>
      <Timer internalTime={internalTime} />
      <span>점수:{score}</span>
      <Board isPlaying={isGamePlaying} onWhack={onWhack} />
      <Button onClickAction={() => (!isGamePlaying ? onStartGame() : onPausedGame())}>
        {CONSTANT.GAME_STATUS[gameStatus].BUTTON_TEXT}
      </Button>
      <Button onClickAction={onEndGame}> 그만하기</Button>
    </>
  );
};

export default Index;
