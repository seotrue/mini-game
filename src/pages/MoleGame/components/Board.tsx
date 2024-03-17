import React, { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { userGameSettingState } from 'store/gameSettingAtom';

const Board = () => {
  const { row, col } = useRecoilValue(userGameSettingState);
  const boardRow = useRef(Array.from({ length: row }, () => null) || []);
  const boardCol = useRef(Array.from({ length: col }, () => null) || []);

  return (
    <>
      {/* todo: 임시 인라인 스타일 적용, 삭제예정 */}
      <h1>Board</h1>
      <div style={{ display: 'table' }}>
        {boardRow.current.map((tblRow, index) => (
          <div className="row" style={{ display: 'table-row', border: '1px solid #ccc' }}>
            {boardCol.current.map((cell, i) => (
              <div className="cell" style={{ display: 'table-cell', border: '1px solid #ccc' }}>
                cell
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
