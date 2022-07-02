import Link from "next/link";

function Two({ link, linkname }) {
  const LinkSection = (
    <Link href={link}>
      <a>{linkname}</a>
    </Link>
  );

  return <>{LinkSection}</>;
}

export default Two;
