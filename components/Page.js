import styled, { ThemeProvider } from 'styled-components';

import Meta from './Meta';
import Header from './Header';
import GlobalStyles from './styles/Global';

const theme = {
  yellow: '#FCC853', //${props => props.theme.yellow}
  black: '#0C1824'
};

const Layout = props => (
  <ThemeProvider theme={theme}>
    <div>
      <Meta />
      <GlobalStyles />
      <Header />
      {props.children}
    </div>
  </ThemeProvider>
);

export default Layout;
