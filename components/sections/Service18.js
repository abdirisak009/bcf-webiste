import Image from "next/image";
export default function Service18() {
  return (
    <>
      <div
        className="servicebenefites11-section-area section-padding5"
        style={{ backgroundColor: "#295E94" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-easing="linear"
            >
              {/* <span className="font-outfit font-16 lineh-16 weight-500 color aropaln3 d-inline-block margin-b24">
                <img src="/assets/images/icons/aroplan4.svg" alt="" />
                Service
              </span> */}
       
              {/* <Link
                href="#/"
                className="font-outfit font-16 lineh-16 weight-700 color themebtn11 thmbtn12 d-inline-block margin-t32"
              >
                Immigration Guidance
              </Link> */}
            </div>
            <div className="row align-items-center">
    {/* Left Content */}
    <div className="col-md-6">
      <h6 style={{ color: "#05B54C", fontWeight: "bold" }}>Our Objectives</h6>
      <h2 style={{ color: "#05B54C", fontWeight: "bold" }}></h2>
      <p style={{ color: "#FFFFFF" }}>
      Our strategic objectives drive our mission forward, providing clear direction for our work
and measurable benchmarks for our success. These objectives represent our
commitments to creating meaningful impact, building lasting relationships, and
delivering exceptional value across all sectors we serve.
      </p>

      <div className="d-flex align-items-start mt-4">
        <div style={{ backgroundColor: "#05B54C", borderRadius: "10px", padding: "15px" }}>
         <i className="fas fa-wrench text-white" style={{ fontSize: "24px" }}></i>
        </div>
        <div className="ms-3">
          <h5 style={{ color: "#05B54C", fontWeight: "bold" }}>Strengthen Institutional Capacities</h5>
          <p style={{ color: "#FFFFFF" }}>
          Develop and implement capacity-building initiatives
that enable organizations to enhance their leadership,
technical, and operational capabilities.
          </p>
        </div>
      </div>

      <div className="d-flex align-items-start mt-3">
        <div style={{ backgroundColor: "#05B54C", borderRadius: "10px", padding: "15px" }}>
        <i className="fas fa-handshake text-white" style={{ fontSize: "24px" }}></i>

        </div>
        <div className="ms-3">
          <h5 style={{ color: "#05B54C", fontWeight: "bold" }}>Enhance Public-Private Partnerships</h5>
          <p style={{ color: "#FFFFFF" }}>
          Facilitate collaborations between the public and private
sectors, driving innovation and investment in key areas
such as infrastructure, healthcare, and education
          </p>
        </div>
      </div>
      <div className="d-flex align-items-start mt-3">
        <div style={{ backgroundColor: "#05B54C", borderRadius: "10px", padding: "15px" }}>
        <i className="fas fa-balance-scale text-white" style={{ fontSize: '24px' }}></i>


        </div>
        <div className="ms-3">
          <h5 style={{ color: "#05B54C", fontWeight: "bold" }}>Promote Good Governance</h5>
          <p style={{ color: "#FFFFFF" }}>
          Lead efforts to improve public financial management
systems, policies, and transparency, ensuring that
governments and institutions are accountable to the public.
          </p>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="col-md-6 text-center">
      <div className="position-relative d-inline-block">
        <Image
          src="/assets/images/book.jpg"
          alt="Why Choose Us"
          width={450}
          height={450}
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            border: "5px solid #007bff",
            borderRadius: "50%",
            animation: "rotateBorder 5s linear infinite",
          }}
        ></div>
      </div>
    </div>
  </div>
          </div>
        </div>
        <img
          src="/assets/images/elementor/elementor77.png"
          alt=""
          className="elementors77"
        />
      </div>
    </>
  );
}
