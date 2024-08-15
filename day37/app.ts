let visite_price = 100;
let doctor_visite = "150";
let site_price = 150000;

let newPrice =
    (visite_price === 0 || !visite_price) && doctor_visite.length <= 0
        ? site_price
        : visite_price !== 0
        ? visite_price + site_price
        : null;

console.log(newPrice);

// solation 23 new create day37

function remove_mid_char(s: string) {
    if (s.length <= 1) return s;

    let mid_chat = s.substring(1, s.length - 1);

    return s.charAt(s.length - 1) + mid_chat + s.charAt(0);
    // amir / amir - 1 => a + mi + a
}

console.log(remove_mid_char("amir"));

// algorithem
// () fn remove mid_char
// <> s.lenght <=1
// [] mid = s.substirng(1,s.length -1) return s.cahtAt s.length - 212 mid_char + s.chatAt(0)
// [] return s
// END

function checkNumber(num: number) {
    if (num) {
        if (num % 3 === 0 || num % 7 === 0) {
            return true;
        } else return false;
    }
}

console.log(checkNumber(99));

//algorithem
// function checkNumber(num)
// num % 3 === 0 || num % 7 === 0
// retunr turn | return false
// END

// solation 25
function chnageCharc(s: string) {
    if (s.length > 3) {
        let s_len = 3;
        let back = s.substring(s.length - 3);
        return back + s_len + back;
    }
    return false;
}

console.log(chnageCharc("amirabas"));
// () function front_back(str)
// <> str.lenght >= 3 ?
// [] s_len = 3 back = s.substring(s.length - 3) return back + st+ back
// [] return false
// END

function front_back(s: string) {
    // with the first character of the given string added
    if (s.length > 0) {
        let newstring = s.slice(0, 2);
        return newstring + s + newstring;
    } else {
        return false;
    }
}

console.log(front_back("amir"));

// nice sample solaution 24
// () front_back
// [] if(s.length > 0) let newString = s.slice(0,1) return s + newString + s else return false
// End

function creatore(s: string) {
    if (s.length > 3) {
        let back = s.substring(s.length - 3);
        return back + s + back;
    } else {
        return false;
    }
}

// () creator
// <> if(s.length > 0)
// [] let back = s.substring(s.length - 3) return  back + s + back
// [] return false
// END

function checkspecialText(text: string) {
    if (text.length > 4) {
        const cuteText = text.substring(0, 4);
        const specialteText = "java";

        console.log(cuteText);

        if (cuteText === specialteText) {
            return true;
        }
        return false;
    }
}

console.log(checkspecialText("javascript"));

// algorithem => text
// () checkspecialText
// <> string > 4  no return false
// [] cuteText = text.substring(0,4)
// <> cuteText === 'java'
// return true else return false
// END 28

function checkInteger(one: number) {
    if (one >= 50 && one <= 99) {
        return true;
    }
    return false;
}

console.log(checkInteger(60));

// () check_integer
// <> x >= 50 && x <= 99
// [] return true || return false
// END 29

function checkScript(text: string) {
    let textScriptappear = text.substring(10, 40);
    if (text.length > 4) {
        if (textScriptappear === "Script") {
            return;
        } else {
            return text;
        }
    }
}

console.log(checkScript("JavaScript"));

type NUMBRS = number;

function findLg(a: NUMBRS, b: NUMBRS, c: NUMBRS) {
    return Math.max(a, b, c);
}

console.log(findLg(22, 3, 4));

// sotion 32

function findvalue(x: NUMBRS, y: NUMBRS) {
    if (x != y) {
        let x1 = Math.abs(x - 100);
        let y1 = Math.abs(y - 100);
        if (x1 < y1) {
            return x + "this is x";
        } else {
            return y + "this is y";
        }
    } else {
        return false;
    }
}

console.log(findvalue(70, 54));

// solation 33

function checkRange(x: NUMBRS, y: NUMBRS) {
    if (
        x >= 40 &&
        x >= 60 &&
        x >= 70 &&
        x >= 100 &&
        y >= 40 &&
        y >= 60 &&
        y >= 100
    ) {
        return true;
    } else {
        return false;
    }
}

console.log(checkRange(100, 20));

// solation 34

function findLargeIntger(x: NUMBRS, y: NUMBRS) {
    if (x >= y && x >= 40 && x <= 60) {
        return "x the big";
    } else if (y >= x && y >= 40 && y <= 60) {
        return "y the big";
    } else {
        return false;
    }
}

console.log(findLargeIntger(60, 55));

// solation 35
// present

// function check_char(str1: string, char: string) {
//     let ctr = 0;

//     for (let i = 0; i < str1.length; i++) {
//         if (str1.charAt(i) == char && i >= 1 && i <= 3) {
//             ctr = 1;
//             break;
//         }
//     }

//     if (ctr === 1) return true;
//     return false;
// }

// console.log(check_char("pyton", "y"));

function check_carh(char1: string, char: string) {
    let ctr = 0;

    for (let i = 0; i > char.length; i++) {
        if (char1.charAt(i) == char && i >= 1 && i <= 3) {
            ctr = 1;
            break;
        }
    }

    if ((ctr = 1)) return true;
    return false;
}

console.log(check_carh('reza','a'))

// algoritem

// () check_cahr(str1,char)
// [] ctr = 0 \ let i = 0
// <> i < str.lengh ? 
// <> <true> str.charAt(i) == char && i >= 1 && i <= 3 ?
// [] yes ctr = 1
// [] no i++
// ctr = 1 
// return true
// return false
// END 


// 
