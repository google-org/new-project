import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const handleItemClick = (event) => {
    console.log(event.target.innerText);
  };

  const shouldDisplayButton = searchValue.length > 0;

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />

      {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}

      <ul>
        {props.products
          .filter((product) => {
            return product.title
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          })
          .map((product) => {
            return (
              <li key={product.title} onClick={handleItemClick}>
                {product.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SearchBar;
