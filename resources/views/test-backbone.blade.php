<!DOCTYPE html>
<html><head>
	<meta charset="utf-8" />
	<title>Backbone Tests</title>
	<link rel="stylesheet" href="{{ elixir("css/app.css") }}">
	<script src="{{ elixir("js/app.js") }}"></script>
	<script type="text/javascript">runApp.init({'time': {{ time() }}});</script>
</head><body>
<div class="container" id="container"></div>
<script src="{{ elixir("js/tests.js") }}"></script>
</body></html>