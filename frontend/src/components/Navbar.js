import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/"> Student List </Link>
          </li>
          <li>
            <Link to="/create"> Add </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
