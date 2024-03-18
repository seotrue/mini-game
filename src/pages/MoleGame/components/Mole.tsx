import React, { useRef } from 'react';

const POINTS_MULTIPLIER = 0.9;
export const Mole = () => {
  const moleRef = useRef(null);
  // const bobRef = useRef<gsap.core.Tween | null>(null);
  // const pointsRef = useRef(points);
  // const [whacked, setWhacked] = useState(false);

  const whack = () => {
    //setWhacked(true);
    // onWhack(pointsRef.current);
  };
  const generateMoles = () =>
    new Array(5).fill(0).map(() => ({
      speed: 0,
      delay: 0,
    }));

  console.log(generateMoles());

  // useEffect(() => {
  //   bobRef.current = gsap.to(buttonRef.current, {
  //     yPercent: 0,
  //     duration: speed,
  //     yoyo: true,
  //     repeat: -1,
  //     delay,
  //     repeatDelay: delay,
  //     onRepeat: () => {
  //       pointsRef.current = Math.floor(Math.max(pointsRef.current * POINTS_MULTIPLIER, pointsMin));
  //     },
  //   });
  //
  //   return () => {
  //     bobRef.current?.kill();
  //   };
  // }, [delay, speed, pointsMin]);
  //
  // useEffect(() => {
  //   if (whacked) {
  //     pointsRef.current = points;
  //     bobRef.current.pause();
  //     gsap.to(buttonRef.current, {
  //       yPercent: 100,
  //       duration: 0.1,
  //       onComplete: () => {
  //         gsap.delayedCall(gsap.utils.random(1, 3), () => {
  //           setWhacked(false);
  //           bobRef.current.restart().timeScale(bobRef.current?.timeScale() * TIME_MULTIPLIER);
  //         });
  //       },
  //     });
  //   }
  // }, [whacked]);

  return (
    <div className="mole-hole">
      <button className="mole" ref={moleRef} onClick={whack}>
        <span className="sr-only">Whack</span>
      </button>
    </div>
  );
};
