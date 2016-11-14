<div class="protoList">
	<div>Prototypes:</div>
	<div>
		<%
		var resp = "";
		_.each(protosList,function(val,i){
			resp+=`<a href="${init}docs/prototypes/${val}"><div class="proto-tag">.$${val}</div></a>
			`;
		})
		print(resp);
		%>
	</div>
</div>
