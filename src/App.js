import HouseScreen from "./screens/house-screen";
import AddScreen from "./screens/add-screen";
import TodosScreen from "./screens/todos-screen";
import DestructorScreen from "./screens/destructor-screen";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import NavBar from "./components/nav-bar";
import Tarp from "./tarp";
import store from "./redux/store";
import { Provider } from "react-redux";
import TuitList from "./tuiter/tuit-list";
import Home from "./screens/home";
import LoginScreen from "./screens/login-screen";
import ProfileScreen from "./screens/profile-screen";
import AdminScreen from "./screens/admin-screen";
import RegisterScreen from "./screens/register-screen";
function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/admin" element={<AdminScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/" element={<Home />} />
            <Route path="/tuits" element={<TuitList />} />
            <Route path="/tarp/*" element={<Tarp />} />
            <Route path="/destructors" element={<DestructorScreen />} />
            <Route path="/add/:paramA/:paramB" element={<AddScreen />} />
            <Route path="/house" element={<HouseScreen />} />
            <Route path="/todos" element={<TodosScreen />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
