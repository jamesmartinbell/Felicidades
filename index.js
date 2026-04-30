
const bg = document.querySelectorAll(".bg")[0];

    // How many question marks to create
    const COUNT = 30;

    for (let i = 0; i < COUNT; i++) {
      const q = document.createElement("div");
      q.classList.add("question");
      q.textContent = "?";

      // Random horizontal position
      q.style.left = Math.random() * 100 + "vw";

      // Random size
      q.style.fontSize = (20 + Math.random() * 60) + "px";

      // Random animation duration
      q.style.animationDuration = (5 + Math.random() * 10) + "s";

      // Random delay so they don’t all start together
      q.style.animationDelay = Math.random() * 5 + "s";

      // Random purple shade
      const purpleShades = [
        "#d8b4fe",
        "#c084fc",
        "#a855f7",
        "#9333ea",
        "#7e22ce"
      ];
      q.style.color = purpleShades[Math.floor(Math.random() * purpleShades.length)];

      bg.appendChild(q);
    } 





var countDownDate = new Date ("May 3, 2026 15:30:00").getTime();
//"May 3,2026 12:00:00"
var x = setInterval(function(){
    var now= new Date().getTime();

    var distance=countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
    var seconds = Math.floor((distance % (1000 * 60 )) / 1000 );

    document.getElementById ("surprise").innerHTML = days +" Dias " + hours +" Horas " + minutes +" Minutos " + seconds +" Segundos ";

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".styled").classList.remove("hidden");
        document.querySelector("#surprise").classList.add("hidden");
        document.querySelector(".styled").onclick = function () {
        location.href = "./indexF.html";
    };
    }
}, 1000);

 

 