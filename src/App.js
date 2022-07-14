import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Register from "./pages/Register";
import HeaderAppBar from "./components/HeaderAppBar";
import Animals from "./components/Animals";
import AlertToDisplay from "./components/AlertToDisplay";
import { getAnimalsByPage } from "./actionTypesAndCreators";
import PaginationComponent from "./components/PaginationComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./pages/Error";

const App = () => {
  const page = useSelector((state) => state.animals.page);
  const showAlert = useSelector((state) => state.animals.showAlert);
  const animals = useSelector((state) => state.animals.animals);
  const token = useSelector((state) => state.animals.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnimalsByPage(page));
  }, [page, token, dispatch]);
  return (
    <Router>
      <div>
        <HeaderAppBar />
        <Switch>
          {showAlert && <AlertToDisplay />}
          <Route exact path="/">
            {animals.length > 0 && (
              <>
                <Animals />
                <PaginationComponent />
              </>
            )}
          </Route>
          <Route exact path="/auth">
            <Register />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
