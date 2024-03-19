import { useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { gameScoreListState, userScoreState } from 'store/ScoreAtom';
import { useMoveMoles } from 'pages/MoleGame/hooks/useMoveMoles';
import { CONSTANT } from 'helpers/constant';
import { useNavigate } from 'react-router-dom';

export const useMoleGame = (gameStatus, isGamePlaying) => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const setUserScoreState = useSetRecoilState(userScoreState);
  const setGameScoreListState = useSetRecoilState(gameScoreListState);
  const { moles, handleWhack } = useMoveMoles(isGamePlaying);

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

  const onWhack = (index) => {
    if (!isGamePlaying || moles[index] === 0) return;
    handleWhack(index);
    if (moles[index] === 1) setScore((prevState) => prevState + 1);
    if (moles[index] === 2) setScore((prevState) => (prevState === 0 ? 0 : prevState - 1));
  };

  return { moles, score, onWhack };
};
