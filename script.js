function getInfo() {
  let apiKey = "?apiKey=d9cabf1c3bb04eecafc1bb0689f600d9"
	let ingredient = document.getElementById('ingredient').value;
	let cuisine = document.getElementById('cuisine').value;
	let cookTime = document.getElementById('cookTime').value;
	let gluten = document.getElementById('gluten').checked;
	let dairy = document.getElementById('dairy').checked;
	let peanut = document.getElementById('peanut').checked;
	let seafood = document.getElementById('seafood').checked;
	let egg = document.getElementById('egg').checked;
	let vegetarian = document.getElementById('vegetarian').checked;
	let vegan = document.getElementById('vegan').checked;
	let ketogenic = document.getElementById('ketogenic').checked;
	let calories = document.getElementById('calories').checked;
	let popularity = document.getElementById('popularity').checked;
	let price = document.getElementById('price').checked;


	let url = "https://api.spoonacular.com/recipes/complexSearch" + apiKey;
	if (ingredient !== "") {
    url += "&query=" + ingredient;
  } 
	if (cuisine !== "") {
    url += "&cuisine=" + cuisine;
  } 
	if (cookTime > 0 && cookTime < 100) {
    url += "&maxReadyTime=" + cookTime;
  } 
	if (gluten) {
    url += "&intolerances=gluten";
  } 
	if (dairy) {
    url += "&intolerances=dairy";
  } 
	if (peanut) {
    url += "&intolerances=peanut";
  } 
	if (seafood) {
    url += "&intolerances=seafood";
  } 
	if (egg) {
    url += "&intolerances=egg";
  } 
	if (vegetarian) {
    url += "&diet=vegetarian";
  } 
	if (ketogenic) {
    url += "&diet=ketogenic";
  } 
	if (vegan) {
    url += "&diet=vegan";
  } 
	if (calories) {
    url += "&sort=calories";
  } 
	if (popularity) {
    url += "&sort=popularity";
  } 
	if (price) {
    url += "&sort=price";
  } 

fetch(url)
.then(response => response.json())
.then((json) => {
	console.log(json);
	let results = "";
	for (let i = 0; i < 9; i++) {
		results = "";
		results += "<h2>"+ json.results[i].title + "</h2>";
		results += '<img class="images" src=' + json.results[i].image + '>';
		
		let url2 = "https://spoonacular.com/";
		let titlewords = json.results[i].title.split(' ');
		for (let j = 0; j < titlewords.length; j++){
				url2 += titlewords[j];
			if (j != titlewords.length - 1){
				url2 += "-";
			}
			else{
				url2 += "-" + json.results[i].id;
			}
		}
		results += "<a href=" + url2 + ">Go to Recipe</a>";
		let id = "meal" + i;
		document.getElementById(id).innerHTML = results;
	}

});
};