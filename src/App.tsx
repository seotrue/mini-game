import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import {CONSTANT} from "helpers/constant";

const Start = lazy(() => import('pages/StartPage'));
const MoleGame = lazy(() => import('pages/MoleGamePage'));
const Score = lazy(() => import('pages/ScorePage'));
const Ranking = lazy(() => import('pages/RankingPage'));

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
