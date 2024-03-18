import React from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { gameRankingListState, gameScoreListState } from 'store/ScoreAtom';
import { Button } from 'components/Button';
import { IUserScore } from 'types/gameSettingTypes';

const Index = () => {
  const gameRakingList: IUserScore[] = useRecoilValue(gameRankingListState) || [];
  const resetRakingList = useResetRecoilState(gameScoreListState);
  //  TODO:1-3 보드 크기에 따른 점수랭킹
  return (
    <>
      <h1>순위화면</h1>
      {gameRakingList.length ? (
        <>
          {gameRakingList.map((item, idx) => {
            return (
              <div key={idx}>
                <p>순위 {idx + 1}</p>
                <p>점수: {item.score}</p>
                <p>날짜: {item.date}</p>
              </div>
            );
          })}
          <Button onClickAction={() => resetRakingList()}>초기화 하기</Button>
        </>
      ) : (
        <p>등록된 점수가 없습니다.</p>
      )}
    </>
  );
};

export default Index;
