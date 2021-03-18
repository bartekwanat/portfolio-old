import React from 'react';
import { StyledAboutMePage } from './AboutMePage.styles';

import { AboutMeSection } from 'components/AboutMePage/AboutMeText/AboutMeText';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { ThreeD } from 'components/Three/animation';

export const AboutMePage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const animationRef = useRef(null);

  useEffect(() => {
    const element = animationRef.current;
    gsap.fromTo(
      element.querySelector('.animate-text'),
      {
        opacity: 0,
        x: 500,
        y: 500,
        rotateZ: 45,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotateZ: 0,

        scrollTrigger: {
          trigger: element.querySelector('.about'),
          start: '5% 30%',
          end: '30% 100%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <StyledAboutMePage ref={animationRef} className="about">
      <section className="animate-text">
        <AboutMeSection />
      </section>
      <section className="black">
        <ThreeD className="render" />
      </section>
    </StyledAboutMePage>
  );
};
