import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Wallpaper from "../components/Wallpaper";

let cool = {
  id1: "https://images.unsplash.com/photo-1646898157740-ffc540df3adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  id2: "https://images.unsplash.com/photo-1653374548096-de8603e6db31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80",
  id3: "https://images.unsplash.com/photo-1645219502014-88689d94096a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1339&q=80",
  id4: "https://images.unsplash.com/photo-1645511897949-3d687943386b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  id5: "https://images.unsplash.com/photo-1645511897803-617335ebb916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  id6: "https://images.unsplash.com/photo-1645511897730-77cd50bbef41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  id7: "https://images.unsplash.com/photo-1653606166270-113b57009c46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  id8: "https://images.unsplash.com/photo-1654107333878-5eeba7d5be9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  id9: "https://images.unsplash.com/photo-1655012325191-cbc22182fa9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80",
  id10: "https://images.unsplash.com/photo-1651724682401-a10daf761c96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  id11: "https://images.unsplash.com/photo-1652680882466-e83b0cccab34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80",
  id12: "https://images.unsplash.com/photo-1651860207580-ddc55836bd8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  id13: "https://images.unsplash.com/photo-1651176957759-88e994301323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  id14: "https://images.unsplash.com/photo-1653248307083-1f0cb720a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  id15: "https://images.unsplash.com/photo-1647694420044-6e42df6ca610?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  id16: "https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  id17: "https://images.unsplash.com/photo-1633269540827-728aabbb7646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  id18: "https://images.unsplash.com/photo-1644251966508-47b1a3d2e56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  id19: "https://images.unsplash.com/photo-1644251966613-170a26996adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  id20: "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
};

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
        <div className="myflex ">
          <div className=" w-6/12 ">
            <Wallpaper
              propsOne={cool.id10}
              width={2025}
              height={1500}
              layout={"responsive"}
              Classes={"object-cover "}
            />
          </div>
          <div className=" w-6/12 ">
            <Wallpaper
              propsOne={cool.id7}
              width={2025}
              height={1500}
              layout={"responsive"}
              Classes={"object-cover "}
            />
          </div>
        </div>

        <Main />
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
