// INPUT DATA
// ask for user name
const userName = prompt(
  "In order to generate a compound password, please enter your First Name:"
);
console.log(userName);
//ask for user surname
const userSurname = prompt(
  "In order to generate a compound password, please enter your Surname:"
);
console.log(userSurname);
// ask for user favourite color
const userFavColor = prompt(
  "In order to generate a compound password, please enter your favourite color:"
);
console.log(userFavColor);
// DATA ELABORATION
// generate the compund password
const generatedPassword = userName + userSurname + userFavColor + 21;
console.log(generatedPassword);
// OUTPUT DATA
// show the prompt inputs and the generated password on index.hmtl
document.getElementById("userName").innerHTML = userName;
document.getElementById("userSurname").innerHTML = userSurname;
document.getElementById("userFavColor").innerHTML = userFavColor;
document.getElementById("generatedPassword").innerHTML = generatedPassword;
