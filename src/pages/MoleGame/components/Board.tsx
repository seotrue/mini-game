import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userGameSettingState } from 'store/gameSettingAtom';
import { Mole } from './Mole';

interface IBoard {
  isPlaying: boolean;
}
const Board = ({ isPlaying }: IBoard) => {
  const { row, col, mole: maxMole } = useRecoilValue(userGameSettingState);
  const [moles, setMoles] = useState(Array.from({ length: row * col }, () => 0) || []);
  useEffect(() => {
    let moleInterval;

    if (isPlaying) {
      // 랜덤 두더지 나오기
      const includesMoleLength = moles.filter((mole) => mole === 1).length;
      moleInterval = setInterval(() => {
        const newMoles = [...moles];
        let randomIndex = Math.floor(Math.random() * moles.length);
        // 이미 열린 두더지라면 다른 두더지 고르기
        randomIndex = newMoles[randomIndex] === 1 ? Math.floor(Math.random() * moles.length) : randomIndex;
        newMoles[randomIndex] = 1;
        setMoles(newMoles);

        setTimeout(() => {
          newMoles[randomIndex] = 0;
          setMoles(newMoles);
        }, 200); //Math.random() * 1000 + 300);
      }, 500);
    }
    return () => {
      clearInterval(moleInterval);
    };
  }, [isPlaying, moles]);

  const handleWhack = (idx) => {
    if (!isPlaying || moles[idx] === 0) return;
    // 점수 올리기, 두더지들어가기
    const newMoles = [...moles];
    newMoles[idx] = 0;
    setMoles(newMoles);
  };

  return (
    <div className={'borderWrap'}>
      <h1>Board</h1>
      {/* todo: 임시 인라인 스타일 적용, 삭제예정 */}
      <div>
        {moles.map((mole, index) => (
          <div
            className={(index + 1) % col === 0 ? 'cell lineBreak' : 'cell'}
            key={index}
            onClick={() => handleWhack(index)}
          >
            {mole ? '두더지' : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
