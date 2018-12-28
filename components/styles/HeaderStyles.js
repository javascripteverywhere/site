import styled from 'styled-components';

const HeaderStyles = styled.header`
  background: ${props => props.theme.yellow};
  color: #0c1824;
  padding: 2rem 2rem 0 2rem;

  a {
    margin-right: 15px;
  }
`;

export default HeaderStyles;
