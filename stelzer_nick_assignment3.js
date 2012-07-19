// Nick Stelzer
// July 19, 2012
// Project 3
// Going out for dinner at Cap'n Jack's

// Variables
var family = ["Mom", "Dad", "Nick", "Deanna", "Danielle"],
	timeOfDay = 17,	// 5:00pm
	directions = "",
	table = {},
	order = [],	
	tipAmount = .20
;

var car = {
	"name": "Grand Marquis",
	"passengers": [],
	"capacity": 6,
	"getInCar": function (people) {	// Mutator Method 
		var c = 0;	// counter
		while (c < people.length) {
			if (c === car.capacity) {
				end;
			} else {
				car.passengers.push(people[c]);
				c++;
			}
			
		}
	},
	"whoIsInCar": function () {				// Procedure Method
		var peopleInCar = "";	
		for (var i = 0; i <= (car.passengers.length - 1); i++) {
			peopleInCar += (car.passengers[i] + ", ");
		}
		console.log("The " + car.name + " has " + peopleInCar + "in it.");
	}
};

var restaurant = {
	"name": "Cap'n Jack's",
	"menu": json.menuItems,
	"menuItems": json.menuItems.length,
	"directions": "Take Route 1 East for 5 miles, turn right onto Succotash Rd. Drive 1.4 miles, restaurant will be on your left.",
	"table": {
		"number": 16,
		"seats": 6,
		"smoking": false	
	},
	"isOpen": function (time) {			// Function Method?
				if (time > 11) {
					return true;
				} else {
					return false;
				}
			  },
	"getDirections": function () { return restaurant.directions; },	// Accessor Methods
	"getTable": function () { return restaurant.table; }


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
var getBill = function (tab, tip) {
	var tax = .07;
	return (tab * (1 + tax) * (1 + tip));
};

// 
var wereWeSatisfied = function (table, bill) {
	if (table.smoking === false && bill <= 100) {
		return true;
	} else {
		return false;
	}
};


// Main Code
if (restaurant.isOpen(timeOfDay)) {
	car.getInCar(family);
	car.whoIsInCar();
	directions = restaurant.getDirections();
	table = restaurant.getTable();
	order = placeOrder(family, restaurant.menu);
	bill = getBill(order[(order.length - 1)], tipAmount);
	satisfied = wereWeSatisfied(table, bill);
	car.getInCar(family);
		
	// Output
	console.log("To get to " + restaurant.name + ", we need to: " + directions);
	console.log("Now that we're here, let's sit down. We're at table " + table.number + ".");
	if (table.smoking) {
		console.log("It's in the smoking section, and seats " + table.seats + " people.");
	} else {
		console.log("It's in the non-smoking section, and seats " + table.seats + " people.");
	}
	for (var i = 0; i < family.length; i++) {
		console.log(family[i] + " ordered the " + order[i] + ".");
	}
	console.log("The total bill came out to $" + (bill.toFixed(2)) + ", including tax and tip.");
	if (satisfied) {
		console.log("We were satisfied and had a great dinner!");
	} else {
		console.log("Things could have been better tonight."); 
	}
} else {
	console.log("Cap'n Jack's isn't open yet, we'll have to go later.");
}

//console.log(restaurant.menu);
//console.log("The restaurant has " + restaurant.menuItems + " items on the menu.");