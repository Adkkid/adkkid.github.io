// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen

(function(){
	
	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.binding();
			this.paused = false;
     	this.guess = null;
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
          _.matched($('.picked'));
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},
    
    matched: function($card) {
      this.paused = false;
      setTimeout(function() {
        $card.find('.back').html('<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/RtU_mdL2vBM?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
        $card.find('.back').addClass('success');
      }, 1000);
    },

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="https://pixy.org/images/placeholder.png"\
				alt="Codepen" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "php",
			img: "http://i.imgur.com/KemQpSv.jpg",
			id: 1,
		},
		{
			name: "css3",
			img: "http://i.imgur.com/74z1Lh1.jpg",
			id: 2
		},
		{
			name: "html5",
			img: "http://i.imgur.com/J5bg7Aj.jpg",
			id: 3
		},
		{
			name: "jquery",
			img: "http://i.imgur.com/A5mdJUF.jpg",
			id: 4
		}, 
		{
			name: "javascript",
			img: "http://i.imgur.com/lJiD2qh.jpg",
			id: 5
		},
		{
			name: "node",
			img: "http://i.imgur.com/KWUgIEP.jpg",
			id: 6
		},
		{
			name: "photoshop",
			img: "http://i.imgur.com/MEihCVt.jpg",
			id: 7
		},
		{
			name: "python",
			img: "http://i.imgur.com/cmpw38N.jpg",
			id: 8
		},
		{
			name: "rails",
			img: "http://i.imgur.com/lk2MWEf.jpg",
			id: 9
		},
		{
			name: "sass",
			img: "http://i.imgur.com/47ahmXW.jpg",
			id: 10
		},
		{
			name: "sublime",
			img: "http://i.imgur.com/Nsnkj8z.png",
			id: 11
		},
		{
			name: "wordpress",
			img: "http://adirondackarc.org/images/rockarc.jpg",
			id: 12
		},
	];
    
	Memory.init(cards);


})();