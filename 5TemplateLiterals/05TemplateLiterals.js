// ********  Usage of Template Literals ***********
//                     ${}
let username = "baris"
const DOMAIN = "gmail.com"

let email = username + "@" + DOMAIN

console.log("Hello ", username, ", welcome our website.", " Your e-mail address is ",email)

let info = `Hello ${username}, welcome our website.. 
Your e-mail address is ${email}
Length of your e-mail address is ${email.length}
The time is ${new Date().getHours()}
 `

 console.log(info)