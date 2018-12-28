import Link from 'next/link';

import HeaderStyles from './styles/HeaderStyles';

const Header = () => (
  <HeaderStyles>
    <img src="/static/logo.svg" alt="JavaScript Everywhere logo" height="50" />
    {/* <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav> */}
  </HeaderStyles>
);

export default Header;
