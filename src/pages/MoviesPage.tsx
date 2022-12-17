import { useState } from "react";

const MoviesPage = () => {
  const [hide, setHide] = useState(false);
  const displayList = () => {
    return (
      <div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    );
  };
  return (
    <div
      onBlur={() => {
        console.log("blurred");
        setHide(true);
      }}
      onFocus={() => setHide(false)}
      style={{ border: "1px solid black", width: "600px", height: "300px" }}
    >
      Movies
      <input type="text" name="text"></input>
      {!hide && displayList()}
    </div>
  );
};

export default MoviesPage;
