<html>
	<head>
	
		<title>Carousel Slider</title>
		<link rel="stylesheet" type="text/css" href="css/external.css">
		<script type="text/javascript" src = "js/player.js"></script>
		

	</head>

	<body>

		
		
		<cite><a href="http://css3.bradshawenterprises.com/cfimg/">Take a look at this tutorial</a></cite>



		<div class="gallery">

			<input id = "pause" type = "image" src = "images/pause.png" onclick="pause()">
			
			<?php

				$imageFiles = scandir("nature_stock"); # replace the parameter inside to any folder name containing the pictures 

				$imageList = "";

				for($i = 2; $i < count($imageFiles); $i++){

					$imageList = $imageList . "<img src =  'nature_stock/"  . (string)$imageFiles[$i] . "' width = 25% height = 25%  value = '0' >";
				}

				echo $imageList;
			?>

		</div>

		
		</body>

	</html>