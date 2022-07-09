import Link from "next/link";

var footer = (
  <div className=" show">
    <div className="showItem">
      <p className="try hover:bye">Show</p>
      <p className="try hover:bye">12</p>
      <span>/</span>
      <p className="try hover:bye">24 </p>
      <span>/</span>
      <p className="try hover:bye">All</p>
    </div>
    <div className="number ">
      <Link href="/">
        <a className="numberbox try hover:bye text-lg">1</a>
      </Link>
      <Link href="/item">
        <a className="numberbox try hover:bye text-lg">2</a>
      </Link>
      <Link href="/Page">
        <a className="numberbox try hover:bye text-lg">3</a>
      </Link>
      <Link href="/Page">
        <a className="numberbox try hover:bye text-lg">4</a>
      </Link>
      <Link href="/Page">
        <a className="numberbox try hover:bye text-lg">5</a>
      </Link>
      <Link href="/Page">
        <a className="numberbox try hover:bye text-lg">6</a>
      </Link>
    </div>
  </div>
);

function Footer() {
  return <>{footer}</>;
}

export default Footer;
