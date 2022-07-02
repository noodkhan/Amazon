import Link from "next/link";

function Three({ textOne, textTwo, textThree, link }) {
  return (
    <>
      <div className="lastTitleOne">
        <p> {textOne} </p>
      </div>
      <div className="lastTitleTwo">
        <p>{textTwo}</p>
      </div>
      <div className="lastTitleThree">
        <Link href={link}>
          <a>WLTP - CONSUMPTION AND EMISSION VALUES</a>
        </Link>
        <p>{textThree}</p>
      </div>
    </>
  );
}

export default Three;
