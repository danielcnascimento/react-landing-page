import {useState, useLayoutEffect} from 'react'

export default function useWindowPosition(id) {
  const [animate, setAnimate] = useState(false);
  console.log(id);

  useLayoutEffect(() => {
    function updatePosition() {
      const offsetPosition = document.getElementById(id).offsetHeight;
      if (window.pageYOffset > offsetPosition * 0.7) {
        setAnimate(true);
      }
    }

    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, [id]);
  return animate;
}