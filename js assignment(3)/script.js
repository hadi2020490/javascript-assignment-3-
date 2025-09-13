 let fruit = ["Apple", "Banana", "Mango", "Orange"];

  alert(fruit[0]); 

  alert("All fruits: " + fruit);

let Fruits = ["Apple", "Banana", "Mango"];

  fruits.push("Orange");    
  fruits.unshift("Grapes"); 

  fruits.pop();    
  fruits.shift(); 

  alert(fruits);

  let fruitCrate = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

  fruitCrate.splice(1, 2); 

  fruitCrate.splice(1, 0, "Grapes"); 
  
  let citrus = fruitCrate.slice(2, 4); 

  alert("Fruits: " + fruits); 
  alert("Extracted: " + citrus);
