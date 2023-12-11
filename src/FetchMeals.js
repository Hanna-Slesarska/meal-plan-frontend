import axios from 'axios';

const myURL = "https://meal-plan-w3po.onrender.com"

const getAllMeals = (setMeal) => {
    axios.get(`${myURL}`)
    .then(({data}) => {console.log(data)
        setMeal(data)
    })
}
const addMeal = (title, setTitle, setMeal ) => {
    axios.post(`${myURL}/saveMeals`, { title })
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllMeals(setMeal);
    })
}
const editMeal = (mealId, title, setMeal, setTitle,  setEditing) => {
    axios.post(`${myURL}/editMeal`, {_id: mealId, title})
    .then((data) => {
        console.log(data);
        setTitle("");
        setEditing(false);
        getAllMeals(setMeal);
    })
}
const deleteMeal = (_id, setMeal) => {
    axios.post(`${myURL}/deleteMeal`, {_id})
    .then((data) => {
        console.log(data);
        getAllMeals(setMeal);
    })
}
export { getAllMeals, addMeal, editMeal, deleteMeal };