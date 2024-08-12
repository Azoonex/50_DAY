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
console.log(front_back('amir'));
// nice sample solaution 24
