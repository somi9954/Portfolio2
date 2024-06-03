import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const About = () => {
  return (
      <div id="about" className="section dark2">
        <div className="container">
          <div className="section-title">
            <h1>About <span className="color-primary">Me</span></h1>
          </div>
          <div className="section-flex">
            <div className="section-left">
              <div className="column">
                <section>
                  <h2 className="weight-light">PERSONAL <span className="color-primary">INFOS</span></h2>
                  <div className="aboutme">
                    <div className="info-item">
                      <FaUser /> <strong>이름</strong><p>조소미</p>
                    </div>
                    <div className="info-item">
                      <FaCalendar /> <strong>생년월일</strong> <p>1992.06.21</p>
                    </div>
                    <div className="info-item">
                      <MdLocationPin /> <strong>주소지</strong> <p>인천광역시 서구</p>
                    </div>
                    <div className="info-item">
                      <BsFillTelephoneFill /> <strong>연락처</strong> <p>010-3457-9954</p>
                    </div>
                    <div className="info-item">
                      <IoMdMail /> <strong>이메일</strong> <p>jolh999@gmail.com</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="section-right">
              <div className="column">
                <section>
                <h2 className="weight-light">My <span className="color-primary">Education</span></h2>
                  <p><span>2023.09 - </span><br/>
                    <span className="color-primary">경희사이버대학교</span> - 재학중<br/><span>컴퓨터정보통신공학을 배우고 있습니다.</span></p>
                  <p><span>2023.08 - 2023.11</span><br/>
                    <span className="color-primary">자바(JAVA)기반 스프링 응용SW개발자 양성과정B</span> - 코리아IT아카데미 인천<br/><span>Oracle을 이용하여 데이터 처리와 분석 능력을 배웠으며 스프링과 스프링 부트를
                  이용하여 백엔드 서버를 구축하였습니다.</span></p>
                  <p><span>2023.05 - 2023.10</span> <br/> <span className="color-primary">웹 개발</span> - 코리아IT아카데미
                    인천<br/><span>MySQL을 이용하여 데이터 처리와 분석 능력을 배웠으며 스프링과 스프링 부트를 이용하여 백엔드 서버를 구축하였습니다.</span></p>
                </section>
              </div>
            </div>
          </div>
          <hr/>
        </div>
      </div>
  )
}

export default About;
