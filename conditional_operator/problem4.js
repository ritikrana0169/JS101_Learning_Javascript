//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let enterEmail="ritik@gmail.com";
let enterPass="ritik@pass";

let regEmail="ritik@gmail.com";
let regPass="ritik@pass";

if(enterEmail==regEmail){
  if(enterPass==regPass){
    console.log("Login successful")
  }
  else {
    console.log("Wrong password");
  }
}
else{
  console.log("Wrong credentials");
}
