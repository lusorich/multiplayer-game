import {
  EndPage,
  ErrorPage,
  GamePage,
  StartPage,
  LeaderBoardPage,
  ForumPage,
  TopicPage,
  Registration,
  Signin,
  MainPage,
} from '../../pages'

import { PAGES, Routes } from './routes.types';

import topics from '../../mocks/topics.json';
import topic from '../../mocks/topic.json';
import ratings from '../../mocks/ratings.json';
/**
 * Роуты главной страницы, до авторизации
 */

// TODO выпилить мок
const MAIN_ROUTES: Routes = [
  {
    path: PAGES.MAIN,
    Component: () => <MainPage />,
  },
  {
    path: PAGES.ABOUT,
    Component: () => <div>About</div>,
  },
  {
    path: PAGES.RULES,
    Component: () => <div>Rules</div>,
  },
  {
    path: PAGES.VIDEO,
    Component: () => <div>Video</div>,
  },
];
/**
 * Роуты связанные с игрой, после авторизации
 */
const GAME_ROUTES: Routes = [
  {
    path: PAGES.GAME,
    Component: () => <GamePage />,
  },
  {
    path: PAGES.START_GAME,
    Component: () => <StartPage />,
  },
  {
    path: PAGES.ENDGAME,
    Component: () => <EndPage />,
  },
  {
    path: PAGES.LEADERBOARD,
    Component: () => <LeaderBoardPage users={ratings} />,
  },
  {
    path: PAGES.FORUM,
    Component: () => <ForumPage topics={topics} />,
  },
  {
    path: PAGES.TOPIC,
    Component: () => <TopicPage topic={topic} />,
  },
  {
    path: PAGES.ROOMS,
    Component: () => <div>Rooms</div>,
  },
];
/**
 * Роуты связанные с профилем
 */
const PROFILE_ROUTES: Routes = [
  {
    path: PAGES.EDIT_PROFILE,
    Component: () => <div>Edit profile</div>,
  },
  {
    path: PAGES.EDIT_PASSWORD,
    Component: () => <div>Edit Password</div>,
  },
  {
    path: PAGES.PROFILE,
    Component: () => <div>Profile</div>,
  },
];
/**
 * Роуты связанные с аутентификацией
 */
const AUTH_ROUTES: Routes = [
  {
    path: PAGES.SIGNIN,
    Component: () => <Signin />,
  },
  {
    path: PAGES.REGISTRATION,
    Component: () => <Registration />,
  },
];
/**
 * Роуты связанные с ошибками
 */
const ERROR_ROUTES: Routes = [
  {
    path: PAGES.NOTFOUND,
    Component: () => <ErrorPage code={404} text="Не туда попали" />,
  },
  {
    path: PAGES.SERVER_ERROR,
    Component: () => <ErrorPage code={500} text="Мы уже фиксим" />,
  },
];

export const routesConfig: Routes = [
  ...MAIN_ROUTES,
  ...GAME_ROUTES,
  ...PROFILE_ROUTES,
  ...AUTH_ROUTES,
  ...ERROR_ROUTES,
];
