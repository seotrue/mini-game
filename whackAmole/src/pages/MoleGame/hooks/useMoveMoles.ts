import { useRecoilValue } from 'recoil';
import { userGameSettingState } from '../../../store/gameSettingAtom';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CONSTANT } from '../../../helpers/constant';
import { isNull } from '../../../helpers/Util';

export const useMoveMoles = (isPlaying) => {
  const { row, col, mole: maxMole } = useRecoilValue(userGameSettingState);
  const [moles, setMoles] = useState(Array.from({ length: row * col }, () => 0) || []);
  const [showTime, setShowTime] = useState(CONSTANT.TIME.MAX_SHOW_MOLE_TIME);
  const whacked = useRef(null);

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

  useEffect(() => {
    if (whacked.current === null) return;
    const updateMoles = getRandomMoles();
    updateMoles[whacked.current] = 0;
    setMoles(updateMoles);
  }, [whacked.current]);

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

  const handleWhack = (idx) => {
    whacked.current = idx;
  };

  return { moles, handleWhack, showTime, setShowTime };
};
