import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

import {books}  from "./books";
import SpecificBook from "./Book";   

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}


ReactDOM.render(<Booklist />, document.getElementById("root"));
