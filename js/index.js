//Only run when the DOM is ready
$(document).ready(function() {
  window.myPage = new MyPage();
});

function MyPage() {
	this.init();
	this.listen();

	//------------------------------------------------------------------------------
	//--------------------------- Global variables ---------------------------------
	//------------------------------------------------------------------------------
	this.globalVariable = "akal";
}

//------------------------------------------------------------------------------
//------------------------------- Functions ------------------------------------
//------------------------------------------------------------------------------
MyPage.prototype.init = function() {
	console.log("hello!");
};

MyPage.prototype.listen = function() {
	var self = this;

	$("#first-paragraph").on("click", function() {
		self.paragraphClick();
	})
};

MyPage.prototype.paragraphClick = function() {
	console.log(this.globalVariable);
};
