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
