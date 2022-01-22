const mealAPI = "www.themealdb.com/api/json/v1/1/"

async function getRecipes(ingredient = "chicken_breast") {
    const response = await fetch(mealAPI + `filter.php?i=${ingredient}`)
    console.log(response.data)
    return response.data
}

const mealdbService = { getRecipes }

export default mealdbService