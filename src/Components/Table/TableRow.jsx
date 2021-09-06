import React from "react";
import s from "./TableRow.module.css";

const TableRow = (props) => {
  return (
    <div className={s.row}>
      <div className={s.string}>
        <p>{props.string_text}</p>
      </div>
      <div className={s.numbers}>
        <p>{props.string_text.split(/\s+/).length}</p>
      </div>
      <div className={s.numbers}>
        <p>{props.vowels_number}</p>
      </div>
    </div>
  );
};

export default TableRow;
