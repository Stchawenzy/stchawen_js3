/**
 * a function that takes in one parameter and checks if 
 * numbers from 1 to 100 are divisible by 2, 3, 5
 * */ 

function myFunction(arr) {
    let info = [];
    for (let i = 1; i <= arr; i++) {
        // number divisible by 2, 3 and 5
        if (i%2 == 0 && i%3 == 0 && i%5 ==0) {
            info.push("yu-gi-oh");
        } else if (i%2 == 0 && i%3 == 0) {
            info.push("yu-gi");
        } else if (i%2==0 && i%5==0) {
            info.push("yu-oh");
        } else if (i%3==0 && i%5==0){
            info.push("gi-oh");
        } else if (i%2==0) {
            info.push("yu");
        } else if (i%3==0) {
            info.push("gi");
        } else if (i%5==0) {
            info.push("oh");
        } else {
            info.push(i);
        }
    }

    console.log(info);
    return info;
    
}
// passing 100 as argument
myFunction(100);

// passing 65 as argument 
myFunction(65);

