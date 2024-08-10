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

    let mid_chat = s.substring(1,s.length -1 )

    return (s.charAt(s.length - 1)) + mid_chat + s.charAt(0)
    // amir / amir - 1 => a + mi + a

}

console.log(remove_mid_char('amir'))

// algorithem
// () fn remove mid_char
// <> s.lenght <=1 
// [] mid = s.substirng(1,s.length -1) return s.cahtAt s.length - 212 mid_char + s.chatAt(0)
// [] return s
// END
