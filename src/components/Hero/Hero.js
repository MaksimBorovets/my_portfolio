import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ImgAvatar, LeftSection } from './HeroStyles';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>          
        <ImgAvatar src='/images/avatar.jpg'/><br />
        <SectionTitle main center>

          {/* Welcome To <br />
          My Personal Portfolio */}
          Максим Боровец
        </SectionTitle>
        <SectionText>
        {/* The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps. */}
        Junior Javascript Developer. Разработка сайтов по доступным ценам.
        </SectionText>
        <a href="tel:+380637274776"><Button>Связаться</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;