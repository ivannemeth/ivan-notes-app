import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";

export default function Navigation() {
  return (
    <nav className="navbar">
      <Link className="navbar-homelink" href="/">
        <h2>StickyMe*</h2>
      </Link>
      <Link className="navbar-addlink" href="/add-note">
        <IoIosAddCircle size="25px" />
      </Link>
    </nav>
  );
}
