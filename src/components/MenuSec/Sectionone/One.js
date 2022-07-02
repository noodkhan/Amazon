import Link from "next/link";

function One({ title, heading , link , linkname }) {
  return (

      <div className="titleFirst">
        <h2> {title} </h2>
        <p>{heading}</p>
        <Link href={link}>
          <a>
            {linkname}
            <i className="bx bxs-cheese"></i>
          </a>
        </Link>
      </div>

  );
}

export default One;
