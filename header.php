<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>Forcon Infra</title>
		<link rel="stylesheet preload" as="style" href="css/preload.min.css" />
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Tienne:wght@700&display=swap" rel="stylesheet">
		<link rel="stylesheet preload" as="style" href="css/icomoon.css" />
		<link rel="stylesheet preload" as="style" href="css/libs.min.css" />
		<link rel="stylesheet" type="text/css" href="css/slick.css"/>
		<link rel="stylesheet" type="text/css" href="css/slick-theme.css"/>
		<link rel="stylesheet" href="css/about.min.css" />
		<link rel="stylesheet" href="css/index2.min.css" />
		<style>
			@import url('https://fonts.googleapis.com/css2?family=Tienne:wght@700&display=swap');
			@font-face {
			font-family: georgia;
			src: url(georgia.ttf);
			}
			/* The Modal (background) */
			.modal {
			display: none; /* Hidden by default */
			position: fixed; /* Stay in place */
			z-index: 1; /* Sit on top */
			padding-top: 100px; /* Location of the box */
			left: 0;
			top: 0;
			width: 100%; /* Full width */
			height: 100%; /* Full height */
			overflow: auto; /* Enable scroll if needed */
			background-color: rgb(0,0,0); /* Fallback color */
			background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
			}
			.media {
			padding: 0 210px;
			}
			.slider2-wrapp .slide-main {
			padding: 0 10px;
			}
			.slider2-wrapp {
			padding-bottom: 50px;
			}
			/* Modal Content */
			.modal-content {
			background-color: #fefefe;
			margin: auto;
			padding: 20px;
			border: 1px solid #888;
			width: 100%;
			color: #000;
			}
			.img-wrp {
			padding: 0 100px;
			}
			/* The Close Button */
			.close {
			color: #aaaaaa;
			float: right;
			font-size: 28px;
			font-weight: bold;
			}
			.close:hover,
			.close:focus {
			color: #000;
			text-decoration: none;
			cursor: pointer;
			}
			.container1 {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			}
			.image {
			flex: 0 0 50%;
			max-width: 25%;
			height: auto;
			padding: 12px;
			}
			.image2 {
			flex: 0 0 50%;
			max-width: 50%;
			height: auto;
			padding: 12px;
			}
			@media (max-width: 768px) {
			.image {
			flex: 0 0 100%;
			max-width: 100%;
			}
			.image2 {
			flex: 0 0 100%;
			max-width: 50%;
			}
		</style>
	</head>
	<body>
		<header class="header" data-page="home2" data-page-parent="home">
			<div class="container d-flex">
				<a class="brand" href="index.php">
				<span class="brand_name"><img class="" src="img/logo2.png" alt="Forcon Infra" />   </span>
				</a>
				<nav class="header_nav collapse" id="headerMenu">
					<ul class="header_nav-list">
						<li class="header_nav-list_item">
							<a class="nav-item nav-link" href="index.php" data-page="about" data-single="true">
							<span class="nav-item_text">Home</span>
							</a>
						</li>
						<li class="header_nav-list_item">
							<a class="nav-item nav-link" href="about.php" data-page="about" data-single="true">
							<span class="nav-item_text">About</span>
							</a>
						</li>
						<li class="header_nav-list_item">
							<a class="nav-item nav-link" href="projects.php" data-page="about" data-single="true">
							<span class="nav-item_text">Projects</span>
							</a>
						</li>
						<li class="header_nav-list_item">
							<a class="nav-item nav-link" href="plant&machinery.php" data-page="about" data-single="true">
							<span class="nav-item_text">Plant & Machinery</span>
							</a>
						</li>
						<li class="header_nav-list_item">
							<a class="nav-item nav-link" href="contact.php" data-page="about" data-single="true">
							<span class="nav-item_text">Contact</span>
							</a>
						</li>
					</ul>
				</nav>
				<button
					class="header_trigger"
					data-bs-toggle="collapse"
					data-bs-target="#headerMenu"
					aria-controls="headerMenu"
					aria-expanded="false">
				<span class="line line--short"></span>
				<span class="line"></span>
				<span class="line line--short"></span>
				<span class="line"></span>
				</button>
			</div>
		</header>