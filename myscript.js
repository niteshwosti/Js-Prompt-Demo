var myArr=[]

function addNew() {
  var newName=prompt("What name would you like to add?")
  myArr.push(newName)
}
function remove() {
  var remName=prompt("What name would you like to remove?")
  var index=myArr.indexOf(remName);
  myArr.splice(index,1)
}
function display(){
  console.log(myArr)
}

var ques = prompt("Would you like to start the application?y/n")
var request = "none"
if (ques==='y'){
  while (request!=='quit'){
    request=prompt("What would you like to do? add,remove,display or quit.")
    if (request==='add'){
      addNew();
    } else if (request==='remove') {
      remove();
    }else if (request === 'display') {
      display();
    }else{
      alert("Application Quitted!")
    }
  }
}
alert("Refresh to reload the application");
