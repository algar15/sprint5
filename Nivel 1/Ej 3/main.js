const jokey = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click',generateJokes);

async function generateJokes(){

    const jokes= await fetch('https://icanhazdadjoke.com/',{
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