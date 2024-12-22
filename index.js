// let marks = [87 , 88 , 67 , 49];
// console.log(marks);

// let heroes = ["fakhar" , "imam" , "hafeez"];
// console.log(heroes);

//                                               //Looping over an array
// let heroes = [" fakhar" , "imam" , "hafeez"];
// for(let idx = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);
// }

//                                                   // for of
// let heroes = ["fakhar" , "imam" , "hafeez"];
// for(let hero of heroes){
//     console.log(hero)
// };

// let cities = ["lahre" , "islamabad" , "karachi"]
// for(let city of cities){
//     console.log(city)
// };

                                                 // Practice Q

// let marks = [97 , 85 , 87 , 36 , 67]
// let sum = 0;

// for(let value of marks){
//     sum += value
// }

// let average = sum / marks.length;
// console.log(`average marks of student = ${average}`);

//                                                // Practice Q

// let items = [999,888,777,666,555,444,333,222,111]
// let i = 0;
// for(let value of items){
//     console.log(`value at index ${i} = ${value}`)
//     let offer = value / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// };


// for (let i = 0; i < items.length;i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
// }
// console.log(items);

                                      //Array Methods
                                      //push() and pop()

// let foodItems = ["potato" , "tomamto" , "apple" , "banana"];
// console.log(foodItems);
// let deletedItems = foodItems.pop();
// console.log(foodItems);
// console.log("deleted" , deletedItems);

                                    //Concat                                  
// let batters = ["fakhar" , "imam" , "hafeez"]
// let all_rounders = ["malik" , "iftikhar" , "imad"]
// let bowlers = ["amir" , "naseem" , "shaheen"]
// let team = batters.concat(all_rounders , bowlers);
// console.log(team);                                    

                                   //unshift

// let batters = ["fakhar" , "imam" , "hafeez"];
// batters.unshift("saud");                                   
                                   //shift array if opposite to unshift

                                   //slice array

// let batters = ["fakhar" , "imam" , "hafeez" , "saud" , "malik"]
// console.log(batters);
// console.log(batters.slice(1,3));                                   

                                  //splice array

//let array = [1 , 2 ,3 , 4 , 5 , 6 , 7]
//array.splice(2, 2, 101, 102)
//for add
//array.splice(2, 0, 101);
//for delete
//array.splice(3, 1);
//for replace
//array.splice(3, 1, 101);

                                    //Practice

let companies = ["google" , "facebook" , "whatsapp" ,"instagram" , "twitter"];
// companies.splice(2 , 1 , "ola") ;
companies.push("amazon");                                   