import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ImgAvatar, LeftSection } from './HeroStyles';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <ImgAvatar src='/images/avatar.jpg'/><br />
          {/* Welcome To <br />
          My Personal Portfolio */}
          Максим Боровец
        </SectionTitle>
        <SectionText>
        {/* The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps. */}
        Junior Javascript Developer. Разработка сайтов по доступным ценам.
        </SectionText>
        <Button onClick={props.handleClick}>Связаться</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;