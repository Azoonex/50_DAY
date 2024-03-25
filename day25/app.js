// table-row,
// table-column,
// table-clearInterval,
// table-row-HTMLOptGroupElement,
// table-footer-HTMLOptGroupElement,
// table-header-HTMLOptGroupElement,
// tabl-coulumn-group,
// table-caption,
// run-in=? displays elemetns as either block or inline ,depeding,
// on contenxt,
// type script casting => necessary 
// --------------
// cating with as
// --------------
// change type for casting with as
// nice bro tanke you for contact in w3schools 
// content for document in typescrpt 
var xs = 'amir';
console.log(xs.length);
var x = 4;
console.log(x.length); // prints undefined since numbers don't have a length
// casting with <>
// console.log((<string>xs).length);
// let value : string | undefined | null = null
// value = 'hellow';
// wipe;he wiped his hands on a clean towel,
// weigh weigh weigh weigh how much fow you weigh
// watch watch we watched the movie in thearter
// wash wash i washed you clothes WakeLock walke 
// walke wait wait,wait,walke,wait,vote,vomite,volunteer,
// volunteer,use,unpake,unpake,type,turn,tunr,try,travel,transfer,touch,tie,touch,thanke,thanke,thanke you,tanke
// thanke,tie,taste,talk,talk,talk,swallow,
// swallow,submit,submit,swallow,study,study,study,stop,stay,
// stay,start,spell,sort,solve,slove,solve,solve,sneeze,
// sneeze,smoke,smile,smile,smell,sign,shorten,shorten,shorten,shop,shave,shave,share,shave,shorten,serve,serve,serve,==separate==,select,schedule,schedule,save,return,
// retire,retire,retire,request,request,request,request,request,return,retire,request,request,remove,remiain,remain,remain,remain,remain,remain,relax,relax,register,
// register,register,register,relax,increase,increase,
// in_crease,in_crease,increase,increase,
// register,register,register,register,register,reduce,reducer,reduce,recycle,recycle,recorde,
// raise,reaise,push,pull,protect,print,pretentm,
// press,prepare,praise
// 18:42 => start
var body = document.body;
var slides = document.querySelectorAll(".slide");
var leftBtn = document.getElementById("left");
var rightBtn = document.getElementById("right");
var activeSlide = 0;
rightBtn === null || rightBtn === void 0 ? void 0 : rightBtn.onclick = function () {
    activeSlide++;
    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    setVgToBody();
    setActiveSlide();
};
leftBtn.onclick = function () {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    setVgToBody();
    setActiveSlide();
};
setBgToBody();
function setVgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
function setActiveSlide() {
    slides.forEach(function (slide) { return slide.classList.remove('active'); });
    slides[activeSlide].classList.add('active');
}
