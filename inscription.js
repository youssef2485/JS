function validerDateMatch(){
    let day = Date.parse(document.getElementById("dateMatch").value);

    let min = Date.parse("january 01, 2024");
    let max = Date.parse("december 31, 2024");

    if ((day<min) || (day>max)){
        alert ("date du match invalide");
    }

    console.log("d:"+day);
    console.log("min:"+min);
}

function myFunction () {
    let nom=document.getElementById("nom").value;
 
    for (let x in nom) {
        if ((!((nom[x]>='a' && nom[x]<='z') || (nom[x]>='A' && nom[x]<='z'))))
       { console.log("x:",nom[x])
       document.getElementById("errnom").innerHTML="veuillez saisir un nom valide";
       break;
       }
       
      }
      
    
      validerDateMatch();

}
document.addEventListener("click", myFunction);
