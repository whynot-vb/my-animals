import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Register from "./pages/Register";
import HeaderAppBar from "./components/HeaderAppBar";
import Animals from "./components/Animals";
import AlertToDisplay from "./components/AlertToDisplay";
import { getAnimalsByPage } from "./actionTypesAndCreators";
import PaginationComponent from "./components/PaginationComponent";

const App = () => {
  const page = useSelector((state) => state.animals.page);
  const showAlert = useSelector((state) => state.animals.showAlert);
  const dispatch = useDispatch();
  useEffect(() => {
    // if (user && token) {
    dispatch(getAnimalsByPage(page));
    // }
  }, [dispatch, page]);
  return (
    <div>
      <>
        <HeaderAppBar />
        {showAlert && <AlertToDisplay />}

        <>
          <Register />
          <Animals />
          <PaginationComponent />
        </>
      </>
    </div>
  );
};

export default App;
