import gsap from "gsap";

function TopHeader(headerProps){
    return <header>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="menu-trigger" onClick={()=>{
            document.body.classList.add("sidebar-open");
            // gsap.from(".teacher aside[class='sidebar']",{
            //     x:0,
            //     duration:.5,
            //     ease: "power1.out",
            //     onComplete: () => {
            //         gsap.set(".teacher aside[class='sidebar']", { clearProps: "all" }); // removes GSAP-added inline styles
            //       }
            // })
            gsap.to(".teacher #sidebar-close path",{
                attr:{d:"M6 18 18 6M6 6l12 12"},
                delay: .3,
                duration:1,
                ease: "power1.out",
            })
            gsap.to(".teacher #menu-trigger path",{
                attr:{d:"M6 18 18 6M6 6l12 12"},
                delay: .3,
                duration:1,
                ease: "power1.out",
            })

            gsap.to(".teacher aside[class='sidebar'] .menus .opt",{
                delay:.5,
                x:0,
                duration:2.5,
                ease:"elastic.out(1,.8)",
                stagger:.2
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
        }}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        <div className="icon">
            <img src="/vips-logo.png" alt="" />
            <img src="/vips-logo-dark.png" alt="" />
            <img src="/vips-logo-short.webp" alt="" className="short"/>
        </div>
        <div className="search">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

            <input type="text" placeholder="Search for something..."/>
        </div>
        <div className="menu">
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

            </button>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>

            </button>
        </div>
        <hr />
        <div className="info">
            <p>{headerProps.name}</p>
            <span>{headerProps.email}</span>
            <img src="/person.png" alt="" />
        </div>
    </header>
}

export default TopHeader;