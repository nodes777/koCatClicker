var initialCats = [
	{
		clickCount: 0,
		name: "Carly",
		imgSrc: "img/cat.jpg",
		imgAttribution: "Somebody",
		nickNames: [{name: "Gumbo"}, {name: "Flumpy"}, {name: "Sam"}]
	},
	{
		clickCount: 0,
		name: "Sneaker",
		imgSrc: "img/cat2.jpg",
		imgAttribution: "Somebody",
		nickNames: [{name: "Gumbo"}, {name: "Flumpy"}, {name: "Sam"}]
	},
	{
		clickCount: 0,
		name: "Sleeps",
		imgSrc: "img/cat3.jpg",
		imgAttribution: "Somebody",
		nickNames: [{name: "Gumbo"}, {name: "Flumpy"}, {name: "Sam"}]
	},
	{
		clickCount: 0,
		name: "Dunzo",
		imgSrc: "img/cat4.jpg",
		imgAttribution: "Somebody",
		nickNames: [{name: "Gumbo"}, {name: "Flumpy"}, {name: "Sam"}]
	},
	{
		clickCount: 0,
		name: "Harmon",
		imgSrc: "img/cat5.jpg",
		imgAttribution: "Somebody",
		nickNames: [{name: "Gumbo"}, {name: "Flumpy"}, {name: "Sam"}]
	}
]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution)
	this.nickNames = ko.observableArray(data.nickNames);
	this.level = ko.computed(function(){
		if (this.clickCount() < 10){
			 level = "Newborn";
			 return level;
		} else if (this.clickCount() < 20){
			level = "Lil Kitten";
			 return level;
		} else if (this.clickCount() < 30){
			level = "Semi Solid Feline";
			 return level;
		} else if (this.clickCount() < 40){
			level = "Four Pawed Menace";
			 return level;
		} else {
			level = "Super Cat";
			return level;
		};
	},this);
}

var  ViewModel = function(){
	var self = this;//self always maps to ViewModel
	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);
	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};
	this.changeCat= function(){
		alert("click");
	};
}
ko.applyBindings(new ViewModel());