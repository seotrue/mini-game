import { atom } from 'recoil';
// import { recoilPersist } from 'recoil-persist';
import { IUserGameSetting } from 'types/gameSettingTypes';

// export const { persistAtom } = recoilPersist({
// 	key: 'recoil-persist', //원하는 key 값 입력
// 	storage: sessionStorage
// });

export const userGameSettingState = atom<IUserGameSetting>({
  key: '#userGameSettingState', //
  default: {
    row: null,
    col: null,
    mole: null,
  },
});
