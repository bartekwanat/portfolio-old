import React from 'react';
import { StyledProjectsTitleBox } from './ProjectsTitleBox.styles';
import { SectionTitle } from 'components/HelloPage/Hello/Title/SectionTitle';
import bulb from 'assets/icons/bulb.png';
import pages from 'assets/icons/pages.png';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
export const ProjectsTitleBox = () => {
   
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.children,
      {
        y: 50,
        opacity: 0
       
      },
      {
        y: 0,
        opacity: 1,
        ease: 'easeInOut',
        stagger: 0.3,
        scrollTrigger: {
          trigger: element.querySelector('.trigger'),
          start: '65% 15%',
          end: '88% 100%',
          scrub: true,
         
          
         
        },
      }
    );
  }, []);

  return (
 
 <StyledProjectsTitleBox ref={ref} className="trigger">
    <img src={bulb} />
    <SectionTitle  title="projects"></SectionTitle>
    <img src={pages} />
  </StyledProjectsTitleBox>
);
}