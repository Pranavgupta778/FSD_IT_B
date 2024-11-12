const map=new Map([
    ["key1","js"],
    [123,"java"],
    [234,300],
    ["lang1","go"]
]);
console.log(map.get(123));
console.log(map.get("key1"));
map.set("key2","js");
console.log(map);