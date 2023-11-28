import React from "react";
import HomeCv from "components/content/HomeCv";
import About from "components/about/About";
import Skill from "components/skill/Skill";
import Contact from "components/contact/Contact";

interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (value: boolean) => void;
}
const RightPart = (props: IProps) => {
  return (
    <>
      <div
        className={`arlo_tm_rightpart  ${props.hideLeftPart ? "opened" : ""}`}
      >
        <div className="rightpart_inner">
          <HomeCv />

          {/* <!-- ABOUT -->  */}
          <About />
          {/* <!-- /ABOUT -->  */}

          {/* <!-- SKILLS -->  */}
          <Skill />
          {/* <!-- /SKILLS -->  */}

          {/* <!-- CONTACT & FOOTER -->  */}
          <Contact />
          {/* <!-- /CONTACT & FOOTER -->  */}
        </div>
      </div>
    </>
  );
};

export default RightPart;
