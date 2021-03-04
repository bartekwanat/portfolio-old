import React from 'react';
import { StyledToLearnRight, SkillsWrapper } from './ToLearnRight.style';
import { ToLearnSkills } from 'components/ToLearn/ToLearnRight/ToLearnSkills';
import { skillsToLearn } from 'data/skillsToLearn';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export const ToLearnRight = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.children,
      {
        opacity: 0,
        x: 100,
        
       
      },
      {
        opacity: 1,
        x: 0,
     
        

        scrollTrigger: {
          trigger: element.querySelector('.trigger'),
          start: '60% 30%',
          end: '80% 100%',
          scrub: true,
          
        },
      }
    );
  }, []);

  return (
    <StyledToLearnRight>
      <section ref={ref} className="trigger">
        <SkillsWrapper>
          {skillsToLearn.map((skills) => (
            <ToLearnSkills classname="animate-item" key={skills.name} skills={skills} />
          ))}
        </SkillsWrapper>
      </section>
    </StyledToLearnRight>
  );
};
