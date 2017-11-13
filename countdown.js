function countdown() {
    var departure = new Date("Jan 1, 2020 00:00:00").getTime(); // Reiser ved midnatt, 1. januar
    
    var x = setInterval(function() {
        var toDay = new Date().getTime(); //Todays date
        var timeLeft = departure - toDay; // Time left

        var years = Math.floor (timeLeft / (1000 * 60 * 60 * 24 * 365));
        var days = Math.floor ((timeLeft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        var hours = Math.floor ((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor ((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor ((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = "Departure in " + years + 
        "y " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (timeLeft < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}