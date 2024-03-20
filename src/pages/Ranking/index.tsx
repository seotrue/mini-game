import React from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { gameRankingListState, gameScoreListState } from 'store/scoreAtom';
import { Button } from 'components/Button';
import { IUserScore } from 'types/gameSettingTypes';
import styles from './Ranking.module.scss';
import 'styles/index.scss';

const Index = () => {
  const gameRakingList: IUserScore[] = useRecoilValue(gameRankingListState) || [];
  const resetRakingList = useResetRecoilState(gameScoreListState);
  return (
    <section className={styles.innerWrap}>
      <h2 hidden>순위화면</h2>
      {gameRakingList.length ? (
        <ul>
          {gameRakingList.map((item, idx) => {
            return (
              <li key={idx}>
                <p>순위 {idx + 1}</p>
                <p>점수: {item.score}</p>
                <p>날짜: {item.date}</p>
              </li>
            );
          })}
          <Button onClickAction={() => resetRakingList()}>초기화 하기</Button>
        </ul>
      ) : (
        <p>등록된 점수가 없습니다.</p>
      )}
    </section>
  );
};

export default Index;
