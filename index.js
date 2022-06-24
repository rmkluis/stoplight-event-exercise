let stopButton = document.getElementById('stopButton');
let stopLight = document.getElementById('stopLight');
let slowButton = document.getElementById('slowButton');
let slowLight = document.getElementById('slowLight');
let goButton = document.getElementById('goButton');
let goLight = document.getElementById('goLight');
let buttons = document.getElementById('controls');


stopButton.addEventListener('click', () => {
  stopLight.classList.toggle("stop")
});

slowButton.addEventListener('click', () => {
  slowLight.classList.toggle("slow")
});

goButton.addEventListener('click', () => {
  goLight.classList.toggle("go")
});

[stopButton, slowButton, goButton].forEach((button) => {
    button.addEventListener('mouseenter', () => {
      console.log(`Entered ${button.innerText} button`)
    });
    button.addEventListener('mouseleave', () => {
      console.log(`Left ${button.innerText} button`)
    });
});

// buttons.addEventListener("click", (e) => {
//     let name = e.target.classList
//     if(name == "stop" || name == "slow" || name == "go") {
//       console.log(`${e.target.textContent} bulb on`);
//     } else if(name == "STOPBUTTON" || name == "SLOWBUTTON" || name == "GOBUTTON") {
//       console.log(`${e.target.textContent} bulb off`);    }
//     // console.log(`${e.target.textContent} bulb off`)

})



// Add **one** DOM event listener and **one** handler to log the state of each bulb.

// - When a user clicks a button that just turned on, log`"<textContent> bulb on"` to the console.
// - When a user clicks a button that just turned off, log`"<textContent> bulb off"` to the console.

// **TIP:** A click on only a button should cause a message to be logged to the console.
