function RussianRoulette() {
    var bullet = Math.floor((Math.random() * 6) + 1);
    console.log(bullet);

    if (bullet == 6){
        window.location = "https://www.pornhub.com";
    }else{
        alert("You win... for now")
    }
}