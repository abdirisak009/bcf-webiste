import Link from "next/link";

export default function Footer5() {
  return (
    <>
      <div
        className="footer5-section5-area5"
        style={{ backgroundColor: "#1D2940" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-all-padding section-padding5">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="footer-logo2">
                      <img src="/assets/images/logo.png" alt="" />
                      <p className="font-16 lineh-26 color weight-400 font-outfit margin-b24 margin-t">
                        {/* Include any additional information that may <br /> be
                        relevant or helpful for visitors, such as <br /> FAQs,
                        pricing options, or service packages. <br /> Provide
                        contact details. */}
                      </p>
                      <div className="social2-links homelist">
                        <ul>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="ml1">
                              <i className="fa-brands fa-google-plus-g" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="ml1">
                              <i className="fa-brands fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="ml1">
                              <i className="fa-brands fa-youtube" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <div className="our-service-area">
                      <h1 className="font-20 color-21 lineh-20 font-outfit margin-b24 weight-600">
                        Our services
                      </h1>
                      <div className="servicefooter-list">
                        <ul>
                          <li>
                            <Link
                              href="#"
                              className="font-outfit font-16 color-21 lineh-16 weight-400"
                            >
                              Monitoring, Evaluation, Research and Learning
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block"
                            >
                              Institutional Support and policy development
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block"
                            >
                              Financial Management &amp; Risk Mitigation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block"
                            >
                              Supply Chain & Procurement
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block"
                            >
                              Capacity Building & Training
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1" />
                  <div className="col-lg-2 col-md-6">
                    <div className="our-service-area">
                      <h1 className="font-20 color-21 lineh-20 font-outfit margin-b24 weight-600">
                        Useful Links
                      </h1>
                      <div className="servicefooter-list ">
                        <ul>
                          <li>
                            <Link
                              href="/"
                              className="font-outfit font-16 color-21 lineh-16 weight-400"
                            >
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about"
                              className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block"
                            >
                              About Us{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/servicev1"
                              className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block"
                            >
                              Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#/"
                              className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block"
                            >
                              Sectors
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/blog2"
                              className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block"
                            >
                              Opportunities
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/team"
                              className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block"
                            >
                              Team
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/contact1"
                              className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block"
                            >
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="contact-footer">
                      <h1 className="font-20 color-21 lineh-20 font-outfit margin-b24 weight-600">
                        Contact Us
                      </h1>
                      <div className="email4">
                        <img src="/assets/images/icons/email4.svg" alt="" />
                        <Link
                          href="/mailto:info@taxvice.com"
                          className="font-16 lineh-24 color-21 weight-400 font-outfit"
                        >
                          info@farpod.org
                        </Link>
                      </div>
                      <div className="email4 margin-t">
                        <img src="/assets/images/icons/location3.svg" alt="" />
                        <Link
                          href="/mailto:info@taxvice.com"
                          className="font-16 lineh-24 color-21 weight-400 font-outfit"
                        >
                          2nd Avenue Parklands, Nairobi- Kenya.
                          <br />
                          KM 4, Waberi District, Mogadishu- Somalia
                        </Link>
                      </div>
                      <div className="email4 margin-t">
                        <img src="/assets/images/icons/phone5.svg" alt="" />
                        <Link
                          href="/tel:123-456-7890"
                          className="font-16 lineh-24 color-21 weight-400 font-outfit"
                        >
                          +252619395850
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-10" />
            <div className="copyright">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="copyright1">
                    <p className="font-outfit font-16 lineh-26 weight-400 ">
                      Copyright {new Date().getFullYear()} © Fairytale Agency
                      for Research and Policy Development Limited
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/elementor/elementor35.png"
          alt=""
          className="elementors4"
        />
      </div>
    </>
  );
}
