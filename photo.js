var ScaleVP = 110;
var ScaleP = "scale("+ScaleVP+")";
var RotateVP = 0;
var RotateP = "rotate("+RotateVP+"deg)";
var BlurVP = 0;
var BlurP = "blur("+BlurVP+"px)";
var GrayVP = 0;
var GrayP = "grayscale("+GrayVP+"%)";
var SaturVP = 100;
var SaturP = "saturate("+SaturVP+"%)";
var BrightVP = 100;
var BrightP = "brightness("+BrightVP+"%)";
var ContraVP = 100;
var ContraP = "contrast("+ContraVP+"%)";
var SepiaVP = 0;
var SepiaP = "sepia("+SepiaVP+"%)";
var HueVP = 0;
var HueP = "hue-rotate("+HueVP+"deg)";
document.querySelector(".imgP").style.cssText = "transform: "+ScaleP+RotateP+
"; filter: "+BlurP+GrayP+SaturP+BrightP+ContraP+SepiaP+HueP;


//Updating image
const upLoadFile = document.getElementById("upLoadFile");
const upLoadedFile = document.getElementById("upLoadedFile");
upLoadFile.addEventListener("click", function() {
    upLoadedFile.click();
});
upLoadedFile.addEventListener("change", function() {
    const photoN = document.getElementById("photoN");
    const imgUd = document.getElementById("ImgP");
    const imgURL = URL.createObjectURL(event.target.files[0]);
    imgUd.src = imgURL;
    document.querySelector(".imgP").style.cssText = "transform: "+ScaleP+RotateP+
    "; filter: "+BlurP+GrayP+SaturP+BrightP+ContraP+SepiaP+HueP;
    photoN.innerHTML = upLoadedFile.value.match (/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
});

function changeScaleP() {
    document.querySelector(".rangeP").setAttribute("type", "range");
    document.querySelector(".rangeP").setAttribute("oninput", "chScaleP()");
    document.querySelector(".rangeP").setAttribute("max", "150");
    document.querySelector(".rangeP").setAttribute("style", "display: none");
    document.querySelector(".rangeP").setAttribute("style", "display: inline-block");
    document.querySelector(".x").setAttribute("style", "display: inline-block");
    document.querySelector(".dialague").setAttribute("style","display: inline-block");
    document.querySelector(".dialague").innerHTML = ScaleVP+" - 150";
    document.querySelector(".rangeP").value = ScaleVP;
}
function chScaleP() {
    ScaleVP = document.querySelector(".rangeP").value;
    document.getElementById("resuP").innerHTML = ScaleVP+" - 150";
    ScaleP = "scale("+ScaleVP+")";
    document.querySelector(".imgP").style.cssText = "transform: "+ScaleP+RotateP+
    "; filter: "+BlurP+GrayP+SaturP+BrightP+ContraP+SepiaP+HueP;
}

function changeRotateP() {
    document.querySelector(".rangeP").setAttribute("type", "range");
    document.querySelector(".rangeP").setAttribute("oninput", "chRotateP()");
    document.querySelector(".rangeP").setAttribute("max", "180");
    document.querySelector(".rangeP").setAttribute("style", "display: inline-block");
    document.querySelector(".x").setAttribute("style", "display: inline-block");
    document.querySelector(".dialague").setAttribute("style","display: inline-block");
    document.querySelector(".dialague").innerHTML = RotateVP+"deg - 180deg";
    document.querySelector(".rangeP").value = RotateVP;
}
function chRotateP() {
    RotateVP = document.querySelector(".rangeP").value;
    document.getElementById("resuP").innerHTML = RotateVP+"deg - 180deg";
    RotateP = "rotate("+RotateVP+"deg)";
    document.querySelector(".imgP").style.cssText = "transform: "+ScaleP+RotateP+
"; filter: "+BlurP+GrayP+SaturP+BrightP+ContraP+SepiaP+HueP;
}

function changeBlurP() {
    document.querySelector(".rangeP").setAttribute("type", "range");
    document.querySelector(".rangeP").setAttribute("oninput", "chBlurP()");
    document.querySelector(".rangeP").setAttribute("max", "10");
    document.querySelector(".dialague").setAttribute("style","display: inline-block");
    document.querySelector(".rangeP").setAttribute("style", "display: inline-block");
    document.querySelector(".x").setAttribute("style", "display: inline-block");
    document.querySelector(".dialague").innerHTML = "0.01 - 0.1"
    var BlurD = document.querySelector(".dialague").innerHTML = BlurVRRP+" - 0.1";
    if (BlurD === "0.010 - 0.1") {
        document.querySelector(".dialague").innerHTML = "0.1 - 0.1";
    }
    document.querySelector(".rangeP").value = BlurVRRRP;
}
function chBlurP() {
    BlurVRRRP = document.querySelector(".rangeP").value;
    BlurVRRP = "0.0"+BlurVRRRP;
    BlurVRP = "0.0"+BlurVRRRP+"1";
    document.getElementById("resuP").innerHTML = BlurVRRP+" - 0.1";
    BlurP = "blur("+BlurVRP+"px)";
    if (BlurVRP == 0.0101) {
        document.getElementById("resuP").innerHTML = "0.1 - 0.1";
        BlurP = "blur("+0.1+"px)";
    }
    document.querySelector(".imgP").style.cssText = "transform: "+ScaleP+RotateP+
    "; filter: "+BlurP+GrayP+SaturP+BrightP+ContraP+SepiaP+HueP;
}

function changeGrayP() {
    document.querySelector(".rangeP").setAttribute("type", "range");
    document.querySelector(".rangeP").setAttribute("oninput", "chGrayP()");
    document.querySelector(".rangeP").setAttribute("max", "100");
    document.querySelector(".dialague").setAttribute("style","display: inline-block");
    document.querySelector(".rangeP").setAttribute("style", "display: inline-block");
    document.querySelector(".x").setAttribute("style", "display: inline-block");
    document.querySelector(".dialague").innerHTML = GrayVP+" - 100";
    document.querySelector(".rangeP").value = GrayVP;
}
function chGrayP() {
    GrayVP = document.querySelector(".rangeP").value;
    document.getElementById("resuP").innerHTML = GrayVP+" - 100";
    GrayP = "grayscale("+GrayVP+"%)";
    document.querySelector(".imgP").style.cssText = "transform: "+ScaleP+RotateP+
"; filter: "+BlurP+GrayP+SaturP+BrightP+ContraP+SepiaP+HueP;
}
function changeSaturateP() {
    document.querySelector(".rangeP").setAttribute("type", "range");
    document.querySelector(".rangeP").setAttribute("oninput", "chSaturateP()");
    document.querySelector(".rangeP").setAttribute("max", "200");
    document.querySelector(".dialague").setAttribute("style","display: inline-block");
    document.querySelector(".rangeP").setAttribute("style", "display: inline-block");
    document.querySelector(".x").setAttribute("style", "display: inline-block");
    document.querySelector(".dialague").innerHTML = SaturVP+" - 200";
    document.querySelector(".rangeP").value = SaturVP;
}
function chSaturateP() {
    SaturVP = document.querySelector(".rangeP").value;
    document.getElementById("resuP").innerHTML = SaturVP+" - 200";
    SaturP = "saturate("+SaturVP+"%)";
    document.querySelector(".imgP").style.cssText = "transform: "+ScaleP+RotateP+
"; filter: "+BlurP+GrayP+SaturP+BrightP+ContraP+SepiaP+HueP;
}
function changeBrightnessP() {
    document.querySelector(".rangeP").setAttribute("type", "range");
    document.querySelector(".rangeP").setAttribute("oninput", "chBrightnessP()");
    document.querySelector(".rangeP").setAttribute("max", "100");
    document.querySelector(".dialague").setAttribute("style","display: inline-block");
    document.querySelector(".rangeP").setAttribute("style", "display: inline-block");
    document.querySelector(".x").setAttribute("style", "display: inline-block");
    document.querySelector(".dialague").innerHTML = BrightVP+" - 100";
    document.querySelector(".rangeP").value = BrightVP;
}
function chBrightnessP() {
    BrightVP = document.querySelector(".rangeP").value;
    document.getElementById("resuP").innerHTML = BrightVP+" - 100";
    BrightP = "brightness("+BrightVP+"%)";
    document.querySelector(".imgP").style.cssText = "transform: "+ScaleP+RotateP+
"; filter: "+BlurP+GrayP+SaturP+BrightP+ContraP+SepiaP+HueP;
}
function changeContrastP() {
    document.querySelector(".rangeP").setAttribute("type", "range");
    document.querySelector(".rangeP").setAttribute("oninput", "chContrastP()");
    document.querySelector(".rangeP").setAttribute("max", "100");
    document.querySelector(".dialague").setAttribute("style","display: inline-block");
    document.querySelector(".rangeP").setAttribute("style", "display: inline-block");
    document.querySelector(".x").setAttribute("style", "display: inline-block");
    document.querySelector(".dialague").innerHTML = ContraVP+" - 100";
    document.querySelector(".rangeP").value = ContraVP;
}
function chContrastP() {
    ContraVP = document.querySelector(".rangeP").value;
    document.getElementById("resuP").innerHTML = ContraVP+" - 100";
    ContraP = "contrast("+ContraVP+"%)";
    document.querySelector(".imgP").style.cssText = "transform: "+ScaleP+RotateP+
"; filter: "+BlurP+GrayP+SaturP+BrightP+ContraP+SepiaP+HueP;
}
function changeSepiaP() {
    document.querySelector(".rangeP").setAttribute("type", "range");
    document.querySelector(".rangeP").setAttribute("oninput", "chSepiaP()");
    document.querySelector(".rangeP").setAttribute("max", "100");
    document.querySelector(".dialague").setAttribute("style","display: inline-block");
    document.querySelector(".rangeP").setAttribute("style", "display: inline-block");
    document.querySelector(".x").setAttribute("style", "display: inline-block");
    document.querySelector(".dialague").innerHTML = SepiaVP+" - 100";
    document.querySelector(".rangeP").value = SepiaVP;
}
function chSepiaP() {
    SepiaVP = document.querySelector(".rangeP").value;
    document.getElementById("resuP").innerHTML = SepiaVP+" - 100";
    SepiaP = "sepia("+SepiaVP+"%)";
    document.querySelector(".imgP").style.cssText = "transform: "+ScaleP+RotateP+
"; filter: "+BlurP+GrayP+SaturP+BrightP+ContraP+SepiaP+HueP;
}
function changeHueP() {
    document.querySelector(".rangeP").setAttribute("type", "range");
    document.querySelector(".rangeP").setAttribute("oninput", "chHueP()");
    document.querySelector(".rangeP").setAttribute("max", "100");
    document.querySelector(".dialague").setAttribute("style","display: inline-block");
    document.querySelector(".rangeP").setAttribute("style", "display: inline-block");
    document.querySelector(".x").setAttribute("style", "display: inline-block");
    document.querySelector(".dialague").innerHTML = HueVP+" - 100";
    document.querySelector(".rangeP").value = HueVP;
}
function chHueP() {
    HueVP = document.querySelector(".rangeP").value;
    document.getElementById("resuP").innerHTML = HueVP+" - 100";
    HueP = "hue-rotate("+HueVP+"deg)";
    document.querySelector(".imgP").style.cssText = "transform: "+ScaleP+RotateP+
"; filter: "+BlurP+GrayP+SaturP+BrightP+ContraP+SepiaP+HueP;
}

function resetP() {
    ScaleVP = 104;
    ScaleP = "scale("+ScaleVP+")";
    RotateVP = 0;
    RotateP = "rotate("+RotateVP+"deg)";
    BlurVP = 0;
    BlurP = "blur("+BlurVP+"px)";
    GrayVP = 0;
    GrayP = "grayscale("+GrayVP+"%)";
    SaturVP = 100;
    SaturP = "saturate("+SaturVP+"%)";
    BrightVP = 100;
    BrightP = "brightness("+BrightVP+"%)";
    ContraVP = 100;
    ContraP = "contrast("+ContraVP+"%)";
    SepiaVP = 0;
    SepiaP = "sepia("+SepiaVP+"%)";
    HueVP = 0;
    HueP = "hue-rotate("+HueVP+"deg)";
    document.querySelector(".imgP").style.cssText = "transform: "+ScaleP+RotateP+
    "; filter: "+BlurP+GrayP+SaturP+BrightP+ContraP+SepiaP+HueP;
    document.querySelector(".dialague").setAttribute("style", "display: none");
    document.querySelector(".rangeP").setAttribute("style", "display: none");
}

document.querySelector(".x").addEventListener("click", function() {
    document.querySelector(".dialague").setAttribute("style", "display: none");
    document.querySelector(".x").setAttribute("style", "display: none");
    document.querySelector(".rangeP").setAttribute("style", "display: none");
})