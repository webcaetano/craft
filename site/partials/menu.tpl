<div class="menu">
	<%
		if(home){
			print(`<div class="menu-tab menu-main selected">Home</div>
			`);
		} else {
			print(`<a href="/"><div class="menu-tab menu-main">Home</div></a>
			`);
		}
	%>
	<div class="menu-header">Methods</div>
	<%
	_.each(methods,function(val,i){
		if(name==val){
			print(`<div class="menu-tab selected">${val}</div>
			`);
		} else {
			print(`<a href="/docs/methods/${val}"><div class="menu-tab">${val}</div></a>
			`);
		}
	})
	%>

	<div class="menu-header">Prototypes</div>
	<%
	_.each(prototypes,function(val,i){
		if(name==val){
			print(`<div class="menu-tab selected">${val}</div>
			`);
		} else {
			print(`<a href="/docs/prototypes/${val}"><div class="menu-tab">${val}</div></a>
			`);
		}
	})
	%>
</div>
