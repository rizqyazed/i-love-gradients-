var d = new Date(); // for now  

console.log(d.getHours())

if (d.getHours() === 0) {
    console.log("CHANGE")
    setGradient();
}

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