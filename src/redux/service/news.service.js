export const getNewsbyAPI = async(query = 'all') => {
const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=37e4b30e610b473a8adca9bb14a8e9ec`)
const data = await response.json();

console.log(data.articles);

return data.articles;
}