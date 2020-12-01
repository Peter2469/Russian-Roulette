const links = ["https://www.youtube.com/watch?v=fC7oUOUEEi4/", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"]

function RussianRoulette() {
    var bullet = Math.floor((Math.random() * 6) + 1);
    console.log(bullet);

    if (bullet == 6){
        window.location = links[Math.floor(Math.random() * links.length)];
    }else{
        var button = document.getElementById("button");
        button.innerHTML = "Blank Shot";
        setTimeout ("start()", 5000);
    }
}

function start(){
    var button = document.getElementById("button")
    button.innerHTML = "Press Me :)";
}