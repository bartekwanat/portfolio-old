import React from 'react';
import { skillsData } from 'data/skillsLogo';
import { StyledSkillsList } from './SkillsList.styles';
import { SkillsListItem } from 'components/Skills/SkillsList/SkillsListItem/SkillsListItem';
import { ReactComponent as Multifunction } from 'assets/icons/multifunction.svg';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export function SkillsList() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.multifunction'),
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,

        scrollTrigger: {
          trigger: element.querySelector('.trigger'),
          start: '30% 30%',
          end: '50% 95%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <StyledSkillsList>
      {skillsData.map((skills) => (
        <SkillsListItem className="skill" key={skills.name} skills={skills} />
      ))}
      <section ref={ref} className="trigger">
        <Multifunction className="multifunction" />
      </section>
    </StyledSkillsList>
  );
}
