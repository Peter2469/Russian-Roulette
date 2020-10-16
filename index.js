const links = ["https://www.pornhub.com", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.hentaihaven.org"]

function RussianRoulette() {
    var bullet = Math.floor((Math.random() * 6) + 1);
    console.log(bullet);

    if (bullet == 6){
        window.location = links[Math.floor(Math.random() * links.length)];
    }else{
        var button = document.getElementById("button");
        button.innerHTML = "You Win... for now";
        setTimeout ("start()", 5000);
    }
}

function start(){
    var button = document.getElementById("button")
    button.innerHTML = "Press Me :)";
}