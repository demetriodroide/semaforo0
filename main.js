/*
document.getElementById("idboton").addEventListener("click", escuchoclickboton); 
//let input = document.getElementById("idcaja");

function escuchoclickboton() { 
    let input = document.getElementById("idcaja");

        // Si el campo está vacío...
        if ( input.value === "" ){
            document.querySelector("#idcaja").className = "rojo";
        }
            else {
                document.querySelector("#idcaja").className = "verde";
            }
}
*/

/*
document.getElementById("idboton").addEventListener("click", escuchoclickboton); 
//let input = document.getElementById("idcaja");

function escuchoclickboton() { 
    let input = document.getElementById("idcaja");

        if ( input.value.length < 8 ){
            document.querySelector("#idcaja").className = "rojo";
        }
            else {
                document.querySelector("#idcaja").className = "verde";
            }
}

*/

document.getElementById("idboton").addEventListener("click", escuchoclickboton); 
//let input = document.getElementById("idcaja");

function escuchoclickboton() { 
    let input = document.getElementById("idcaja");

    if ( input.value.length > 11 || input.value.length < 8 || input.value === "" ) {
        document.querySelector("#idcaja").className = "rojo";
    }
    else {
        document.querySelector("#idcaja").className = "verde";
    }
}

