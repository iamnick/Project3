// Nick Stelzer
// July 19, 2012
// Project 3
// Going out for dinner at Cap'n Jack's

// Variables
var family = ["Papa", "Grandma", "Aunt Mary", "Aunt Sharon", "Mom", "Dad", "Nick", "Deanna", "Danielle"],
	timeOfDay = 17,	// 5:00pm
	order = [],
	taxRate = .07,	
	tipAmount = .20
;

var restaurant = {
	"name": "Cap'n Jack's",
	"menu": json.menuItems,
	"menuItems": json.menuItems.length,
	"isOpen": function (time) {			// Mutator Method
				if (time > 11) {
					return true;
				} else {
					return false;
				}
			  }


};

// Array Function for placing orders
var placeOrder = function (customers, menu) {
	var numOrders = customers.length,
		tab = 0,
		o = 0,		// counter for # of orders taken
		i = 0,		// counter for item # on menu
		order = []	// empty array to store orders in
	;
	
	while (o < numOrders) {			// cycles through the menu, giving each person an item
		order.push(menu[i].name);	// and adds the price to the total tab
		tab += menu[i].price;
		i++;
		if (i >= menu.length) {
			i = 0;
		}
		o++;
	}
	order.push(tab);	
	return order;	// returns array of items ordered + tab
};

// Math Function for calculating the bill
var getBill = function (tab, tax, tip) {
	return (tab * (1 + tax) * (1 + tip));
};



// Main Code
if (restaurant.isOpen(timeOfDay)) {
	order = placeOrder(family, restaurant.menu);
	bill = getBill(order[(order.length - 1)], taxRate, tipAmount);
	
	// Output
	for (var i = 0; i < family.length; i++) {
		console.log(family[i] + " ordered the " + order[i] + ".");
	}
	console.log("The total bill came out to $" + (bill.toFixed(2)) + ", including tax and tip.");
} else {
	console.log("Cap'n Jack's isn't open yet, we'll have to go later.");
}

//console.log(restaurant.menu);
//console.log("The restaurant has " + restaurant.menuItems + " items on the menu.");