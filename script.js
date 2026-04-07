let count = 0;
let progress = document.querySelector("#progressBar");
let btn = document.querySelector("#startBtn");
let percentText = document.querySelector("#percentText");

btn.addEventListener("click", function() {
    let interval = setInterval(function() {

        if (count < 101) {
            progress.style.width = `${count}%`;
            percentText.textContent = `${count}%`;
            count++;

        } else {
            clearInterval(interval);
        }

    })

}, 1000);