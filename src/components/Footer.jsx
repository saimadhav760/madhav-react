const Footer = () => {
  return (
    <>
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer_logo">
                <img src="images/footer-logo.png" alt="Footer Logo" />
              </div>
              <p className="footer_lorem_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
              </p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="customer_text">LET US HELP YOU</h1>
              <p className="footer_lorem_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
              </p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="customer_text">INFORMATION</h1>
              <p className="footer_lorem_text1">
                About Us
                <br />
                Careers
                <br />
                Sell on Shopee
                <br />
                Press & News
                <br />
                Competitions
                <br />
                Terms & Conditions
              </p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="customer_text">OUR Design</h1>
              <p className="footer_lorem_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
              </p>
            </div>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Enter your email"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">
                <a href="#">Subscribe</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
