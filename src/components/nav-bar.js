import {Link} from "react-router-dom";

export default function NavBar () {
  return(
    <div className="list-group">
      <Link to="/tarp" className="list-group-item">
        Tarp
      </Link>
      <Link to="/add" className="list-group-item">
        Add
      </Link>
      <Link to="/todos" className="list-group-item">
        Todos
      </Link>
      <Link to="/house" className="list-group-item">
        House
      </Link>
    </div>
  )
}