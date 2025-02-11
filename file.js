const fs = require("node:fs");
function myReadfile(){
try{
const data= fs.readFileSync("dummy.txt");
console.log("file data:",data.toString());
}
catch(err){
    console.log("file reading error:",err.message);
}
}
const mywriteFile=(data)=>{
    try{
        fs.writeFileSync("dummy.txt",data);
        console.log("Succesfull write file");
    }
    catch{
        console.log("file writing error:",err.message);
    }
}
const myAppendfile=()=>{
    try{
        fs.appendFileSync("dummy.txt",data);
        console.log("append data successfully");
    }
    catch(err){
        console.log("file writing error:",err.message);
    }
}
const myDeletefile=(filename)=>{
    try{
        fs.unlinkSync(filename);
        console.log("successfull",filename);
    }
    catch(err){
        console.log("file delete",err.message);
    }
}
/*myReadfile();
const data="jai shree ram";
myAppendfile(data);
myReadfile();
myDeletefile("dummy.txt");
myReadfile();*/
module.exports={
    myReadfile:myReadfile,
    myAppendfile:myAppendfile,
    myDeletefile:myDeletefile,
    mywriteFile:mywriteFile,
    username:"PG",
}