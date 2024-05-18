generate.onclick= getQoute
// generate.onclick= console.log("hi")

function getQoute(){
    var qoutes= [
        "Be yourself; everyone else is already taken. ",
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "So many books, so little time. ",
        "Two things are infinite: the universe and human stupidity and I'm not sure about the universe.",
        "A room without books is like a body without a soul.",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",

    ];
    
    var auther= ["Oscar Wilde", " Marilyn Monroe", "Frank Zappa", "Albert Einstein", " Marcus Tullius Cicero",
    "Bernard M. Baruch"
    ];
    
        var randomNumber= Math.floor(Math.random() *qoutes.length);
        // console.log(qoutes[randomNumber])
        document.getElementById("qoute").innerHTML=qoutes[randomNumber];
        document.getElementById("auther").innerHTML=auther[randomNumber];
        // console.log(auther[randomNumber])
}






