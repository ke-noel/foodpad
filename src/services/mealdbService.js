const mealAPI = "www.themealdb.com/api/json/v1/1/"

async function getRecipes(ingredient = "chicken_breast") {
    fetch("https://themealdb.p.rapidapi.com/filter.php?i=chicken", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "themealdb.p.rapidapi.com",
            "x-rapidapi-key": "6e2883b24fmsh175979bd4ec8b09p15ad4djsnc244c3882c3c"
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
}

const mealdbService = { getRecipes }

export default mealdbService