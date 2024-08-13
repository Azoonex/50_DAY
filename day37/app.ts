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
    let textScriptappear = text.substring(10,40);
    if (text.length > 4) {
        if (textScriptappear === "Script") {
            return ;
        } else {
            return text;
        }
    }
}

console.log(checkScript("JavaScript"));

// new world
// loud => 
// the man 's voice was so loud that we all could hear him
// nervous => adj nervous 
// the boy become nervous when he heard the news
// noise => the crying baby made a loud noise
// project => 
// his oafternoon work project was to parint th room green
// scare => scare my uncle was scard by what he saw in the room
// scret => the two boys were sharing a scret 
// shout => my boss shouted at me becomse i was late for work
// my boss shouted at me because i was late for work
// smell the two frends smellded the flower
// smell the two frinds smellded the flower
// terrible => the way he treated his clasmate was terrible
// the way he treated his classmate was trrible
// worse business was worse thiss month than last month 