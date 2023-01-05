import React from "react";
import "./index.css";

function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="buttonsPages">
      {gotoPrevPage && (
        <button className="buttonPrev" onClick={gotoPrevPage}>
          Anterior
        </button>
      )}
      {gotoNextPage && (
        <button className="buttonNext" onClick={gotoNextPage}>
          Próxima
        </button>
      )}
    </div>
  );
}

export default Pagination;
