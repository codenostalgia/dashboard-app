import "./App.css";
import AddJsonPage from "./components/AddJsonPage";
import HeaderHome from "./components/HeaderHome";
import MyContainer from "./components/MyContainer";
import HeaderDashboard from "./components/HeaderDashboard";
import { Provider } from "react-redux";
import { store } from "./redux_config/store";
import { Route, Routes } from "react-router-dom";
import ListOfWidgets from "./components/ListOfWidgets";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeaderHome />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<AddJsonPage />}></Route>
        </Routes>

        <Routes>
          <Route
            path="dashboard"
            element={
              <>
                <HeaderDashboard />
                <MyContainer />
              </>
            }
          >
            <Route path=":categoryName" element={<ListOfWidgets />}></Route>
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
