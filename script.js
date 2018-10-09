var request = new XMLHttpRequest();
   request.open("GET", "nouns_hindi.json", false);
   request.send(null);
   var nounsList = JSON.parse(request.responseText);
   // console.log(my_JSON_object);

var request = new XMLHttpRequest();
   request.open("GET", "verbs_hindi.json", false);
   request.send(null);
   var verbsList = JSON.parse(request.responseText);
   // console.log(my_JSON_object_2);

document.getElementById("gen-meta-btn").addEventListener("click", genMeta);

function genMeta() {
	var meta_1	= nounsList["nouns"][Math.floor(Math.random() *1000)];
	var meta_2	= verbsList["verbs"][Math.floor(Math.random() *1000)];
	updateMeta(meta_1, meta_2);
}

function updateMeta(meta1, meta2) {
	document.getElementsByClassName("meta-box")[0].innerHTML = meta2 + " " + meta1;
}