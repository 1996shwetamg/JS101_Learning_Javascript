//the below info is stored in database
let database_username = "xyz123@gmail.com";
let database_password = "xyz123";
//the below info is username and password
let username = "xyz123@gmail.com";
let password = "123";
if (database_username == username) {
  if (database_password == password) {
    console.log("login successfull");
  }
  else {
    console.log("wrong password");
  }
}
else {
  console.log("wrong credentials");
}