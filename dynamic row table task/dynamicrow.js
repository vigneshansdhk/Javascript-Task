
var options =
[

[
    value =  1,
    text  = "pravin",
    rate   = 20,
    percentage = 24
 ],
 
 [
    
    value =  2,
    text  = "ram",
    rate   = 30,
    percentage = 25
 ],
 
 [
    
    value =  3,
    text  = "vicky",
    rate   = 40,
    percentage = 26
 ]
];



var selectBox = document.getElementById('rec_mode');

for(var i = 0; i < options.length; i++){
  var option = options[i];
  selectBox.options.add( new Option(option[1], option[0]) );
}

function rateqty(total){
   
           if(total.value == '1'){
                document.getElementById('rate').value= options[0][2];
                document.getElementById('percentage').value= options[0][3];
           }else if(total.value == '2'){
                document.getElementById('rate').value= options[1][2];
                document.getElementById('percentage').value= options[1][3];
            }else if(total.value == '3'){
                document.getElementById('rate').value= options[2][2];
                document.getElementById('percentage').value= options[2][3];
            }
} 