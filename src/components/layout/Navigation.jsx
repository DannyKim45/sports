import { NavLink, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const isHockeySection = location.pathname.startsWith("/hockey");
  const isBaseballSection = location.pathname.startsWith("/baseball");

  // Hide navigation on main page
  if (!isHockeySection && !isBaseballSection) {
    return null;
  }

  // Hockey Navigation
  if (isHockeySection) {
    return (
      <nav className="main-nav" role="navigation" aria-label="메인 네비게이션">
        <div className="nav-container">
          <NavLink to="/hockey/intro" className="nav-logo" aria-label="NHL 허브로 가기">
            NHL 허브
          </NavLink>
          <div className="nav-links" role="menu">
            <NavLink to="/" className="nav-home" role="menuitem">
              메인
            </NavLink>
            <NavLink to="/hockey/intro" role="menuitem">
              하키 소개
            </NavLink>
            <NavLink to="/hockey/games" role="menuitem">
              경기 일정
            </NavLink>
            <NavLink to="/hockey/players" role="menuitem">
              선수 소개
            </NavLink>
            <NavLink to="/hockey/guide" role="menuitem">
              관람 가이드
            </NavLink>
            <NavLink to="/hockey/my-games" role="menuitem">
              나의 관람 기록
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }

  // Baseball Navigation
  if (isBaseballSection) {
    return (
      <nav className="main-nav" role="navigation" aria-label="메인 네비게이션">
        <div className="nav-container">
          <NavLink to="/baseball/intro" className="nav-logo" aria-label="MLB 허브로 가기">
            MLB 허브
          </NavLink>
          <div className="nav-links" role="menu">
            <NavLink to="/" className="nav-home" role="menuitem">
              메인
            </NavLink>
            <NavLink to="/baseball/intro" role="menuitem">
              야구 소개
            </NavLink>
            <NavLink to="/baseball/games" role="menuitem">
              경기 일정
            </NavLink>
            <NavLink to="/baseball/players" role="menuitem">
              선수 소개
            </NavLink>
            <NavLink to="/baseball/guide" role="menuitem">
              관람 가이드
            </NavLink>
            <NavLink to="/baseball/my-games" role="menuitem">
              나의 관람 기록
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }

  return null;
}
