const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

//  document.getElementById('create');
// if(!create){
//     alert("all fields are required");
// }
// if(main){
//     alert("submission successful");
// }

// document.getElementById('main').addEventListener('submit', function (event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const formObject = Object.fromEntries(formData.entries());
//   console.log(formObject);
  
// });

// const myForm = document.getElementById('main');
// myForm.addEventListener('submit', function (event) {
//      event.preventDefault();

//     const formData = new FormData(main);
//      const dataObject = {};
//      formData.forEach((value, key) => {
//        dataObject[key] = value;
//       });
//       const passwordInput = document.getElementById("pass");
//       const conpasswordInput = document.getElementById("con");
//       if (pass.value != con.value) { 
//          alert("Your password and confirmation password do not match."); 
//       }
//       const NameInput = document.getElementById("Name");
//       const Name2Input = document.getElementById("Name2");

//       if(dataObject.value ===""){
//     alert("all fields are required");
//   } 

//       const passwordValue = passwordInput.value;
//       const conpasswordValue = conpasswordInput.value;
//       const NameValue = NameInput.value;
//       const Name2Value = Name2Input.value; 

//       console.log("Name:", NameValue);
//             console.log("Name2:", Name2Value);
//       console.log("Password:", passwordValue);
//       console.log("ConPassword:", conpasswordValue);


//      console.log('Form Data:', dataObject);
      
//       // console.log('Password:', dataObject['password']);
//       // console.log('Confirm Password:', dataObject['confirm_password']);
//     });

    // let formData= Document.getElementById('main');
    // formData.addEventListener('submit', function(event){
    //     event.preventDefault();
    //     alert("form submitted successfully");
    // });
    
//     function validateForm() {
//     const usernameInput = document.getElementsByClassName('color');
//     const errorMessage = document.getElementById('mail');
//     // const usernameValue = usernameInput.value.trim();

//     if (usernameInput === '') {
//          alert('Error: The username field cannot be empty!');
//         console.log('Error: The username field cannot be empty!');
//          errorMessage.textContent = 'This field is required.';
//         // errorMessage.style.display = 'block';

//          return false; 
//     } 
//     else {
//          errorMessage.style.display = 'none';

//         alert('Form submitted successfully!');
//         return true; 
//     }
// }



//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyDAVIDlPVXwqtAcbK2FJyGppkK54e155sE",
//   authDomain: "data-storee.firebaseapp.com",
//   databaseURL: "https://data-storee-default-rtdb.firebaseio.com",
//   projectId: "data-storee",
//   storageBucket: "data-storee.firebasestorage.app",
//   messagingSenderId: "574860924786",
//   appId: "1:574860924786:web:1483615b832a3b00b1afeb"
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);


// document.querySelector(".create").addEventListener("click", function (e) {
//   e.preventDefault();

//   const fname = document.getElementById("fname").value;
//   const lname = document.getElementById("lname").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   const gender = document.querySelector('input[name="gender"]:checked')?.value || "";

//   const hobbies = [];
//   if (document.getElementById("music").checked) hobbies.push("Music");
//   if (document.getElementById("sports").checked) hobbies.push("Sports");
//   if (document.getElementById("travel").checked) hobbies.push("Travel");
//   if (document.getElementById("movies").checked) hobbies.push("Movies");

//   const incomeRange = document.getElementById("range").value;
//   const age = document.getElementById("number").value;
//   const bio = document.querySelector("textarea").value;



  
//   push(ref(database, "users"), {       
//     firstName: fname,
//     lastName: lname,
//     email: email,
//     password: password,
//     gender: gender,
//     hobbies: hobbies,
//     income: incomeRange,
//     age: age,
//     bio: bio
//   })
//   .then(() => {
//     alert("Data saved successfully");
//     document.getElementById("form").reset();
//   })
//   .catch((error) => {
//     alert("Error: " + error.message);
//   });
// });
