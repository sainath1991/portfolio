import { Link } from "react-router";

export default function MainNav() {
  return (
    <nav className="font-heebo font-medium">
      <ul className="flex flex-row justify-end">
        <li className="pr-10 pt-5"><Link to="/home">Works</Link></li>
        <li className="pr-10 pt-5"><Link to="/blog">Blog</Link></li>
        <li className="pr-10 pt-5"><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </nav>
  );
}