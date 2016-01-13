var  ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Carly');
	this.level = ko.computed(function(){
		if (this.clickCount() < 1){
			 this.level = "Newborn";
			 return this.level;
		} else if (this.clickCount() < 2){
			this.level = "Lil Kitten";
			 return this.level;
		} else if (this.clickCount() < 3){
			this.level = "Semi Solid Feline";
			 return this.level;
		} else if (this.clickCount() < 4){
			this.level = "Four Pawed Menace";
			 return this.level;
		} else {
			this.level = "Super Cat";
			return this.level;
		};
	},this);
	this.imgSrc = ko.observable('img/cat.jpg');
	this.imgAttribution = ko.observable('Somebody')

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};

}
ko.applyBindings(new ViewModel());