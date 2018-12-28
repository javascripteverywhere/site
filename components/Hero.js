import HeroStyles from './styles/HeroStyles';

import ReactRotatingText from 'react-rotating-text';

const Hero = () => (
  <HeroStyles>
    <h1>JavaScript Everywhere</h1>
    <div>
      <h2>
        Learn to use JavaScript to build{' '}
        <ReactRotatingText
          items={['APIs', 'web apps', 'mobile apps', 'desktop apps']}
        />
      </h2>
      <p>A new book by Adam Scott, from O’Reilly Media</p>
    </div>
  </HeroStyles>
);

export default Hero;
