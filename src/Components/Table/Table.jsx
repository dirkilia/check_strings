import React from "react";
import { useSelector } from "react-redux";
import s from "./Table.module.css";
import TableRow from "./TableRow";

const Table = () => {
  const final_strings = useSelector((state) => {
    return state.textStrings.strings_array;
  });

  // every string in array gets checked for number of vowels using RegExp
  let rows_with_text = final_strings.map((element) => {
    let vowels_number = element.match(/[аоэеиыуёюяaeiоuyáéíóúýæöåäøo]/g).length;
    return <TableRow string_text={element} vowels_number={vowels_number} />;
  });

  return (
    <div className={s.strings_analyze}>
      <div className={s.table_header}>
        <p className={s.text}>Текст</p>
        <p className={s.numbers_legend}>Количество слов</p>
        <p className={s.numbers_legend}>Количество гласных</p>
      </div>
      {rows_with_text}
    </div>
  );
};

export default Table;
