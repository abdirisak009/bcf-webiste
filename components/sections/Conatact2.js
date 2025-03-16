import Link from "next/link";

export default function Conatact2() {
  return (
    <>
      <div className="contact9-section-area section-padding5">
        <div className="container">
          <div className="row">
            <div className="contact09-main-area">
              <div className="row">
                <div
                  className="col-lg-6"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration={800}
                >
                  <div className="contact9-header margin-b30">
                    <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">
                      Contact Us
                    </span>
                    <h1
                      className="font-lora font-44 lineh-54 weight-600 colorh9"
                      data-aos="fade-right"
                      data-aos-easing="linear"
                      data-aos-duration={1000}
                    >
                      Contact Us Now
                    </h1>
                    <p className="font-ks fotn-16 lineh-26 weight-500 colorhp1 margin-t margin-b">
                      In offering complimentary consultation services, we hold
                      the belief that well-informed clients are empowered to
                      make superior decisions. As an integral aspect of our
                      service, FARPoD offers educational resources and workshops
                      designed to support our clients in their experience with
                      us.
                    </p>
                    <div className="contact9-allinput">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="input9 margin-t16">
                            <input type="text" placeholder="First Name" />
                          </div>
                        </div>
                        <div className="col-lg-6 ">
                          <div className="input9 margin-t16">
                            <input type="text" placeholder="Last Name" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input9 margin-t16">
                            <input type="email" placeholder="Email Address" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input9 margin-t16">
                            <input type="number" placeholder="Phone" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="first-name-input1 margin-t16">
                            <select
                              name="country1"
                              id="country1"
                              className="country-area2"
                            >
                              <option
                                value={1}
                                data-display="Are you a new client?"
                                className="font-outfit font-16 lineh-16 color-ni weight-500 input3"
                              >
                                Are you a new client?
                              </option>
                              <option value>Somalia</option>
                              <option value>Kenya</option>
                              <option value>Ethopia</option>
                              <option value>Uganda</option>
                              <option value>Algeria</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input9 margin-t16">
                            <textarea
                              cols={30}
                              rows={10}
                              placeholder="How can we help you?"
                            />
                          </div>
                          <button
                            className="font-16 font-ks lineh-16 weight-700 color contact9btn"
                            type="submit"
                          >
                            Submit Now{" "}
                            <span className="ml1">
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6"
                  data-aos="zoom-out"
                  data-aos-easing="linear"
                  data-aos-duration={1200}
                >
                  <div className="contcat6-images margin-b30">
                    <img
                      src="/assets/images/contactImage.jpg"
                      alt=""
                      className="contact9auhtorimg"
                    />
                    <img
                      src="/assets/images/elementor/Transparency1.png"
                      alt=""
                      className="trandparency1 aniamtion-key-1"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-4"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration={800}
                >
                  <div className="phonearea-contact9 margin-t32">
                    <div className="phone9images">
                      <img
                        src="/assets/images/icons/phone12.png"
                        alt=""
                        className="ts"
                      />
                    </div>
                    <div className="phone9textarea">
                      <h1 className="font-lora font-20 lineh-20 weight-600 color-h9  margin-b20 d-inline-block ts">
                        Contact Info
                      </h1>{" "}
                      <br />
                      <Link
                        href="/tel:123-456-7890"
                        className="font-ks font-16 weight-500 colorhp1 lineh-16 ts"
                      >
                        +252615300888
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration={1000}
                >
                  <div className="phonearea-contact9 margin-t32">
                    <div className="phone9images">
                      <img
                        src="/assets/images/icons/location.png"
                        alt=""
                        className="ts"
                      />
                    </div>
                    <div className="phone9textarea">
                      <h1 className="font-lora font-20 lineh-20 weight-600 color-h9  margin-b20 d-inline-block ts">
                        Our Location
                      </h1>{" "}
                      <br />
                      <Link
                        href="/tel:+252 61 9395504"
                        className="font-ks font-16 weight-500 colorhp1 lineh-26 ts"
                      >
                        Nairobi, Kenya: 2nd Avenue Parklands. Mogadishu,
                        Somalia: KM 4, Waberi.
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration={1200}
                >
                  <div className="phonearea-contact9 margin-t32">
                    <div className="phone9images">
                      <img
                        src="/assets/images/icons/clock.png"
                        alt=""
                        className="ts"
                      />
                    </div>
                    <div className="phone9textarea">
                      <h1 className="font-lora font-20 lineh-20 weight-600 color-h9  margin-b20 d-inline-block ts">
                        Contact Info
                      </h1>{" "}
                      <br />
                      <Link
                        href="/tel:123-456-7890"
                        className="font-ks font-16 weight-500 colorhp1 lineh-16 ts"
                      >
                        Sat - Thurs : 8am to 5pm
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
