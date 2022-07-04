import One from "./One";

function SectionOne() {
  return (
    <div className="sectionOne">
      <One
        title={"Financial"}
        heading={
          "find a package that suits you with competitive offers from Amazon Best deal you could have bro"
        }
        link={"/Page"}
        linkname={"Amazon Prime"}
      />
      <One
        title={"Google"}
        heading={
          "find a package that suits you with competitive offers from Amazon Best deal you could have bro"
        }
        link={"/Page"}
        linkname={"Product Serve"}
      />
      <One
        title={"Business Trip"}
        heading={
          "find a package that suits you with competitive offers from Amazon Best deal you could have bro"
        }
        link={"/Page"}
        linkname={"Stuff Haha"}
      />
      <One
        title={"Home Design"}
        heading={
          "find a package that suits you with competitive offers from Amazon Best deal you could have bro"
        }
        link={"/Page"}
        linkname={"Designer line"}
      />
    </div>
  );
}

export default SectionOne;
