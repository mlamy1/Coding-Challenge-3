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

// Task 2: Create a Function to Determine Performance Rating
 
let averageSales = calculateAverageSales(sales); 

function determinePerformanceRating(averageSales) {
    if (averageSales > 10000) {
        return "Excellent";
    }  else if(averageSales >= 7000) {
        return "Good";
    }  else if (averageSales >= 4000) {
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }

} 
// Displays performance rating based on average sales.
console.log("Performance Rating:", determinePerformanceRating(averageSales)); 

// Task 3: Create a Function to Identify Top and Bottom Performers

function findTopAndBottomPerformers(salesmen) {
    const Salestotal = salesmen.map(salesman => ({
        name: salesman.name,
        totalSales: salesman.sales.reduce((total, sale) => total + sale, 0) 
    
    }));

    const maxSales = Math.max(...Salestotal.map(salesman => salesman.totalSales)); 
    const minSales = Math.min(...Salestotal.map(salesman => salesman.totalSales)); 

    const topPerformer = Salestotal.find(salesman => salesman.totalSales === maxSales);
    const bottomPerformer = Salestotal.find(salesman => salesman.totalSales === minSales);

    return{
        topPerformer,
        bottomPerformer }; 

    
}
// Data Set 1
const salesmen = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },  
    { name: 'Diana', sales: [9000, 8500, 9200] },
    ];

console.log(findTopAndBottomPerformers(salesmen)); 

// Task 4: Combine Functions to Generate a Performance Report

function generatePerformanceReport(salesmen) { 
    const report = salesmen.map(salesman => {
    const averageSales = calculateAverageSales(salesman.sales); 
    const performanceRating = determinePerformanceRating(averageSales);
    
    return {
        name: salesman.name,
        averageSales,
        performanceRating
    };
});

const topAndBottom = findTopAndBottomPerformers(salesmen);

return {
    report, 
    topPerformer: topAndBottom.topPerformer,
    bottomPerformer: topAndBottom.bottomPerformer
};
}
// Test Functions with Sample Sales Data
const salesman = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },  
    { name: 'Diana', sales: [9000, 8500, 9200] },
    ]; 

    console.log(generatePerformanceReport(salesmen)); 