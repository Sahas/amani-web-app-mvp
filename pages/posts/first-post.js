import Link from "next/link";

export default function FirstPost() {
  return (
    <div>
      <h1>First Post</h1>
      <Link href="/">
        <a>Go to home</a>
      </Link>
    </div>
  );
}
