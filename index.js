// ===============================
// BACKGROUND CONTAINER
// ===============================
const bg = document.querySelector(".bg");

// ===============================
// CREATE QUESTION MARKS (START)
// ===============================
function createQuestions() {
  for (let i = 0; i < 30; i++) {
    const q = document.createElement("div");
    q.classList.add("question");
    q.textContent = "?";

    q.style.left = Math.random() * 100 + "vw";
    q.style.fontSize = (20 + Math.random() * 60) + "px";
    q.style.animationDuration = (5 + Math.random() * 10) + "s";
    q.style.animationDelay = Math.random() * 5 + "s";

    const purpleShades = [
      "#d8b4fe",
      "#c084fc",
      "#a855f7",
      "#9333ea",
      "#7e22ce"
    ];

    q.style.color =
      purpleShades[Math.floor(Math.random() * purpleShades.length)];

    bg.appendChild(q);
  }
}

// ===============================
// CREATE HEARTS
// ===============================
function createHearts() {
  for (let i = 0; i < 30; i++) {
    const q = document.createElement("div");
    q.classList.add("question");
    q.textContent = "❤";

    q.style.left = Math.random() * 100 + "vw";
    q.style.fontSize = (20 + Math.random() * 60) + "px";
    q.style.animationDuration = (5 + Math.random() * 10) + "s";
    q.style.animationDelay = Math.random() * 5 + "s";

    bg.appendChild(q);
  }
}

// ===============================
// CREATE HAND IMAGES
// ===============================
function createHands() {
  for (let i = 0; i < 6; i++) {
    const img = document.createElement("img");
    img.src = "./images/hand.png";
    img.classList.add("hand");

    img.style.position = "absolute";
    img.style.left = Math.random() * 100 + "vw";
    img.style.top = Math.random() * 100 + "vh";
    img.style.width = "80px";

    bg.appendChild(img);
  }
}

// ===============================
// START QUESTION MARKS
// ===============================
createQuestions();

// ===============================
// COUNTDOWN TIMER
// ===============================
var countDownDate = new Date("May 3, 2026 15:30:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  var seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  document.getElementById("surprise").innerHTML =
    days + " Dias " +
    hours + " Horas " +
    minutes + " Minutos " +
    seconds + " Segundos";

  // ===============================
  // WHEN COUNTDOWN ENDS
  // ===============================
  if (distance < 0) {
    clearInterval(x);

    // remove timer
    document.getElementById("surprise").remove();

    // show button
    const button = document.querySelector(".styled");
    button.classList.remove("hidden");

    // click button
    button.onclick = function () {

      // show hidden text + images
      document.querySelectorAll(".hidden").forEach(el => {
        if (!el.classList.contains("styled")) {
          el.classList.remove("hidden");
        }
      });

      //make all the text have there CSS tags
      document.querySelector(".m1").classList.add("monica");
      document.querySelector(".m2").classList.add("rocio");
      document.querySelector(".d").classList.add("diaMadre");
      

      // hide button
      button.classList.add("hidden");

      // remove question marks
      document.querySelectorAll(".question").forEach(el => {
        el.remove();
      });

      // create hearts
      createHearts();

      // create hands
      createHands();

      // play music
      const music = new Audio("./sounds/piano.mp3");
      music.play();
    };
  }
}, 1000);