import React from "react";
// import Preloader from "../components/Preloader";
// import LeftPart from "../components/LeftPart";
// import RightPart from "../components/RightPart";
// import MenuMobile from "../components/mobile/MenuMobile";

// xử dụng alias để fixx đường link tuyệt đối mà không dùng đường src tương đối
// https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa
import Preloader from "components/Preloader";
import LeftPart from "components/LeftPart";
import RightPart from "components/RightPart";
import MenuMobile from "components/mobile/MenuMobile";
import { FloatButton } from "antd";

const Portpolio = () => {
  const [hideLeftPart, setHideLeftPart] = React.useState<boolean>(false);
  return (
    <>
      {/*  {/* <!-- WRAPPER ALL -->  */}
      <div className="arlo_tm_wrapper_all">
        <div id="arlo_tm_popup_blog">
          <div className="container">
            <div className="inner_popup scrollable"></div>
          </div>
          <span className="close">
            <a href="#"></a>
          </span>
        </div>

        {/* <!-- PRELOADER -->  */}
        {/* <Preloader /> */}
        {/* <!-- /PRELOADER -->  */}

        {/* <!-- MOBILE MENU -->  */}
        <MenuMobile />
        {/* <!-- /MOBILE MENU -->  */}

        {/* <!-- CONTENT -->  */}
        <div className="arlo_tm_content">
          {/* <!-- LEFTPART -->  */}
          <LeftPart
            hideLeftPart={hideLeftPart}
            setHideLeftPart={setHideLeftPart}
          />
          {/* <!-- /LEFTPART -->  */}

          {/* <!-- RIGHTPART -->  */}
          <RightPart
            hideLeftPart={hideLeftPart}
            setHideLeftPart={setHideLeftPart}
          />
          {/* <!-- /RIGHTPART -->  */}

          {/* <a className="arlo_tm_totop" href="#"></a> */}
          <FloatButton.BackTop
            // className="arlo_tm_totop"
            tooltip={"Back to top"}
          />
        </div>
      </div>
      {/* <!-- / WRAPPER ALL -->  */}
    </>
  );
};

export default Portpolio;
