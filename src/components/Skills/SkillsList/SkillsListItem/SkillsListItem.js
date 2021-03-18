import React from 'react';
import PropTypes from 'prop-types';
import { StyledSkillsItem } from './SkillsListItem.styles';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export const SkillsListItem = ({ skills: { name, url } }) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.children,
      {
        opacity: 0,
        y: 100,
        scale: 0,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: 'easeInOut',
        stagger: 0.2,

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
    <section ref={ref} className="trigger">
      <StyledSkillsItem className="item-animation" style={{ backgroundImage: `url(${url})` }} alt={url}></StyledSkillsItem>
    </section>
  );
};
SkillsListItem.propTypes = {
  skills: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};
