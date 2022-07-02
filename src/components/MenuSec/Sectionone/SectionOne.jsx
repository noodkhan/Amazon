import Link from "next/link";
import One from "./One";

function SectionOne() {
  return (
    <div className="sectionOne">
      <One
        title={"Financial"}
        heading={
          "find a package that suits you with competitive offers from Amazon Best deal you could have bro"
        }
        link={"AmazonOne"}
        linkname={"Amazon Prime"}
      />
      <One
        title={"Google"}
        heading={
          "find a package that suits you with competitive offers from Amazon Best deal you could have bro"
        }
        link={"/blank"}
        linkname={"Product Serve"}
      />
      <One
        title={"Business Trip"}
        heading={
          "find a package that suits you with competitive offers from Amazon Best deal you could have bro"
        }
        link={"Garden Farm"}
        linkname={"Stuff Haha"}
      />
      <One
        title={"Home Design"}
        heading={
          "find a package that suits you with competitive offers from Amazon Best deal you could have bro"
        }
        link={"/blank"}
        linkname={"Designer line"}
      />
    </div>
  );
}

export default SectionOne;
