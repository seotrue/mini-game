import { Button } from 'components/Button';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userScoreState } from 'store/ScoreAtom';
import { useNavigate } from 'react-router-dom';
import { CONSTANT } from 'helpers/constant';

const Index = () => {
  const navigate = useNavigate();
  const userScore = useRecoilValue(userScoreState);
  return (
    <section>
      <h2 hidden>점수 화면</h2>
      <p>최종점수</p>
      <p>{userScore.score}</p>
      <Button onClickAction={() => navigate(CONSTANT.URL.MOLE_GAME)}>다시하기</Button>
      <Button onClickAction={() => navigate(CONSTANT.URL.START)}>처음으로</Button>
    </section>
  );
};

export default Index;
