$(document).ready(function(){

preparePage("http://127.0.0.1:8080/json/input1.json");

	$("#fwd").click(function() {
		var url = "http://127.0.0.1:8080/json/input2.json"
		preparePage(url)
	});

	$("#bkwd").click(function() {
		var url = "http://127.0.0.1:8080/json/input1.json"
		preparePage(url)
	});

});

function preparePage(url) {
var request = $.ajax({
	url: url,
	method: "GET"
});
 request.done(function( obj ) {
 for (var i = 0; i < obj.data.length ; i++) {
	var idx = i+1;
	var qelem = "#"+idx+" > q",
	celem = "#"+idx+" > figcaption",
	imgelem = "#"+idx+" > img";
	$(qelem).html(obj.data[i].quote);
	$(celem).html(obj.data[i].caption);
	$(imgelem).attr("src",obj.data[i].imgurl );
	console.log(obj.data[i].imgurl);
 }
});
request.fail(function( jqXHR, textStatus ) {
	console.log(textStatus);
});
}
