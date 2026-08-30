import {useEffect} from 'react';
import Hero from "./sections/ExploreHero.tsx";

export function ExploreMesses() {
    useEffect(() => {
        const hash = window.location.hash;
    
        if (!hash) return;
    
        const element = document.querySelector(hash);
    
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }, 0);
        }
      }, []);
    return (
        <>
          <Hero/>
        </>

    );
}