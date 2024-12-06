/* je récupère les données via un fetch et je les traduit en fichier json */
let adn=[];
async function dataADN() {
  const  reponse = await fetch("https://gist.githubusercontent.com/Que20/7f727f9ad9fa7e2761771fcffdcb5914/raw/6d2759d44eba3bc6a8e2184571da8fda9aa22aea/adn");
  const moleculesADN = await reponse.json();
  //console.log(moleculesADN);
  for (i =0; i<moleculesADN.length; i++){
    adn.push(moleculesADN[i]);
    i++;
    //console.log(adn);
   
  }

}
 dataADN();
//console.log(adn);

let adnDecompose = [...adn];
console.log(adnDecompose); 

let codon = [];

function getCodon(adnEnCodon){
 
}
getCodon();
