import React from 'react'

const SpecificBook = ({ img, title, author }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log()}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        click here
      </button>
    </article>
  );
};

export default SpecificBook