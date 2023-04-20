const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowRight = document.querySelector(".arrow_right");						//Selection flèche droite

arrowRight.addEventListener("click", function() {
	indexSlide++;																//+1 à la position du slide
	if (indexSlide === slides.length) {
		indexSlide = 0;															//si le slide arrive au bout de la taille du slideshow, alors retourner à 0 (boucle infini)
	}
	bannerImage.src = slides[indexSlide].image;
	title.innerHTML = slides[indexSlide].tagLine;
	activeDot();
});

let arrowLeft =  document.querySelector(".arrow_left");							//Selection flèche gauche

arrowLeft.addEventListener("click", function(){									//Evenlistener sur le click
	indexSlide--;																//-1 à la position du slide 
	if (indexSlide === -1) {
		indexSlide = slides.length -1;											//Si le slide doit aller à -1, revenir à la fin (boucle infini)
	}
	bannerImage.src = slides[indexSlide].image;								
	title.innerHTML = slides[indexSlide].tagLine;								//Selection de l'image et le texte
	activeDot();																//Fonction pour changer le dot actif ou non
});

let bannerImage = document.querySelector(".banner-img");						//Selection div image
let title = document.querySelector("#banner p");								//Selection du texte

let bulletPoint = document.querySelector(".dots");								//Selection div dots
let indexSlide = 0;																//Position du slide à 0

for (let i = 0; i < slides.length; i++) {										//boucle pour le nombre de div "dot" dans la div "dots"
	let dot = document.createElement("div");									//Création et placement de la div dot dans le html
	dot.classList = "dot";
	bulletPoint.appendChild(dot);												//les dot sont des enfants de bulletPoint ("dots")
};

let dots = document.querySelectorAll(".dot");									//Sélection de toutes les div dot
dots[0].classList.add("dot_selected");											//Ajout de la div dot_selected

function activeDot() {
	for (let i = 0; i < dots.length; i++) {
		if (i === indexSlide) {
			dots[i].classList.add("dot_selected");								//Si i correspond au slide actif alors ajout de dot_selected
		}
		else {
			dots[i].classList.remove("dot_selected");							//Sinon suppression de la classe dot_selected
		}
	}
}




