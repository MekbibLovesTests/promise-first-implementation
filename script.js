console.log("hello world")
if (!Promise.first) {
  Promise.first = function(prs) {

    return new Promise(function(resolve, reject) {
      // loop through all promises
      prs.forEach(function(pr) {
        // normalize the value
        Promise.resolve(pr)
          // whichever one fulfills first wins, and
          // gets to resolve the main promise
          .then(resolve)
          });
      })
 
  };
}

var p1 = Promise.resolve(1);
var p2 = Promise.resolve(2);
var p3 = Promise.resolve(3);

Promise.first([p1,p2,p3]).then(
  function fulfilled(value){
    console.log(value)
  },
  function rejected(err){
    console.log("error")
    console.log(err);
  }
)
