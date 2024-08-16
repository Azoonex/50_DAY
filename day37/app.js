var visite_price = 100;
var doctor_visite = "150";
var site_price = 150000;
var newPrice = (visite_price === 0 || !visite_price) && doctor_visite.length <= 0
    ? site_price
    : visite_price !== 0
        ? visite_price + site_price
        : null;
console.log(newPrice);
// solation 23 new create day37
function remove_mid_char(s) {
    if (s.length <= 1)
        return s;
    var mid_chat = s.substring(1, s.length - 1);
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
function checkNumber(num) {
    if (num) {
        if (num % 3 === 0 || num % 7 === 0) {
            return true;
        }
        else
            return false;
    }
}
console.log(checkNumber(99));
//algorithem
// function checkNumber(num)
// num % 3 === 0 || num % 7 === 0
// retunr turn | return false
// END
// solation 25
function chnageCharc(s) {
    if (s.length > 3) {
        var s_len = 3;
        var back = s.substring(s.length - 3);
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
function front_back(s) {
    // with the first character of the given string added
    if (s.length > 0) {
        var newstring = s.slice(0, 2);
        return newstring + s + newstring;
    }
    else {
        return false;
    }
}
console.log(front_back("amir"));
// nice sample solaution 24
// () front_back
// [] if(s.length > 0) let newString = s.slice(0,1) return s + newString + s else return false
// End
function creatore(s) {
    if (s.length > 3) {
        var back = s.substring(s.length - 3);
        return back + s + back;
    }
    else {
        return false;
    }
}
// () creator
// <> if(s.length > 0)
// [] let back = s.substring(s.length - 3) return  back + s + back
// [] return false
// END
function checkspecialText(text) {
    if (text.length > 4) {
        var cuteText = text.substring(0, 4);
        var specialteText = "java";
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
function checkInteger(one) {
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
function checkScript(text) {
    var textScriptappear = text.substring(10, 40);
    if (text.length > 4) {
        if (textScriptappear === "Script") {
            return;
        }
        else {
            return text;
        }
    }
}
console.log(checkScript("JavaScript"));
function findLg(a, b, c) {
    return Math.max(a, b, c);
}
console.log(findLg(22, 3, 4));
// sotion 32
function findvalue(x, y) {
    if (x != y) {
        var x1 = Math.abs(x - 100);
        var y1 = Math.abs(y - 100);
        if (x1 < y1) {
            return x + "this is x";
        }
        else {
            return y + "this is y";
        }
    }
    else {
        return false;
    }
}
console.log(findvalue(70, 54));
// solation 33
function checkRange(x, y) {
    if (x >= 40 &&
        x >= 60 &&
        x >= 70 &&
        x >= 100 &&
        y >= 40 &&
        y >= 60 &&
        y >= 100) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkRange(100, 20));
// solation 34
function findLargeIntger(x, y) {
    if (x >= y && x >= 40 && x <= 60) {
        return "x the big";
    }
    else if (y >= x && y >= 40 && y <= 60) {
        return "y the big";
    }
    else {
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
function check_carh(char1, char) {
    var ctr = 0;
    for (var i = 0; i > char.length; i++) {
        if (char1.charAt(i) == char && i >= 1 && i <= 3) {
            ctr = 1;
            break;
        }
    }
    if ((ctr = 1))
        return true;
    return false;
}
console.log(check_carh("reza", "a"));
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
// solation 36
// check whether the last digit of the three given postitive integers is same
// function check_digit(x: NUMBRS, y: NUMBRS, z: NUMBRS) {
//     if (x > 0 && y > 0 && z > 0) {
//         return x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10;
//     }
//     return false;
// }
// console.log(check_digit(500, 300, 200));
function check_digit(x, y, z) {
    if (x > 0 && y > 0 && z > 0) {
        return x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10;
    }
    return false;
}
console.log(check_digit(20, 100, 200));
// solation 37
function produceNewString(char) {
    if (char.length < 3) {
        return char.toUpperCase();
    }
    var front_part = char.substring(0, 3).toLowerCase();
    var back_part = char.substring(3, char.length);
    return front_part + back_part;
}
console.log(produceNewString("re"));
// () productnewstring
// <> strong.lenght < 3 ?
// [] front char.substring(0,3).toLowerCase()
// [] back_part char.substring(3,cghar.lentgth);
//  return char.toUppperCase()
// END
// new World
// had laboratory laboratory laboratory laboratory but she had ni idea what was in it had idea what was in it her ded always closed and loced the door when he want in.she knew that he used it to do project for work she knew that he used it to do porject for work. he never he never told mida what these project were . One night  mia approached  approached approached the  door to the laboratory she stopped and thought she stopped and thought i wonader what crazy experment he is doing now . creay expermient he is doing now suddenly she head  a louid noise it sanded like snaded like an evil laugh the noise scard her so she walked so shed walked quickly back to her room the next night her friedn liz came to her house cmae to her house came to her house came to her house liz house to her house.
// when liz arrived mia told her about the night befor . mia told her about the night befor wehn liz arrived mia told her about the night befor oh it was terrible it was terrible she said whey dont was see what is in there why dont we see what is in there ? liz asked  ? it will he a fun adventure adventure adventure adventur adventured mia felt nervous about going into her father laboratory . but shed agreed . but she argreed .As always the door was locked the waited unit untied mia fater left hte laboratory to eat dinner 'he didnt lock the door !' liz siad . lets got. the laboratory was dark the grils walked waked carfully mia lsmelled strage chemicals / what terriblething was herfather creating ? sunddonly they heard an evil laugh  / it was even wars than the on mid heard the night before what if a monster was going to kill them ? mia had to do somthing she she shouted for help . mias fater run info the room and turned on the lights . oh no he siad you must have learned my scret ? you mean this he hod a pretty doll in his hands . the doll laughed the laugh didont sound so evil anymore.i made this for you brighday i wanted to given it to you then but you can have it now i hope you like it !
// finsh course english 6 => now => 7
// united => تا / they waited => منتظر شدن تا  / walked down =>  رفتن پایین  / sunddonly => یهو
// enume
// tuple
var admin;
(function (admin) {
    admin[admin["main_admin"] = 33] = "main_admin";
    admin[admin["admin_work"] = 233] = "admin_work";
    admin["developer"] = "amirabas";
})(admin || (admin = {}));
var person = {
    name: "amirabas",
    about: "admin",
    age: 33,
};
var back_admin = admin;
console.log(back_admin.developer);
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
