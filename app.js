// Smooth scroll section

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

var about = document.querySelector('.secAbout');
var contact = document.querySelector('.secContact');
var floatingbtn = document.querySelector('.floatingbtn');

about.addEventListener('click', function() {
    smoothScroll('.about', 1000);
});

contact.addEventListener('click', function() {
    smoothScroll('.contact', 1000);
});


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


floatingbtn.addEventListener('click', function() {
    smoothScroll('.navbar', 1000);
});


document.getElementById('num').onclick = function() {
    navigator.clipboard.writeText(document.getElementById('num').innerText).then(function() {
        console.log('text has been copied');
        alert('Whatsapp number has been copied')
    })
}

//Contact Section

document.querySelector(".contact-box").addEventListener("submit",
    submitForm);

function submitForm(e) {
    e.preventDefault();
    console.log("submit");
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    // console.log(name, email, message);

    sendEmail(name, email, message);
}


function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'leogoliath.alias@gmail.com',
        Password: "lmqatdefdpvbmaen",
        To: 'leogoliath.alias@gmail.com',
        From: 'leogoliath.alias@gmail.com',
        Subject: `${name} has sent a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/><br/> Message: ${message}`,
    }).then((message) => alert("mail sent successfully"))
}


// Hamburger Menu

var logo = document.getElementsByClassName("logo")[0];
// logo.style.display = "none";
console.log(logo);

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
                logo.style.display = "block";
            } else {

                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
                logo.style.display = "none";
            }
        });
        burger.classList.toggle('toggle');
    });



}

navSlide();