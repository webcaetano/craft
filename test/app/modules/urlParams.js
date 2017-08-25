module.exports = function(){
	var resp = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0]==='') continue;
		if (typeof resp[pair[0]] === "undefined") {
			resp[pair[0]] = decodeURIComponent(pair[1]);
		} else if (typeof resp[pair[0]] === "string") {
			var arr = [resp[pair[0]],decodeURIComponent(pair[1]) ];
			resp[pair[0]] = arr;
		} else {
			resp[pair[0]].push(decodeURIComponent(pair[1]));
			console.log('x')
		}
	}
	return resp;
}();
