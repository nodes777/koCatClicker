var  ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Carly');
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
	this.imgSrc = ko.observable('img/cat.jpg');
	this.imgAttribution = ko.observable('Somebody')

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};
	this.nickNames = ko.observableArray([
		{name: "Gumbo"},
		{name: "Flumpy"},
		{name: "Sam"}
		]);
}
ko.applyBindings(new ViewModel());