import React from "react";

import './index.css'

function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className='buttomsPages'>
      {gotoPrevPage && <buttom className="buttomPrev" onClick={gotoPrevPage}>Anterior</buttom>}
      {gotoNextPage && <buttom className="buttomNext" onClick={gotoNextPage}>Próxima</buttom>}
    </div>
  )
}

export default Pagination;
