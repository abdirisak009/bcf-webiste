"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout headerStyle={22} footerStyle={5} breadcrumbTitle=" ">
        <div>
          <div className="blogleft-section-area section-padding5">
            <div className="container">
              <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-10">
                  <div className="blogleftinner3-area p-0">
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                      Monitoring, Evaluation, Research and Learning
                    </h1>
                    <p className="font-ks fotn-16 weight-500 lineh-26 color-30  margin-b20">
                      FARPoD provides its clients with expertise in Monitoring,
                      Evaluation, Research, and Learning (MERL), which is
                      considered to be the best in the industry. Our goal is to
                      support institutions, Government and Humanitarian actors
                      in performance management by using rigorous MERL tools and
                      methods. Our performance and impact evaluations are
                      designed to provide scalable and actionable findings,
                      conclusions, and recommendations. Whether it's identifying
                      a theory of change, assessing progress towards
                      self-reliance, measuring program performance, or designing
                      a monitoring and evaluation (M&E) system for complex data
                      management, we ensure that high-quality data is generated
                      to address important questions about progress towards
                      intended results.
                    </p>
                    <h4 className="font-ks fotn-16 weight-500 lineh-26 color-30 ">
                      Expertise in Monitoring, Evaluation, Research and Learning
                      is
                    </h4>
                    <div className="border30" />

                    <div className="checkservice-area">
                      <ul>
                        <li>
                          <p className="font-ks font-16 lineh-16 weight-600 color-29">
                            <span>
                              <img
                                src="/assets/images/icons/check1.png"
                                alt=""
                              />
                            </span>
                            Conflict Settings
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="checkservice-area">
                      <ul>
                        <li>
                          <p className="font-ks font-16 lineh-16 weight-600 color-29">
                            <span>
                              <img
                                src="/assets/images/icons/check1.png"
                                alt=""
                              />
                            </span>
                            Analytic Frameworks
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="checkservice-area">
                      <ul>
                        <li>
                          <p className="font-ks font-16 lineh-16 weight-600 color-29">
                            <span>
                              <img
                                src="/assets/images/icons/check1.png"
                                alt=""
                              />
                            </span>
                            Large-Scale Surveys
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="checkservice-area m-0">
                      <ul>
                        <li>
                          <p className="font-ks font-16 lineh-16 weight-600 color-29">
                            <span>
                              <img
                                src="/assets/images/icons/check1.png"
                                alt=""
                              />
                            </span>
                            Collaboration, Learning, Adapting (CLA)
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="checkservice-area m-0">
                      <ul>
                        <li>
                          <p className="font-ks font-16 lineh-16 weight-600 color-29">
                            <span>
                              <img
                                src="/assets/images/icons/check1.png"
                                alt=""
                              />
                            </span>
                            Data Quality Assessments
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="checkservice-area m-0">
                      <ul>
                        <li>
                          <p className="font-ks font-16 lineh-16 weight-600 color-29">
                            <span>
                              <img
                                src="/assets/images/icons/check1.png"
                                alt=""
                              />
                            </span>
                            Innovative Tools
                          </p>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="peragraph-pera peragraeabg">
                      <p className="font-16 font-ks font-16 lineh-26 weight-500 color ts">
                        Don't just take our word for it. Explore our case
                        studies to see how we've transformed to be businesses
                        like yours. Discover how we've helped companies increase
                        market share, boost a revenues, and enhance their
                        competitive edge. Digital Transformation: Leverage
                        technology to transform your business and meet evolving
                        customer demands.
                      </p>
                    </div> */}

                    <div className="border30 borderpadding" />
                    <div className="postsocial-area">
                      <div className="posttags">
                        <ul>
                          <li>
                            <p className="font-ks fon-16 lineh-16 weight-600 color-29">
                              Post Tags:
                            </p>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="font-ks font-16 lineh-16 weight-500 color-29"
                            >
                              Consulting
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="font-ks font-16 lineh-16 weight-500 color-29"
                            >
                              Business
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="font-ks font-16 lineh-16 weight-500 color-29"
                            >
                              Finance
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="share-area">
                        <ul>
                          <li>
                            <p className="font-ks fon-16 lineh-16 weight-600 color-29">
                              Social Share:
                            </p>
                          </li>
                          <li>
                            <Link href="#" className="color-29">
                              <i className="fa-brands fa-x-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="color-29">
                              <i className="fa-brands fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="color-29">
                              <i className="fa-brands fa-instagram" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*===== CTA STARST=======*/}
          {/* <div className="cta5-section-area section-padding4">
            <img
              src="/assets/images/elementor/elementor72.png"
              alt=""
              className="elementors72"
            />
            <div className="container">
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
            </div>
            <img
              src="/assets/images/elementor/elementor72.png"
              alt=""
              className="elementors73"
            />
          </div> */}
        </div>
      </Layout>
    </>
  );
}
