import React from "react";

import './Header.css'

const Header = () => {
  return (
    <div className="style-general">
      <div className="search-header">
        <p>Quem procura?</p>
        <input type="text" className="input-header" />
      </div>
    </div>
  );
};

export default Header;
