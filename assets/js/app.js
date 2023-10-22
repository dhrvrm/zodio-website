var pos;
document.querySelector(".scrollc").addEventListener("scroll", (e) => {
    // console.log(e.target.scrollTop)
    // console.log(e.target.scrollHeight)
    
    y = (e.target.scrollTop/e.target.scrollHeight) * 100;
    x = 90 - y;
    scale = y * 0.1;
    // console.log("2.5"+scale+"%");
   
    
    pos = x + "% " + y + "%";
    document.body.style.backgroundPosition = pos;
    if(document.documentElement.clientWidth > 900){
        document.body.style.backgroundSize = "2"+scale+"%";
    }
}
// x = ((window.scrollY / window.document.body.getBoundingClientRect().height) * 100);
// y = 90 - x;
// console.log(pos);
);