// Getting current date

let date = new Date();
today = date.getDate().toString();
document.querySelector(".date").innerHTML = today;
console.log(today);

// Adding calendar cases

for (let i = 1; i <= 24; i++) {
	document.querySelector("main").innerHTML =
		document.querySelector("main").innerHTML +
		`<div class="case" data-date="${i}">
            
        </div>`;
}

document
	.getElementsByClassName("case")
	[today - 1].scrollIntoView({ behavior: "smooth", block: "center" });

const cases = document.querySelectorAll(".case");
console.log(cases);

for (let i = 0; i < today - 1; i++) {
	cases[i].classList.add("active");
}

cases.forEach((item) => {
	item.addEventListener("click", () => {
		if (item.dataset.date <= today) {
			item.classList.add("active");
		}
	});

	if (item.classList.contains("active")) {
		const title = document.createElement("h2");
		title.textContent = "test";
		item.append(title);
	}
});
