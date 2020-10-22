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
/*
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
*/
/*
document.getElementById("idboton").addEventListener("click", escuchoclickboton); 

function escuchoclickboton() { 
    let input = document.getElementById("idcaja");

        if ( input.value === "" ){
            document.querySelector("#idcaja").className = "rojo";
                alert("ERROR, el campo esta vacio")
        }
            else {
                document.querySelector("#idcaja").className = "verde";
            }
}
*/

// input.value.length > 11 || input.value.length < 8 ||



document.getElementById("idboton").addEventListener("click", escuchoclickboton); 
//let input = document.getElementById("idcaja");

function escuchoclickboton() { 
    let input = document.getElementById("idcaja");

    if (  input.value === "" ) {
        document.querySelector("#idcaja").className = "rojo";
        alert("ERROR , el campo esta vacio")
    }
    else if ( input.value.length < 8 ) {
        document.querySelector("#idcaja").className = "rojo";
        alert("ERROR , el campo tiene menos de 8 letras")
    }
    else if (  input.value.length < 12 ) {
        document.querySelector("#idcaja").className = "verde";
        // document.querySelector("#idcaja").className = "rojo";
        //alert("ERROR , el campo tiene mas de 12 letras")
    }
    else {
        document.querySelector("#idcaja").className = "rojo";
        alert("ERROR , el campo tiene mas de 12 letras")
    }
}