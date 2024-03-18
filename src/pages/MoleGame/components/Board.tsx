import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userGameSettingState } from 'store/gameSettingAtom';
import { Mole } from './Mole';

interface IBoard {
  isPlaying: boolean;
}
const Board = ({ isPlaying }: IBoard) => {
  const { row, col } = useRecoilValue(userGameSettingState);
  const [moles, setMoles] = useState(Array.from({ length: row * col }, () => false) || []);

  return (
    <>
      <h1>Board</h1>
      {/* todo: 임시 인라인 스타일 적용, 삭제예정 */}
      <div>
        {moles.map((tblRow, index) => (
          <div
            key={index}
            style={(index + 1) % col === 0 ? { display: 'block' } : { display: 'inline-block', float: 'left' }}
          >
            <div style={{ display: 'table-col' }}></div>
            두더지
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
