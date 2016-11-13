<!doctype html>
<html>
<head>
	<base href="../../">
	<meta charset="utf-8">
	<title>WebCaetano</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width">
	<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	<!-- build:css({.tmp/serve,src}) styles/vendor.css -->
	<!-- bower:css -->
	<!-- run `gulp inject` to automatically populate bower styles dependencies -->
	<!-- endbower -->
	<!-- endbuild -->

	<!-- build:css({.tmp/serve,src}) styles/styles.css -->
	<!-- inject:styles:css -->
	<!-- css files will be automatically insert here -->
	<!-- endinject -->
	<!-- endbuild -->
</head>
<body>
	<!--[if lt IE 10]>
		<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->
	{{> cover}}
	<div class="container posts">
		[[POSTS]]
	</div>

	<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-48138722-7', 'auto');
	ga('send', 'pageview');

	</script>


	<!-- build:js(src) scripts/vendor.js -->
	<!-- bower:js -->
	<!-- run `gulp inject` to automatically populate bower script dependencies -->
	<!-- endbower -->
	<!-- endbuild -->


	<!-- build:js(src) scripts/scripts.js -->
	<!-- inject:scripts:js -->
	<!-- js files will be automatically insert here -->
	<!-- endinject -->
	<!-- endbuild -->

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
</body>
</html>
