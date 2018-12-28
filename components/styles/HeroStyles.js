import styled from 'styled-components';

const HeroStyles = styled.div`
  background: ${props => props.theme.yellow};
  color: #0c1824;
  text-align: center;

  * {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 6.4rem;
    line-height: 1.2;
  }

  .react-rotating-text-cursor {
    animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s
      infinite;
  }

  @keyframes blinking-cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default HeroStyles;
