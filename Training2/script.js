         // first //
// let fullname=prompt("enter your full username without space");
//  let username=   fullname + " @gmail.com";
//   console.log(username);
// document.getElementById("first").innerHTML = username;

// let inputString=document.getElementById('mid');
//   function appendSomething(inputString) {
//   return inputString + " welcome to the screen";
// }
// console.log(appendSomething("Purak"))
// document.getElementById("first").innerHTML = appendSomething;


      // second //
// let n=2
// let i = 1;
// while (i <= 10) {
//     console.log(`${n} x ${i} = ${n * i} ${+"<br>"}`);
//     i++ ;
// }
// document.write(i)
// document.getElementById("demo1").innerHTML = fruits;

// second // final 
// function Table(num) {
//     let result = "";
//     for (let i = 1; i <= 10; i++) {
//         result += `${num} x ${i} = ${num * i} <br>`;
//     }
//     return result;
// }
// document.write(" Table of 2", Table(2));

      // third // done
// function containsEe(inputString) {
//   return inputString.includes("ee");
// } 
// const resu3=containsEe("engineer")
// document.getElementById("first").innerHTML =resu3;

// document.write(containsEe("hello"))+ "<br>" +
// document.write(containsEe("tree")) + "<br>" +
// document.write(containsEe("engineer"))+ "<br>" +
// document.write(containsEe("apple")); 


     // four // done
// function appendSomething(inputString) {
//   return inputString  =+ inputString.length;
//  }
//  const result=" 1000 Number of digits = "+ appendSomething("1000");
//  document.getElementById("first").innerHTML = result;
//  console.log("Number of digits "+ appendSomething("1000"));


  // five ///// done
// function find(vol){
//     const vowel ='aeiouAEIOU'
//     let vowelcount= 0;
//     for(i=0;i<vol.length;i++){
//         if(vowel.includes(vol[i])){
//         vowelcount++;
//        }
//     }   
//       return vowelcount;
// }
// const word="Celebration";
// const result= find(word); 
// document.getElementById("first").innerHTML = result;

 
    // six /////// almost done
// let n = 12;
// let i = 1;
// for (i = 1; i < n; i++) {
//     if (n % i == 0) {
//       //   console.log(i);
//       }
//     } 
//     document.getElementById("first").innerHTML = n;
//     document.getElementById("first").innerHTML = i;
//     const digit= i;
//     const result= digit;
//     document.getElementById("first").innerHTML = result;
//     document.getElementById("first").innerHTML = digit;
// console.log(n);


      // seven ////// done
// let value = "HeLLOuSer";
// let upper = "";
// let lower = "";
// for (let char of value) {
//   if (char >= "A" && char <= "Z") {
//     upper += char;
//   } else if (char >= "a" && char <= "z") {
//     lower += char;
//   }  
// }
//  document.getElementById("first").innerHTML= upper + lower;


        // 8 done///////////
// function myFunction(numbers) {
//      numbers = numbers.split(" ");
//     return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
// }  
// document.write(myFunction("1 2 3 4 5"))


  // 9 done/////////
// function sortString(S){  
// correct = S.split("");
// correct.sort();
// return correct.join("");
// }
// var S = "bac";
// document.write(sortString(S));


// done 10 //
// function customRightShift(num, shiftAmount) {
//   const divisor = Math.pow(2, shiftAmount);
//    const result = Math.floor(num / divisor);
//   return result;
// }
// console.log(`80 >> 3 = ${customRightShift(80, 3)}`);  
// console.log(`-24 >> 2 = ${customRightShift(-24, 2)}`); 
// console.log(`100 >> 4 = ${customRightShift(100, 4)}`);
// console.log(`-20>> 2 = ${customRightShift(-20, 2)}`); 


////11 done/////
//  var x = 0.234000; // to become 1.234
// var y = 0.0402; // stays 1.234001
//  x.toFixed(x)
//  y.toPrecision() 
//    xo=x.toString()
// console.log(xo)
// document.write(xo)

// function removeLeadingZeros(input) {
//     return Number(input);
// }
// document.getElementById("first").innerHTML =
// (removeLeadingZeros("001230.000"))+ "<br>" +
// (removeLeadingZeros("00402"))+ "<br>" + 
// (removeLeadingZeros("0000100"));


//  13. ASCII Even Uppercase / Odd Lowercase 
// function asciiTransform(str) {
//     return str.split("").map(ch => {
//         if (ch === " ") return ch;
//         return ch.charCodeAt(0) % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase();
//     }).join("");
// }
// document.write(" ASCII Transform (THE LITTLE MERMAID): " + asciiTransform("THE LITTLE MERMAID"));
     
//  11. done  add Numbers & Multiply Digits Until Single Digit 
// function multiplydigits(num) {
//     while (num >= 10) {
//         num = num.toString().split("").reduce((a,b) => a * b);
//     }
//     return num;
// }
// function addAndMultiply(nums) {
//     let sum = nums.reduce((a,b) => a + b);
//     return multiplydigits(sum);
// }
// document.write("Add & Multiply (16, 28)", addAndMultiply([16,28]));

// 12 done but check  may be double time//
let s1= "jaVaScrit2p"
    let s2=s1.split('').sort( ).join('');
    console.log(s2)
document.write(s2)

// 14. done 
// function largestSwap(num) {
//     let str = num.toString();
//     let swapped = str[1] + str[0];
//     return num > Number(swapped);
// }
// document.write("Largest Swap (34) ", largestSwap(34)); 
// document.write("Largest Swap (96) ", largestSwap(96));



  // may be done///////// 

// function largestSwap(num) {
//   if (num < 10 || num > 99) {
//     console.error("Input must be a two-digit number.");
//     return false; 
//   }
//   const firstDigit = Math.floor(num / 10);
//   const secondDigit = num % 10; 
//   const swappedNum = secondDigit * 10 + firstDigit;
//   return num >= swappedNum;
// }  
// const ran=(`$Is 73 the largest? ${largestSwap(37)}$`); 
//  document.write(`Is 73 the largest? ${largestSwap(37)}`);
           
//  let first = document.getElementById("second").innerHTML=(`Is 73 the largest? ${largestSwap(37)}`);
//  if(first != null) {
//     ran=(`$Is 73 the largest? ${largestSwap(37)}$`);
//     first.innerHTML = ran;
//  }
     

 // Random //
// const ages = [32, 33, 16, 40];
// document.getElementById("first").innerHTML = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }





