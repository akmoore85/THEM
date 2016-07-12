function hero_selector(event){
	event.preventDefault();
	var superhero = $("#hero_names").val()
	var link_d = {
		"Wonder Woman" : "https://en.wikipedia.org/wiki/Wonder_Woman",
		"Superman"	: "https://en.wikipedia.org/wiki/Superman",
		"The Incredible Hulk"	: "https://en.wikipedia.org/wiki/Hulk_(comics)",
		"Spider Man"	: "http://spiderman.wikia.com/wiki/Spider-Man_Wiki", 
		"BOFA"	: "http://www.urbandictionary.com/define.php?term=bofa"
	}
	var link = link_d[superhero]
	window.location.href= link
}
