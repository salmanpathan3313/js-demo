// variables
const accountId = 12345;
let acountEmail = "salman@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";
let accountState;

// accountId = 2; //not allowed 

acountEmail = "abc@gmail.com";
accountPassword = "123";
accountCity = "bengluru";


console.table([accountId,acountEmail,accountPassword,accountCity,accountState]);

/* 
    Prefer not to use var
    Because of issue in block scope and functional scope
*/
