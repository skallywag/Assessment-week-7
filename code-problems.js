//Problem #1
function addToZero(){

}

addToZero([1, 2, 3, -2])






//Problem #2
function unique(str){
    for (var i = 0; i < str.length; i++) {
      if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
        return false; 
      }
    }
  return true;
}

unique('Moonday')
unique('Monday')

//Problem #3
function isPangram(sentence){
    let alphabetReg = /^[A-Za-z ]+$/
    
}

isPangram('Dogs are cooler than cats')












//Problem #4

function longestWord(arr){
    return arr.sort((a ,b) => (b.length - a.length))[0]
  }

  longestWord(['sam', 'samuel', 'oogahboogah'])


function longestWord(arr){
    let word = arr.sort((a ,b) => {
       return b.length - a.length
     }) 
     return word[0]
   }
   
   longestWord(['sam', 'samuel', 'oogahboogah'])