$(document).ready(function () {
  $("#enterprise").owlCarousel({
    center: false,
    margin: 0,
    autoplay: false,
    stagePadding: 50,
    dots: true,
    nav: true,
    loop:false,
    navRewind: false,
    navText: ["<img src='img/left.svg' alt=''>", "<img src='img/right.svg' alt=''>"],
    responsive: {
      0: {
        items: 1,
        loop: false,
        center: true,
        stagePadding: 0
      },

      767: {
        items: 1,
        stagePadding: 0,
        margin: 50,
        loop:false,
      },

      768: {
        items: 2,
        margin: 20
      },

      1024: {
        items: 3,
        margin: 20
      },

      1170: {
        items: 3,
        margin: 20
      },

      1500: {
        items: 3,
        margin: 20
      }
    }
  });

  $("#success").owlCarousel({
    loop: true,
    center: false,
    margin: 20,
    autoplay: false,
    dots: true,
    nav: true,
    navText: ["<img src='img/left.svg' alt=''>", "<img src='img/right.svg' alt=''>"],
    dotData: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
        center: true
      },

      767: {
        items: 1
      },

      768: {
        items: 2,
        margin: 20
      },

      1024: {
        items: 1,
        margin: 20
      },

      1170: {
        items: 1,
        margin: 20
      },

      1500: {
        items: 1
      }
    }
  }); 

  // $("#partner").owlCarousel({
  //   loop: true,
  //   center: false,
  //   margin: 20,
  //   autoplay: false,
  //   dots: true,
  //   nav: true,
  //   navText: ["<img src='img/left.svg' alt=''>", "<img src='img/right.svg' alt=''>"],
  //   dotData: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //       loop: true,
  //       center: true
  //     },

  //     767: {
  //       items: 1
  //     },

  //     768: {
  //       items: 2,
  //       margin: 20
  //     },

  //     1024: {
  //       items: 4,
  //       margin: 20
  //     },

  //     1170: {
  //       items: 4,
  //       margin: 20
  //     },

  //     1500: {
  //       items: 4
  //     }
  //   }
  // }); 

  $("#case-studies").owlCarousel({
    loop: true,
    center: true,
    margin: 0,
    autoplay: true,
    dots: true,
    stagePadding: 0,
    nav: true,
    navText: ["<img src='img/left.svg' alt=''>", "<img src='img/right.svg' alt=''>"],
    dotData: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
        center: true
      },

      767: {
        items: 1
      },

      768: {
        items: 1,
      },

      1024: {
        items: 1,
      },

      1170: {
        items: 1,
      },

      1500: {
        items: 1
      }
    }
  });

  $("#docs").owlCarousel({
    center: false,
    margin: 0,
    autoplay: false,
    stagePadding: 100,
    dots: true,
    nav: true,
    loop:false,
    navRewind: false,
    navText: ["<img src='img/orange-left.svg' alt=''>", "<img src='img/orange-right.svg' alt=''>"],
    responsive: {
      0: {
        items: 1,
        loop: false,
        center: true,
        stagePadding: 30
      },

      767: {
        items: 1,
        margin: 50,
        loop:false,
      },

      768: {
        items: 2,
      },

      1024: {
        items: 3,
        margin: 20
      },

      1170: {
        items: 3,
        margin: 20
      },

      1500: {
        items: 3,
        margin: 20
      }
    }
  });

  $("#case").owlCarousel({
    loop: true,
    center: false,
    margin: 0,
    autoplay: false,
    dots: true,
    nav: true,
    loop:false,
    navText: ["<img src='img/left.svg' alt=''>", "<img src='img/right.svg' alt=''>"],
    responsive: {
      0: {
        items: 1,
        loop: false,
        center: true,
      },

      767: {
        items: 1,
        margin: 50,
        loop:false,
      },

      768: {
        items: 2,
      },

      1024: {
        items: 3,
        margin: 20
      },

      1170: {
        items: 2,
        margin: 20
      },

      1500: {
        items: 2,
        margin: 20
      }
    }
  });

  $("#docCarousel").owlCarousel({
    loop: false,
    center: false,
    margin: 20,
    autoplay: false,
    dots: true,
    nav: true,
    navText: null,
    dotData: true,
    navRewind: false,
    navText: ["<img src='img/left.svg' alt=''>", "<img src='img/right.svg' alt=''>"],
    responsive: {
      0: {
        items: 1,
        loop: false,
        center: true,
        stagePadding: 0
      },

      359: {
        items: 1,
        stagePadding: 40
      },

      767: {
        items: 1
      },

      768: {
        items: 2,
        margin: 20
      },

      1024: {
        items: 4,
        stagePadding: 0
      },

      1170: {
        items: 4,
        stagePadding: 0
      },

      1500: {
        items: 4,
        stagePadding: 0
      }
    }
  }); 


  $('.owl-dot').click(function () {
    successOwl.trigger('to.owl.success', [$(this).index(), 300]);
  });

});

$(document).ready(function () {
  var bannerImage = $(".image-container img");
  $(".banner-box").mouseover(function () {
    $this = $(this);
    var img = $this.data("image");

    if (bannerImage.attr("src") != img) {
      bannerImage.fadeOut("fast", function () {
        bannerImage.attr("src", img).fadeIn("fast");
      });
    }
  });
});


$(document).ready(function() {
  let cardIndex = 0;
  const itemsLength = $('#howItWorks .small-card').find('.line-content').length;
  setInterval(
    function() {
      const lineElem = $('.how-it-works-card .small-card').eq(cardIndex);
      prevLineElem = $('.how-it-works-card .small-card').eq(`${cardIndex==0?itemsLength-1:cardIndex-1}`);
      if(cardIndex===itemsLength-1){
        cardIndex = 0;
      }
      else cardIndex++;
      prevLineElem.removeClass('active');
      lineElem.addClass('active');
    }, 6200)
});


$(".navbar-toggler").click(function() {
  $("body").toggleClass("nav-open");
  $("#main_nav").toggleClass("nav-is-open");
});

$(".close-icon").click(function () {
  $(".navbar").removeClass("header-nav-search-on");
});

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {

    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');

  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
  });
  return false;
});

function navMenu(x) {
  if (x.matches) { // If media query matches
    $(".first-nav").click(function() {
      if ($(this).children("svg").hasClass("arrow-2")) {
        $(".first-nav").children("svg").removeClass("arrow-2");
        $(this).children("svg").removeClass("arrow-2");
        $(".second-nav").children("svg").removeClass("arrow-1");

      } else {
        $(".first-nav").children("svg").removeClass("arrow-2");
        $(this).children("svg").addClass("arrow-2");
        $(".second-nav").children("svg").removeClass("arrow-1");
      }
    });

    $(".second-nav").click(function() {
      if ($(this).children("svg").hasClass("arrow-1")) {
        $(".second-nav").children("svg").removeClass("arrow-1");
        $(this).children("svg").removeClass("arrow-1");
        $(".third-nav").children("svg").removeClass("arrow-1");

      } else {
        $(".second-nav").children("svg").removeClass("arrow-1");
        $(this).children("svg").addClass("arrow-1");
        $(".third-nav").children("svg").removeClass("arrow-1");
      }
    });
  }
}

var x = window.matchMedia("(max-width: 1024px)")
navMenu(x)
x.addListener(navMenu)

$(document).on("click", ".readmore", function () {
  if ($(this).text() == "read more") {
    $(this).text("read less");
    $(this).parent().children(".more").slideDown();
  } else {
    $(this).text("read more");
    $(this).parent().children(".more").slideUp();
  }
});

$('#tab_selector').on('change', function(e) {
  $('.form-tabs li a').eq($(this).val()).tab('show');
});


jQuery(function($) {
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  $('.categories li a').each(function() {
   if (this.href === path) {
    $(this).addClass('active');
   }
  });
 });

 jQuery(function($) {
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  $('.nav-1 li a').each(function() {
   if (this.href === path) {
    $(this).addClass('active');
   }
  });
 });

 $(".toggle-password").click(function() {
  $(this).toggleClass("fa-eye fa-eye-slash");
  input = $("#password");
  if (input.attr("type") == "password") {
      input.attr("type", "text");
  } else {
      input.attr("type", "password");
  }
});

$(".toggle-sign-in-password").click(function() {
  $(this).toggleClass("fa-eye fa-eye-slash");
  input = $("#sign-password");
  if (input.attr("type") == "password") {
      input.attr("type", "text");
  } else {
      input.attr("type", "password");
  }
});


const password = false

function checkPassword() {
  var x = document.getElementById("password").value
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  // console.log(x)
  if (x.match(passw)) {
    this.password = true
    document.getElementById("passStrong").style.display = "block"
    document.getElementById("passWeak").style.display = "none"
  } else {
    this.password = false
    document.getElementById("passStrong").style.display = "none"
    document.getElementById("passWeak").style.display = "block"
  }
  // console.log(this.password)
}

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const overlaycontain = document.getElementById('overlaycontainer');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
  overlaycontain.classList.add("overlaycontainer-active");
  document.documentElement.scrollTop = 0;
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
  overlaycontain.classList.remove("overlaycontainer-active");
  document.documentElement.scrollTop = 0;
});
const checkEmail = false
const checkNumber = false
const checkWebsite = false

function emailCheck () {
  var email = document.getElementById("email").value
  var check = /\S+@\S+\.\S+/;
    if (email.match(check)) {
      this.checkEmail = true
      document.getElementById("emailtick").style.display = "block"
    } else {
      this.checkEmail = false
      document.getElementById("emailtick").style.display = "none"
    }
    // console.log(this.checkEmail)
}

function numberCheck () {
  var number = document.getElementById("number").value
  var check = /.{10,}/;
    if (number.match(check)) {
      this.checkNumber = true
      document.getElementById("numbertick").style.display = "block"
    } else {
      this.checkNumber = false
      document.getElementById("numbertick").style.display = "none"
    }
    // console.log(this.checkNumber)
}

function websiteCheck() {
  var website = document.getElementById("website").value
  var check = /\S+\.\S+/;
    if (website.match(check)) {
      this.checkWebsite = true
      document.getElementById("websitetick").style.display = "block"
    } else {
      this.checkWebsite = false
      document.getElementById("websitetick").style.display = "none"
    }
    // console.log(this.checkWebsite)
}

function cardSection() {
      $('.ent-form').css('display','none');
      $('.ent-card').addClass('animated fadeInRight').css('display','block');
  }

  function success(){
    $('.ent-card').addClass('animated fadeInRight').css('display','none');
    $('.ent-success').addClass('animated fadeInRight').css('display','block');
  }

$("#back").click(function() {
  $('.ent-form').addClass("animated").css('display','block');
  $('.ent-card').removeClass('animated fadeInRight').css('display','none');
});


// const date = new Date();
// console.log(date);
var selectedDate = date;
var selectedDayBlock = null;

const renderCalendar = () => {
  date.setDate(1);
  // console.log(date);
  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  // console.log(lastDay, 'last Day');

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const total = firstDayIndex + lastDay

  // console.log(total);
  
  const remaining = (total%7)? 7 - (total%7): 0
  // console.log('rem',remaining);
  const nextDays = 7 - lastDayIndex - 1;

  // console.log('previous last day',prevLastDay,'first day index', firstDayIndex, 'lastdayIndex',lastDayIndex)

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector("#para").innerHTML = new Date().toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    weekday:"long"
  });

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      (i === new Date().getDate()) 
    ) {
      days += `<div class="today dates">${i}</div>`;
      if(date.getMonth() !== new Date().getMonth()){
        let dateToBeDisplayed= date.setDate(selectedDate.getDate()<= i? i :selectedDate.getDate());
         document.querySelector("#para").innerHTML = new Date(dateToBeDisplayed).toLocaleString("en-US", {
          day: "numeric",
          month: "long",
          weekday:"long"
        });
      }
    } 
    else if (i< new Date().getDate() && date.getMonth() === new Date().getMonth ) {
      days += `<div class="prev-date">${i}</div>`;
    }
    else {
      days += `<div class="dates">${i}</div>`;
    }
  }

  for (let j = 1; j <= remaining; j++) {
    days += `<div class="next-date">${j}</div>`;    
  }

  monthDays.innerHTML = days;
};

  document.querySelector(".days").addEventListener("click", (e) => {

  // console.log(document.querySelector(".today").classList.remove("today"));
  if (!e.target.classList.contains("dates")) {
    return;
 }

 selectedDayBlock=e.target

 selectedDayBlock.classList.add("today");
 
 selectedDate = new Date(date.getFullYear(), date.getMonth(), parseInt(e.target.innerHTML));
 
  Date.prototype.toIsoString = function() {
    var tzo = -this.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function(num) {
            var norm = Math.floor(Math.abs(num));
            return (norm < 10 ? '0' : '') + norm;
        };
    return this.getFullYear() +
        '-' + pad(this.getMonth() + 1) +
        '-' + pad(this.getDate()) +
        'T' + pad(this.getHours()) +
        ':' + pad(this.getMinutes()) +
        ':' + pad(this.getSeconds()) +
        dif + pad(tzo / 60) +
        ':' + pad(tzo % 60);
  }
 
// add 30 minute time slot 
 let toDateTime = new Date(selectedDate.getTime() + (30 * 60 * 1000));
 localStorage.setItem("fromDateTime", new Date(selectedDate).toIsoString());
 localStorage.setItem("toDateTime", new Date(toDateTime).toIsoString());
 
//  console.log(selectedDate,"selected date when date");

 document.getElementById("para").innerHTML = selectedDate.toLocaleString(undefined, {
  day: "numeric",
  month: "long",
  weekday:"long"
});
})

document.querySelector(".prev").addEventListener("click", () => {
  // console.log(selectedDate)
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

// var elts = document.getElementsByClassName('namevalue').innerHTML
// // var elts = document.getElementsByClassName('namevalue');
// for (var i = 0; i < elts.length; ++i) {
//     alert(elts[i].innerHTML);
// }

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

// Function to validate mobile number format
function validateMobile(mobile) {
  const mobileRegex = /^\d{10}$/;
  return mobileRegex.test(mobile);
}

function resetForm() {
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('city').value = '';
  document.getElementById('mobile').value = '';
  document.getElementById('company').value = '';
  document.getElementById('datetime').value = '';
  document.getElementById('background').value = '';
}
// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve form data
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var city = document.getElementById('city').value;
  var mobile = document.getElementById('mobile').value;
  var company = document.getElementById('company').value;
  var datetime = document.getElementById('datetime').value;
  var background = document.getElementById('background').value;

  // Validate form data
  if (!firstName || !lastName || !email || !city || !mobile || !company || !datetime || !background) {
    alert('Please fill in all required fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!validateMobile(mobile)) {
    alert('Please enter a valid mobile number.');
    return;
  }

  // Create data object to send
  var data = {
    firsyName: firstName,
    lastName:lastName,
    email: email,
    city: city,
    mobile: mobile,
    company: company,
    datetime: datetime,
    background: background
  };

  // Make API call
  fetch('https://w2xd4643u7tzkqwxt7asj44igy0hucyq.lambda-url.us-east-1.on.aws/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .then(function(data) {
      // Handle the response data
      // console.log(data);
      alert('Someone from Kitsune will be in touch with you shortly.');
      resetForm();
    })
    .catch(function(error) {
      // Handle any errors that occurred during the request
      // console.error('Error:', error);
      alert('An error occurred. Please try again.');
    });
}

// Add form submission event listener
document.getElementById('schedule-a-demo').addEventListener('submit', handleSubmit);


