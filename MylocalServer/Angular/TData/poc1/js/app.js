var featureItems = [
					{	feature_label:'Effortless Control. ', 
						feature_secondaryLabel:'It will blow your mind.', 
						feature_link:'../img/article-home.png',
						feature_description:'From simple device control to robust home automation, we make it easy to manage your home.'

				   	},
				   	
					{	feature_label:'Family Guardian. ',
						feature_secondaryLabel:'See for yourself.', 
						feature_link:'../img/article-kid.png',
						feature_description:'Know your kids are safe - see them arrive home from school and lock the door behind them.'
				   	},
					{	feature_label:'Pet Sitter. ', 
						feature_secondaryLabel:'It rocks.', 
						feature_link:'../img/article-dog.png',
						feature_description:'Check in on your pet from upstairs, across town, or even miles away.'
				   	},
					{	feature_label:'Energy Saver. ', 
						feature_secondaryLabel:'You will love it.', 
						feature_link:'../img/article-light.png',
						feature_description:'Monitor and control the lights and temperature from wherever you are.'
				   	},
					{	feature_label:'Easy Automation. ', 
						feature_secondaryLabel:'Checkmate.', 
						feature_link:'../img/article-clock.png',
						feature_description:'Create a bedtime program to easily turn off the lights, adjust the temperature and lock the doors with a single tap or click.'
				   	}
				   	
				 ];

var bannerItems = [
					{	banner_item_title:'Lifestyle Solutions', 
						banner_item_description:'Customize a package to fit your lifestyle. Here are a few ways how Digital Life can help you.',
						banner_item_link:'https://my-digitallife.att.com/learn/productdemos.html',
						banner_item_bg:'../img/slide-01.jpg',
						style:'item active'

				   	},
				   	{	banner_item_title:'Programs', 
						banner_item_description:'The path to home automation starts here. Simple-to-use programs help you stay connected to home.',
						banner_item_link:'https://my-digitallife.att.com/learn/productdemos.html',
						banner_item_bg:'../img/slide-02.jpg',
						style:'item'
				   	},
				   	{	banner_item_title:'Features & Devices', 
						banner_item_description:'See how these key features and devices will keep you connected and help protect your home. ',
						banner_item_link:'https://my-digitallife.att.com/learn/productdemos.html',
						banner_item_bg:'../img/slide-03.jpg',
						style:'item'
				   	}

				 ];

var marketingItems = [
					{	marketing_item_title:'Choose your own Internet & wireless provider', 
						marketing_item_description:'Use any Internet service provider you like. The competition may require you to use their broadband or Internet service.',
						marketing_item_img:'../img/baby.jpg',

				   	},
				   	{	marketing_item_title:'Industry-leading equipment', 
						marketing_item_description:'We offer a full range of home security and automation, including temp & water sensors, water main shutoff, and much more.',
						marketing_item_img:'../img/banner-door-solution.jpg',

				   	},
				   	{	marketing_item_title:'Complete protection', 
						marketing_item_description:'All Digital Life security and automation devices come with a lifetime warranty.',
						marketing_item_img:'../img/home.jpg',

				   	}				   	

				 ];


var DLHomeModule = angular.module('DLHome', []);

DLHomeModule.controller('DLHomeController', function($scope){
  $scope.featureItems = featureItems;
  $scope.bannerItems = bannerItems;
  $scope.marketingItems = marketingItems;

 });