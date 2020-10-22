/*
document.getElementById("idboton").addEventListener("click", escuchoclickboton); 
//let input = document.getElementById("idcaja");

function escuchoclickboton() { 
    let input = document.getElementById("idcaja");

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

        if ( input.value.length >= 12 || input.value.length <= 7 || input.value === "" ){
            document.querySelector("#idcaja").className = "rojo";
        }
            else {
                document.querySelector("#idcaja").className = "verde";
            }
}

