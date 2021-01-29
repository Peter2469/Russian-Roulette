const links = ["https://www.youtube.com/watch?v=fC7oUOUEEi4/", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=v7fTeT3g1AA"]

function RussianRoulette() {
    var bullet = Math.floor((Math.random() * 6) + 1);

    if (bullet == 6){
        window.location = links[Math.floor(Math.random() * links.length)];
    }else{
        var button = document.getElementById("button");
        button.innerHTML = "Blank Shot";
    }
}