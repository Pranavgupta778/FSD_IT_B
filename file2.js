const {myReadfile, mywriteFile, myAppendfile, myDeletefile, username}=require("./file")
myReadfile();
const data=" ws wd";
mywriteFile(data);
myReadfile();
myAppendfile(data);
myAppendfile();
myDeletefile("dummy,txt");
console.log("username:",username);