test("Does it work?", function(){
  var attrStructure = {
    tag: "h",
    value: "i",
    attr: [{"tag": "h", value:"e"},{"tag":"l", "value":"o"}]
  };
  console.log(attrStructure);
 var result = {
    "h" : "i",
   "attr" : {
     "h" : "e",
     "l": "o"
   }
 } 
 console.log(structs);
  ok(true, "pass");
  function isEqual(obj, obj2){
    var isEq = true;
    for(attr in obj){
      if(typeof obj[attr] != "object" && typeof obj2[attr] != "object" && obj[attr] != obj2[attr]) {
        isEq = false;
      } else if (typeof obj[attr] == "object" && typeof obj2[attr] == "object")
      {
        isEq = isEqual(obj[attr], obj2[attr]);
      } else {
        isEq = false;
      }
    }
    return isEq;
  }
  ok( isEqual(structs(attrStructure), result), "structs works");
})