import {FaCheck} from "react-icons/fa";


export const PortfolioProject1 = [
  {
    id: 1,
    title: "게시판 프로젝트:BoardProject",
    sub_title: "2024.02(1人 프로젝트)",
    img: [
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/4.png",
      "/images/6.png",
      "/images/5.png"
    ],
    content: "게시판 프로젝트는 자유롭게 게시판에 글을 작성하고 댓글로 여러 의견을 나누는 커뮤니티 기능을 제공하는 웹 사이트입니다. 가장 기본적이면서도 많이 쓰는 커뮤니티를 만들어 보고 싶단 생각이 들어 개발하게 되었습니다. 회원으로만 가능한 게시글 조회하기, 게시글 추가, 삭제 기능과 댓글 추가, 삭제 기능이 있습니다. SpringBoot 기반으로 개발한 REST 백엔드 서버와 REACT.js로 만들어진 프론트 엔드 서버가 있습니다. AWS 서비스를 처음 사용해봤다는 것만으로도 의미가 이었지만, 그 과정에서 VPN 구성부터 WEB과 WAS가 어떻게 구성이 되어 있는지에 대해 알아봤으며 실제로 사용해볼 수 있었다는 점에서 더욱 의미가 있었습니다.",
    functions: [
      <div key="1" className="function-item"><FaCheck/> <strong>주요 기능:</strong>&nbsp; 게시판(등록,수정,삭제), 게시판글(등록,수정,삭제), 댓글(등록,수정,삭제)</div>,
      <div key="2" className="function-item"><FaCheck/> <strong>GitHub:</strong>&nbsp; <a href="https://github.com/somi9954/BoardReact"
                                                                   target="_blank"
                                                                   rel="noopener noreferrer" style={{ color: "#ffffff",background:"var(--primary)"}}>https://github.com/somi9954/BoardReact</a>👈
      </div>,
      <div key="3" className="function-item"><FaCheck/> <strong>URL:</strong>&nbsp; <a href="http://freeboard.store" target="_blank"
                                                                rel="noopener noreferrer" style={{ color: "#ffffff",background:"var(--primary)"}}>http://freeboard.store</a>👈
      </div>,
      <div key="4" className="function-item"><FaCheck/> <strong>FrontEnd:</strong>&nbsp; React.js, javascript, html, css</div>,
      <div key="5" className="function-item"><FaCheck/> <strong>BackEnd:</strong>&nbsp; Spring_Boot, Spring, JAVA, gradle</div>,
      <div key="6" className="function-item"><FaCheck/> <strong>Database:</strong>&nbsp; MySQL</div>,
      <div key="7" className="function-item"><FaCheck/> <strong>Deployment:</strong>&nbsp; AWS(EC2, RDS)</div>
    ]
  },
];
export const PortfolioProject2 = [
  {
    id: 4,
    title: "오늘의 할일:TODOLIST",
    sub_title: "2023.12(1人 프로젝트)",
    img: [
      "/images/todolist.png",
      "/images/main2.png",
      "/images/main3.png",
    ],
    content: "오늘의 할일은 오늘을 계획하고 작성하면서 그 계획을 체크하며서 성취감을 느끼고자 만든 웹사이트입니다.가장 기본적이면서도 많이 쓰는 앱에서 많이 쓰는 TODOLIST를 웹에서 사용하고자 개발하였습니다.회원으로만 가능한 할일 추가, 삭제, 리스트 기능을 추가하였으며 SpringBoot 기반으로 개발한 REST 백엔드 서버와 REACT.js로 만들어진 프론트 엔드 서버가 있습니다.국비교육 과정중에서 자세히 배우지 못한 리액트에 대해 더 자세히 배우는 계기가 되었으며 컴포넌트와 컨테이너와 같은 구성요소에 대해 더 자세히 공부하게 되었습니다.",
    functions: [
      <div key="1" className="function-item"><FaCheck/> <strong>주요 기능:</strong>&nbsp; 일정 추가, 등록, 삭제, 목록</div>,
      <div key="2" className="function-item"><FaCheck/> <strong>GitHub:</strong>&nbsp; <a href="https://github.com/somi9954/ProjectFE"
                                                                                          target="_blank"
                                                                                          rel="noopener noreferrer" style={{ color: "#ffffff",background:"var(--primary)"}}>https://github.com/somi9954/projectBE</a>👈
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/somi9954/projectBE" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff",background:"var(--primary)"}}>https://github.com/somi9954/ProjectFE</a>👈
      </div>,
      <div key="4" className="function-item"><FaCheck/> <strong>FrontEnd:</strong>&nbsp; React.js, javascript, html, css</div>,
      <div key="5" className="function-item"><FaCheck/> <strong>BackEnd:</strong>&nbsp; Spring_Boot, Spring, JAVA, gradle</div>,
      <div key="6" className="function-item"><FaCheck/> <strong>Database:</strong>&nbsp; ORACLE</div>,
      <div key="7" className="function-item"><FaCheck/> <strong>Deployment:</strong>&nbsp; intellij</div>
    ]
  },
];
export const PortfolioProject3 = [
  {
    id: 7,
    title: "운동 정보 커뮤니티:GoTOGym",
    sub_title: "2023.11(3人 프로젝트)",
    img: [
      "/images/main.png",
      "/images/Community.png",
      "/images/scheduler.png",
      "/images/scheduler1.png",
    ],
    content: "GoToGym은 운동 정보를 공유, 커뮤니티에서 회원 의견을 나누고 개인의 식단관리와 운동방법(캘린더)을 위한 웹 사이트입니다. 앱에서는 많이 사용하지만 pc버전으로는 많이 없어 사용하고자 개발하였습니다. 회원으로만 가능한 커뮤니티기능과 캘린더 기능을 추가하였으며 SpringBoot 기반으로 개발한 REST 백엔드 서버와 REACT.js로 만들어진 프론트 엔드 서버가 있습니다. 팀원들과 프로젝트를 하면서 짧은 기간에 의사소통과 다른 사람들의 코드를 보면서 많은 점을 배울 수 있었습니다.",
    functions: [
      <div key="1" className="function-item"><FaCheck/> <strong>주요 기능:</strong>&nbsp; 캘린더 내 식단 및 운동 기록, 커뮤니티 기능</div>,
      <div key="2" className="function-item"><FaCheck/> <strong>GitHub:</strong>&nbsp; <a href="https://github.com/somi9954/GoToGym" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff",background:"var(--primary)"}}>https://github.com/somi9954/GoToGym</a>👈
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/daeyounggg/GoToGym" target="_blank" rel="noopener noreferrer" style={{ color: "#ffffff",background:"var(--primary)"}}>https://github.com/daeyounggg/GoToGym</a>👈
      </div>,
      <div key="4" className="function-item"><FaCheck/> <strong>FrontEnd:</strong>&nbsp; React.js, javascript, html, css</div>,
      <div key="5" className="function-item"><FaCheck/> <strong>BackEnd:</strong>&nbsp; Spring_Boot, Spring, JAVA, gradle</div>,
      <div key="6" className="function-item"><FaCheck/> <strong>Database:</strong>&nbsp; ORACLE</div>,
      <div key="7" className="function-item"><FaCheck/> <strong>Deployment:</strong>&nbsp; intellij</div>
    ]
  },
];

