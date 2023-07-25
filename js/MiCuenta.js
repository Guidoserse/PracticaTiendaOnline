const tablaDirecciones = document.getElementById("Dtable");
const tablaPagos = document.getElementById("Ptable");


tablaDirecciones.addEventListener("click", verificarClicDirec);
tablaDirecciones.addEventListener("click", verificarClicPagos);

function verificarClicDirec(e){
   // if(e.target.matches(".eliminarRow1") || e.target.matches(".eliminarRow2") || e.target.matches(".eliminarRow3") || e.target.matches(".eliminarRow4")){
        //console.log("ahora si elimina la fila");
        //console.log(e.target.parentNode.parentNode.rowIndex);
       if(e.target.matches(".btn")){
        const tIndex = e.target.parentNode.parentNode.rowIndex;
        tablaDirecciones.deleteRow(tIndex);
    }
};

function verificarClicPagos(e){
    if(e.target.matches(".eliminarRow3") || e.target.matches(".eliminarRow4")){
        //console.log("ahora si elimina la fila");
        //console.log(e.target.parentNode.parentNode.rowIndex);
        const tIndex = e.target.parentNode.parentNode.remove();
        tablaPagos.deleteRow(tIndex);
    }
};

