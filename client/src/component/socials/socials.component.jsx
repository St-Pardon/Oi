import React from 'react';
import { Container, SocialIcon } from './socials.styled';
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';
import { TbWorldWww } from 'react-icons/tb';

const Socials = ({ twitter, linkedin, github, portfolio }) => {
  return (
    <Container>
      <a href={twitter} target="_blank">
        <SocialIcon twitter>
          <RiTwitterFill />
          <span>Twitter</span>
        </SocialIcon>
      </a>
      <a href={linkedin} target="_blank">
        <SocialIcon linkedin>
          <RiLinkedinFill />
          <span>LinkedIn</span>
        </SocialIcon>
      </a>
      <a href={github} target="_blank">
        <SocialIcon github>
          <RiGithubFill />
          <span>Github</span>
        </SocialIcon>
      </a>
      <a href={portfolio} target="_blank">
        <SocialIcon site>
          <TbWorldWww />
          <span>Website</span>
        </SocialIcon>
      </a>
    </Container>
  );
};

export default Socials;
