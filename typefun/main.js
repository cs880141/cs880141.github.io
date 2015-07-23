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

var timer;
$('#btn_start').click(function() {

    
    var count = 60;
    window.timer = setInterval(function() {
        console.log("hi, " + count);
        count -= 1;
        $('#p_timer').text("0:"+count); 
        checkToStop();
    }, 1000); 
    
    function checkToStop() {
        if (count < 1) {
            clearInterval(window.timer);
        }
    }
    
})

$('#btn_reset').click(function() {

    $('#p_timer').text("1:00"); 
    clearInterval(window.timer);
    
})


/*
 * Event: listen to key press  body: 全域/
 */

$("body").keypress(function(event) {
    
    var which =  event.which;
    
    console.log("key pressed: "+which);       
})


/*
 * Timer
 */
/*var count = 0;
var timer = setInterval(function() {
    console.log("hi, " + count);
    window.count += 1;
    checkToStop();
}, 1000);

function checkToStop() {
    if (window.count >= 10) {
        clearInterval(window.timer);
    }
}*/