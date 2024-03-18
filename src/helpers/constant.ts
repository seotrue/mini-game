export const CONSTANT = {
  URL: {
    START: '/',
    MOLE_GAME: '/moleGame',
    SCORE_RESULT: '/scoreResult',
    RANKING: '/ranking',
  },
  TIME: {
    TIME_LIMIT: 30000,
  },
  GAME_STATUS: {
    PLAYING: {
      ID: 'PLAYING',
      BUTTON_TEXT: '일시정지',
    }, // 진행중
    PAUSED: {
      ID: 'PAUSED',
      BUTTON_TEXT: '재개하기',
    }, // 일시정지
    TIME_OVER: {
      ID: 'TIME_OVER',
      BUTTON_TEXT: null,
    }, // 타임 오버
    END: {
      ID: 'END',
      BUTTON_TEXT: '시작하기',
    }, // 시작 전
  },
};
