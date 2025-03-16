// "use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import jsonData from "../../../service.json";
export default async function Home({ params }) {
  // const [isActive, setIsActive] = useState({
  //   status: false,
  //   key: "",
  // });
  // const [currentData, setcurrentData] = useState({});
  // const [items, setitems] = useState([]);
  // console.log("params", params);
  // console.log("jsonData", jsonData);
  // useEffect(() => {
  //   return () => {
  //     try {
  //       setTimeout(() => {
  //         console.log("Delayed for 1 second.");

  //         let currentObj = jsonData.services.find(
  //           (data) =>
  //             data.uniqueKey.toLowerCase() == params.serviceid.toLowerCase()
  //         );
  //         console.log("currentObj", currentObj);
  //         if (currentObj != "undefined" && currentObj != "null") {
  //           setcurrentData(currentObj);
  //           setitems(currentObj?.items);
  //         } else {
  //           setitems([]);
  //           setcurrentData({});
  //         }
  //       }, "1000");
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  // }, []);
  let checkArray = [];
  let currentObj = await jsonData.services.find(
    (data) => data.uniqueKey.toLowerCase() == params.serviceid.toLowerCase()
  );

  // if ((currentObj.items = !undefined && currentObj.items != null)) {
  //   checkArray = currentObj.items;
  // }
  console.log("currentObj", currentObj);
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
      <Layout
        headerStyle={22}
        footerStyle={5}
        breadcrumbTitle={currentObj?.title}
        // breadcrumbTitle={currentData?.title}
      >
        <div>
          <div className="blogleft-section-area section-padding5">
            <div className="container">
              <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-10">
                  <div className="blogleftinner3-area p-0">
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                      {currentObj?.title}
                      {/* {currentData?.title} */}
                    </h1>
                    <p className="font-ks fotn-16 weight-500 lineh-26 color-30  margin-b20">
                      {currentObj?.body}
                      {/* {currentData?.body} */}
                    </p>
                    <h4 className="font-ks fotn-16 weight-500 lineh-26 color-30 ">
                      {currentObj?.subTitle}
                      {/* {currentData?.subTitle} */}
                    </h4>
                    <div className="border30" />

                    {currentObj.items == undefined
                      ? []
                      : currentObj.items?.map(function (data) {
                          return (
                            <div className="items-area m-0">
                              <ul>
                                <li>
                                  <p
                                    // key={index}
                                    className="font-ks font-16 mt-3 lineh-16 weight-300 color-29 d-flex justify-content-start"
                                  >
                                    <span className="fa fa-check">
                                      <img
                                        src="/assets/images/icons/check1.png"
                                        alt=""
                                      />
                                    </span>
                                    {data}
                                  </p>
                                </li>
                              </ul>
                            </div>
                          );
                        })}

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
                              href="#/"
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
        </div>
      </Layout>
    </>
  );
}
