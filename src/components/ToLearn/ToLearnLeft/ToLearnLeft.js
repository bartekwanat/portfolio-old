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
        x: -1000,
      },
      {
        x: 0,

        scrollTrigger: {
          trigger: element.querySelector('.animation'),
          start: '40% 15%',
          end: '65% 100%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={ref} className="animation">
      <StyledToLearnLeft className="grid-container">
        <img src={brain} className="brain" />
        <img src={plus} className="plus" />
        <Title>What i want to learn</Title>
      </StyledToLearnLeft>
    </section>
  );
};
