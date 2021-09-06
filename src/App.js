import { useSelector } from "react-redux";
import "./App.css";
import SearchInput from "./Components/SearchInput";
import Table from "./Components/Table/Table";
import { Alert } from "@material-ui/lab";

const App = () => {
  const error_data = useSelector((state) => {
    return state.textStrings.error_data;
  });
  const error_status = useSelector((state) => {
    return state.textStrings.error_status;
  });

  return (
    <div className="App">
      {error_data !== "" ? (
        <Alert variant="filled" severity="error" className="alert">
          Ошибка: {error_data} Код ошибки: {error_status}
        </Alert>
      ) : (
        ""
      )}
      <SearchInput />
      <Table />
    </div>
  );
};

export default App;
