// VARIABLES
var base_ = 'decimal';
var hex_dict = {};
hex_dict["0"] = 0;
hex_dict["1"] = 1;
hex_dict["2"] = 2;
hex_dict["3"] = 3;
hex_dict["4"] = 4;
hex_dict["5"] = 5;
hex_dict["6"] = 6;
hex_dict["7"] = 7;
hex_dict["8"] = 8;
hex_dict["9"] = 9;
hex_dict["a"] = 10;
hex_dict["b"] = 11;
hex_dict["c"] = 12;
hex_dict["d"] = 13;
hex_dict["e"] = 14;
hex_dict["f"] = 15;
var pie_ = 3.1428
var flag = 0;



function open_popup() {
    document.getElementById('bg-modal').style.display = 'flex';
}

function close_popup() {
    document.getElementById('bg-modal').style.display = 'none';
}

// BACKSPACE & CLEAR ALL
function backspace() {
    var onScreen = document.getElementById('onscreen').innerHTML;
    if (onScreen == '0') {
        console.log("No Changes Needed");
    } else {
        onScreen = onScreen.slice(0, -1);
        console.log(onScreen);
        document.getElementById('onscreen').innerHTML = onScreen;
    }
}

function clearall() {
    var onScreen = document.getElementById('onscreen').innerHTML;
    console.log("Previous Value = " + onScreen);
    onScreen = 0;
    document.getElementById('onscreen').innerHTML = onScreen;
}





// CLICKING NUMBERS
function click_0() {
    var onScreen = document.getElementById('onscreen').innerHTML;
    if ((onScreen == 0)) {
        onScreen = 0;
        document.getElementById('onscreen').innerHTML = onScreen;
    } else {
        onScreen += "0";
        console.log(onScreen);
        console.log(typeof(onScreen));
        document.getElementById('onscreen').innerHTML = onScreen;
    }
}


function click_1() {
    var onScreen = document.getElementById('onscreen').innerHTML;

    if ((onScreen == 0)) {
        onScreen = 1;
        document.getElementById('onscreen').innerHTML = onScreen;
    } else {
        onScreen += 1;
        document.getElementById('onscreen').innerHTML = onScreen;
    }
}

function click_2() {
    var onScreen = document.getElementById('onscreen').innerHTML;

    if ((onScreen == 0)) {
        onScreen = 2;
        document.getElementById('onscreen').innerHTML = onScreen;
    } else {
        onScreen += 2;
        document.getElementById('onscreen').innerHTML = onScreen;
    }
}


function click_3() {
    var onScreen = document.getElementById('onscreen').innerHTML;

    if ((onScreen == 0)) {
        onScreen = 3;
        document.getElementById('onscreen').innerHTML = onScreen;
    } else {
        onScreen += 3;
        document.getElementById('onscreen').innerHTML = onScreen;
    }
}


function click_4() {
    var onScreen = document.getElementById('onscreen').innerHTML;

    if ((onScreen == 0)) {
        onScreen = 4;
        document.getElementById('onscreen').innerHTML = onScreen;
    } else {
        onScreen += 4;
        document.getElementById('onscreen').innerHTML = onScreen;
    }
}


function click_5() {
    var onScreen = document.getElementById('onscreen').innerHTML;

    if ((onScreen == 0)) {
        onScreen = 5;
        document.getElementById('onscreen').innerHTML = onScreen;
    } else {
        onScreen += 5;
        document.getElementById('onscreen').innerHTML = onScreen;
    }
}


function click_6() {
    var onScreen = document.getElementById('onscreen').innerHTML;

    if ((onScreen == 0)) {
        onScreen = 6;
        document.getElementById('onscreen').innerHTML = onScreen;
    } else {
        onScreen += 6;
        document.getElementById('onscreen').innerHTML = onScreen;
    }
}


function click_7() {
    var onScreen = document.getElementById('onscreen').innerHTML;

    if ((onScreen == 0)) {
        onScreen = 7;
        document.getElementById('onscreen').innerHTML = onScreen;
    } else {
        onScreen += 7;
        document.getElementById('onscreen').innerHTML = onScreen;
    }
}

function click_8() {
    var onScreen = document.getElementById('onscreen').innerHTML;

    if ((onScreen == 0)) {
        onScreen = 8;
        document.getElementById('onscreen').innerHTML = onScreen;
    } else {
        onScreen += 8;
        document.getElementById('onscreen').innerHTML = onScreen;
    }
}

function click_9() {
    var onScreen = document.getElementById('onscreen').innerHTML;

    if ((onScreen == 0)) {
        onScreen = 9;
        document.getElementById('onscreen').innerHTML = onScreen;
    } else {
        onScreen += 9;
        document.getElementById('onscreen').innerHTML = onScreen;
    }
}

function click_point() {
    var onScreen = document.getElementById('onscreen').innerHTML;
    var final = onScreen;
    onScreen = onScreen.split(" ");
    console.log(onScreen);
    if (onScreen.length == 1) {
        if ((onScreen[0].indexOf(".") == -1)) {
            final += ".";
        } else {
            return;
        }
    } else {
        if ((onScreen[onScreen.length - 1].indexOf(".") == -1)) {
            final += ".";
        } else {
            return;
        }
    }
    document.getElementById('onscreen').innerHTML = final;
}


// NUMBER CONVERSIONS

function binary_conversion() {
    var onScreen = document.getElementById('onscreen').innerHTML;
    // if ((onScreen[-1] == '+') || (onScreen[-1] == '- ') || (onScreen[-1] == '* ') || (onScreen[-1] == '/ ')) {
    //     console.log(onScreen);
    //     onScreen = onScreen.slice(0, -1);
    //     console.log(onScreen);
    // }
    onScreen = Number(onScreen);
    document.getElementById('onscreen').innerHTML = onScreen.toString(2);
    base_ = 'binary';
}

function octal_conversion() {
    var onScreen = document.getElementById('onscreen').innerHTML;
    onScreen = Number(onScreen);
    document.getElementById('onscreen').innerHTML = onScreen.toString(8);
    base_ = 'octal';
}

function hex_conversion() {
    var onScreen = document.getElementById('onscreen').innerHTML;
    onScreen = Number(onScreen);
    document.getElementById('onscreen').innerHTML = onScreen.toString(16);
    base_ = 'hex';
}

function decimal_conversion() {
    var onScreen = document.getElementById('onscreen').innerHTML;
    if (onScreen.indexOf(".") != -1) {
        console.log("INN");
        console.log(onScreen.search("."));
        onScreen = onScreen.split(".");
        var before_decimal = onScreen[0];
        var after_decimal = onScreen[1];
    } else {
        before_decimal = onScreen;
        after_decimal = "0";
    }

    if (base_ == 'binary') {

        before_decimal = before_decimal.split("").reverse().join("");
        // console.log(before_decimal);
        var final = 0;
        var leng = before_decimal.length;
        for (var i = 0; i < leng; i++) {
            final += (before_decimal[i] * Math.pow(2, i));
        }
        before_decimal = final;
        var leng = after_decimal.length;
        for (var i = 1; i <= leng; i++) {
            final += (after_decimal[i - 1] * Math.pow(2, -i));
        }
        console.log(`final = ${final}`);
        document.getElementById('onscreen').innerHTML = final;
    } else if (base_ == 'octal') {
        before_decimal = before_decimal.split("").reverse().join("");
        // console.log(before_decimal);
        var final = 0;
        var leng = before_decimal.length;
        for (var i = 0; i < leng; i++) {
            final += (before_decimal[i] * Math.pow(8, i));
        }
        before_decimal = final;
        var leng = after_decimal.length;
        for (var i = 1; i <= leng; i++) {
            final += (after_decimal[i - 1] * Math.pow(8, -i));
        }
        // console.log(`final = ${final}`);
        document.getElementById('onscreen').innerHTML = final;
    } else if (base_ == 'hex') {
        before_decimal = before_decimal.split("").reverse().join("");
        // console.log(before_decimal);
        var final = 0;
        var leng = before_decimal.length;
        for (var i = 0; i < leng; i++) {
            final += (hex_dict[before_decimal[i]] * Math.pow(16, i));
        }
        // console.log(`final = ${final}`);
        var leng = after_decimal.length;
        for (var i = 1; i <= leng; i++) {
            final += (hex_dict[after_decimal[i - 1]] * Math.pow(16, -i));
        }
        // console.log(`final = ${final}`);
        document.getElementById('onscreen').innerHTML = final;
    }
    base_ = 'decimal';

}


// OPERATORS
function click_div() {
    console.log("IN DIV");
    var onScreen = document.getElementById('onscreen').innerHTML;
    var final = onScreen;
    onScreen = onScreen.split(" ");
    if (onScreen.length == 1) {
        console.log("IN INN");
        if (onScreen[0].indexOf("/") == -1) {
            console.log("In INN INNN");
            onScreen += " / ";
            final = onScreen;
        } else {
            return;
        }
    } else {
        console.log(onScreen[onScreen.length - 1]);
        if (onScreen[onScreen.length - 1].indexOf("/") == -1) {
            console.log("In INN INNN");
            final += " / ";

        } else {
            return;
        }
    }
    document.getElementById('onscreen').innerHTML = final;
}

function click_minus() {
    console.log("IN DIV");
    var onScreen = document.getElementById('onscreen').innerHTML;
    var final = onScreen;
    onScreen = onScreen.split(" ");
    if (onScreen.length == 1) {
        console.log("IN INN");
        if (onScreen[0].indexOf("-") == -1) {
            console.log("In INN INNN");
            onScreen += " - ";
            final = onScreen;
        } else {
            return;
        }
    } else {
        console.log(onScreen[onScreen.length - 1]);
        if (onScreen[onScreen.length - 1].indexOf("-") == -1) {
            console.log("In INN INNN");
            final += " - ";

        } else {
            return;
        }
    }
    document.getElementById('onscreen').innerHTML = final;
}

function click_mul() {
    console.log("IN DIV");
    var onScreen = document.getElementById('onscreen').innerHTML;
    var final = onScreen;
    onScreen = onScreen.split(" ");
    if (onScreen.length == 1) {
        console.log("IN INN");
        if (onScreen[0].indexOf("*") == -1) {
            console.log("In INN INNN");
            onScreen += " * ";
            final = onScreen;
        } else {
            return;
        }
    } else {
        console.log(onScreen[onScreen.length - 1]);
        if (onScreen[onScreen.length - 1].indexOf("*") == -1) {
            console.log("In INN INNN");
            final += " * ";

        } else {
            return;
        }
    }
    document.getElementById('onscreen').innerHTML = final;

}


function click_plus() {
    console.log("IN DIV");
    var onScreen = document.getElementById('onscreen').innerHTML;
    var final = onScreen;
    onScreen = onScreen.split(" ");
    if (onScreen.length == 1) {
        console.log("IN INN");
        if (onScreen[0].indexOf("+") == -1) {
            console.log("In INN INNN");
            onScreen += " + ";
            final = onScreen;
        } else {
            return;
        }
    } else {
        console.log(onScreen[onScreen.length - 1]);
        if (onScreen[onScreen.length - 1].indexOf("+") == -1) {
            console.log("In INN INNN");
            final += " + ";

        } else {
            return;
        }
    }
    document.getElementById('onscreen').innerHTML = final;
}

function modulus() {
    console.log("IN DIV");
    var onScreen = document.getElementById('onscreen').innerHTML;
    var final = onScreen;
    onScreen = onScreen.split(" ");
    if (onScreen.length == 1) {
        console.log("IN INN");
        if (onScreen[0].indexOf("%") == -1) {
            console.log("In INN INNN");
            onScreen += " % ";
            final = onScreen;
        } else {
            return;
        }
    } else {
        console.log(onScreen[onScreen.length - 1]);
        if (onScreen[onScreen.length - 1].indexOf("%") == -1) {
            console.log("In INN INNN");
            final += " % ";

        } else {
            return;
        }
    }
    document.getElementById('onscreen').innerHTML = final;
}


function pie() {
    if (flag == 0) {
        window.alert("NOTE: There should be a operator between number & pie");
        flag = 1;
    }
    console.log("IN DIV");
    var onScreen = document.getElementById('onscreen').innerHTML;
    var final = onScreen;
    final += (pie_);
    document.getElementById('onscreen').innerHTML = final;
}

function click_equal() {
    var onScreen = document.getElementById('onscreen').innerHTML;
    var final = onScreen.split(" ");
    console.log(final);
    document.getElementById('onscreen').innerHTML = eval(onScreen);
}