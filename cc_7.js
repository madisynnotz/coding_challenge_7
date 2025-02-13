// Task 1: Function Declaration

function calculateInvoice(subtotal, taxRate, discount) {
    // Calculate total using the formula
    let total = (subtotal + (subtotal * taxRate)) - discount;

    // Format total to two decimal places and return the output
    return `Total Invoice: $${total.toFixed(2)}`;
}

// Test Cases
console.log(calculateInvoice(100, 0.08, 5));  // Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20));  // Expected output: "Total Invoice: $530.00"

//Task 2: Function Expression

const calculateHourlyWage = function(salary, hoursPerWeek) {
    // Calculate hourly wage
    let hourlyWage = salary / (hoursPerWeek * 52);

    // Format hourly wage to two decimal places and return the output
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};

// Test Cases
console.log(calculateHourlyWage(52000, 40));  // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35));  // Expected output: "Hourly Wage: $41.21"

// Task 3: Arrow Function

const calculateLoyaltyDiscount = (amount, years) => {
    // Determine discount rate based on years
    let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;

    // Calculate discounted price
    let discountedPrice = amount - (amount * discountRate);

    // Format the discounted price to two decimal places and return the output
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

// Test Cases
console.log(calculateLoyaltyDiscount(100, 6));  // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2));  // Expected output: "Discounted Price: $190.00"

// Task 4: Parameters and Arguments

function calculateShippingCost(weight, location, expedited = false) {
    let baseCost;
    let perLbRate;

    // Determine base cost and per lb rate based on location
    if (location === "USA") {
        baseCost = 5;
        perLbRate = 0.5;
    } else if (location === "Canada") {
        baseCost = 10;
        perLbRate = 0.7;
    } else {
        return "Invalid location";
    }

    // Calculate total shipping cost
    let shippingCost = baseCost + (weight * perLbRate);

    // Add expedited shipping fee if applicable
    if (expedited) {
        shippingCost += 10;
    }

    // Format shipping cost to two decimal places and return the output
    return `Shipping Cost: $${shippingCost.toFixed(2)}`;
}

// Test Cases
console.log(calculateShippingCost(10, "USA", true));   // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"

//Task 5: Returning Values

function calculateLoanInterest(principal, rate, years) {
    // Calculate total interest
    let interest = principal * rate * years;

    // Format interest to two decimal places and return the output
    return `Total Interest: $${interest.toFixed(2)}`;
}

// Test Cases
console.log(calculateLoanInterest(1000, 0.05, 3));  // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5));  // Expected output: "Total Interest: $1750.00"

// Task 6: Higher-Order Functions

// Declare an array of transactions
let transactions = [500, 1200, 3000, 800, 2200];

// Higher-order function to filter high-value transactions
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

// Test Case
console.log(filterHighValueTransactions(transactions, amount => amount > 1000));
// Expected output: [1200, 3000, 2200]

// Task 7: Closures

function createBudgetTracker() {
    let balance = 0; // Initialize balance

    return function(expense) {
        balance -= expense; // Deduct expense from balance
        return `Current Balance: -$${Math.abs(balance)}`; // Format output
    };
}

// Test Cases
let budget = createBudgetTracker();
console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -$500"