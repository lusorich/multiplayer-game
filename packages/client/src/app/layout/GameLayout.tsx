import { NavLink, Outlet } from 'react-router-dom';

import { PAGES } from '../lib/routes.types';
import { StyledContainer, StyledGridItem } from '../../shared/ui/Styled';


import styles from './index.module.scss';

export const GameLayout = () => {
  return (
    <StyledContainer maxWidth={false} disableGutters>
      <StyledGridItem container spacing={2} extendClass={styles.grid}>
        <StyledGridItem item>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            to={PAGES.GAME}>
            Главная
            <span />
          </NavLink>
        </StyledGridItem>
        <StyledGridItem item>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            to={PAGES.ENDGAME}>
            Конец
            <span />
          </NavLink>
        </StyledGridItem>
        <StyledGridItem item>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            to={PAGES.LEADERBOARD}>
            Рейтинг
            <span />
          </NavLink>
        </StyledGridItem>
        <StyledGridItem item>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            to={PAGES.FORUM}>
            Форум
            <span />
          </NavLink>
        </StyledGridItem>
        <StyledGridItem item>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            to={PAGES.PROFILE}>
            Профиль
            <span />
          </NavLink>
        </StyledGridItem>
        <StyledGridItem item extendClass={styles.gridLast}>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            to={PAGES.ROOMS}>
            Комнаты
            <span />
          </NavLink>
        </StyledGridItem>
      </StyledGridItem>
      <Outlet />
    </StyledContainer>
  );
};
