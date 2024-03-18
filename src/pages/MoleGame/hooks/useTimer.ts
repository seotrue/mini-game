import { useEffect, useRef, useState } from 'react';
import { CONSTANT } from 'helpers/constant';
import { useNavigate } from 'react-router-dom';

export const useTimer = (time) => {
  const navigate = useNavigate();
  const [internalTime, setInternalTime] = useState(time);
  const [isGamePlaying, setIsGamePlaying] = useState(false);
  const [gameStatus, setGameStatus] = useState(CONSTANT.GAME_STATUS.END.ID);
  const timerRef = useRef(time);

  useEffect(() => {
    if (isGamePlaying) {
      timerRef.current = setInterval(() => {
        if (internalTime > 0) {
          setInternalTime((prevTime) => prevTime - 1000);
        } else if (internalTime === 0) {
          clearInterval(timerRef.current);
          setInternalTime(time);
          setIsGamePlaying(false);
          setGameStatus(CONSTANT.GAME_STATUS.TIME_OVER.ID);
        }
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [time, internalTime, isGamePlaying]);

  const onStartGame = () => {
    setIsGamePlaying(true);
    setGameStatus(CONSTANT.GAME_STATUS.PLAYING.ID);
  };
  const onPausedGame = () => {
    setIsGamePlaying(false);
    setGameStatus(CONSTANT.GAME_STATUS.PAUSED.ID);
  };

  const onEndGame = () => {
    setIsGamePlaying(false);
    setInternalTime(time);
    navigate(CONSTANT.URL.START);
  };

  return {
    internalTime,
    isGamePlaying,
    onStartGame,
    onPausedGame,
    onEndGame,
    gameStatus,
  };
};
