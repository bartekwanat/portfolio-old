import { SectionTitle } from 'components/HelloPage/Hello/Title/SectionTitle';
import React from 'react';
import { StyledToLearnLeft, Title } from './ToLearnLeft.style';
import plus from 'assets/icons/plus.png';
import brain from 'assets/icons/brain.png';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export const ToLearnLeft = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.children,
      {
        
        y: 1000,
   
      },
      {
       
        y: 0,
        
        duration: 3,
        scrollTrigger: {
          trigger: element.querySelector('.animation'),
          start: '44% 15%',
          end: '75% 100%',
          scrub: true,
         
         
        },
      }
    );
  }, []);

  return (
    <section ref={ref} className="animation">
      <StyledToLearnLeft  className="grid-container">
        <img src={brain} className="brain" />
        <img src={plus} className="plus" />
        <Title>What i want to learn</Title>
      </StyledToLearnLeft>
    </section>
  );
};
