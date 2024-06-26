import React from 'react';
import Board from './components/Board';
import { Button } from '../../components/Button';
import { useTimer } from './hooks/useTimer';
import { CONSTANT } from '../../helpers/constant';
import { Timer } from './components/Timer';
import { useMoleGame } from './hooks/useMoleGame';
import '../../styles/index.scss';
import styles from './MoleGame.module.scss';

const Index = () => {
  const { internalTime, isGamePlaying, onStartGame, onPausedGame, onEndGame, gameStatus } = useTimer(
    CONSTANT.TIME.TIME_LIMIT,
  );
  const { moles, score, onWhack } = useMoleGame(gameStatus, isGamePlaying, internalTime);

  return (
    <section className={styles.innerWrap}>
      <h2 hidden>게임화면</h2>
      <Timer className={styles.timer} internalTime={internalTime} />
      <span className={styles.score}>
        점수: <em>{score}</em> 점
      </span>
      <Board moles={moles} onWhack={onWhack} />
      <Button className={styles.btn} onClickAction={() => (!isGamePlaying ? onStartGame() : onPausedGame())}>
        {CONSTANT.GAME_STATUS[gameStatus].BUTTON_TEXT}
      </Button>
      <Button className={styles.btn} onClickAction={onEndGame}>
        그만하기
      </Button>
    </section>
  );
};

export default Index;
