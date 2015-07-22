console.log("main.js hello");

var x = 1;

while(x < 100)
{
    console.log(x);
    x*=2;
}

function fab(x)
{
    if(x==1 || x==2)
        return 1;
    return fab(x-1)+fab(x-2); 
}

for(var i=1; i<=10 ; i++)
{
    console.log(i+":"+fab(i));   
    
}

/*
 * Event: button on click
 */


/*
$('#myButton').click(function() {
    //get
    var inputText = $('#input').val();
    console.log("get text: " + inputText);
    
    //put
    var outputField = $('#output');
    outputField.text(inputText);
    
})
*/

$('#myButton').click(function() {
    //get
    var n = parseInt($('#input').val()); //int
    console.log("n = " + n);
    
    //put
    var outputField = $('#output'); //p object
    var output = "";
    for(var i = 1; i <= n; i++)
    {
        var temp = "";
        for(var j = 1; j <= i; j++)
        {
               temp += "*";
        }
        temp += '<br/>';
        output += temp;
            
    }

    outputField.html(output); //!!!!html
    
})

/*
 * Event: listen to key press  body: 全域/
 */

$("body").keypress(function(event) {
    
    var which =  event.which;
    
    console.log("key pressed: "+which);       
})