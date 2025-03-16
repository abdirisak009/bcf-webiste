import Link from "next/link";

export default function Welcome9() {
  return (
    <>
      <div className="welcome9-section-area">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5"
              data-aos="fade-left"
              data-aos-duration={1000}
            >
              <div className="header9-textarea">
                <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">
                  Insurance Consulting Services
                </span>
                <h1
                  className="font-lora font-48 lineh-54 weight-600 colorh9 margin-b24"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                >
                  FARPod Strategic Excellence
                </h1>
                <p className="font-16 font-ks weight-500 color-p2 lineh-26">
                  FARPoD was formed with mission as consultant firm that will
                  offer several services ranging from strategy to
                  problem-solving, Planning, Analytics, M&E, Customer and
                  Marketing,{" "}
                </p>
                <Link
                  href="/contact1"
                  className="font-16 font-ks weight-700 color lineh-16 consulting10"
                >
                  Get Expert Advice{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="others-author-area9 aniamtion-key-2">
                <img
                  src="/assets/images/elementor/teamimage.jpg"
                  alt=""
                  className="aniamtion-key-2 animation8class rounded"
                />
                <p className="font-ks font-20 lineh-26 weight-600 color-h9">
                  Fairytale Agency for Research and Policy Development Limited
                </p>
                <div
                  className="welcome9-author"
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                >
                  <img
                    src="/assets/images/sectionimg/welcome9author.png"
                    alt=""
                    className="header9"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="welconme8-imga"
                data-aos="zoom-out"
                data-aos-duration={1400}
              >
                <img
                  src="/assets/images/ffffw.png"
                  //   src="/assets/images/sectionimg/welcome8.png"
                  alt=""
                  className="welcome9"
                />
                <div className="others9-type aniamtion-key-1">
                  <div className="groupexpo">
                    <img src="/assets/images/icons/groupexport.png" alt="" />
                  </div>
                  <p className="font-16 font-ks lineh-16 weight-600 color-h9">
                    Participation
                  </p>
                </div>
                <div className="others9-type otherstype9 aniamtion-key-2">
                  <div className="groupexpo">
                    <img src="/assets/images/icons/groupexport.png" alt="" />
                  </div>
                  <p className="font-16 font-ks lineh-16 weight-600 color-h9">
                    Feedback and complaints:
                  </p>
                </div>
                {/* <div class="otherstype10">
                <div class="groupexpo">
                  <img src="/assets/images/icons/groupexport.png" alt="">
                </div>
                <p class="font-16 font-ks lineh-16 weight-600 color-h9">Accountability</p>
              </div> */}
                <div
                  className="otherstype10"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration={800}
                >
                  <div className="groupexpo">
                    <img src="/assets/images/icons/groupexport.png" alt="" />
                  </div>
                  <p className="font-16 font-ks lineh-16 weight-600 color-h9">
                    Accountability
                  </p>
                </div>
                <div
                  className="otherstype11"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration={1000}
                >
                  <div className="groupexpo">
                    <img src="/assets/images/icons/groupexport.png" alt="" />
                  </div>
                  <p className="font-16 font-ks lineh-16 weight-600 color-h9">
                    Transparency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/elementor/elementor56.png"
          alt=""
          className="elementors18s"
        />
        <img
          src="/assets/images/elementor/elementor57.png"
          alt=""
          className="elementors19"
        />
      </div>
    </>
  );
}
