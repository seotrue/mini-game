import React from 'react';
import { useRecoilValue } from 'recoil';
import { userGameSettingState } from '../../../store/gameSettingAtom';
import styles from '../MoleGame.module.scss';
import { CONSTANT } from '../../../helpers/constant';

interface IBoard {
  onWhack: (idx: number) => void;
  moles: number[];
}
const Board = ({ moles, onWhack }: IBoard) => {
  const { col } = useRecoilValue(userGameSettingState);

  return (
    <div className={styles.boardWrap}>
      <p className={styles.guideText}>모자 쓴 두더지를 잡아주세요(수염있는 두더지 클릭 시 마이너스)</p>
      <div className={styles.board}>
        {moles.map((mole, index) => (
          <div className={(index + 1) % col === 0 ? `${styles.lineBreak}  ${styles.cell}` : styles.cell} key={index}>
            <div
              className={
                mole === CONSTANT.SCORE.MOLE || mole === CONSTANT.SCORE.BOMB
                  ? `${styles.mole} ${styles.up}`
                  : `${styles.mole}`
              }
              onClick={(event) => onWhack(index)}
            >
              {mole === CONSTANT.SCORE.MOLE ? (
                <img src="whackAmole/src/assets/mole.png" alt="두더지 이미지" />
              ) : mole === CONSTANT.SCORE.BOMB ? (
                <img src="whackAmole/src/assets/bombMole.png" alt="폭탄 이미지" />
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
