//variable qui récupère tt l'adn
let allAdn = fetch("https://gist.githubusercontent.com/Que20/7f727f9ad9fa7e2761771fcffdcb5914/raw/6d2759d44eba3bc6a8e2184571da8fda9aa22aea/adn");

//constante qui contien notre chemin relatif vers notre fichier texte
const txtPath ="./adn.txt";

//je transforme mon fichier.txt en json
console.log(JSON.parse(txtPath));



fetch(txtPath)
.then(function(response){
  if(!response.ok){
    throw new Error(`Erreur HTTP : ${response.status}`);
  }
  return response.json();
})
.then(function(data){
  allAdn=data.adn;
  //console.log(allAdn)
  return (allAdn);
})

.catch(function(error){
  console.error("Erreur lors du chargement du fichier JSON : ", error);
})
