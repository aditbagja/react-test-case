import { Link } from "react-router-dom";
import "./Component.css";

const Navbar = () => {
  return (
    <nav>
      <h1>newsArea</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
