import React from 'react';
import { StyledAboutMePage } from './AboutMePage.styles';
import { SideBar } from 'components/AboutMePage/SideBar/SideBar';
import { AboutMeSection } from 'components/AboutMePage/AboutMeText/AboutMeText';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export const AboutMePage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
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
        x: -100,
        y: 0,
        rotateZ: 0,


        scrollTrigger: {
          trigger: element.querySelector('.about'),
          start: '14% 30%',
          end: '38% 100%',
          scrub: true,
          
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.animate-side-bar'),
      {
        opacity: 0,
        x: 500,
        y: 500,
        rotateZ: -360,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotateZ: 0,
        ease: 'easeInOut',
        stagger: 0.2,


        scrollTrigger: {
          trigger: element.querySelector('.about'),
          start: '14% 30%',
          end: '38% 100%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <StyledAboutMePage ref={ref} className="about">
      <section className="animate-side-bar">
      <SideBar />
      </section>
      <section className="animate-text">
      <AboutMeSection />
      </section>
    </StyledAboutMePage>
  );
};
