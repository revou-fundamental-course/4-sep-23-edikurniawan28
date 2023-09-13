
function btnHitung() { 
    let sisi = parseInt(document.getElementById("inputSisi").value);

    Luas = sisi * sisi ;
    Keliling = 4 * sisi;

    document.getElementById("luas").value = Luas;
    document.getElementById("keliling").value = Keliling;
}

function btnReset() {
    
    document.getElementById("luas").value = "";
    document.getElementById("keliling").value = "";
    document.getElementById("inputSisi").value = "";

}
