import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { CONSTANT } from 'helpers/constant';

const Start = lazy(() => import('pages/GameSetting'));
const MoleGame = lazy(() => import('pages/MoleGame'));
const Score = lazy(() => import('pages/Score'));
const Ranking = lazy(() => import('pages/Ranking'));

const App = () => {
  return (
    <Suspense fallback={'로딩....'}>
      <Routes>
        <Route path={CONSTANT.URL.START} element={<Start />} />
        <Route path={CONSTANT.URL.MOLE_GAME} element={<MoleGame />} />
        <Route path={CONSTANT.URL.SCORE} element={<Score />} />
        <Route path={CONSTANT.URL.RANKING} element={<Ranking />} />
      </Routes>
    </Suspense>
  );
};
export default App;
