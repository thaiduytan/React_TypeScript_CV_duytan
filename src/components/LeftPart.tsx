import React from "react";
import DesktopLogo from "@/assets/../assets/img/logo/desktop-logo.png";

interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {
  const [activeTab, setActiveTab] = React.useState<string>("home");

  React.useEffect(() => {
    const { hash } = window.location;
    const tab = hash.replace("#", ""); // tach dau #

    if (hash) {
      const section = document.querySelector(`#${tab}`);
      setActiveTab(tab);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, []);

  const handleClickTab = (
    tab: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setActiveTab(tab);
    const section = document.querySelector(`#${tab}`);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTimeout(() => {
        window.location.hash = tab; //js add hash to url
      }, 1000);
    }
  };
  return (
    <>
      <div
        className={`arlo_tm_leftpart_wrap ${
          props.hideLeftPart ? "opened" : ""
        }`}
      >
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a
              href="#"
              style={{
                width: "125px",
                height: "100px",
                display: "inline-block",
              }}
            >
              <img src={DesktopLogo} alt="desktop-logo" />
            </a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li>
                <a
                  href="#home"
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("home", event)}
                  className={activeTab === "home" ? "active" : ""}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("about", event)}
                  className={activeTab === "about" ? "active" : ""}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skill"
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("skill", event)}
                  className={activeTab === "skill" ? "active" : ""}
                >
                  Skill
                </a>
              </li>
              <li>
                <a
                  href="#prohect"
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("project", event)}
                  className={activeTab === "project" ? "active" : ""}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("contact", event)}
                  className={activeTab === "contact" ? "active" : ""}
                >
                  ConTact
                </a>
              </li>
              {/* <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li> */}
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a href="#">
                    <i className="xcon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            className={`arlo_tm_resize ${props.hideLeftPart ? "opened" : ""}`}
            href="#"
            onClick={(e) => {
              e.preventDefault(), props.setHideLeftPart(!props.hideLeftPart);
            }}
          >
            <i
              className={`xcon-angle-left ${
                props.hideLeftPart ? "opened" : ""
              }`}
            ></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default LeftPart;
