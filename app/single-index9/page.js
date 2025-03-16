import Layout from "@/components/layout/Layout";
import About9 from "@/components/sections/About9";
import Blog9 from "@/components/sections/Blog9";
import Company3 from "@/components/sections/Company3";
import Conatact2 from "@/components/sections/Conatact2";
import Cta9 from "@/components/sections/Cta9";
import Pricing5 from "@/components/sections/Pricing5";
import Service11 from "@/components/sections/Service11";
// import Service12 from "@/components/sections/Service12";
import Service18 from "@/components/sections/Service18";
// import Testimonial9 from "@/components/sections/Testimonial9";
// import Welcome9 from "@/components/sections/Welcome9";
// import Welcome10 from "@/components/sections/Welcome10";
import Welcome8 from "@/components/sections/Welcome8";
import TopbarSection from "../../components/topbar/TopbarSection";
export default function Home() {
  return (
    <>
      <TopbarSection style="tf__topbar" />
      <Layout headerStyle={22} footerStyle={5}>
        <Welcome8 />
        {/* <Welcome9 /> */}
        {/* <Welcome10 /> */}
        <About9 />
        <Service11 />
        <Company3 />
        <Service18 />
        {/* <Service12 /> */}
        <Pricing5 />
        {/* <Testimonial9 /> */}
        <Blog9 />
        <Conatact2 />
        <Cta9 />
      </Layout>
    </>
  );
}
