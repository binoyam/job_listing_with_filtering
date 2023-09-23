import React from "react";
import HeaderImg from "./images/bg-header-desktop.svg";
import closeBtn from "./images/icon-remove.svg";

function Header({ keyWords, deleteKeyWords, clearAll }) {
  return (
    <header>
      <img src={HeaderImg} alt="header-background" />
      {keyWords.length > 0 && (
        <div className="filter-bar">
          <ul>
            {keyWords.map((key, id) => {
              return (
                <li key={id}>
                  <span className="key">{key}</span>
                  <button
                    onClick={() => deleteKeyWords(key)}
                    className="delete-btn"
                  >
                    <img src={closeBtn} alt="close button" />
                  </button>
                </li>
              );
            })}
            <a className="clear-btn" href="/#" onClick={() => clearAll()}>
              Clear
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
