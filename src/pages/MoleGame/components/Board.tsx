import React from 'react';
import { useRecoilValue } from 'recoil';
import { userGameSettingState } from 'store/gameSettingAtom';
import styles from '../MoleGame.module.scss';

interface IBoard {
  onWhack: (idx: number) => void;
  moles: number[];
}
const Board = ({ moles, onWhack }: IBoard) => {
  const { col } = useRecoilValue(userGameSettingState);

  return (
    <div className={styles.borderWrap}>
      <h1>Board</h1>
      <div className={styles.borderWrap}>
        <p>모자 쓴 두더지를 잡아주세요(수염있는 두더지 클릭 시 마이너스)</p>
        {moles.map((mole, index) => (
          <div className={(index + 1) % col === 0 ? `${styles.lineBreak}  ${styles.cell}` : styles.cell} key={index}>
            <div
              className={mole === 1 || mole === 2 ? `${styles.mole} ${styles.up}` : `${styles.mole}`}
              onClick={(event) => onWhack(index)}
            >
              {mole === 1 ? (
                <img src="src/assets/image/mole.png" alt="두더지 이미지" />
              ) : mole === 2 ? (
                <img src="src/assets/image/bombMole.png" alt="폭탄 이미지" />
              ) : (
                ''
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
