 var el = document.getElementById("row")
 console.log(el.scrollLeft)

 const animateScroll = (el, scrollLength, speed, where) => {
     var start = 0
     const scrol = setInterval(function () {
         start += 5
         where === "right" ? el.scrollLeft += 5 : el.scrollLeft -= 5

         if (start >= 130) {
             start += 5
             where === "right" ? el.scrollLeft += 5: el.scrollLeft -= 5
         }

         if (start >= scrollLength) {
             clearInterval(scrol)
         }
     }, speed)
 }

 function goRight() {
     animateScroll(el, 800, 1, "right")
 }

 function goLeft() {
     animateScroll(el, 800, 1, "left")
 }