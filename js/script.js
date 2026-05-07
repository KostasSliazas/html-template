"use strict";
(function () {
  var main = document.getElementById('main');
  var tops = document.createElement('a');
  var toper = document.createElement('div');
  var nav = document.getElementById('nav');
  var burg = document.getElementById('burg');
  var tophead = document.getElementById('tophead');
  var wHeigh = window.innerHeight;
  var kiek = nav.children[0].children.length;
  var i;
  toper.setAttribute('id', 'toper');
  tops.setAttribute('id', 'ttop');
  tops.appendChild(document.createTextNode("TOP\u2191"));
  document.getElementsByTagName('body')[0].appendChild(toper);
  toper.appendChild(tops);

  function scrollFunction() {
    if (document.body.scrollTop > 48 || document.documentElement.scrollTop > 48) {
      tops.style.display = "block";
    } else {
      tops.style.display = "none";
    }
  }

  function toTops() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollToLink() {
    window.onscroll = function () {
      scrollFunction();
    };
  };


  setTimeout(scrollToLink(), 100);


  burg.addEventListener('click', function (e) {
    e.preventDefault();
    if (nav.offsetHeight > 0) {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'block';
    }
  });

  tops.addEventListener('click', function (e) {
    e.preventDefault();
    toTops();
  });

  var listHref = function alist() {
    for (i = 0; i < kiek; i++) {
      nav.getElementsByTagName('ul')[0].getElementsByTagName('li')[i].children[0].addEventListener('click', function (e) {
        e.preventDefault()
        var linkd = this.getAttribute('href');
        var d = 0;
        var ids = document.getElementById(linkd.slice(1)) || main;
        if (window.innerWidth <= 480) nav.style.display = 'none';
        if (window.innerWidth > 800){d = tophead.offsetHeight+24||0};
        document.body.scrollTop = ids.offsetTop - 48+d;
        document.documentElement.scrollTop = ids.offsetTop - 48+d;
        document.getElementById("burg").classList.remove("active");
      });
    }
  }();

  var slideIndex = 0;
  var myVar;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides") || null;
    if (!x) {
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {
        slideIndex = 1
      }
      x[slideIndex - 1].style.display = "block";
      myVar = setTimeout(carousel, 2000);
    }
  }
  
function classToggle() {
    this.classList.toggle('active');
}
document.querySelector('#burg').addEventListener('click', classToggle);

  function resize() {
    if (nav.style.display) {
      if (window.innerWidth > 800) {
        nav.style.display = 'block';
      } else {
        nav.style.display = 'none';
      }
    }
    toper.style.height = window.innerHeight + 'px';
  }
  window.onresize = resize;

})();
