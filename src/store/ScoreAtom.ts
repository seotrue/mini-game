import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { IUserGameSetting, IUserScore } from 'types/gameSettingTypes';

export const { persistAtom } = recoilPersist({
  key: 'recoil-persist', //원하는 key 값 입력
  storage: sessionStorage,
});

export const userScoreState = atom<IUserScore>({
  key: '#userScoreState', //
  default: {
    date: null,
    score: null,
  },
  effects_UNSTABLE: [persistAtom],
});
export const gameScoreListState = atom<IUserScore[]>({
  key: '#gameScoreListState', //
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const gameRankingListState = selector<IUserScore[]>({
  key: '#gameRankingListState',
  get: ({ get }) => {
    const gameList = get(gameScoreListState).slice();
    return [...gameList].sort((a, b) => b.score - a.score).slice(0, 10);
  },
});
