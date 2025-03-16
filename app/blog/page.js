import Layout from "@/components/layout/Layout";
import Blog9 from "@/components/sections/Blog9";
export default function Blog() {
  return (
    <>
      <Layout headerStyle={22} footerStyle={5} breadcrumbTitle="News & Events">
        {/* <BlogPost showItem={6} style={1} showPagination /> */}
        <Blog9 />
      </Layout>
    </>
  );
}
