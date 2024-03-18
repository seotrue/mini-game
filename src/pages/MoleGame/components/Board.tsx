import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userGameSettingState } from 'store/gameSettingAtom';

interface IBoard {
  onWhack: (idx: number) => void;
  moles: number[];
}
const Board = ({ moles, onWhack }: IBoard) => {
  const { col } = useRecoilValue(userGameSettingState);
  return (
    <div className={'borderWrap'}>
      <h1>Board</h1>
      {/* todo: 임시 인라인 스타일 적용, 삭제예정 */}
      <div>
        {moles.map((mole, index) => (
          <div
            className={(index + 1) % col === 0 ? 'cell lineBreak' : 'cell'}
            key={index}
            onClick={() => onWhack(index)}
          >
            {mole ? '두더지' : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
