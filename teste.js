
function verificar() {

    console.log("true")
    var n1 = document.getElementById("n1").innerHTML;
    var n2 = document.getElementById("n2").value;


    Math.random(n1);
    if (n1 === n2) {
      
        var resultado=document.createElement("h2");
        resultado.innerText="ACERTOU!";
        document.body.appendChild(resultado);
    } else {
        
        var resultado=document.createElement("h2");
        resultado.innerText="ERROU!"+" R:"+n1;
        resultado.className="errou";
        document.body.appendChild(resultado);
    }
    resetar();
}





function resetar() {

    this.document.getElementById("n2").focus();


    document.getElementById("n2").focus();
    document.getElementById("n2").value = "";
    var r = Math.floor(Math.random() * 100);
    document.getElementById("n1").innerHTML = r;



}