const Contact = () => {
  return (
    <>
      <div id="contact" className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="contact_text">CONTACT US</h1>
              <div className="mail_section">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Name"
                  name="Name"
                />
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Email"
                  name="Email"
                />
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Phone Number"
                  name="PhoneNumber"
                />
                <textarea
                  className="message-bt"
                  placeholder="Message"
                  rows="5"
                  id="comment"
                  name="Message"
                ></textarea>
                <div className="send_bt">
                  <a href="#">SEND</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image_9">
                <img src="images/img-9.png" alt="Contact Us" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
