import { useRecoilValue } from 'recoil';
import { userGameSettingState } from 'store/gameSettingAtom';
import { useEffect, useState } from 'react';

export const useMoles = (isPlaying) => {
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
    // todo: fix 클릭 시 getRandomMoles 렌더링 멈춤
    setMoles(newMoles);
  };
  return { moles, handleWhack };
};
