import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';

export default function Header(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <header className="page-header film-card__head">
      <Logo />
      {authStatus === AuthorizationStatus.Auth ?
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to="/#" className="user-block__link">Sign out</Link>
          </li>
        </ul>
        :
        <ul className="user-block">
          <li className="user-block__item">
            <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
          </li>
        </ul>}
    </header>
  );
}
