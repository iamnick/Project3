// Nick Stelzer
// July 19, 2012
// Project 3
// Going out for dinner at Cap'n Jack's

// Variables
var family = ["Papa", "Grandma", "Aunt Mary", "Aunt Sharon", "Mom", "Dad", "Nick", "Deanna", "Danielle"],
	order = []
;

var restaurant = {
	"name": "Cap'n Jack's",
	"isOpen": true,
	"menu": json.menuItems,
	"menuItems": json.menuItems.length
	}
;

var placeOrder = function (customers, menu) {
	numOrders = customers.length;
	o = 0;		// counter for # of orders taken
	i = 0;   	// counter for item # on menu
	order = [];	// empty array to store orders in
	while (o < numOrders) {
		order.push(menu[i].name);
		i++;
		if (i >= menu.length) {
			i = 0;
		}
		o++;
	}
	return order;	// returns array of complete order 
};

// Main Code
order = placeOrder(family, restaurant.menu);

// Output
for (var i = 0; i < family.length; i++) {
	console.log(family[i] + " ordered the " + order[i] + ".");
}

//console.log(restaurant.menu);
//console.log("The restaurant has " + restaurant.menuItems + " items on the menu.");