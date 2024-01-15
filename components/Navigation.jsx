import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navbar">
      <Link className="navbar-homelink" href="/">
        Your notes
      </Link>
      <Link className="navbar-addlink" href="/add-note">
        Add a note
      </Link>
    </nav>
  );
}
