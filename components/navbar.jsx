import Link from "next/link";
export const Navbar = () => {
  return (
      <ul className="navbar">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
  );
};
