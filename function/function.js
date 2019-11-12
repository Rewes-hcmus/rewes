function getRealTime() {
    var percent = new Date();
    var gio = percent.getHours();
    var phut = percent.getMinutes();
    var giay = percent.getSeconds();
    if (gio < 10)
        gio = "0" + gio;
    if (phut < 10)
        phut = "0" + phut;
    if (giay < 10)
        giay = "0" + giay;
    document.getElementById("percent").innerHTML = gio + ":" + phut + ":" + giay;
    setTimeout("getRealTime()", 1000);
}