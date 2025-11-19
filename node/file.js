const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);


// //sync cll....
// fs.writeFileSync('./text.txt','helow world' )

//async call...
// fs.writeFile('./text.txt','hello world with sync', (err) =>{})

// const result = fs.readFileSync("./contacts.txt", "utf8");
// console.log(result);

// fs.readFile("./contact.txt","utf8",(err, result)=>{
//     if(err){
//        console.log("Error",err);
        
//     }
//     else{
//         console.log(result);
        
//     }
// })

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString())
fs.appendFileSync("./test.txt", `${Date.now( )}hey there\n`)

