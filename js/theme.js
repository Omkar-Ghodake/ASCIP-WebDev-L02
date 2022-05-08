let themeIcon = document.querySelector(".theme-icon"),
	favicon = document.querySelector("#favicon");
null == localStorage.getItem("theme") && localStorage.setItem("theme", "light");
let localThemeData = localStorage.getItem("theme");
"light" == localThemeData
	? ((themeIcon.src = "images/moon.png"), favicon.setAttribute("href", "images/favicon-green.png"), document.body.classList.remove("dark-theme"))
	: "dark" == localThemeData && ((themeIcon.src = "images/sun.png"), favicon.setAttribute("href", "images/favicon-purple.png"), document.body.classList.add("dark-theme")),
	themeIcon.addEventListener("click", () => {
		document.body.classList.toggle("dark-theme"),
			document.body.classList.contains("dark-theme")
				? ((themeIcon.src = "images/sun.png"), favicon.setAttribute("href", "images/favicon-yellow.png"), localStorage.setItem("theme", "dark"))
				: ((themeIcon.src = "images/moon.png"), favicon.setAttribute("href", "images/favicon-green.png"), localStorage.setItem("theme", "light"));
	});
