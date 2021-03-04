import React from 'react';
import { StyledProjectsContainer, Container } from './ProjectsContainer.styles';
import soon from 'assets/icons/soon.png';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';


export const ProjectsContainer = () => {
  
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.children,
      {
        opacity: 0,
        scale: 0,
        
      },
      {
        opacity: 1,
        scale: 1,
        stagger : 0.3,
        scrollTrigger: {
          trigger: element.querySelector('.trigger'),
          start: '80% 15%',
          end: '100% 100%',
          scrub: true,
         
        },
      }
    );
  }, []);

  return (
  <StyledProjectsContainer  className="trigger">
    <Container ref={ref} className="animate">
      <div>
        <img src={soon} />
      </div>
      <div>
      <img src={soon} />
      </div>
      <div>
      <img src={soon} />
      </div>
      <div>
      <img src={soon} />
      </div>
      <div>
      <img src={soon} />
      </div>
      <div>
      <img src={soon} />
      </div>
    </Container>
  </StyledProjectsContainer>
);
}