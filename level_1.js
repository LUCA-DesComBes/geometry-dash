const playerSquare = document.getElementById("player");
let x = 0;

document.addEventListener("keydown", (event) => {
	if (event.key === "z") {
		// Monte de 100px
		x -= 100;
		playerSquare.style.top = x + "px";
        playerSquare.style.transform = "rotate(90deg)"
		// Redescend après 1 seconde
		setTimeout(() => {
			x += 100;
			playerSquare.style.top = x + "px";
		}, 500);
	}
});
