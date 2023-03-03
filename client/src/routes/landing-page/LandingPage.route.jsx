import Header from '../../component/header/Header.component';
import heroImg from '../../assets/product-img/hero_img.jpg';
import { Figure, Img } from '../../component/image/image.styled';
import { HeroSection, HeroTextContatiner } from './LandingPage.styled';
import { HeadingH2, Para, Span } from '../../component/heading/headings.styled';
import { BtnContainer, Button } from '../../component/button/Button.component';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <Header route="/" />
      <main>
        <HeroSection>
          <Figure hero>
            <Img
              src={heroImg}
              alt="Hero display of a chat application mockup"
            />
          </Figure>
          <HeroTextContatiner>
            <div>
              <HeadingH2 hero>
                Exprience the future with{' '}
                <Span hero>
                  Oi<Span exclamation>!</Span>
                </Span>
              </HeadingH2>
              <Para hero>
                A futuristic <span>Real-Time</span> built on modern technologies
                with features you want
              </Para>
              <div>
                <Link to="signin">
                  <Button primary hero>
                    Get Started
                  </Button>
                </Link>
                <Link to='signup'>
                <Button hero>Learn More</Button>
                </Link>
              </div>
            </div>
          </HeroTextContatiner>
        </HeroSection>
      </main>
    </>
  );
};

export default LandingPage;
