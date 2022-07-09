import Link from "next/link";

function TextBox({ date, title, content, linkname }) {
  return (
    <div className="textCard">
      <p>{date}</p>
      <Link href={linkname}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
      <p>{content}</p>
    </div>
  );
}

export default TextBox;
