const Contact = () => {
  const formSubmitHandler = (event) => {
event.preventDefault();

  }
  return (
    <div id="contact" className="section dark2">
      <div className="container contact">
        <div className="section-title">
          <h1>Contact <span className="color-primary">Me</span></h1>
        </div>
        <div>
        </div>
        <div className="columns">
          <div className="column contact-box">
            <h3>Github</h3>
            <i className="bi bi-github icon"></i>
            <p><a href="https://github.com/somi9954" style={{color:'#fff'}}>https://github.com/somi9954</a></p>
          </div>
          <div className="column contact-box">
            <h3>Email</h3>
            <i className="bi bi-envelope icon"></i>
          <p style={{color:'#fff'}}>jolh999@gmail.com</p>
          </div>
          <div className="column contact-box">
          <h3>Call Me</h3>
          <i className="bi bi-telephone-inbound icon"></i>
          <p style={{color:'#fff'}}>010-3457-9954</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;