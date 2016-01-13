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
	this.currentCat = ko.observable(new Cat({
		clickCount: 0,
		name: "Carly",
		imgSrc: "img/cat.jpg",
		imgAttribution: "Somebody",
		nickNames: [{name: "Gumbo"}, {name: "Flumpy"}, {name: "Sam"}]
	})
	);
	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};
}
ko.applyBindings(new ViewModel());