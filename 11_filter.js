// The Array Filterer:
// You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.



function filterProduct(products, filtercriterion){

    return products.filter(product=>{
        
        return product.category=== filtercriterion;

    });
}

const products = [
        { id: 1, name: 'Headphones', category: 'Electronics' },
        { id: 2, name: 'Shoes', category: 'Fashion' },
        {id: 3, name: 'Laptop', category: 'Electronics'},
        {id: 4, name: 'T-Shirt', category: 'Fashion'},
        {id: 5, name: 'Smartphone', category: 'Electronics'},
        {id: 6, name: 'Sweater', category: 'Fashion'},
        {id: 7, name: 'Smartwatch', category: 'Electronics'},
        {id: 8, name: 'Jeans', category: 'Fashion'},
];

const filteredProduct = filterProduct(products,'Fashion');
console.log(filteredProduct);
