import Link from "next/link";

export default function About9() {
  return (
    <>
      <div className="about9-section-area section-padding5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-imagesrea"
                data-aos="zoom-out"
                data-aos-duration={1200}
              >
                <img src="/assets/images/sectionimg/u.png" alt="" />
                {/* <img src="/assets/images/elementor/Transparency1.png" alt="" className="trandparency aniamtion-key-1" /> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about9-textarea"
                data-aos="fade-left"
                data-aos-duration={1000}
              >
                <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">
                  Why Choose Us
                </span>
                <h1
                  className="font-lora font-44 lineh-54 weight-600 colorh9 margin-b24"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                >
                  About Us
                </h1>
                <p className="font-16 font-ks weight-500 color-p2 lineh-26">
                At Baraarug Consulting Firm,
we prioritise client satisfaction
by providing tailored solutions
that address unique
challenges while driving
progress.
Our interdisciplinary team
combines experience,
expertise, and innovation to
ensure that each project
achieves its full potential.
                </p>
                <div className="progress-resonsive margin-t32">
                  <div className="group-progress">
                    <div className="group-icons">
                      <img src="/assets/images/icons/groupexport.png" alt="" />
                    </div>
                    <div
                      className="bar"
                      data-aos="fade-left"
                      data-aos-duration={1400}
                    >
                      <div className="info">
                        <div className="flexhtml margin-b">
                          <span className="font-16 font-ks weight-600 color-h9 lineh-16">
                          Deep Local Expertise<br></br> with Global Standards
                          </span>
                        
                        </div>
                      </div>
                      <div className="progress-bar html">
                        <span />
                      </div>
                    </div>
                  </div>
                  <div
                    className="group-progress"
                    data-aos="fade-left"
                    data-aos-duration={1400}
                  >
                    <div className="group-icons">
                      <img src="/assets/images/icons/groupexport.png" alt="" />
                    </div>
                    <div className="bar margin-t32">
                      <div className="info">
                        <div className="flexhtml margin-b">
                          <span className="font-16 font-ks weight-600 color-h9 lineh-16">
                          Proven Track Record of Impact
                          </span>
                        
                        </div>
                      </div>
                      <div className="progress-bar css">
                        <span />
                      </div>
                    </div>
                  </div>
                  <div
                    className="group-progress"
                    data-aos="fade-left"
                    data-aos-duration={1400}
                  >
                    <div className="group-icons">
                      <img src="/assets/images/icons/groupexport.png" alt="" />
                    </div>
                    <div className="bar margin-t32">
                      <div className="info">
                        <div className="flexhtml margin-b">
                          <span className="font-16 font-ks weight-600 color-h9 lineh-16">
                          Comprehensive Solutions Portfolio
                          </span>
                       
                        </div>
                      </div>
                      <div className="progress-bar javascript">
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="div"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                >
                  <Link
                    href="/about"
                    className="font-16 font-ks weight-700 color lineh-16 consulting10"
                  >
                    Protect Your Future{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
