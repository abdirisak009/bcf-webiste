import Link from "next/link";

export default function Welcome8() {
  return (
    <>
      <div className="welcome-eightsection-area">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-lg-6">
              <div
                className="welcome8-header"
                data-aos="fade-left"
                data-aos-duration={1000}
              >
                <span className="font-ks font-16 weight-600 lineh-26 services8 colorspan margin-b20 d-inline-block text-white">
                  Best Consulting Services
                </span>
                <h1
                  className="font-lora font-56 lineh-64 weight-400 color margin-b"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                >
                  <strong>Baraarug</strong> Consulting Firm
                </h1>
                <p className="font-16 font-ks weight-500 color-21 lineh-26">
                We empower organizations to achieve excellence
                through innovative solutions and sustainable
                transformation.
                </p>
                <div
                  className="div"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                >
                  <Link
                    href="/contact1"
                    className="font-ks font-16 lineh-16 weight-700 color solutions1 margin-t32"
                    style={{ backgroundColor: "#05B54C" }}
                  >
                    Discover Solutions{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            <img
          src="/assets/images/heroImage.png"
          alt=""
          className="heroImage"
        />
            </div>
          </div>
        </div>
        <img
          src="/assets/images/elementor/elementor49.png"
          alt=""
          className="elementors7 aniamtion-key-1"
        />
      </div>
    </>
  );
}
