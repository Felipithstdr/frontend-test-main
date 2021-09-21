//const db = require('./db.json')
//const express = require('express')
//const app = express()
//const port = 3000

// javascript for index.html
const container = document.querySelector('.brewery');
const searchForm = document.querySelector('.search');

const renderBrewery = async (term) => {
	console.log(term);
	let url = 'http://localhost:3000/breweryAddress?';
	if (term) {
	url += `&q=${term}`
}

const res = await fetch(url);
const breweryAddress = await res.json();
console.log(breweryAddress);

let template = '';
breweryAddress.forEach(brewery => {
	template += `
		<div class="post">
			<h2>${brewery.name}</h2>
			<p><small>Country: ${brewery.country}</small></p>
			<p>State: ${brewery.state}</p>
			<p>${brewery.description}</p>
		</div>
	`
});

	container.innerHTML = template;
}

// search
searchForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	renderBrewery(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', () => renderBrewery());

/*function index(req, res) {
	res.send(JSON.stringify(db))
}
  
function random(req, res) {
	let n = req.params.n
	let list = []
	for(let i=0; i<n; i++) {
		let r = Math.floor(Math.random()*db.length)
		list.push(db[i])
		
	}
	res.send(list)
}


app.get('/', index)
app.get('/random/:n', random)
app.listen(port, () => console.log(`Beer server running on port ${port}!`))*/