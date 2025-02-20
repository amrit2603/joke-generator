let jokeText = document.getElementById("joke-text");
let generateJoke = document.getElementById("generate-btn");
const jokeUrl = "https://official-joke-api.appspot.com/jokes/random";
let btnDisable = false;
let randomMsg;
let btnMsg;

const btnMsgArray = [
  "want more ! click again",
  "What can be more funny then your life!!hehe",
  "If this joke was a JSS placement offer, I'd take it instantly!",
  "This joke hit harder than a surprise internals announcement at JSS!",
  "That joke was shorter than a JSS canteen’s Maggi cooking time!",
  "That joke was so last-minute, even my assignment submission feels early!",
  "That was funnier than watching first-years struggle with their first Java program!",
  "That joke was so unexpected, even my attendance percentage couldn't predict it!",
  "That was funnier than the WiFi working smoothly in college!",
  "You’re on a roll! How about one more?",
  //"Even a Northie’s struggle with Kannada sounds better than this joke!",
  "Even the JSS canteen food has more spice than that joke!",
  "That was funnier than a Northie asking for butter naan in a South Indian mess!",
  "This joke was as unexpected as a Bangalore rainstorm during recess!",
  "This joke deserves more appreciation than a 9-pointer’s CGPA!",
  "This joke had more impact than a final-year student realizing CGPA actually matters!",
  "That joke was so bad, even the hostel food had better delivery!",
  "That joke was shorter than a JSS canteen’s Maggi cooking time!",
  "Even JSS placement talks aren't as hyped as this joke!",
  "Even Bangalore traffic moves faster than my brain processing this joke!",
  "Nikal na kitna joke chahiye",
];

function disableBtn() {
  if (!btnDisable) {
    generateJoke.disabled = true;
    btnDisable = true;
    generateJoke.style.backgroundColor = "#faf2f2";
    generateJoke.style.transform = "translateY(-5px)";
    generateJoke.style.transition = "1s ease";
    generateJoke.style.color = "#faf2f2";
    setTimeout(function () {
      generateJoke.disabled = false;
      btnDisable = false;
      generateJoke.style.backgroundColor = "";
      generateJoke.style.transform = "translateY(0px)";
      generateJoke.style.transition = "1s ease";
      generateJoke.style.color = "";
      randomMsg = Math.floor(Math.random() * btnMsgArray.length);
      btnMsg = btnMsgArray[randomMsg];
      generateJoke.textContent = btnMsg;
    }, 3000);
  }
}

generateJoke.addEventListener("click", function () {
  fetch(jokeUrl)
    .then(function (feedback) {
      return feedback.json();
    })
    .then(function (data) {
      jokeText.textContent = data.setup;
      setTimeout(function () {
        jokeText.innerHTML = `${data.setup} <br>${data.punchline}😂`;
      }, 2500);
    })
    .catch(function (error) {
      jokeText.textContent = "Failure to fetch joke, try again later.";
      console.error("Error fetching joke:", error);
    });
  disableBtn();
});
