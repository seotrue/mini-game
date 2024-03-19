import { useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { gameScoreListState, userScoreState } from 'store/ScoreAtom';
import { useMoveMoles } from 'pages/MoleGame/hooks/useMoveMoles';
import { CONSTANT } from 'helpers/constant';
import { useNavigate } from 'react-router-dom';

export const useMoleGame = (gameStatus, isGamePlaying, internalTime) => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const setUserScoreState = useSetRecoilState(userScoreState);
  const setGameScoreListState = useSetRecoilState(gameScoreListState);
  const { moles, handleWhack, showTime, setShowTime } = useMoveMoles(isGamePlaying);

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

  // 예시1) 두더지의 노출 시간을 남은시간에 비례하여 줄어들게 하기
  // 10초단위로 체킹
  useEffect(() => {
    if (showTime <= CONSTANT.TIME.MIN_SHOW_MOLE_TIME || !isGamePlaying) return;
    const restTimeFlag = [10000, 20000, 30000, 40000, 50000].includes(internalTime);
    if (restTimeFlag) {
      setShowTime((prevState) => prevState - 100);
    }
  }, [isGamePlaying, internalTime]);

  const onWhack = (index) => {
    if (!isGamePlaying || moles[index] === 0) return;
    handleWhack(index);
    if (moles[index] === 1) setScore((prevState) => prevState + 1);
    if (moles[index] === 2) setScore((prevState) => (prevState === 0 ? 0 : prevState - 1));
  };

  return { moles, score, onWhack };
};
