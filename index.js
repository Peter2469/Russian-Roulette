const links = ["https://www.pornhub.com", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "http://goatse.ru/"]

function RussianRoulette() {
    var bullet = Math.floor((Math.random() * 6) + 1);
    console.log(bullet);

    if (bullet == 6){
        window.location = links[Math.floor(Math.random() * links.length)];
    }else{
        alert("You win... for now")
    }
}