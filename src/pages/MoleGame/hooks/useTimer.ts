import { useEffect, useRef, useState } from 'react';
import { CONSTANT } from 'helpers/constant';
import { useNavigate } from 'react-router-dom';

export const useTimer = (time) => {
  const navigate = useNavigate();
  const [internalTime, setInternalTime] = useState(time);
  const [isGamePlaying, setIsGamePlaying] = useState(false);
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
        }
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [time, internalTime, isGamePlaying]);

  const onStartGame = () => {
    setIsGamePlaying(true);
  };
  const onStopGame = () => {
    setIsGamePlaying(false);
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
    onStopGame,
    onEndGame,
  };
};
