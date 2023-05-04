import Header from '../../component/header/Header.component';
import heroImg from '../../assets/product-img/hero_img.jpg';
import heroImg3 from '../../assets/product-img/hero_img3.jpg';
import heroImg2 from '../../assets/product-img/group_chat.png';
import qrcode from '../../assets/bmc_qr.png';
import { Figure, Img } from '../../component/image/image.styled';
import {
  Section,
  HeroTextContatiner,
  ListItem,
  Ul,
  Br,
  Spx
} from './LandingPage.styled';
import {
  HeadingH2,
  HeadingH3,
  Para,
  Span,
} from '../../component/heading/headings.styled';
import { BtnContainer, Button } from '../../component/button/Button.component';
import { Link } from 'react-router-dom';
import Footer from '../../component/footer/footer.component';
import Socials from '../../component/socials/socials.component';

const LandingPage = () => {
  return (
    <>
      <Header route="/" />
      <main>
        <Section hero>
          <Figure hero>
            <Img
              src={heroImg}
              alt="Hero display of a chat application mockup"
            />
          </Figure>
          <HeroTextContatiner hero>
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
                <Link to="signup">
                  <Button hero>Learn More</Button>
                </Link>
              </div>
            </div>
          </HeroTextContatiner>
        </Section>
        <Section id="about" about>
          <HeroTextContatiner hero about>
            <Para hero about>
              <Span hero>
                Oi<Span exclamation>!</Span>
              </Span>{' '}
              is a resolutional new instant messaging application, which gives
              you the platform to communicate with your friends and loved ones.
              It is a platform where you can share your thoughts, ideas and
              opinions freely. The app is built on the concept of bringing
              people together by breaking barriers between them. It gives you
              the freedom to express yourself without any fear or hesitation.
            </Para>
          </HeroTextContatiner>
          <Figure hero>
            <Img
              src={heroImg3}
              alt="Hero image of messaging app illustration"
            />
          </Figure>
        </Section>
        <Section id="feature" feature>
          <Figure hero>
            <Img src={heroImg2} alt="Billy Butcher Image" />
          </Figure>
          {/* <iframe src="https://www.buymeacoffee.com/pardonne" frameborder="0"></iframe> */}
          <HeroTextContatiner feature>
            <div>
              <HeadingH3 feature>
                With{' '}
                <Span hero>
                  Oi<Span exclamation>!</Span>
                </Span>
                you can{' '}
              </HeadingH3>
              <Ul>
                <ListItem>Freely express yourself</ListItem>
                <ListItem>Chat with your friends and family</ListItem>
                <ListItem>Use beaultify emorjis to express yourself</ListItem>
                <ListItem>
                  Create a group chat and invite your friends and family
                </ListItem>
              </Ul>
            </div>
          </HeroTextContatiner>
        </Section>
        <Section teamcon>
          <HeadingH2 team>Meet the Team</HeadingH2>
          <Section team>
            <Figure team>
              <img
                src="https://res.cloudinary.com/dq4o7ygcd/image/upload/v1681909157/IMG_20230419_134610_hovwog.jpg"
                style={{ width: '100%' }}
                alt=""
              />
            </Figure>
            <HeroTextContatiner team>
              <HeadingH3 team>Onyedikachi Onu</HeadingH3>
              <HeadingH3 team>Software Engineer @ AlxAfrica</HeadingH3>
              <Para team>
                A software engineer with 2+ years of hands-on experience in
                developing web applications using frontend technologies like
                React, JavaScript, HTML5, CSS3 etc., and backend technologies
                like Node.js/Express. When i don't code i have fun by watching
                my favorite movies and TV shows, reading technical
                blogs/articles and listening to music. I am a hard worker and
                always deliver quality work within the specified timeframe.
              </Para>
              <Socials
                twitter={'https://twitter.com/st_Pardon'}
                github={'https://github.com/St-Pardon'}
                linkedin={
                  'https://www.linkedin.com/in/onyedikachi-onu-374a8512a/'
                }
                portfolio={'https://st-pardon.netlify.app'}
              />
            </HeroTextContatiner>
          </Section>
        </Section>
        <Section id="contribute" contribute>
          <HeadingH3 contribute>Contributions</HeadingH3>
          <Para hero>
            You can contribute to the project in one or both of two (2) ways.
          </Para>
          <Section qrcode>
            <div>
              <Para hero>
                To help build the application and contribute to the codebase.{' '}
                <Br />
                Read the contribution <a href="">Documentations</a>
              </Para>
            </div>
            <Para qr>Or</Para>
            <div>
              <Para hero><Spx>Or you can</Spx> Scan the QRCode below to buy us a coffee</Para>
              <Figure contribute>
                <Img src={qrcode} alt="BuyMeCoffee QRCode" />
              </Figure>
            </div>
          </Section>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
