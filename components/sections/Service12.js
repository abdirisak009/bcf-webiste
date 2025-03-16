
import Link from "next/link"

export default function Service12() {
    return (
        <>

            <div className="servicebene9-section-area section-padding5" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={800}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="service9-benefites-heade text-center margin-b28">
                                <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">Outstanding qualities</span>
                                <h1 className="font-lora font-44 lineh-54 weight-600 colorh9">Our Outstanding qualities
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="service-auhtor9-boxarea ts width1">
                                <Link href="/servicemiddle" className="font-17 lineh-16 weight-600 color-h9 font-ks ts"><span className="ts"><i className="fa-solid fa-check" /></span>Accountability</Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-auhtor9-boxarea ts width2">
                                <Link href="/servicemiddle" className="font-17 lineh-16 weight-600 color-h9 font-ks ts"><span className="ts"><i className="fa-solid fa-check" /></span>Transparency</Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-auhtor9-boxarea ts width3">
                                <Link href="/servicemiddle" className="font-17 lineh-16 weight-600 color-h9 font-ks ts"><span className="ts"><i className="fa-solid fa-check" /></span>Feedback and complaints</Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-auhtor9-boxarea ts width4">
                                <Link href="/servicemiddle" className="font-17 lineh-16 weight-600 color-h9 font-ks ts"><span className="ts"><i className="fa-solid fa-check" /></span>Participation</Link>
                            </div>
                        </div>
                     
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor60.png" alt="" className="elementors60" />
            </div>
        </>
    )
}
