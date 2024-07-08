import { useEffect, useRef } from "react";
import logo from "../../assets/logo_01.png";
import { navLinksData, LinkType } from "../../data/navLinksData";
import SingleLink from "./SingleLink";
import { NavProps } from "../../types/NavProps";
import SearchSection from "./SearchSection";

export default function NavLinks({ showNav, toggleBtn, setShowNav }: NavProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && listRef.current) {
      const listHeight = listRef.current.getBoundingClientRect().height;

      if (showNav) {
        containerRef.current.style.height = `${listHeight + 100}px `;
      } else {
        containerRef.current.style.height = `0px`;
      }
    }
  }, [showNav]);

  const hideNav = () => {
    setShowNav(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (navRef.current) {
        const navWidth = navRef.current.getBoundingClientRect().width;

        if (navWidth >= 900) {
          setShowNav(true);
          if (containerRef.current) {
            containerRef.current.style.height = "100px";
          }
        }
      }
    };

    const handleNav = () => {
      if (navRef.current) {
        const navWidth = navRef.current.getBoundingClientRect().width;

        if (navWidth < 900) {
          setShowNav(false);
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleNav);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showNav]);

  return (
    <>
      <div className="navbar" ref={navRef}>
        <section id="logo_btn_container">
          <article>
            <img src={logo} alt="logo" id="logo_img" />
          </article>
          <article>
            <button
              type="button"
              id="nav_btn"
              onClick={toggleBtn}
              className="hide_btn"
            >
              {showNav ? "-" : "+"}
            </button>
          </article>
        </section>

        {showNav && (
          <article>
            <div
              id="nav_links_container"
              ref={containerRef}
              className={`${showNav ? "show_nav" : "hide_nav"} `}
            >
              <ul id="nav_list" ref={listRef}>
                {navLinksData.map((link: LinkType) => (
                  <SingleLink
                    key={link.id}
                    url={link.url}
                    title={link.title}
                    hideNav={hideNav}
                  />
                ))}
              </ul>
              <SearchSection />
            </div>
          </article>
        )}
      </div>
    </>
  );
}
