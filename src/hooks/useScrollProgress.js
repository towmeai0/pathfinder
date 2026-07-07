import { useState, useCallback, useEffect } from "react";

function useScrollProgress(wrapRef, slidesCount) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [pinPhase, setPinPhase] = useState("before");

  const recalc = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const vh = window.innerHeight;
    const rectTop = wrap.getBoundingClientRect().top;
    const scrollable = wrap.offsetHeight - vh;

    let p = 0;
    if (rectTop <= 0 && scrollable > 0) {
      p = Math.min(1, Math.max(0, -rectTop / scrollable));
    }

    setProgress(p);

    if (rectTop > 0) {
      setPinPhase("before");
    } else if (-rectTop >= scrollable) {
      setPinPhase("after");
    } else {
      setPinPhase("pinned");
    }

    const slideIndex = Math.round(p * (slidesCount - 1));
    setActive(slideIndex);
  }, [wrapRef, slidesCount]);

  useEffect(() => {
    recalc();

    window.addEventListener("scroll", recalc, { passive: true });
    window.addEventListener("resize", recalc);

    return () => {
      window.removeEventListener("scroll", recalc);
      window.removeEventListener("resize", recalc);
    };
  }, [recalc]);

  const goTo = useCallback(
    (targetSlide) => {
      const wrap = wrapRef.current;
      if (!wrap) return;

      const vh = window.innerHeight;
      const scrollable = wrap.offsetHeight - vh;
      const p = targetSlide / (slidesCount - 1);
      const targetY = wrap.offsetTop + p * scrollable;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    },
    [wrapRef, slidesCount]
  );

  const stickyStyle =
    pinPhase === "pinned"
      ? { position: "fixed", top: 0 }
      : pinPhase === "after"
      ? { position: "absolute", bottom: 0 }
      : { position: "absolute", top: 0 };

  return { progress, active, pinPhase, goTo, stickyStyle };
}

export default useScrollProgress;