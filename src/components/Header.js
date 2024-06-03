import { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerBackground, setHeaderBackground] = useState("transparent");
  const [selectedLink, setSelectedLink] = useState(null); // 클릭된 링크의 ID를 저장하는 상태

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setHeaderBackground("#ffffff");
    } else {
      setHeaderBackground("transparent");
    }
  };

  useEffect(() => {
    // 페이지가 로드될 때와 스크롤 이벤트 발생 시 스크롤 핸들러 호출
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 클릭 이벤트 핸들러
  const handleClick = (linkId) => {
    setMenuOpen(false); // 링크를 클릭하면 메뉴를 닫습니다.
    setSelectedLink(linkId); // 클릭된 링크의 ID를 저장합니다.
  };

  // 선택된 링크에 대해 특정 스타일을 적용합니다.
  const getLinkStyle = (linkId) => {
    return selectedLink === linkId ? { color: "#f0932b" } : { color: "#b2bec3" }; // 선택된 링크면 색상 변경, 아니면 원래 색상 유지
  };

  return (
    <header id="header" className={`dark1 ${headerBackground !== "transparent" ? "scrolling" : ""}`} style={{ backgroundColor: headerBackground }}>
      <div className="container">
        <div className="header-container">
          <div className="logo"><a href="#intro"  onClick={() => handleClick("intro")}>SOMI'S PORTFOLIO</a></div>
          <div className="header-nav">
            <div className={"mobile-menu-icon " + (menuOpen ? "active-mobile-menu" : "")} onClick={() => setMenuOpen(!menuOpen)}>
              <span className="mobile-menu-line"></span>
              <span className="mobile-menu-line"></span>
              <span className="mobile-menu-line"></span>
            </div>
            <div className={"header-nav-container " + (menuOpen ? "active-mobile-menu" : "")}>
              <ul className="header-nav-list">
                <li className="header-nav-item"><a href="#intro" style={getLinkStyle("intro")} onClick={() => handleClick("intro")}>HOME</a></li>
                <li className="header-nav-item"><a href="#about" style={getLinkStyle("about")} onClick={() => handleClick("about")}>ABOUT</a></li>
                <li className="header-nav-item"><a href="#services" style={getLinkStyle("services")} onClick={() => handleClick("services")}>SKILLS</a></li>
                <li className="header-nav-item"><a href="#portfolio" style={getLinkStyle("portfolio")} onClick={() => handleClick("portfolio")}>PORTFOLIO</a></li>
                <li className="header-nav-item"><a href="#contact" style={getLinkStyle("contact")} onClick={() => handleClick("contact")}>CONTACT</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
