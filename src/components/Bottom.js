import Banner from "./Banner";

let Images = {
  id0: "https://images.unsplash.com/flagged/photo-1552424519-ad13a3c13a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  id1: "https://images.unsplash.com/photo-1497515098781-e965764ab601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80",
  id2: "https://images.unsplash.com/photo-1570900555854-2ca419a816ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  id3: "https://images.unsplash.com/photo-1581235707960-23b7e8612c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
  id4: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  id5: "https://images.unsplash.com/photo-1611176261014-ef4f688c3ca1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  id6: "https://images.unsplash.com/photo-1563441846967-d5c0d86b20a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
  id7: "https://images.unsplash.com/photo-1574702256908-ab5f9ff429dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80",
  id8: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80",
  id9: "https://images.unsplash.com/photo-1524656855800-59465ebcec69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  id10: "https://images.unsplash.com/photo-1637223901434-e2610da5def9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1163&q=80",
};

let Painting = {
  id1: "https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  id2: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  id3: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80",
  id4: "https://images.unsplash.com/photo-1632231484562-3d2bed7e808d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80",
  id5: "https://images.unsplash.com/photo-1599894019794-50339c9ad89c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  id6: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80",
  id7: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
  id8: "https://images.unsplash.com/photo-1580979069621-99074dd1bddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=716&q=80",
  id9: "https://images.unsplash.com/photo-1601275581158-fff93d0690c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  id10: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1019&q=80",
};

let Bike = {
  id1: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80",
  id2: "https://images.unsplash.com/photo-1637223901434-e2610da5def9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1163&q=80",
  id3: "https://images.unsplash.com/photo-1497515098781-e965764ab601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80",
};

let Apple = {
  id1: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  id2: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
  id3: "https://images.unsplash.com/photo-1642418714495-87fcca453f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  id4: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  id5: "https://images.unsplash.com/photo-1645669141400-4f3f0350585a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
  id6: "",
};

let SofaSet = {
  id1: "https://images.unsplash.com/photo-1540730930991-a9286a5f5020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  id2: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  id3: "https://images.unsplash.com/photo-1588471980726-8346cb477a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1070&q=80",
  id4: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  id5: "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  id6: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  id7: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80",
  id8: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80",
  id9: "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  id10: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  id11: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  id12: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  id13: "https://images.unsplash.com/photo-1607008830265-f5be5118a3d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
};

let Shoes = {
  id1: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  id2: "https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80",
  id3: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80",
  id4: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
  id5: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  id6: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  id7: "https://images.unsplash.com/photo-1515564242578-bbea07d21cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  id8: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  id9: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  id10: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
};

let Perfume = {
  id1: "https://images.unsplash.com/photo-1588514912908-8f5891714f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  id2: "https://images.unsplash.com/photo-1616604847462-ad9c15c4e8a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  id3: "https://images.unsplash.com/photo-1618330834871-dd22c2c226ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  id4: "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  id5: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  id6: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  id7: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
  id8: "https://images.unsplash.com/photo-1458538977777-0549b2370168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
  id9: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80",
  id10: "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=679&q=80",
  id11: "https://images.unsplash.com/photo-1530630458144-014709e10016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
};

const firstCol = (
  <>
    <div className="w-3/12 flex h/12/12 flex-col gap-3">
      <Banner
        propsOne={SofaSet.id13}
        propsTwo={SofaSet.id2}
        propsThree={SofaSet.id3}
        propsFour={SofaSet.id4}
        propsFive={SofaSet.id5}
        propsSix={SofaSet.id11}
        propsSeven={SofaSet.id7}
        propsEight={SofaSet.id8}
        propsNine={SofaSet.id9}
        propsTen={SofaSet.id10}
        width={2000}
        height={2750}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
      <Banner
        propsOne={Perfume.id1}
        propsTwo={Perfume.id2}
        propsThree={Perfume.id3}
        propsFour={Perfume.id4}
        propsFive={Perfume.id5}
        propsSix={Perfume.id6}
        propsSeven={Perfume.id7}
        propsEight={Perfume.id8}
        propsNine={Perfume.id9}
        propsTen={Perfume.id10}
        width={2000}
        height={1350}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
      <Banner
        propsOne={Apple.id1}
        propsTwo={Apple.id2}
        propsThree={Apple.id3}
        propsFour={Apple.id4}
        propsFive={Apple.id5}
        propsSix={Painting.id6}
        propsSeven={Painting.id7}
        propsEight={Painting.id8}
        propsNine={Painting.id9}
        propsTen={Painting.id10}
        width={2000}
        height={2285}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
    </div>
  </>
);

let secondCol = (
  <>
    <div className="w-3/12 flex h/12/12 flex-col gap-3">
      <Banner
        propsOne={Shoes.id1}
        propsTwo={Shoes.id2}
        propsThree={Shoes.id3}
        propsFour={Shoes.id4}
        propsFive={Shoes.id5}
        propsSix={Shoes.id6}
        propsSeven={Shoes.id7}
        propsEight={Shoes.id8}
        propsNine={Shoes.id9}
        propsTen={Shoes.id10}
        width={2000}
        height={1850}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
      <Banner
        propsOne={Apple.id1}
        propsTwo={Apple.id3}
        propsThree={Apple.id4}
        propsFour={Apple.id5}
        propsFive={Painting.id3}
        propsSix={Painting.id2}
        propsSeven={Painting.id1}
        propsEight={Painting.id3}
        propsNine={Painting.id2}
        propsTen={Painting.id1}
        width={2000}
        height={2500}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
      <Banner
        propsOne={Apple.id1}
        propsTwo={Apple.id3}
        propsThree={Apple.id4}
        propsFour={Apple.id5}
        propsFive={Painting.id3}
        propsSix={Painting.id2}
        propsSeven={Painting.id1}
        propsEight={Painting.id3}
        propsNine={Painting.id2}
        propsTen={Painting.id1}
        width={2000}
        height={2050}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
    </div>
  </>
);

let thirdCol = (
  <>
    <div className="w-3/12 flex h/12/12 flex-col gap-3">
      <Banner
        propsOne={Images.id0}
        propsTwo={Images.id0}
        propsThree={Painting.id1}
        propsFour={Painting.id1}
        propsFive={Painting.id1}
        propsSix={Painting.id1}
        propsSeven={Painting.id1}
        propsEight={Painting.id1}
        propsNine={Images.id0}
        propsTen={Images.id0}
        width={2000}
        height={2000}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
      <Banner
        propsOne={Painting.id1}
        propsTwo={Painting.id2}
        propsThree={Painting.id3}
        propsFour={Painting.id3}
        propsFive={Painting.id3}
        propsSix={Painting.id2}
        propsSeven={Painting.id1}
        propsEight={Painting.id3}
        propsNine={Painting.id2}
        propsTen={Painting.id1}
        width={2000}
        height={2000}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
      <Banner
        propsOne={Painting.id1}
        propsTwo={Painting.id2}
        propsThree={Painting.id3}
        propsFour={Painting.id3}
        propsFive={Painting.id3}
        propsSix={Painting.id2}
        propsSeven={Painting.id1}
        propsEight={Painting.id3}
        propsNine={Painting.id2}
        propsTen={Painting.id1}
        width={2000}
        height={2400}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
    </div>
  </>
);

const HalfStart = (
  <>
    {firstCol}
    {secondCol}
    {thirdCol}
  </>
);

const HalfEnd = (
  <>
    <div className="w-3/12 flex h/12/12 flex-col gap-3">
      <Banner
        propsOne={Shoes.id1}
        propsTwo={Shoes.id2}
        propsThree={Shoes.id3}
        propsFour={Shoes.id4}
        propsFive={Shoes.id5}
        propsSix={Shoes.id6}
        propsSeven={Shoes.id7}
        propsEight={Shoes.id8}
        propsNine={Shoes.id9}
        propsTen={Shoes.id10}
        width={2000}
        height={1900}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
      <Banner
        propsOne={Shoes.id1}
        propsTwo={Shoes.id2}
        propsThree={Shoes.id3}
        propsFour={Shoes.id4}
        propsFive={Shoes.id5}
        propsSix={Shoes.id6}
        propsSeven={Shoes.id7}
        propsEight={Shoes.id8}
        propsNine={Shoes.id9}
        propsTen={Shoes.id10}
        width={2000}
        height={1900}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
      <Banner
        propsOne={Painting.id1}
        propsTwo={Painting.id2}
        propsThree={Painting.id3}
        propsFour={Painting.id3}
        propsFive={Painting.id3}
        propsSix={Painting.id2}
        propsSeven={Painting.id1}
        propsEight={Painting.id3}
        propsNine={Painting.id2}
        propsTen={Painting.id1}
        width={2000}
        height={1650}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
    </div>
    <div className="w-3/12 flex h/12/12 flex-col gap-3">
      <Banner
        propsOne={SofaSet.id13}
        propsTwo={SofaSet.id2}
        propsThree={SofaSet.id3}
        propsFour={SofaSet.id4}
        propsFive={SofaSet.id5}
        propsSix={SofaSet.id11}
        propsSeven={SofaSet.id7}
        propsEight={SofaSet.id8}
        propsNine={SofaSet.id9}
        propsTen={SofaSet.id10}
        width={2200}
        height={2000}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
      <Banner
        propsOne={SofaSet.id13}
        propsTwo={SofaSet.id2}
        propsThree={SofaSet.id3}
        propsFour={SofaSet.id4}
        propsFive={SofaSet.id5}
        propsSix={SofaSet.id11}
        propsSeven={SofaSet.id7}
        propsEight={SofaSet.id8}
        propsNine={SofaSet.id9}
        propsTen={SofaSet.id10}
        width={2200}
        height={2000}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
      <Banner
        propsOne={SofaSet.id13}
        propsTwo={SofaSet.id2}
        propsThree={SofaSet.id3}
        propsFour={SofaSet.id4}
        propsFive={SofaSet.id5}
        propsSix={SofaSet.id11}
        propsSeven={SofaSet.id7}
        propsEight={SofaSet.id8}
        propsNine={SofaSet.id9}
        propsTen={SofaSet.id10}
        width={2200}
        height={2000}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
    </div>
    <div className="w-3/12 flex h/12/12 flex-col gap-3">
      <Banner
        propsOne={Shoes.id1}
        propsTwo={Shoes.id2}
        propsThree={Shoes.id3}
        propsFour={Shoes.id4}
        propsFive={Shoes.id5}
        propsSix={Shoes.id6}
        propsSeven={Shoes.id7}
        propsEight={Shoes.id8}
        propsNine={Shoes.id9}
        propsTen={Shoes.id10}
        width={2000}
        height={1900}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
      <Banner
        propsOne={Painting.id1}
        propsTwo={Painting.id2}
        propsThree={Painting.id3}
        propsFour={Painting.id3}
        propsFive={Painting.id3}
        propsSix={Painting.id2}
        propsSeven={Painting.id1}
        propsEight={Painting.id3}
        propsNine={Painting.id2}
        propsTen={Painting.id1}
        width={2000}
        height={1650}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
      <Banner
        propsOne={Painting.id1}
        propsTwo={Painting.id2}
        propsThree={Painting.id3}
        propsFour={Painting.id3}
        propsFive={Painting.id3}
        propsSix={Painting.id2}
        propsSeven={Painting.id1}
        propsEight={Painting.id3}
        propsNine={Painting.id2}
        propsTen={Painting.id1}
        width={2000}
        height={1950}
        layout={"responsive"}
        Classes={"object-cover"}
        link={"/"}
        title={"Hello World"}
        paragraph={"Container Box home boi"}
      />
    </div>
  </>
);

function Bottom() {
  return (
    <div className="">
      <div className="myflex  gap-3">{HalfStart}</div>
      <div className="myflex  gap-3">{HalfEnd}</div>
    </div>
  );
}

export default Bottom;
