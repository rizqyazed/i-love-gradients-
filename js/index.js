var d = new Date(); // for now   
const current = d.getTime();
// increase the date by 1
d.setDate(d.getDate() + 1);
// set hours, mins, seconds to the 0 [as setHours can accepts (hours, mins, seconds, miliseconds), we can pass all the parameters at once]
d.setHours(0, 0, 0, 0);
// now currDate holds the time for midnight
const midnight = d.getTime();
// create a setTimeout function for the time difference
const diff = midnight - current;


console.log(`Code will be triggered after: ${diff}ms`);
setInterval(setGradient, diff);   

function setGradient(){   
    localStorage.setItem("c1", randomColor());
    localStorage.setItem("c2", randomColor());
    console.log(":test")
    // var first = localStorage.getItem("c1");
    // var second = localStorage.getItem("c2");
    $("body").css(
    "background", "radial-gradient(circle, #"+localStorage.getItem("c1")+" 20%, #"+ localStorage.getItem("c2")+ ")"
    );
};

function showGradient(){   
    $("body").css(
    "background", "radial-gradient(circle, #"+localStorage.getItem("c1")+" 20%, #"+ localStorage.getItem("c2")+ ")"
    );
};

function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}