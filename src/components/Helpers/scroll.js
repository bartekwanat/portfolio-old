// let pos = { current: 0, final: 0 };
// let isScrolling = false;
// let scrollDirection = -1;
// let scroll = () => {
//   isScrolling = true;

//   pos.current += Math.round(((pos.final - pos.current) / 10) * 10) / 10;
//   window.scrollTo(0, pos.current);

//   if ((scrollDirection === -1 && pos.current + 2 >= pos.final) || (scrollDirection === 1 && pos.current - 2 <= pos.final)) {
//     isScrolling = false;
//     return;
//   }

//   requestAnimationFrame(scroll);
// };

// function onMouseWheel(e) {
//   let wheelDistance = e.detail ? -e.detail / 7 : e.wheelDelta / 150;
//   scrollDirection = e.detail < 0 ? 1 : e.wheelDelta > 0 ? 1 : -1;

//   pos.final = window.scrollY - wheelDistance * 100;
//   !isScrolling && scroll();

//   e.preventDefault();
// }

// window.addEventListener('mousewheel', onMouseWheel);
// window.addEventListener('DOMMouseScroll', onMouseWheel);
// window.addEventListener('scroll', () => (pos.current = window.scrollY));
