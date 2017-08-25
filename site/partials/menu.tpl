<div class="menu">
	<div class="menu-logo" align="center">
		<a href="<%=init%>"><div class="logo-container">
			<img alt="phaser craft logo" src="http://i.imgur.com/qQTPPu7.png">
		</div>
		<dir class="menu-logo-name">Craft <%=version%></dir></a>
	</div>

	<div class="menu-header">Methods</div>
	<%
	_.each(methods,function(val,i){
		if(name==val){
			print(`<div class="menu-tab selected">${val}</div>
			`);
		} else {
			print(`<a href="${init}docs/methods/${val}"><div class="menu-tab">${val}</div></a>
			`);
		}
	})
	%>

	<div class="menu-header">Prototypes</div>
	<%
	_.each(prototypes,function(val,i){
		if(name==val){
			print(`<div class="menu-tab selected">.$${val}</div>
			`);
		} else {
			print(`<a href="${init}docs/prototypes/${val}">
			<div class="menu-tab">.$${val}</div>
			</a>
			`);
		}
	})
	%>
</div>
