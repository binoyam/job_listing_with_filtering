import React from "react";
import closeBtn from "./images/icon-remove.svg";

function Filter({ keyWords, deleteKeyWords, clearAll }) {
  return (
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
                <img src={closeBtn} alt="remove button" />
              </button>
            </li>
          );
        })}
      </ul>
        <a className="clear-btn" href="/#" onClick={() => clearAll()}>
          Clear
        </a>
    </div>
  );
}

export default Filter;
