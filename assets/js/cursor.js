//Custom Cursor with JavaScript:
document.body.style.cursor = url("assets/img/Alternate.cur");



//Changing Cursor on Specific Events:
document.getElementById('myButton').addEventListener('click', function() {
    document.body.style.cursor = "crosshair";
});


//Reverting to Default Cursor:

// Set to a custom cursor
document.body.style.cursor = "pointer";

// Revert to default cursor after 5 seconds
setTimeout(function() {
    document.body.style.cursor = "default";
}, 5000);

