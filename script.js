/*
In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). 
Questa funzione accetta un id di una ricetta e deve:

Recuperare la ricetta da https://dummyjson.com/recipes/{id}
Estrarre la proprietà userId dalla ricetta
Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
Restituire la data di nascita dello chef

Note del docente
Scrivi la funzione getChefBirthday(id), che deve:
Essere asincrona (async).
Utilizzare await per chiamare le API.
Restituire una Promise con la data di nascita dello chef.
Gestire gli errori con try/catch
*/

async function getChefBirthday(id) {
  const resRecipe = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await resRecipe.json();
  const resUser = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
  const user = await resUser.json();
  return user.birthDate;
}

(async () => {
  try {
    const birthday = await getChefBirthday(1);
    console.log(`Data di nascita dello chef`, birthday);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
