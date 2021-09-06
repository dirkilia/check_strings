import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getStrings } from "../reducers/textStringsReducer";
import { Alert } from "@material-ui/lab";
import s from "./SearchInput.module.css";

const SearchInput = () => {
  // raw user input
  const [strings_to_search, setStrings] = useState("");

  // after checking, add <span> with or without styling to the span tag over input
  const [strings_to_search_checked, setStringsChecked] = useState("");

  const [isEmptyInput, setIsEmptyInput] = useState(false);
  const dispatch = useDispatch();

  // validation function for handling user input
  const validation = (e) => {
    if (!/[a-zA-Z&?./"':_$%^*\-()[{}а-яА-Я№#@!~\]`\\]/g.test(e)) {
      setStringsChecked(e);
      setStrings(e);
    }
  };

  const getData = (strings) => {
    if (!strings) {
      setIsEmptyInput(true);
    } else {
      setIsEmptyInput(false);

      // get identificators and check if they are less than 20, then highlight wrong numbers
      let checked_strings = strings.map((element) => {
        if (+element > 20) {
          return <span style={{ color: "red" }}>{element}, </span>;
        } else {
          return <span>{element}, </span>;
        }
      });
      setStringsChecked(checked_strings);

      dispatch(getStrings(strings));
    }
  };

  return (
    <>
      {isEmptyInput ? (
        <Alert variant="filled" severity="error">
          Строка пустая
        </Alert>
      ) : (
        ""
      )}
      <div className={s.strings_input}>
        <p>Идентификаторы строк:</p>
        <input
          type="text"
          value={strings_to_search}
          onChange={(e) => validation(e.target.value)}
          className={s.input_numbers}
        />
        <span className={s.checked_string}>{strings_to_search_checked}</span>
        <input
          type="submit"
          onClick={() => getData(strings_to_search.match(/[0-9]+/g))}
          value="Подсчитать"
        />
      </div>
    </>
  );
};

export default SearchInput;
