import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <div>
      <Link to="/admin">Admin</Link>|<Link to="/">Home</Link>|
      <Link to="/tarp">Tarp</Link>|<Link to="/add">Add </Link>|
      <Link to="/todos">Todos</Link>|<Link to="/house">House</Link>|
      <Link to="/tuits">Tuits</Link>|
      {!currentUser && (
        <>
          <Link to="/login">Login</Link>|<Link to="/register">Register</Link>|
        </>
      )}
      {currentUser && <Link to="/profile">Profile</Link>}
    </div>
  );
}
