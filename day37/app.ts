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

function check_digit(x: NUMBRS, y: NUMBRS, z: NUMBRS) {
    if (x > 0 && y > 0 && z > 0) {
        return x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10;
    }
    return false;
}

console.log(check_digit(20, 100, 200));
// solation 37

function produceNewString(char: string) {
    if (char.length < 3) {
        return char.toUpperCase();
    }

    let front_part = char.substring(0, 3).toLowerCase();
    let back_part = char.substring(3, char.length);

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

enum admin {
    main_admin = 33,
    admin_work = 233,
    developer = "amirabas",
}

let person: {
    name: string;
    age: number;
    about: "admin" | "manager"; // this is litral type
} = {
    name: "amirabas",
    about: "admin",
    age: 33,
};

let back_admin = admin;

console.log(back_admin.developer);

function combine(
    input1: string | number,
    input2: string | number,
    resultConnverion: "admin" | "employ"
) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    } else {
        return (resultConnverion = "admin");
    }
}
console.log(combine(22, "reza", "employ"));

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [
    5,
    true,
    "The Real Coding God",
];
// throws error as it is readonly.

console.log(ourReadonlyTuple);

const graph: [number, number] = [55.2, 41.3];

const [x, z] = graph;

console.log(x, z);

// NEW WORLD
// son / daughter daughter daughter mother father parent baby man woman brother sister family grandfater gradnmother hushbad wife king queen presiedt neighbor boy girl unmarried woman childadult adult human animal friend victim player fan crowd person
// son daughter father mother parent baby man wonman brother sister family grandfater grandmother husbad wif king quesn president president neighbor boy gril

// zero one two three four five six seven eight nine ten eleven twelve thirteen fourthtenn fifteen sixteen seventeen eightten nineteen twenty twenty one twenty two thirthy one thirthy two thirthy three forty fifty sixty one hundred one hundred one hudredd

// evaluate evaluate evaluate evaluate student's  student's across
// receivis / across / various / examinations / determine / grade /garde

function radngeEvaluate(totalMarkrs: number) {
    // if the total marks fall whitin the range of 89 to 100 (incusive ) the student receives an A+ grade

    if (totalMarkrs >= 90 && totalMarkrs <= 100) {
        return "the baset status for final-exam A+ garde";
    } else if (totalMarkrs >= 89 && totalMarkrs <= 100) {
        return "this is student receives A+ grade";
    } else {
        return false;
    }
}

console.log(radngeEvaluate(100));

// () radnageEvaluate(totalMarkes)
// <> totoal >= 90 && totoalmarkrs <= 100 return ''
// <> totoal >= 90 && totoal <= 100 return ''
// [] return false
// END
// compute compute compute

function computeIntgers(num: number): number {
    if (num >= 50 && num <= 80) {
        return 65;
    } else {
        return 80;
    }
}

console.log(computeIntgers(49));
