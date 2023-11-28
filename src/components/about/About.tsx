import React from "react";
import avatar from "@/assets/../assets/img/about/avatar.png";
import { TypeAnimation } from "react-type-animation";
import CV_Thai_Duy_Tan_Fullstack_Developer from "./CV_Thai_Duy_Tan_Fullstack_Developer.pdf";
import Parallax from "parallax-js";
import background from "@/assets/img/about/550x640.jpg";

const About = () => {
  const sceneEL = React.useRef(null);
  React.useEffect(() => {
    if (sceneEL && sceneEL.current) {
      const parallaxInstance = new Parallax(sceneEL.current, {
        relativeInput: true,
        hoverOnly: true,
      });
      parallaxInstance.enable();
      return () => parallaxInstance.disable();
    }
  }, []);

  return (
    <>
      <div
        className="arlo_tm_section relative"
        id="about"
        style={{ paddingTop: 100 }}
      >
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Về tác giả</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    ref={sceneEL}
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                  >
                    <div className="image layer" data-depth="0.3">
                      <img src={background} alt="550x640" />
                      <div
                        className="inner"
                        // data-img-url={avatar}
                        style={{ backgroundImage: `url(${avatar})` }}
                      ></div>
                    </div>
                    <div className="border layer" data-depth="0.4">
                      <img src={background} alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      Hi there... I'm a{" "}
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          "Freelancer",
                          2000, // wait 1s before replacing "Mice" with "Hamsters"
                          "UI/UX Designer",
                          2000,
                          "Web Developer",
                          2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="arlo_tm_animation_text_word"
                      />{" "}
                    </h4>
                  </div>
                  <div className="definition">
                    <p>
                      Xin chào, mình là Duy Tân, là xin viên năm 4 ngành CNTT,
                      sở thích của mình là Copy and Paste
                    </p>
                    <br />
                    {/* <p>
                      Mình đã từng có dự định học Công nghệ ô tô, nhưng do không
                      đủ điểm nên là phải theo Coder. Chắc là do ý trời nên phải
                      cố gắng (❁´◡`❁){" "}
                    </p> */}
                    <br />
                    <p>
                      Hiện tại, mình rất mong muốn 1 Job thực tập để lấy thêm
                      kinh nghiệm.
                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Ngày Sinh:</label>05.11.2001 (Gen Z)
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Giới tình:</label> Nam
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Tốt nghiệp:</label> 2024
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Chuyên ngành:</label> Công Nghệ Phần Mềm
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Zalo:</label> 0924057934 (Duy)
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>FaceBook:</label>{" "}
                          <a
                            href="https://www.facebook.com/tan.thai.520900/"
                            target="_blank"
                          >
                            Ah Duy
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Mail:</label>{" "}
                          <a href="thaiduytan77@gmail.com">
                            thaiduytan77&#64;gmail.com
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={CV_Thai_Duy_Tan_Fullstack_Developer} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
