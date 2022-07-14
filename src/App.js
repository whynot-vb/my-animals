import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Register from "./pages/Register";
import HeaderAppBar from "./components/HeaderAppBar";
import Animals from "./components/Animals";
import { getAllAnimals } from "./actionTypesAndCreators";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // if (user && token) {
    dispatch(getAllAnimals());
    // }
  }, []);
  return (
    <div>
      <>
        <HeaderAppBar />
        <Register />
        <Animals />
      </>
    </div>
  );
};

export default App;
