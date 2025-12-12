// Cookie-related functions
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function checkCookie(name) {
    var cookie = getCookie(name);
    return cookie !== null;
}

// Check if the user has visited before and set a cookie if not
if (!checkCookie("visited")) {
    setCookie("visited", "true", 365);
}

// Button click event handler
const btn = document.getElementById("btn")!;

btn.onclick = () => {
    // Get the user identifier from the cookie
    const newUser = getCookie("name");
    const getBackendUrd = "backendsendurl"

    // Generate the QR code URL including the user identifier
    const newPageURL = `https://hix/proral/invoice/${getBackendUrd}` + newUser;

    // Create a new QR code instance with the generated URL
    new QRCode(document.getElementById("qrcode"), {
        text: newPageURL,
        width: 128,
        height: 128,
        colorDark: "#000",
        colorLight: "#fff",
        correctLevel: QRCode.CorrectLevel.H,
    });
};
