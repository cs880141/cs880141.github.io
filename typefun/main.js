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
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var timer, count = 60;
var correct, wrong;


$('#btn_start').click(function () {
    window.correct = window.wrong = 0;
    window.timer = setInterval(function() {
        //console.log("hi, " + window.count);
        window.count -= 1;
        $('#p_timer').text("0:"+window.count); 
        checkToStop();
    }, 1000); 
    
    function checkToStop() {
        if (window.count < 1) {
            clearInterval(window.timer);
            alert("correct : "+window.correct+"   wrong:"+window.wrong);
        }
    }
})

$('#btn_reset').click(function() {

    $('#p_timer').text("1:00"); 
    clearInterval(window.timer);
    window.count = 60;
    
    document.getElementById("p_alpha").style.color = "green";   
    $('#p_alpha').text(alphabet[Math.floor(Math.random()*100)%52]);
    
    window.correct = 0;
    window.wrong = 0;
   
    
})


/*
 * Event: listen to key press  body: 全域/
 */

$("body").keypress(function(event) {
    
    var which =  event.which;
   
    if(which == $("p:first").text().charCodeAt(0))
    {
        window.correct++;
        document.getElementById("p_alpha").style.color = "green";   
        $('#p_alpha').text(alphabet[Math.floor(Math.random()*100)%52]);
    }
    else
    {
         window.wrong++;
        document.getElementById("p_alpha").style.color = "red";   
    }
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