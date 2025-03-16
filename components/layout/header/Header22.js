import Link from "next/link";
import { useState } from "react";
export default function Header22({ scroll, isMobileMenu, handleMobileMenu }) {
  const [showInput, setshowInput] = useState(false);
  return (
    <>
      <header className="header about-bg d-none d-lg-block">
        <div
          className={`header-area header header-sticky ${
            scroll ? "sticky" : ""
          }`}
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-elements">
                  <div className="site-logo">
                    <Link href="/">
                      <img
                        src="/assets/images/bcflogo.png"
                        width={200}
                        height={70}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="main-menu-ex  homepage10 homepage7 ">
                    <ul>
                      <li className="mega-dropdawn">
                        <Link href="/">Home </Link>
                      </li>

                      <li>
                        <Link
                          href="#/"
                          className="font-ks font-16 weight-500 color"
                        >
                          About{" "}
                          <span>
                            <i className="fa-solid fa-angle-down" />
                          </span>
                        </Link>
                        <ul>
                          <li>
                            <Link
                              href="/about"
                              className="font-ks font-16 weight-500 color"
                            >
                              About US
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/team"
                              className="font-ks font-16 weight-500 color"
                            >
                              Team
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/blog"
                              className="font-ks font-16 weight-500 color"
                            >
                              News & Events
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          href="#/"
                          className="font-ks font-16 weight-500 color"
                        >
                          Services
                          <span>
                            <i className="fa-solid fa-angle-down" />
                          </span>
                        </Link>
                        <ul>
                          <li>
                            <Link
                              href="/services/Monitoring-Evaluation-Researchand-Learning"
                              className="font-ks font-16 weight-500 color"
                            >
                              Monitoring, Evaluation, Research and Learning
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/Institutional-Support-and-policy-development"
                              className="font-ks font-16 weight-500 color"
                            >
                              Institutional Support and policy development
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/Financial-Management-Risk-Mitigation"
                              className="font-ks font-16 weight-500 color"
                            >
                              Financial Management & Risk Mitigation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/Supply-Chain-Procurement"
                              className="font-ks font-16 weight-500 color"
                            >
                              Supply Chain & Procurement
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/Capacity-Building-Training"
                              className="font-ks font-16 weight-500 color"
                            >
                              Capacity Building & Training
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          href="#/"
                          className="font-ks font-16 weight-500 color"
                        >
                          Sectors
                          <span>
                            <i className="fa-solid fa-angle-down" />
                          </span>
                        </Link>
                        <ul>
                          <li>
                            <Link
                              href="/services/Agriculture-Resilience-Food-Security"
                              className="font-ks font-16 weight-500 color"
                            >
                              Agriculture, Resilience, & Food Security
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/Crisis-and-Peacebuilding"
                              className="font-ks font-16 weight-500 color"
                            >
                              Crisis and Peacebuilding
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/services/Democracy-Governance"
                              className="font-ks font-16 weight-500 color"
                            >
                              Democracy & Governance
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/Economic-Growth-Trade"
                              className="font-ks font-16 weight-500 color"
                            >
                              Economic Growth & Trade
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/Education"
                              className="font-ks font-16 weight-500 color"
                            >
                              Education
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/EnergyInfrastructure"
                              className="font-ks font-16 weight-500 color"
                            >
                              Energy & Infrastructure
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/EnvironmentClimateChange"
                              className="font-ks font-16 weight-500 color"
                            >
                              Environment Climate Change
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/GlobalHealthWASH"
                              className="font-ks font-16 weight-500 color"
                            >
                              Global Health & WASH
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/HumanitarianandDisasterAssistance"
                              className="font-ks font-16 weight-500 color"
                            >
                              Humanitarian and Disaster Assistance
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link
                          href="#/"
                          className="font-ks font-16 weight-500 color"
                        >
                          Opportunities
                          <span>
                            <i className="fa-solid fa-angle-down" />
                          </span>
                        </Link>
                        <ul>
                          <li>
                            <Link
                              href="#/"
                              className="font-ks font-16 weight-500 color"
                            >
                              Jobs
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link
                          href="/contact1"
                          className="font-ks font-16 weight-500 color"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="contact-3 d-lg-block d-none">
                    <div className="row">
                      {showInput ? (
                        <div className="col">
                          <input
                            className="form-control"
                            placeholder="Search"
                          />
                        </div>
                      ) : null}

                      <div className="col">
                        <div className="shecdule-btn1">
                          <Link
                            href="/#"
                            onClick={() => setshowInput(!showInput)}
                          >
                            <i className="fas fa-search text-white"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
