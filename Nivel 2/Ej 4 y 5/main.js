const jokey = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click',generateJokes);
get_joke.addEventListener('click',generateJokesChuck);

//Fetch a random joke API call
async function generateJokes(){

    const jokes= await fetch('https://icanhazdadjoke.com/'
    ,{
    headers: {
        'Accept':'application/json'
    }
});
    const joke = await jokes.json();
    let date = new Date()
    reportJokes.push({
        joke: joke.joke,
      
        score: "",
      
        date: date.toISOString(),
    })
    jokey.innerHTML = joke.joke;
}
function addScore(value){
    debugger
    reportJokes[reportJokes.length-1].score = value
    console.log(reportJokes);
}
reportJokes = [];

//Second jokes API calling
async function generateJokesChuck() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();

    jokey.innerHTML = data.value;
}

// Wheather API calling
async function start() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&units=metric&lang=ca&APPID=e50d99da7c6cb79a777875ea8f0a5b6e");
    const data = await response.json();
    console.log(data)

    document.getElementById("wheather").innerHTML =
        ` </div class="text-left">
                    <h5 >${data.name}</h5>
                    <p class=""> ${data.weather[0].description} </p>
                    <p class=""> ${data.main.temp} ºC </p>
                 </div>`;
}
start().catch(error => {
    console.error(error);
})
