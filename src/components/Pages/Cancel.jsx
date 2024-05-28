import React from "react";
function Cancel() {
    return (
      <div style={{textAlign:'center', marginTop:'10vh'}}>
        <h1 className="mt-3">Compra cancelada</h1>
        <a href="/" className="btn btn-danger mt-2">
          Volver a la pagina principal
        </a>
      </div>
    );
  }
  
  export default Cancel;