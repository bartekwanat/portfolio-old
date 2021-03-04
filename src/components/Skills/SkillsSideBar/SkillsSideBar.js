import React from 'react';
import { SectionTitle } from 'components/HelloPage/Hello/Title/SectionTitle';
import { StyledSkillsSideBar } from './SkillsSideBar.style';
import { ReactComponent as Puzzle } from 'assets/icons/puzzle.svg';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export const SkillsSideBar = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.animation'),
      {
        opacity: 0,
        x: -1000,
      },
      {
        opacity: 1,
        x: 0,   
        duration: 3,
        yoyoEase: true,
        scrollTrigger: {
          trigger: element.querySelector('.trigger'),
          start: '26% 30%',
          end: '45% 100%',
          scrub: true,
          
        
        },
      }
    );
  }, []);

  return (
    <section ref={ref} className="trigger">
    <StyledSkillsSideBar className="animation">
      <Puzzle />
      <SectionTitle title="skills"></SectionTitle>
    </StyledSkillsSideBar>
    </section>
  );
};
