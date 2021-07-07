function getNumber(num){
  var result = document.getElementById('result')
     result.value += num

}
function clearResult (){
  var clearResult = document.getElementById('result')
   result.value= ''
}

function getResult(){
    var getResult = document.getElementById('result');
    result.value = eval(result.value)
}
