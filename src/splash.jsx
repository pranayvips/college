import gsap from "gsap";
import { useEffect, useRef } from "react";

function SplashScreen() {
  const boxRef = useRef(null);
  const backText = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      try {
        // boxRef.current.children[0].style.transform = "translateX(100%)"
        boxRef.current.children[0].style.opacity = "0";
        setTimeout(() => {
          try {
            boxRef.current.scrollTo({
              top: boxRef.current.scrollHeight,
              behavior: "smooth",
            });
          } catch (e) {}
        }, 300);
      } catch (e) {}
    }, 3000);
    try {
      gsap.to(backText.current.children, {
        strokeDashoffset: "0",
        duration: 1,
        stagger: 0.1,
        delay: 1,
      });
    } catch (e) {}
  }, []);

  return (
    <main className="splash">
      <div ref={boxRef}>
        <svg>
          <defs>
            <mask id="text-mask">
              <text
                y="50%"
                x="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
              >
                <tspan dx="0">V</tspan>
                <tspan dx="20">I</tspan>
                <tspan dx="20">P</tspan>
                <tspan dx="20">S</tspan>
              </text>
            </mask>
          </defs>

          <text
            y="50%"
            x="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="back-text"
            ref={backText}
          >
            <tspan dx="0">V</tspan>
            <tspan dx="20">I</tspan>
            <tspan dx="20">P</tspan>
            <tspan dx="20">S</tspan>
          </text>
          <rect
            x="0"
            y="0"
            width="100%"
            fill="#e03131"
            className="fill-rect"
            mask="url(#text-mask)"
          ></rect>
        </svg>
        <img src="/vips-logo.png" alt="" />
      </div>
      {/* <p>Student Portal</p> */}
    </main>
  );
}

export default SplashScreen;
