import "./App.css";
import AddJsonPage from "./components/AddJsonPage";
import HeaderHome from "./components/HeaderHome";
import MyContainer from "./components/MyContainer";
import Category from "./components/Category";
import HeaderMain from "./components/HeaderMain";
import AddWidgetSidebar from "./components/AddWidgetSidebar";
import { Provider } from "react-redux";
import { store } from "./redux_config/store";
import { Route, Routes } from "react-router-dom";
import ListOfWidgets from "./components/ListOfWidgets";
import AddWidget from "./components/AddWidget";

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
                <HeaderMain />
                <MyContainer />
              </>
            }
          >
            <Route path="1" element={<div>1</div>}></Route>
            {/* <Route path="2" element={<div>2</div>}></Route>
            <Route path="3" element={<div>3</div>}></Route>
            <Route path="4" element={<div>4</div>}></Route> */}
            {/* <Route path=":categoryName" element={<ListOfWidgets />}></Route> */}
            <Route path=":categoryName" element={<ListOfWidgets />}></Route>
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
