document.addEventListener(
  "DOMContentLoaded",
  function() {
    // Animation & Scroll //////////////////////////////////////////////////////////
    let headerLocation = document.querySelector(".header").offsetTop;
    let header = document.querySelector(".header");
    let headerContent = document.querySelector(".header__content");
    let headerButtonLink = document.querySelectorAll(
      ".header__button--link"
    );

    let navLocation = document.querySelector(".nav").offsetTop;
    let nav = document.querySelector(".nav");
    let navLink = document.querySelectorAll(".nav__nav--link");
    let navMobile = document.querySelector(".nav__mobile");
    let navNav = document.querySelector(".nav__nav");

    let serviceLocation = document.querySelector(".service").offsetTop;
    let serviceTitle = document.querySelector(".service__title");
    let serviceItem = document.getElementsByClassName("service__item");

    let quotesLocation = document.querySelector(".quotes").offsetTop;

    let introduceLocation = document.querySelector(".introduce").offsetTop;
    let introduceTitle = document.querySelector(".introduce__title");
    let introduceDesc = document.querySelector(".introduce__desc");
    let introduceItem = document.getElementsByClassName("introduce__item");

    let chartLocation = document.querySelector(".chart").offsetTop;

    let statisticLocation = document.querySelector(".statistic").offsetTop;

    let processLocation = document.querySelector(".process").offsetTop;
    let processTitle = document.querySelector(".process__title");
    let processLine = document.querySelector(".process__line");
    let processItem = document.getElementsByClassName("process__item");

    let mapLocation = document.querySelector(".map").offsetTop;

    let logoList = document.querySelector(".logo__list");
    let logoItem = document.querySelectorAll(".logo__item").length - 4;

    // Header zoomIn, animatedBackground
    header.classList.add("animatedBackground");
    setTimeout(function() {
      headerContent.classList.add("zoomIn");
    }, 1000);
    setTimeout(function() {
      headerButtonLink[0].classList.add("bounceInLeft");
      headerButtonLink[1].classList.add("bounceInRight");
    }, 1500);
    // Active header__button--link 
    // 0:Xem thêm // 4:Liên Hệ
    headerButtonLink[0].addEventListener("click", function() {
      navLink[4].classList.remove("activenav"); // Liên Hệ
      navLink[0].classList.add("activenav"); // Xem Thêm
    });
    headerButtonLink[1].addEventListener("click", function() {
      navLink[0].classList.remove("activenav");
      navLink[4].classList.add("activenav");
    });
    // End Header ////////////////////////////////////////////////
    let wrapper = document.querySelector(".wrapper");
    // nav__mobile click 
    navMobile.addEventListener("click",function(){
      // wrapper.classList.toggle("movewrapper");
      navNav.classList.toggle("is-active");
    })
    // Scroll page
    window.addEventListener("scroll", function() {
      let scroll = window.pageYOffset;
      // nav ////////////////////////////////////////////////
      if (scroll > navLocation) {
        nav.classList.add("navscroll");
      } else {
        nav.classList.remove("navscroll");
      }
      for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener("click", function() {
          navLink[i].classList.add("activenav");
          for (let j = 0; j < navLink.length; j++) {
            if (j != i) {
              navLink[j].classList.remove("activenav");
            }
          }
        });
      }
      // service ////////////////////////////////////////////////
      if (scroll > serviceLocation / 2 && scroll < quotesLocation) {
        serviceTitle.classList.add("fadeIn");
        let i = 0;
        let j = 1;
        function loop() {
          setTimeout(function() {
            serviceItem[i].classList.add("fadeInUp");
            serviceItem[j].classList.add("fadeInUp");
            i += 2;
            j += 2;
            if (j < serviceItem.length) {
              loop();
            }
          }, 500);
        }
        loop();
      }
      // introduce ////////////////////////////////////////////////
      if (scroll > quotesLocation - 200 && scroll < chartLocation) {
        introduceTitle.classList.add("fadeIn");
        introduceDesc.classList.add("fadeIn");
        let i = 0;
        function loop() {
          setTimeout(function() {
            introduceItem[i].classList.add("fadeInUp");
            i++;
            if (i < introduceItem.length) {
              loop();
            }
          }, 500);
        }
        loop();
      }
      // process ////////////////////////////////////////////////
      if (scroll > statisticLocation && scroll < mapLocation - 500) {
        processTitle.classList.add("fadeIn");
        processLine.classList.add("fadeInDown");
        let i = 0;
        function loop() {
          setTimeout(function() {
            processItem[i].classList.add("fadeInDown");
            i++;
            if (i < processItem.length) {
              loop();
            }
          }, 500);
        }
        loop();
      }
    });
    // End Animation and Scroll //////////////////////////////////////////////////////////

    // Auto Logo Slider ////////////////////////////////////////////////
    let activeLogoItem = 0;
    function logo() {
      setTimeout(function() {
        activeLogoItem++;
        logoList.style.transform = `translateX(-${activeLogoItem * 25}%)`;
        if (activeLogoItem <= logoItem) {
          logo();
        } else {
          activeLogoItem = 0;
          logoList.style.transform = `translateX(-${activeLogoItem * 25}%)`;
          logo();
        }
      }, 2000);
    }
    logo();

    // Quotes CLick Slider  ////////////////////////////////////////////////
    const previousButton = document.querySelector(".previousbutton");
    const nextButton = document.querySelector(".nextbutton");
    const quotesSliderList = document.querySelector(".quotes__slider--list");
    const quotesSliderItem =
      document.querySelectorAll(".quotes__slider--item").length - 1;
    let activeItem = 0;

    previousButton.addEventListener("click", function() {
      if (activeItem === 0) {
        activeItem = quotesSliderItem;
        quotesSliderList.style.transform = `translateX(-${quotesSliderItem *
          100}%)`;
      } else {
        activeItem--;
        quotesSliderList.style.transform = `translateX(-${activeItem * 100}%)`;
      }
    });
    nextButton.addEventListener("click", function() {
      if (activeItem < quotesSliderItem) {
        activeItem++;
        quotesSliderList.style.transform = `translateX(-${activeItem * 100}%)`;
      } else {
        activeItem = 0;
        quotesSliderList.style.transform = `translateX(${activeItem * 100}%)`;
      }
    });

    // Portfolio gallery filter ////////////////////////////////////////////////
    // C1 : Use Jquery
    // $(document).ready(function() {
    //   $(".projects__item").click(function() {
    //     var value = $(this).attr("data-filter");

    //     if (value == "all") {
    //       //$('.filter').removeClass('hidden');
    //       $(".filter").show("1000");
    //     } else {
    //       //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //       //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
    //       $(".filter")
    //         .not("." + value)
    //         .hide("5000");
    //       $(".filter")
    //         .filter("." + value)
    //         .show("5000");
    //     }
    //   });
    // });
    // C2 : Use Javascript ////////////////////////////////////////////////
    let projectsItem = document.getElementsByClassName("projects__item");
    let filter = document.querySelectorAll(".filter");
    let designwebsite = document.getElementsByClassName("designwebsite");
    let applycation = document.getElementsByClassName("applycation");
    let software = document.getElementsByClassName("software");

    for (let i = 0; i < projectsItem.length; i++) {
      projectsItem[i].addEventListener("click", function() {
        projectsItem[i].classList.add("activeprojects");
        for (let j = 0; j < projectsItem.length; j++) {
          if (j != i) {
            projectsItem[j].classList.remove("activeprojects");
          }
        }
      });
    }
    projectsItem[0].addEventListener("click", function() {
      let conditionProjects = "true";
      function loop() {
        setTimeout(function() {
          if (conditionProjects == "true") {
            for (let i = 0; i < filter.length; i++) {
              filter[i].style.display = "none";
              filter[i].classList.remove("zoomIn");
              filter[i].classList.remove("zoomOut");
              conditionProjects = "false";
              loop();
            }
          } else {
            for (let i = 0; i < filter.length; i++) {
              filter[i].style.display = "block";
              filter[i].classList.add("zoomIn");
              // conditionProjects = "true";
            }
          }
        }, 50);
      }
      loop();
    });
    projectsItem[1].addEventListener("click", function() {
      for (let i = 0; i < applycation.length; i++) {
        filter[i].classList.remove("zoomIn");
        filter[i].classList.remove("zoomOut");
      }
      for (let i = 0; i < applycation.length; i++) {
        applycation[i].classList.remove("zoomIn");
        applycation[i].classList.add("zoomOut");
        applycation[i].style.display = "none";
      }
      for (let i = 0; i < software.length; i++) {
        software[i].classList.remove("zoomIn");
        software[i].classList.add("zoomOut");
        software[i].style.display = "none";
      }
      for (let i = 0; i < designwebsite.length; i++) {
        designwebsite[i].classList.remove("zoomOut");
        designwebsite[i].classList.add("zoomIn");
        designwebsite[i].style.display = "block";
      }
    });
    projectsItem[2].addEventListener("click", function() {
      for (let i = 0; i < designwebsite.length; i++) {
        designwebsite[i].classList.remove("zoomIn");
        designwebsite[i].classList.add("zoomOut");
        designwebsite[i].style.display = "none";
      }
      for (let i = 0; i < software.length; i++) {
        software[i].classList.remove("zoomIn");
        software[i].classList.add("zoomOut");
        software[i].style.display = "none";
      }
      for (let i = 0; i < applycation.length; i++) {
        applycation[i].style.display = "block";
        applycation[i].classList.remove("zoomOut");
        applycation[i].classList.add("zoomIn");
      }
    });
    projectsItem[3].addEventListener("click", function() {
      for (let i = 0; i < designwebsite.length; i++) {
        designwebsite[i].classList.remove("zoomIn");
        designwebsite[i].classList.add("zoomOut");
        designwebsite[i].style.display = "none";
      }
      for (let i = 0; i < applycation.length; i++) {
        applycation[i].classList.remove("zoomIn");
        applycation[i].classList.add("zoomOut");
        applycation[i].style.display = "none";
      }
      for (let i = 0; i < software.length; i++) {
        software[i].style.display = "block";
        software[i].classList.remove("zoomOut");
        software[i].classList.add("zoomIn");
      }
    });

    // Modal Gallery //////////////////////////////////////////
    let galleryItem = document.querySelectorAll(".gallery__item");
    let galleryImg = document.querySelectorAll(".gallery__img");
    let galleryImgItem = document.querySelectorAll(".gallery__img--item");

    let modalClose = document.querySelector(".modal__close");
    let modalOpen = document.querySelector(".modal__open");
    let modalOpenImg = document.querySelector(".modal__open--img");

    let modalOpenArrowLeft = document.querySelector(
      ".modal__open--arrowleft"
    );
    let modalOpenArrowRight = document.querySelector(
      ".modal__open--arrowright"
    );

    for (let i = 0; i < galleryItem.length; i++) {
      galleryItem[i].addEventListener("click",function(){
        modalOpenArrowLeft.style.visibility = "visible";
        modalOpenArrowRight.style.visibility = "visible";
        modalClose.style.display = "block";
        modalOpen.style.display = "block";
        modalOpenImg.src = galleryImgItem[galleryImgItem[i].getAttribute("data-number")-1].src;
        modalOpenImg.dataset.number = galleryImgItem[i].getAttribute("data-number")-1;
        if (i==0){
          modalOpenArrowLeft.style.visibility = "hidden";
        }
        if (i==galleryItem.length-1){
          modalOpenArrowRight.style.visibility = "hidden";
        }
      })
    }
    // click Arrow Left, Right in Modal Img
    modalOpenArrowLeft.addEventListener("click",function (){
      let k = modalOpenImg.getAttribute("data-number");
      k--;
      if (k==0){
        modalOpenArrowLeft.style.visibility = "hidden";
        modalOpenImg.src = galleryImgItem[k].src;
        modalOpenImg.dataset.number = k;
      }
      else {
        modalOpenArrowRight.style.visibility = "visible";
        modalOpenImg.src = galleryImgItem[k].src;
        modalOpenImg.dataset.number = k;
        console.log(k);
      }
    })
    modalOpenArrowRight.addEventListener("click",function (){
      let k = modalOpenImg.getAttribute("data-number");
      k++;
      if (k===galleryItem.length-1){
        modalOpenArrowRight.style.visibility = "hidden";
        modalOpenImg.src = galleryImgItem[k].src;
        modalOpenImg.dataset.number = k;
      }
      else {
        modalOpenArrowLeft.style.visibility = "visible";
        
        modalOpenImg.src = galleryImgItem[k].src;
        modalOpenImg.dataset.number = k;
        console.log(k);
      }
    })
    modalClose.addEventListener("click",function(){
      modalClose.style.display = "none";
      modalOpen.style.display = "none";
    })
    // End Modal Gallery //////////////////////////////////////
  },
  false
);
