function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {

        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}

var floatingbtn = document.querySelector('.floatingbtn');

floatingbtn.addEventListener('click', function() {
    smoothScroll('.navbar', 1000);
});


//Footer and callout section

var WhatsappNum = document.getElementById("num");
var whatsappBtn = document.getElementById("whatsapp-btn");
var floatingbtn = document.querySelector('.floatingbtn');

whatsappBtn.addEventListener("click", function() {
    var msgBox = document.getElementById("callout");
    msgBox.style.display = "block";
});



document.getElementById('num').onclick = function() {
    navigator.clipboard.writeText(document.getElementById('num').innerText).then(function() {
        console.log('text has been copied');
        alert('Whatsapp number has been copied')
    })
}



// Hamburger Menu

// var logo = document.getElementsByClassName("logo")[0];
// logo.style.display = "none";
// console.log(logo);

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
                // logo.style.display = "block";
            } else {

                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
                // logo.style.display = "none";
            }
        });
        burger.classList.toggle('toggle');
    });



}

navSlide();




/*EXPAND IMAGE*/

function expImage(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }