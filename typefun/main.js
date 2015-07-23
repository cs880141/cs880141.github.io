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

var timer, count = 60, onpause = 0;
$('#btn_start').click(function() {
    
    window.onpause = 0;
    window.timer = setInterval(function() {
        //console.log("hi, " + window.count);
        window.count -= 1;
        $('#p_timer').text("0:"+window.count); 
        checkToStop();
    }, 1000); 
    
    function checkToStop() {
        if (window.count < 1) {
            clearInterval(window.timer);
        }
    }
    
})

$('#btn_pause').click(function() {
    window.onpause = 1;
    clearInterval(window.timer);    
})


$('#btn_reset').click(function() {

    $('#p_timer').text("1:00"); 
    
    if(window.onpause == 0)
        clearInterval(window.timer);
    window.count = 60;
    
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