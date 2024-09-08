// Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(sales) {
    // Calculation to add all sales 
    let totalamount = sales.reduce((total,sale)=> total + sale, 0); 
    let salesnumber = sales.length; 
    let averageSales = salesnumber !== 0 ? totalamount / salesnumber : 0;
    // Calculate the average sales 
    return averageSales; 
}

 let sales = [ 1000, 2000, 3000, 4000];  // Example numbers 
 console.log("Average Sales: ", calculateAverageSales(sales)); 

