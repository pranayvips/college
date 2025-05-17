import gsap from "gsap";
import { useEffect, useRef } from "react";

function MenuItem(props) {
  return (
    <div
      className={"opt " + props.className}
      onClick={() => {
        changeTab(props.className);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={props.svgPath} />
        {props.svgPath1 != undefined ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={props.svgPath1}
          />
        ) : null}
      </svg>
      <p>{props.title}</p>
    </div>
  );
}
function changeTab(classname) {
  document
    .querySelector(".teacher")
    .setAttribute("class", "teacher " + classname);
}
function Sidebar() {
    const siderbarMenu = useRef(null)
    useEffect(() => {
      gsap.to(".teacher .dashboard .events details",{
        y:0,
        opacity:1,
        duration:1,
        delay: .5,
        stagger: .5,
        ease: "power3.out"
      })

      gsap.to(".teacher aside[class='sidebar'] .menus .opt",{
        x:"-120%",
      })
      gsap.to(".teacher aside[class='sidebar'] .menus .opt",{
        delay:.5,
        x:0,
        duration:2.5,
        ease:"elastic.out(1,.8)",
        stagger:.2,
        onComplete: () => {
            gsap.set(".teacher aside[class='sidebar'] .menus .opt", { clearProps: "all" }); // removes GSAP-added inline styles
          }
      })
      gsap.to("#theme-container",{
        opacity:0,
        y:"100%",
      })
      gsap.to("#theme-container",{
        opacity:1,
        y:0,
        duration:2,
        delay:.5,
        ease: "bounce.out",
        onComplete: () => {
          gsap.set("#theme-container", { clearProps: "all" }); // removes GSAP-added inline styles
        }
      })
    }, [])
    
  function checkTheme() {
    if (document.getElementById("sidebar-theme-slider").checked) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }
  return (
    <aside className="sidebar">
        <div className="sidebar-close" >
            <img src="/vips-logo-short.webp" alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="sidebar-close" onClick={()=>{
            document.body.classList.remove("sidebar-open")
            // gsap.to(".teacher aside[class='sidebar']",{
            //     x:"-100%",
            //     duration:.5,
            //     delay:".5",
            //     ease: "power1.out",
            // })
            gsap.to(".teacher #sidebar-close path",{
                attr:{d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},
                duration:1,
                ease: "power1.out",
            })
            gsap.to(".teacher #menu-trigger path",{
                attr:{d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},
                delay: .3,
                duration:1,
                ease: "power1.out",
            })

            gsap.to(".teacher aside[class='sidebar'] .menus .opt",{
                x:"-120%",
                duration:1,
                ease:"elastic.out(1,.8)",
                stagger:.2,
                onComplete: () => {
                    gsap.set(".teacher aside[class='sidebar'] .menus .opt", { clearProps: "all" }); // removes GSAP-added inline styles
                  }
              })
              gsap.to("#theme-container",{
                opacity:0,
                y:"100%",
                duration:2,
                ease: "power3.out",
                onComplete: () => {
                  gsap.set("#theme-container", { clearProps: "all" }); // removes GSAP-added inline styles
                }
              })
            // gsap.to(".teacher aside[class='sidebar'] .menus .opt",{
            //     x:"-100%",
            //     duration:2.5,
            //     ease:"elastic.out",
            //     stagger:.2
            //   })
            //   gsap.to("#theme-container",{
            //     opacity:1,
            //     y:"-100%",
            //     duration:2,
            //     ease: "bounce.out"
            //   })
        }}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
<div className="search">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

            <input type="text" placeholder="Search for something..."/>
        </div>
        </div>

      <div className="menus" ref={siderbarMenu}>
        <MenuItem
          title="Dashboard"
          className="dashboard"
          svgPath="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
        <MenuItem
          title="InOut"
          className="inout"
          svgPath="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" 
        />
        <MenuItem
          title="Classes"
          className="classes"
          svgPath="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
        />
        <MenuItem
          title="Chat"
          className="chat"
          svgPath="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
        />
        <MenuItem
          title="Setting"
          className="setting"
          svgPath1="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          svgPath="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        />
      </div>
      <div className="theme" id="theme-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>

        <h6>Dark Theme</h6>
        <label className="switch">
          <input
            type="checkbox"
            id="sidebar-theme-slider"
            onClick={checkTheme}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </aside>
  );
}

export default Sidebar;
