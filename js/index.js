// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen
function playSound(cardID) {
	console.log("sound"+cardID)
	var sound = document.getElementById("sound"+cardID);
	sound.play()
}
$(".intro-overlay").show();
$("#modal-overlay").fadeIn("slow");


(function(){
	var lastID = 0
	var videoTally = 0
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
				playSound($(this).attr("data-id"))
				if(!_.guess){
					_.guess = $(this).attr("data-id");
					$card.find(".inside").addClass("first");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
          _.matched($('.first'));
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						$(".first").removeClass("first");
						Memory.paused = false;
					}, 1200);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},
    
    matched: function($card) {
      this.paused = false;
      setTimeout(function() {
		//Do this for all id's
		switch($card.attr("data-id")) {
			case "1":// abuse
				$(".first").removeClass("first");
				lastID = 1
				videoTally++
				if(videoTally > 10) {
					document.getElementById("endVideo").innerHTML = '<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/1AbEPFSv9ac?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>'
					console.log("End Video set")
				}
				else {
				$card.find('.back').html('<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/1AbEPFSv9ac?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
				$card.find('.back').addClass('success');
				}
				break;
			case "2":// religion
				$(".first").removeClass("first");
				lastID = 2
				videoTally++
				if(videoTally > 10) {
					document.getElementById("endVideo").innerHTML = '<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/MCvR_ImNKn4?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>'
					console.log("end video")
				}
				else {
				$card.find('.back').html('<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/MCvR_ImNKn4?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
				$card.find('.back').addClass('success');
				}
				break;
			case "3":// privacy
				$(".first").removeClass("first");
				lastID = 3
				videoTally++
				if(videoTally > 10) {
					document.getElementById("endVideo").innerHTML = '<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/c1P5vY1_j-o?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>'
					console.log("end video")
				}
				else {
				$card.find('.back').html('<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/c1P5vY1_j-o?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
				$card.find('.back').addClass('success');
				}
				break;
			case "4":// living
				$(".first").removeClass("first");
				lastID = 4
				videoTally++
				if(videoTally > 10) {
					document.getElementById("endVideo").innerHTML = '<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/4ewhH17Bea4?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>'
					console.log("end video")
				}
				else {
				$card.find('.back').html('<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/4ewhH17Bea4?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
				$card.find('.back').addClass('success');
				}
				break;
			case "5":// job
				$(".first").removeClass("first");
				lastID = 5
				videoTally++
				if(videoTally > 10) {
					document.getElementById("endVideo").innerHTML = '<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/Tvkbrz6V_lM?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>'
					console.log("end video")
				}
				else {
				$card.find('.back').html('<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/Tvkbrz6V_lM?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
				$card.find('.back').addClass('success');
				}
				lastID = 5
				break;
			case "6":// relationships
				$(".first").removeClass("first");
				lastID = 6
				videoTally++
				if(videoTally > 10) {
					document.getElementById("endVideo").innerHTML = '<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/yl4eTb39rZs?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>'
					console.log("end video")
				}
				else {
				$card.find('.back').html('<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/yl4eTb39rZs?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
				$card.find('.back').addClass('success');
				}
				break;
			case "7":// property
				$(".first").removeClass("first");
				lastID = 7
				videoTally++
				if(videoTally > 10) {
					document.getElementById("endVideo").innerHTML = '<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/cLzS1Mev_zw?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>'
					console.log("end video")
				}
				else {
				$card.find('.back').html('<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/cLzS1Mev_zw?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
				$card.find('.back').addClass('success');
				}
				break;
			case "8":// assembly
				$(".first").removeClass("first");
				lastID = 8
				videoTally++
				if(videoTally > 10) {
					document.getElementById("endVideo").innerHTML = '<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/1LfQCViuciA?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>'
					console.log("end video")
				}
				else {
				$card.find('.back').html('<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/1LfQCViuciA?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
				$card.find('.back').addClass('success');
				}
				break;
			case "9":// movement
				$(".first").removeClass("first");
				lastID = 9
				videoTally++
				if(videoTally > 10) {
					document.getElementById("endVideo").innerHTML = '<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/VgssxxpXpIE?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>'
					console.log("end video")
				}
				else {
				$card.find('.back').html('<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/VgssxxpXpIE?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
				$card.find('.back').addClass('success');
				}
				break;
			case "10":// social security
				$(".first").removeClass("first");
				lastID = 10
				videoTally++
				if(videoTally > 10) {
					document.getElementById("endVideo").innerHTML = '<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/rvGJ5OXRAr0?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>'
					console.log("end video")
				}
				else {
				$card.find('.back').html('<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/rvGJ5OXRAr0?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
				$card.find('.back').addClass('success');
				}
				break;
			case "11":// expression
				$(".first").removeClass("first");
				lastID = 11
				videoTally++
				if(videoTally > 10) {
					document.getElementById("endVideo").innerHTML = '<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/iHpbpD3i_pc?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>'
					console.log("end video")
				}
				else {
				$card.find('.back').html('<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/iHpbpD3i_pc?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
				$card.find('.back').addClass('success');
				}
				break;
			case "12":// Rock the Arc!
				$(".first").removeClass("first");
				lastID = 12
				videoTally++
				if(videoTally > 10) {
					document.getElementById("endVideo").innerHTML = '<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/OCWj5xgu5Ng?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>'
					console.log("end video")
				}
				else {
				$card.find('.back').html('<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/OCWj5xgu5Ng?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
				$card.find('.back').addClass('success');
				}
				break;
			default:// If something goes horribly wrong, this runs 
				$(".first").removeClass("first");
				$card.find('.back').html('<div class="video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/OCWj5xgu5Ng?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
				$card.find('.back').addClass('success');
				break;
		}
		console.log(lastID)
      }, 1000);
    },

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			},1000);
		},

		showModal: function(){
			//setTimeout(function(){
				//this.$overlay.show();
				//this.$modal.fadeIn("slow")
			//},30000)
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			$(".intro-overlay").hide();
			$("#modal-overlay").hide();
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
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside" data-id="'+ v.id +'">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="arclogo.png"\
				alt="Arc" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "abuse",
			img: "https://i.imgur.com/KemQpSv.jpg",
			id: 1,
		},
		{
			name: "religion",
			img: "religion.jpg",
			id: 2
		},
		{
			name: "privacy",
			img: "https://i.imgur.com/J5bg7Aj.jpg",
			id: 3
		},
		{
			name: "standard",
			img: "https://i.imgur.com/A5mdJUF.jpg",
			id: 4
		}, 
		{
			name: "job",
			img: "https://i.imgur.com/lJiD2qh.jpg",
			id: 5
		},
		{
			name: "relationship",
			img: "https://i.imgur.com/KWUgIEP.jpg",
			id: 6
		},
		{
			name: "property",
			img: "https://i.imgur.com/MEihCVt.jpg",
			id: 7
		},
		{
			name: "assembly",
			img: "https://i.imgur.com/cmpw38N.jpg",
			id: 8
		},
		{
			name: "travel",
			img: "https://i.imgur.com/lk2MWEf.jpg",
			id: 9
		},
		{
			name: "socialsecurity",
			img: "https://i.imgur.com/47ahmXW.jpg",
			id: 10
		},
		{
			name: "expression",
			img: "https://i.imgur.com/Nsnkj8z.png",
			id: 11
		},
		{
			name: "rockthearc",
			img: "http://adirondackarc.org/images/rockarc.jpg",
			id: 12
		},
	];
    
	Memory.init(cards);
})();