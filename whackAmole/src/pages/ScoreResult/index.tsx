import { Button } from '../../components/Button';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userScoreState } from '../../store/scoreAtom';
import { useNavigate } from 'react-router-dom';
import { CONSTANT } from '../../helpers/constant';
import styles from './ScoreResult.module.scss';
import '../../styles/index.scss';

const Index = () => {
  const navigate = useNavigate();
  const userScore = useRecoilValue(userScoreState);
  return (
    <section className={styles.innerWrap}>
      <h2 hidden>점수 화면</h2>
      <h3>최종점수</h3>
      <p className={styles.score}>{userScore.score}</p>
      <Button className={styles.btn} onClickAction={() => navigate(CONSTANT.URL.MOLE_GAME)}>
        다시하기
      </Button>
      <Button className={styles.btn} onClickAction={() => navigate(CONSTANT.URL.START)}>
        처음으로
      </Button>
    </section>
  );
};

export default Index;
