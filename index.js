// console.log("hello world");
// console.log("CHECKING DIRECTORY:"+ __dirname);



// const cal = require("./myModule")


// console.log(cal.add(10,20))

// console.log(cal.sub(100,10));

// const{add, sub} = require("./myModule")

// console.log(add(2,3));
// console.log(sub(5,1));

// const { v4: uuidv4 } =require("uuid")

// console.log(uuidv4());

// const os = require("os")
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.homedir());

const fs = require("fs")

fs.writeFileSync("test.js", "conso.log('hello world')")

fs.writeFile("test.html", "<h2>hello from outside</h2>", (err, data)=>{
    if (err){
        
        console.log("Error while writing");
    }
    console.log(data);
})

// fs.readFile("test.js", (err, data)=>{
//     if(err) throw err

//     console.log(data.toString());
// })


// fs.readFile("test.js", "utf-8", (err, data)=>{
//     if(err) throw err

//     console.log(data);
// })
