import HouseScreen from "./screens/house-screen";
import AddScreen from "./screens/add-screen";
import TodosScreen from "./screens/todos-screen";
import DestructorScreen from "./screens/destructor-screen";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import NavBar from "./components/nav-bar";
import Tarp from "./tarp";

function App() {
  return (
    <div className="container-fluid mt-4">
      <BrowserRouter>
        <div className="row">
          <div className="col-1">
            <NavBar/>
          </div>
          <div className="col-11">
            <Routes>
              <Route path="/tarp/*" element={<Tarp/>}/>
              <Route path="/destructors" element={<DestructorScreen/>}/>
              <Route path="/add/:paramA/:paramB" element={<AddScreen/>}/>
              <Route path="/house" element={<HouseScreen/>}/>
              <Route path="/todos" element={<TodosScreen/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
