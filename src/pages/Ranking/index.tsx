import React from 'react';
import { useRecoilValue } from 'recoil';
import { gameRankingListState } from 'store/ScoreAtom';

const Index = () => {
  const gameRakingList = useRecoilValue(gameRankingListState);
  console.log(gameRakingList, 'gameRakingList');
  return (
    <>
      <h1>순위화면</h1>
      {gameRakingList.map((item, idx) => {
        return (
          <div key={idx}>
            <p>순위 {idx + 1}</p>
            <p>점수: {item.score}</p>
            <p>날짜: {item.date}</p>
          </div>
        );
      })}
    </>
  );
};

export default Index;
