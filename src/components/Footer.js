const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div id="footer" className="dark1">
      <div className="container">
          <div className="footer-container" style={{textAlign: 'center'}}>
              &copy; Cho Somi. All rights reserved. {year}
          </div>
      </div>
    </div>
  )
}

export default Footer;