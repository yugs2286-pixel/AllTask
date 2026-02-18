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




