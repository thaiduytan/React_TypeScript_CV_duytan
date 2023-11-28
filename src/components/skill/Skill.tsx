import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const Skill = () => {
  const [skillHtmlCssJs, setSkillHtmlCssJs] = React.useState<number | string>(
    59.999
  );
  const [skillReactjs, setSkillReactjs] = React.useState<number | string>(
    59.999
  );
  const [skillUiUx, setSkillUiUx] = React.useState<number | string>(59.999);

  const [skillNestJs, setSkillNestJs] = React.useState<number | string>(59.999);
  const [skillNodeJs, setSkillNodeJs] = React.useState<number | string>(59.999);
  const [skillDatabase, setSkillDatabase] = React.useState<number | string>(
    59.999
  );

  return (
    <>
      <div className="arlo_tm_section" id="skill" style={{ paddingTop: 122 }}>
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>Skill</h3>
            <span>Về kỹ năng</span>
          </div>
        </div>
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Kỹ Năng Frontend</h4>
                </div>
                <li>Cắt ghép template Website Responsive</li>
                <li>Framework/Library: Bootrap, Antd, ReactJs (- NextJs).</li>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div
                    className="arlo_tm_progress_wrap"
                    data-size="small"
                    data-round="c"
                    data-strip="off"
                  >
                    <div
                      className="arlo_tm_progress"
                      data-value={skillHtmlCssJs}
                      data-color="#000"
                    >
                      <span>
                        <span className="label">HTML/CSS/JavaScript</span>
                        <span className="number">{skillHtmlCssJs}%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        {/* <div className="arlo_tm_bar_wrap">
                          <div className="arlo_tm_bar"></div>
                        </div> */}
                        <ProgressBar
                          completed={skillHtmlCssJs}
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>

                    <div
                      className="arlo_tm_progress"
                      data-value={skillReactjs}
                      data-color="#000"
                    >
                      <span>
                        <span className="label">ReactJs (Typescript)</span>
                        <span className="number">{skillReactjs}%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        {/* <div className="arlo_tm_bar_wrap">
                          <div className="arlo_tm_bar"></div>
                        </div> */}
                        <ProgressBar
                          completed={skillReactjs}
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>

                    <div
                      className="arlo_tm_progress"
                      data-value={skillUiUx}
                      data-color="#000"
                    >
                      <span>
                        <span className="label">Next.Js</span>
                        <span className="number">{skillUiUx}%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        {/* <div className="arlo_tm_bar_wrap">
                          <div className="arlo_tm_bar"></div>
                        </div> */}
                        <ProgressBar
                          completed={skillUiUx}
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Kỹ Năng Backend</h4>
                </div>
                <li>Ngôn ngữ lập trình Javascript - NodeJs</li>
                <li>APIs RESTful</li>
                <li>Framework: Express, (NestJs)</li>
                <li>Database: MongoDB, SQL</li>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div
                    className="arlo_tm_progress_wrap"
                    data-size="small"
                    data-round="c"
                    data-strip="off"
                  >
                    <div
                      className="arlo_tm_progress"
                      data-value={skillNestJs}
                      data-color="#000"
                    >
                      <span>
                        <span className="label">Nest.Js</span>
                        <span className="number">{skillNestJs}%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        {/* <div className="arlo_tm_bar_wrap">
                          <div className="arlo_tm_bar"></div>
                        </div> */}
                        <ProgressBar
                          completed={skillNestJs}
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>

                    <div
                      className="arlo_tm_progress"
                      data-value={skillNodeJs}
                      data-color="#000"
                    >
                      <span>
                        <span className="label">NodeJs</span>
                        <span className="number">{skillNodeJs}%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        {/* <div className="arlo_tm_bar_wrap">
                          <div className="arlo_tm_bar"></div>
                        </div> */}
                        <ProgressBar
                          completed={skillNodeJs}
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>

                    <div
                      className="arlo_tm_progress"
                      data-value={skillDatabase}
                      data-color="#000"
                    >
                      <span>
                        <span className="label">Database Postgess/MongoDB</span>
                        <span className="number">{skillDatabase}%</span>
                      </span>
                      <div className="arlo_tm_bar_bg">
                        {/* <div className="arlo_tm_bar_wrap">
                          <div className="arlo_tm_bar"></div>
                        </div> */}
                        <ProgressBar
                          completed={skillDatabase}
                          bgColor={"#333"}
                          height="8px"
                          isLabelVisible={false}
                        />
                      </div>
                    </div>
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

export default Skill;
