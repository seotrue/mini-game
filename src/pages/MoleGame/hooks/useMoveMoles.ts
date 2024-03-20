import { useRecoilState, useRecoilValue } from 'recoil';
import { userGameSettingState } from 'store/gameSettingAtom';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CONSTANT } from 'helpers/constant';

export const useMoveMoles = (isPlaying) => {
  const { row, col, mole: maxMole } = useRecoilValue(userGameSettingState);
  const [moles, setMoles] = useState(Array.from({ length: row * col }, () => 0) || []);
  const [showTime, setShowTime] = useState(CONSTANT.TIME.MAX_SHOW_MOLE_TIME);
  const whacked = useRef<number>(0);
  const ref = useRef(null);

  useEffect(() => {
    let moleInterval;
    if (isPlaying) {
      const updateMoles = getRandomMoles();
      moleInterval = setInterval(() => {
        setMoles(updateMoles);
      }, showTime);
    }
    return () => {
      clearInterval(moleInterval);
    };
  }, [isPlaying, moles, showTime]);

  const getRandomMoles = () => {
    const updateMoles = moles.map((mole) => (mole = 0));
    // 랜덤 두더지 삽입
    for (let i = 0; i < maxMole; i++) {
      const randomIndex = duplicateWithoutRandomIndex(updateMoles);
      updateMoles[randomIndex] = 1;
    }
    // 랜덤 폭탄 삽입
    const randomIndex = duplicateWithoutRandomIndex(updateMoles);
    updateMoles[randomIndex] = 2;
    return updateMoles;
  };

  const duplicateWithoutRandomIndex = useCallback((updateMoles) => {
    let randomIndex = Math.floor(Math.random() * moles.length);
    return updateMoles[randomIndex] === 1 ? Math.floor(Math.random() * moles.length) : randomIndex;
  }, []);

  // useEffect(() => {
  //   return () => clearTimeout(ref.current);
  // }, []);

  const handleWhack = (idx) => {
    // todo: fix 클릭 시 getRandomMoles 렌더링 멈춤
    // 원인: uesEffect 랜더링하기전에 자꾸 전의 값 기억
    const newMoles = [...moles];
    newMoles[idx] = 0;
    setMoles(newMoles);
  };

  return { moles, handleWhack, showTime, setShowTime };
};
