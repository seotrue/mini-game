import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userGameSettingState } from 'store/gameSettingAtom';

interface IBoard {
  isPlaying: boolean;
  onWhack: () => void;
}
const Board = ({ isPlaying, onWhack }: IBoard) => {
  const { row, col, mole: maxMole } = useRecoilValue(userGameSettingState);
  const [moles, setMoles] = useState(Array.from({ length: row * col }, () => 0) || []);
  useEffect(() => {
    let moleInterval;
    if (isPlaying) {
      // 랜덤 두더지 나오기
      const updateMoles = getRandomMoles();
      moleInterval = setInterval(() => {
        setMoles(updateMoles);
      }, 700);
    }
    return () => {
      clearInterval(moleInterval);
    };
  }, [isPlaying, moles]);

  const getRandomMoles = () => {
    const updateMoles = moles.map((mole) => (mole = 0));
    let randomIndexArray = [];

    for (let i = 0; i < maxMole; i++) {
      let randomIndex = Math.floor(Math.random() * moles.length);
      randomIndex = updateMoles[randomIndex] === 1 ? Math.floor(Math.random() * moles.length) : randomIndex;
      randomIndexArray.push(randomIndex);
      updateMoles[randomIndex] = 1;
    }
    return updateMoles;
  };
  const handleWhack = (idx) => {
    if (!isPlaying || moles[idx] === 0) return;
    // 점수 올리기, 두더지들어가기
    const newMoles = [...moles];
    newMoles[idx] = 0;
    setMoles(newMoles);
    onWhack();
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
