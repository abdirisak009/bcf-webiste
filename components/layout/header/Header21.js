import Link from "next/link";

export default function Header21({ scroll, isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <header className="header about-bg d-none d-lg-block">
        <div
          className={`header-area header ${scroll ? "sticky" : ""}`}
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-elements">
                  <div className="site-logo">
                    <Link href="/index1">
                      <img
                        src="/assets/images/logo.png"
                        width={200}
                        height={70}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="main-menu-ex homepage5 homepage9">
                    <ul>
                      <li className="mega-dropdawn">
                        <Link
                          href="#"
                          className="font-ks font-16 weight-500 color-1"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about"
                          className="font-ks font-16 weight-500 color-1"
                        >
                          About Us
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/#blog"
                          className="font-ks font-16 weight-500 color-1"
                        >
                          Our Blogs{" "}
                        </Link>{" "}
                      </li>
                      <li>
                        <Link
                          href="/contact1"
                          className="font-ks font-16 weight-500 color-1"
                        >
                          Contact{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="contact-3 d-lg-block d-none">
                    <div className="all-3-btn theme-btn">
                      <Link
                        href="/contact1"
                        className="font-16 font-ks weight-700 color lineh-16 consulting9"
                      >
                        Request
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
        </div>
      </header>
    </>
  );
}
