import Link from "next/link";
import { useState } from "react";
export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
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
      <div
        className="mobile-header mobile-header-4 d-block d-lg-none homepagesmall"
        style={{ backgroundColor: "#1959A0" }}
      >
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link href="#">
                  <img
                    src="/assets/images/bcflogo.png"
                    width={190}
                    height={60}
                    alt=""
                  />
                </Link>
              </div>
              <div
                className="mobile-nav-icon dots-menu"
                onClick={handleMobileMenu}
              >
                <i className="fa-solid fa-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`}
        style={{ backgroundColor: "#295E94" }}
      >
        <div className="logoicons-area">
          <div className="logos">
            <img
              src="/assets/images/logo22.png"
              width={190}
              height={60}
              alt=""
            />
          </div>
          <div className="menu-close" onClick={handleMobileMenu}>
            <i className="fa-solid fa-xmark" />
          </div>
        </div>
        <div className="mobile-nav">
          <ul className="mobile-nav-list">
            <li className="has-sub hash-has-sub">
              <Link href="/" className="font-ks font-18 weight-600 color">
                Home
              </Link>
            </li>

            <li className="has-sub hash-has-sub">
              <span
                className={
                  isActive.key == 2
                    ? "submenu-button submenu-opened"
                    : "submenu-button"
                }
                onClick={() => handleToggle(2)}
              >
                <em />
              </span>
              <Link href="#" className="font-ks font-16 weight-500 color">
                About
              </Link>
              <ul
                className="sub-menu"
                style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
              >
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

            <li className="has-sub hash-has-sub">
              <span
                className={
                  isActive.key == 3
                    ? "submenu-button submenu-opened"
                    : "submenu-button"
                }
                onClick={() => handleToggle(3)}
              >
                <em />
              </span>
              <Link
                href="/testimonials"
                className="font-ks font-16 weight-500 color"
              >
                Services
              </Link>
              <ul
                className="sub-menu"
                style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
              >
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

            <li className="has-sub hash-has-sub">
              <span
                className={
                  isActive.key == 4
                    ? "submenu-button submenu-opened"
                    : "submenu-button"
                }
                onClick={() => handleToggle(4)}
              >
                <em />
              </span>
              <Link href="#" className="font-ks font-16 weight-500 color">
                {" "}
                Sectors
              </Link>
              <ul
                className="sub-menu"
                style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}
              >
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

            <li className="has-sub hash-has-sub">
              <span
                className={
                  isActive.key == 5
                    ? "submenu-button submenu-opened"
                    : "submenu-button"
                }
                onClick={() => handleToggle(5)}
              >
                <em />
              </span>
              <Link href="#" className="font-ks font-16 weight-00 color">
                Opportunities
              </Link>
              <ul
                className="sub-menu"
                style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}
              >
                <li>
                  <Link href="#/" className="font-ks font-16 weight-500 color">
                    Jobs{" "}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="has-sub hash-has-sub">
              <Link
                href="/contact1"
                className="font-ks font-18 weight-600 color"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
