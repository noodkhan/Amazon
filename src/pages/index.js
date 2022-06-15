import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* { HEADER COMPONENTS  }  */}
      <Header />

      {/* Main */}
      <main>
        <Main/>
      </main>

      {/* <main>{MainBottom}</main> */}
      {/* <Random /> */}
    </>
  );
}

/*     <div className="w-12/12 flex ">
          <div className=" w-8/12 try flex-row ">
            <Banner/>
          </div>
          <div className=" w-6/12 try flex-row">
            <Banner />
          </div>
          <div className=" w-5/12 try flex-row">
            <Banner />
          </div>
          <div className=" w-6/12 try flex-row">
            <Banner />
          </div>
        </div>
        <div className="w-12/12 flex">
          <div className=" w-3/12 try flex-row">
            <Banner />
          </div>
          <div className=" w-3/12 try flex-row">
            <Banner />
          </div>
          <div className=" w-3/12 try flex-row">
            <Banner />
          </div>
          <div className=" w-3/12 try flex-row">
            <Banner />
          </div>
        </div>
        <div className="w-12/12 flex">
          <div className=" w-3/12 try flex-row">
            <Banner />
          </div>
          <div className=" w-3/12 try flex-row">
            <Banner />
          </div>
          <div className=" w-3/12 try flex-row">
            <Banner />
          </div>
          <div className=" w-3/12 try flex-row">
            <Banner />
          </div>
        </div>
        <div className="w-12/12 flex">
          <div className=" w-3/12 try flex-row">
            <Banner />
          </div>
          <div className=" w-3/12 try flex-row">
            <Banner />
          </div>
          <div className=" w-3/12 try flex-row">
            <Banner />
          </div>
          <div className=" w-3/12 try flex-row">
            <Banner />
          </div>
        </div> */
