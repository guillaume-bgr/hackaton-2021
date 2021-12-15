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
			addContent(item);
		}
	});

	if (item.classList.contains("active")) {
		addContent(item);
	}
});

function addContent(item) {
	const title = document.createElement("h2");
	const summary = document.createElement("p");
	const button = document.createElement("a");
	title.textContent = "Titre";
	summary.textContent = "Résumé";
	button.textContent = "Voir plus";
	button.href = "https://www.google.com";
	button.target = "_blank";
	item.append(title);
	item.append(summary);
	item.append(button);
}
