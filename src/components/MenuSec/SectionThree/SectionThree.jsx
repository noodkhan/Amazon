import Three from "./Three";

function SectionThree() {
  let ParagrpahOne = (
    <>
      From 1 September 2017, new cars have been type-approved under the World
      Harmonized Light Vehicle Test Procedure (WLTP), a new, more realistic test
      method for measuring fuel consumption and CO 2 emissions. From 1 September
      2018, ditions, the fuel consumption and CO2 emission values measured by
      the WLTP are in many cases higher than those measured by the NEDC. which
      may vary depending on factors including road conditions, weather, vehicle
      load and driving style.
    </>
  );

  let ParagraphTwo = (
    <>
      The mpg/fuel economy figures quoted are sourced from official regulated
      test results obtained through laboratory testing. They are for
      comparability purposes only and may not reflect your real driving
      experience, which may vary depending on factors including road conditions,
      weather, vehicle load and driving style. a new,
    </>
  );

  return (
    <div className="sectionThree">
      <Three
        textOne={"Fuel Economy"}
        textTwo={ParagrpahOne}
        textThree={ParagraphTwo}
        link={"/blank"}
      />
    </div>
  );
}

export default SectionThree;
