import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={22} footerStyle={5} breadcrumbTitle="Our Team">
        <div>
          <div className="team-innerpages-area section-padding8">
            <div className="container">
              {/* <div className="row">
                <div className="col-lg-3 margin-b30">
                  <div className="teaminner-section">
                    <div className="project-item-two">
                      <div className="project-thumb-two">
                        <img src="/assets/images/profileImage.jpg" alt="" />
                      </div>
                      <div className="project-content-two">
                        <ul>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-x-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-linkedin" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="team-pera text-center margin-t">
                        <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12">
                          <Link href="/team" className="color-29">
                            Aden Ismail Hassan
                          </Link>
                        </h1>
                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">
                          Executive Director
                        </p>
                        <p className="font-16 lineh-16 weight-500 color-30 font-ks justify-content-start">
                          Master of Public Health (Epidemiology and Disease{" "}
                          <br />
                          Control) (MPH) and graduated with an undergraduate
                          Bachelor of Science Human Nutrition and Dietetics
                          degree (BSc HND). Registered Clinical Nutritionist
                          with the Kenya Nutritionist and Dieticians Institute
                          (KNDI) and licensed to practice Clinical Nutrition.
                          Reliable well-organized, dynamic, resourceful; results
                          oriented who can prioritize workload, comfortable
                          working alone and as a team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 margin-b30">
                  <div className="teaminner-section">
                    <div className="project-item-two">
                      <div className="project-thumb-two">
                        <img src="/assets/images/profileImage.jpg" alt="" />
                      </div>
                      <div className="project-content-two">
                        <ul>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-x-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-linkedin" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="team-pera text-center margin-t">
                        <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12">
                          <Link href="/team" className="color-29">
                            Abdisalam Ahmed Muthow-
                          </Link>
                        </h1>
                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">
                          Director of MERL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 margin-b30">
                  <div className="teaminner-section">
                    <div className="project-item-two">
                      <div className="project-thumb-two">
                        <img src="/assets/images/profileImage.jpg" alt="" />
                      </div>
                      <div className="project-content-two">
                        <ul>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-x-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-linkedin" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="team-pera text-center margin-t">
                        <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12">
                          <Link href="/team" className="color-29">
                            Dr. Yussuf Ahmed Hassan
                          </Link>
                        </h1>
                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">
                          Technical specialist (Health and Nutrition)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 margin-b30">
                  <div className="teaminner-section">
                    <div className="project-item-two">
                      <div className="project-thumb-two">
                        <img src="/assets/images/profileImage.jpg" alt="" />
                      </div>
                      <div className="project-content-two">
                        <ul>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-x-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-linkedin" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="team-pera text-center margin-t">
                        <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12">
                          <Link href="/team" className="color-29">
                            Ali Abdi Mohamed
                          </Link>
                        </h1>
                        <p className="font-16 lineh-16 weight-500 color-30 font-ks">
                          Technical (Agronomist)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div
                className="service-preview-section-area section-padding8"
                id="blog"
              >
                <div className="container">
                  <div className="row">
                    <div
                      className="col-lg-3  col-md-6"
                      data-aos-easing="linear"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      <div className="service-preview-box text-center">
                        <div className="servicepreview-icon">
                          <img
                            src="/assets/images/icons/servicepreview3.png"
                            alt=""
                          />
                        </div>
                        <div className="service-preview-text text-center">
                          <Link
                            href="#"
                            className="font-outfit font-24 lineh-26 weight-600 color-1 d-inline-block margin-b ts"
                          >
                            Aden I. Hassan
                          </Link>{" "}
                          <br />
                          <Link
                            href="#"
                            className="font-outfit font-24 lineh-26 weight-400 color-1 d-inline-block margin-b ts"
                          >
                            Executive Director
                          </Link>
                          <p className="font-outfit font-16 lineh-26 weight-400 colro-30 margin-b24 ts">
                            Master of Public Health (Epidemiology and Disease
                            Control) (MPH) and graduated with an undergraduate
                            Bachelor of Science Human Nutrition and Dietetics
                            degree (BSc HND). Registered Clinical
                            Nutritionistwith the Kenya Nutritionist and
                            Dieticians Institute (KNDI) and licensed to practice
                            Clinical Nutrition.Reliable well-organized, dynamic,
                            resourceful; results oriented who can prioritize
                            workload, comfortable working alone and as a team.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3  col-md-6"
                      data-aos-easing="linear"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      <div className="service-preview-box text-center">
                        <div className="servicepreview-icon">
                          <img
                            src="/assets/images/icons/servicepreview3.png"
                            alt=""
                          />
                        </div>
                        <div className="service-preview-text text-center">
                          <Link
                            href="#"
                            className="font-outfit font-24 lineh-26 weight-600 color-1 d-inline-block margin-b ts"
                          >
                            Abdisalam A. Muthow
                          </Link>
                          <Link
                            href="#"
                            className="font-outfit font-24 lineh-26 weight-400 color-1 d-inline-block margin-b ts"
                          >
                            Director of MERL
                          </Link>
                          <p className="font-outfit font-16 lineh-26 weight-400 colro-30 margin-b24 ts">
                            Has a Bachelor Degree in Commerce and nearing the
                            completion of my Master of Arts in Development
                            Studies, specializing in Monitoring and Evaluation,
                            with over 8 years of experience in Monitoring and
                            Evaluation on implementing various projects.
                            Academic training has provided a solid foundation in
                            Research, Data Analysis, and program performance
                            tracking.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3  col-md-6"
                      data-aos-easing="linear"
                      data-aos="fade-up"
                      data-aos-duration={1200}
                    >
                      <div className="service-preview-box text-center">
                        <div className="servicepreview-icon">
                          <img
                            src="/assets/images/icons/servicepreview3.png"
                            alt=""
                          />
                        </div>
                        <div className="service-preview-text text-center">
                          <Link
                            href="#"
                            className="font-outfit font-24 lineh-26 weight-600 color-1 d-inline-block margin-b ts"
                          >
                            Dr. Yussuf A. Hassan
                          </Link>
                          <Link
                            href="#"
                            className="font-outfit font-24 lineh-26 weight-400 color-1 d-inline-block margin-b ts"
                          >
                            Technical specialist
                          </Link>

                          <p className="font-outfit font-16 lineh-26 weight-400 colro-30 margin-b24 ts">
                            Bachelor’s degree of science Environmental Health
                            and a clinical officer, registered with clinical
                            officer’s council of Kenya and have seven years of
                            humanitarian working experience in Health and
                            Nutrition Programs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3  col-md-6"
                      data-aos-easing="linear"
                      data-aos="fade-up"
                      data-aos-duration={1200}
                    >
                      <div className="service-preview-box text-center">
                        <div className="servicepreview-icon">
                          <img
                            src="/assets/images/icons/servicepreview3.png"
                            alt=""
                          />
                        </div>
                        <div className="service-preview-text text-center">
                          <Link
                            href="#"
                            className="font-outfit font-24 lineh-26 weight-600 color-1 d-inline-block margin-b ts"
                          >
                            Ali A. Mohamed
                          </Link>
                          <Link
                            href="#"
                            className="font-outfit font-24 lineh-26 weight-400 color-1 d-inline-block margin-b ts"
                          >
                            Technical (Agronomist)
                          </Link>

                          <p className="font-outfit font-16 lineh-26 weight-400 colro-30 margin-b24 ts">
                            Hold bachelor’s degree in development studies. With
                            over 10 years of working experience in food
                            security, livelihoods, and resilience programs and
                            Has successfully managed a diverse portfolio of
                            development and emergency programs, worth $25
                            million USD annually.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===== TEAM END=======*/}
          {/*===== CTA STARST=======*/}
          <div
            className="cta5-section-area section-padding4"
            style={{ backgroundColor: "#295E94" }}
          >
            <img
              src="/assets/images/elementor/elementor72.png"
              alt=""
              className="elementors72"
            />
            {/* <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="cta5-auhtor6-area">
                    <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">
                      Get Expert Advice On Consultancy And Strategies.
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-21">
                      We believe that informed clients make better Law
                      decisions. As part of our service, we'll provide
                      educational resources and workshops to help.
                    </p>
                  </div>
                </div>
                <div className="col-lg-2" />
                <div className="col-lg-4">
                  <div className="cta5-btn5-sexction">
                    <Link
                      href="/contact1"
                      className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16"
                    >
                      Get Law Advice
                      <span>
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </Link>
                    <Link
                      href="/contact2"
                      className="theme6-btn6 backgrnd6 font-ks lineh-16 weight-700 color-29 font-16"
                    >
                      Contact Us
                      <span>
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
            <img
              src="/assets/images/elementor/elementor72.png"
              alt=""
              className="elementors73"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
