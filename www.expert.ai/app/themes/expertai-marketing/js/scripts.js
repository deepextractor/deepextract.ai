(function ($) {
  var ua = window.navigator.userAgent;
  var isIE = /MSIE|Trident/.test(ua);

  if (!isIE) {
    //IE specific code goes here
    ("use strict");
  }

  //Listen for href="#changeconsent" click when ready wihout jQuery
  document.addEventListener("DOMContentLoaded", function () {
    let changeconsent_btns = document.querySelectorAll(
      'a[href="#changeconsent"]'
    );
    if (changeconsent_btns) {
      changeconsent_btns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          if (window.Cookiebot && window.Cookiebot.renew) {
            window.Cookiebot.renew();
          }
        });
      });
    }
  });

  /** Adobe typekit font */
  try {
    Typekit.load({ async: true });
  } catch (e) {}
  const cdnMedia = "https://media.expert.ai/expertai";

  /*** Sticky header */
  $(window).scroll(function () {
    if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
      $(".header").addClass("stop");
      $(".navbar-brand img").attr(
        "src",
        cdnMedia + "/uploads/2020/09/logo-new.png"
      );
      //$(".navbar-brand img").attr("style","width:90%;");
      //console.log('logo changed...');
      //changeLogo();
    } else {
      $(".header").removeClass("stop");
      var $path = $(location).attr("pathname");
      switch ($path) {
        case "/":
        case "/it/":
        case "/es/":
        case "/fr/":
        case "/de/":
          $(".navbar-brand img").attr(
            "src",
            cdnMedia + "/uploads/2021/05/expert-logo-white.png"
          );
          break;
        default:
          $(".navbar-brand img").attr(
            "src",
            cdnMedia + "/uploads/2020/09/logo-new.png"
          );
      }

      //$(".navbar-brand img").attr("style","width:25%;");
    }
  });

  function changeLogo() {
    $(".navbar-brand img").src = cdnMedia + "/uploads/2020/09/logo-new.png";
  }

  $(window).on("load", function (e) {
    // Wow Animation
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  });

  /*** Sidr Menu */
  // $('.navbar-toggle').sidr({
  // 	name: 'sidr-main',
  // 	side: 'right',
  // 	source: '#sidr',
  // 	displace: false,
  // 	renaming: false,
  // });

  // $('.navbar-toggle.in').on('click', function(){
  // 	$.sidr('close', 'sidr-main');
  // });

  /*** Enable Masonry */
  function masonryGrid() {
    var $grid = $(".masonry").masonry({
      itemSelector: ".col",
      columnWidth: ".col",
      horizontalOrder: true,
    });
  }
  masonryGrid();

  $(".navbar-toggle").magnificPopup({
    type: "inline",
    fixedBgPos: true,
    removalDelay: 500,
    fixedContentPos: true,
    callbacks: {
      beforeOpen: function () {
        masonryGrid();
        this.st.mainClass = this.st.el.attr("data-effect");
      },
      open: function () {
        masonryGrid();
        setTimeout(function () {
          $(".mobile-menu-block").removeClass("mfp-custom-preloader");
        }, 800);
      },
    },
    midClick: true,
  });

  // trigger scroll
  $('a.scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var o = $(this.hash);
      if ((o = o.length ? o : $("[name=" + this.hash.slice(1) + "]")).length)
        return (
          $("html, body").animate(
            {
              scrollTop: o.offset().top - 70,
            },
            1e3,
            "easeInOutExpo"
          ),
          !1
        );
    }
  });

  $(".pricing__switch .checkbox").change(function () {
    if (this.checked) {
      $(".pricing-table .pricing-table__amount").addClass("checked");
    } else {
      $(".pricing-table .pricing-table__amount").removeClass("checked");
    }
  });

  /*** Popup Video lightbox */
  $(".popup-video").magnificPopup({
    type: "iframe",
    preloader: false,
    fixedBgPos: true,
    removalDelay: 500,
    fixedContentPos: true,
    callbacks: {
      beforeOpen: function () {
        // console.log(this.st.iframe.markup);
        this.st.iframe.markup = this.st.iframe.markup.replace(
          "mfp-iframe-scaler",
          "mfp-iframe-scaler mfp-with-anim"
        );
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
  });

  /*** Popup Video lightbox */
  $(".webinar-video").magnificPopup({
    type: "iframe",
    preloader: false,
    fixedBgPos: true,
    removalDelay: 500,
    fixedContentPos: true,
    callbacks: {
      beforeOpen: function () {
        // console.log(this.st.iframe.markup);
        this.st.iframe.markup = this.st.iframe.markup.replace(
          "mfp-iframe-scaler",
          "mfp-iframe-scaler mfp-with-anim"
        );
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
  });

  /*** Select Wrap */
  $("select").wrap("<div class='select-wrapper'></div>");

  /*** Slick Slider */
  var $top_slider = $(".slider-for"),
    $bottom_slider = $(".slider-nav");
  $top_slider
    .on("init", function (e, $slick) {})
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".if-slider-controls .arrow-prev"),
      nextArrow: $(".if-slider-controls .arrow-next"),
      dots: false,
      fade: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows: false,
          },
        },
      ],
    })
    .on("beforeChange", function (event, $slick, currentSlide, nextSlide) {
      if (
        $bottom_slider.slick("getSlick").slideCount <=
        $bottom_slider.slick("slickGetOption", "slidesToShow")
      ) {
        $bottom_slider.slick("slickGoTo", nextSlide, true);
      }
    });
  $bottom_slider
    .on("init", function (e, $slick) {
      if ($slick.slideCount > $slick.slickGetOption("slidesToShow")) {
        $top_slider.slick("slickSetOption", {
          asNavFor: ".slider-nav",
        });
        $slick.slickSetOption({
          asNavFor: ".slider-for",
        });
      }
    })
    .slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      infinite: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1401,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    })
    .on("breakpoint", function (event, $slick, breakpoint) {
      if ($slick.slideCount > $slick.slickGetOption("slidesToShow")) {
        $top_slider.slick("slickSetOption", {
          asNavFor: ".slider-nav",
        });
        $slick.slickSetOption({
          asNavFor: ".slider-for",
        });
      } else {
        $top_slider.slick("slickSetOption", {
          asNavFor: null,
        });
        $slick.slickSetOption({
          asNavFor: null,
        });
      }
    })
    .on("beforeChange", function (event, $slick, currentSlide, nextSlide) {
      if ($slick.slideCount <= $slick.slickGetOption("slidesToShow")) {
        $top_slider.slick("slickGoTo", nextSlide);
      }
    });

  /*** atm-Slider */
  function cts_slider() {
    var time = 5;
    var $bar, $slick, isPause, tick, percentTime;
    $ctsSlick = $(".case-studies-slider");
    $bar = $(".slider-controls-wrapper .progress-bar .inner-line");

    $ctsSlick.each(function (index) {
      $(this).slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $(".slider-controls .arrow-prev")[index],
        nextArrow: $(".slider-controls .arrow-next")[index],
        responsive: [
          {
            breakpoint: 768,
            settings: {},
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    });

    $ctsSlick.on({
      mouseenter: function () {
        isPause = true;
      },
      mouseleave: function () {
        isPause = false;
      },
    });

    function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      isPause = false;
      tick = setInterval(interval, 10);
    }

    function interval() {
      if (isPause === false) {
        percentTime += 1 / (time + 0.1);
        $bar.css({
          width: percentTime + "%",
        });
        if (percentTime >= 100) {
          $ctsSlick.slick("slickNext");
          startProgressbar();
        }
      }
    }

    function resetProgressbar() {
      $bar.css({
        width: 0 + "%",
      });
      clearTimeout(tick);
    }

    startProgressbar();
  }
  cts_slider();

  /*** Number Counter */
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  /*** Header height = gutter height */
  function setGutterHeight() {
    var header = document.querySelector(".header"),
      gutter = document.querySelector(".header-gutter"),
      banner = document.querySelector(".banner");
    if (gutter) {
      gutter.style.height = header.offsetHeight + "px";
    }

    if (banner) {
      banner.style.paddingTop = header.offsetHeight + "px";
    }
  }
  //window.onload = setGutterHeight;
  window.onresize = setGutterHeight;

  /*** Generated by CoffeeScript 1.9.2 */
  function stickyKit() {
    var reset_scroll;

    $(function () {
      return $("[data-sticky_column]").stick_in_parent({
        parent: "[data-sticky_parent]",
        offset_top: 160,
        bottoming: true,
      });
    });

    reset_scroll = function () {
      var scroller;
      scroller = $("body,html");
      scroller.stop(true);

      if ($(window).scrollTop() !== 0) {
        scroller.animate(
          {
            scrollTop: 0,
          },
          "fast"
        );
      }
      return scroller;
    };

    window.scroll_it = function () {
      var max;
      max = $(document).height() - $(window).height();

      return reset_scroll()
        .animate(
          {
            scrollTop: max,
          },
          max * 3
        )
        .delay(100)
        .animate(
          {
            scrollTop: 0,
          },
          max * 3
        );
    };

    window.scroll_it_wobble = function () {
      var max, third;
      max = $(document).height() - $(window).height();
      third = Math.floor(max / 3);

      return reset_scroll()
        .animate(
          {
            scrollTop: third * 2,
          },
          max * 3
        )
        .delay(100)
        .animate(
          {
            scrollTop: third,
          },
          max * 3
        )
        .delay(100)
        .animate(
          {
            scrollTop: max,
          },
          max * 3
        )
        .delay(100)
        .animate(
          {
            scrollTop: 0,
          },
          max * 3
        );
    };

    $(window).on(
      "load",
      (function (_this) {
        return function (e) {
          return $(document.body).trigger("sticky_kit:recalc");
        };
      })(this)
    );

    $(window).on(
      "resize",
      (function (_this) {
        return function (e) {
          return $(document.body).trigger("sticky_kit:recalc");
        };
      })(this)
    );
  }

  var window_width = $(window).width();

  if (window_width < 1200) {
    $(document.body).trigger("sticky_kit:detach");
  } else {
    stickyKit();
  }

  $(window).resize(function () {
    window_width = $(window).width();
    if (window_width < 992) {
      $(document.body).trigger("sticky_kit:detach");
    } else {
      stickyKit();
    }
  });

  /*** Gravity Form Upload field */
  function truncate(n, len) {
    var ext = n.substring(n.lastIndexOf(".") + 1, n.length).toLowerCase();
    var filename = n.replace("." + ext, "");
    if (filename.length <= len) {
      return n;
    }
    filename = filename.substr(0, len) + (n.length > len ? "[...]" : "");
    return filename + "." + ext;
  }

  var preview = truncate($(".ginput_preview strong").text(), 10);

  $(document).ready(function () {
    $(".ginput_preview strong").html(preview);
  });

  $('.custom_file_upload input[type="file"]').change(function () {
    var val = truncate($(this).val(), 20);
    $(".custom_file_upload .gfield_description").html(
      val.replace("C:\\fakepath\\", "")
    );
  });

  /*** Careers Google map */
  var mapElement = document.getElementById("map");
  if (mapElement) {
    var map;
    google.maps.event.addDomListener(window, "load", init);
  }

  function init() {
    // console.log(ajax.countries);

    var google_map_setting = {
      latitude: ajax.countries[0]["lat"],
      longitude: ajax.countries[0]["lng"],
    };

    if (ajax.map_icon) {
      var image = ajax.map_icon;
    }

    var mapOptions = {
      zoom: 4.7,
      disableDefaultUI: true,
      draggable: true,
      scrollwheel: false,
      center: new google.maps.LatLng(
        google_map_setting.latitude,
        google_map_setting.longitude
      ),
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#444444",
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              color: "#f2f2f2",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [
            {
              saturation: -100,
            },
            {
              lightness: 45,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [
            {
              visibility: "simplified",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#46bcec",
            },
            {
              visibility: "on",
            },
          ],
        },
      ],
    };

    var map = new google.maps.Map(mapElement, mapOptions);

    // load markers on the map
    loadmarkers(map, image);

    var center = map.getCenter();
    google.maps.event.addDomListener(window, "resize", function () {
      map.setCenter(center);
    });
  }

  function loadmarkers(map, icon) {
    var allMarkers = [];

    for (var i = 0; i < ajax.countries.length; i++) {
      var location = ajax.countries[i];

      // markers
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(location["lat"], location["lng"]),
        map: map,
        id: location["term_id"],
        icon: icon,
      });

      allMarkers.push(marker);
      AutoCenter(map, allMarkers);

      google.maps.event.addListener(
        marker,
        "click",
        function (marker, content) {
          marker = this;
          $("#countries").val(this.id);
          $("#careersFormFilter").submit();
        }
      );
    }
  }

  function AutoCenter(map, markers) {
    //  Create a new viewpoint bound
    var bounds = new google.maps.LatLngBounds();
    //  Go through each...
    $.each(markers, function (index, marker) {
      bounds.extend(marker.position);
    });
    //  Fit these bounds to the map
    map.fitBounds(bounds);
  }

  /* ajaxify Transactions filters */
  var dataCareers = {
    paged: 1,
    append: false,
    formDataCareers: null,
    action: "careersfilter",
    country: "",
  };

  function isNumber(num) {
    return !Number.isNaN(parseFloat(num));
  }

  function queryAjaxCareers(dataCareers = null) {
    $.ajax({
      data: dataCareers,
      type: "POST",
      //async: false,
      dataType: "html",
      url: ajax.ajaxurl,
      beforeSend: function () {
        if (dataCareers.append) {
          $("#ajax_careers").append(
            '<div class="ajax-preloader text-center mt-5 mb-5"><img src="' +
              ajax.site_url +
              '/images/ajax-loader.gif"></div>'
          );
        } else {
          $("#ajax_careers").html(
            '<div class="ajax-preloader text-center mt-5 mb-5"><img src="' +
              ajax.site_url +
              '/images/ajax-loader.gif"></div>'
          );
        }
      },
      success: function (resp) {
        $(".ajax-preloader").remove();

        if (dataCareers.append) {
          $(".notResult").remove();

          $("#ajax_careers").append(resp);
        } else {
          $("#ajax_careers").html(resp);
        }

        gotopage();
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR, textStatus, errorThrown);
      },
    });
  }

  // on page load
  queryAjaxCareers(dataCareers);

  $("#careersFormFilter").on("change", function (e) {
    e.preventDefault();
    var formDataCareers = $(this).serialize();
    dataCareers.formDataCareers = formDataCareers;
    dataCareers.append = false;
    dataCareers.paged = 1;
    dataCareers.country = $("#countries").val();
    console.log(formDataCareers);
    queryAjaxCareers(dataCareers);
  });

  $("#careersFormFilter").on("submit", function (e) {
    e.preventDefault();
    var formDataCareers = $(this).serialize();
    dataCareers.formDataCareers = formDataCareers;
    dataCareers.append = false;
    dataCareers.paged = 1;
    dataCareers.country = $("#countries").val();
    queryAjaxCareers(dataCareers);
  });

  $("#reset").on("click", function (e) {
    e.preventDefault();
    var formDataCareers = $(this).serialize();
    dataCareers.formDataCareers = formDataCareers;
    dataCareers.append = false;
    dataCareers.paged = 1;
    dataCareers.country = $("#countries").val();
    $("#countries").val("").change();
    $("#positions").val("").change();
    queryAjaxCareers(dataCareers);
  });

  function gotopage() {
    $("#pagination li a").on("click", function (e) {
      e.preventDefault();
      var page = $(this).data("page");
      var formDataCareers = $("#careersFormFilter").serialize();
      dataCareers.formDataCareers = formDataCareers;
      dataCareers.append = false;
      dataCareers.paged = page;
      dataCareers.country = $("#countries").val();
      queryAjaxCareers(dataCareers);
    });
  }

  /** Shop page widget Categories after arrow */
  $(".sidr .navbar-nav li.dropdown .icon-caret-down").click(function () {
    $(this).parent().toggleClass("open");
    $(this).next().toggle();
  });

  /*** Typing Text */
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  /*
        window.onload = function() {
		var elements = document.getElementsByClassName('txt-rotate');

		for (var i=0; i<elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-rotate');
			var period = elements[i].getAttribute('data-period');

			if (toRotate) 
			{
				new TxtRotate(elements[i], JSON.parse(toRotate), period);
			}
		}

		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #1A1818 }";
		document.body.appendChild(css);
	};*/

  //window.addEventListener("load",function(event) {
  document.addEventListener(
    "DOMContentLoaded",
    function (event) {
      setGutterHeight();

      var elements = document.getElementsByClassName("txt-rotate");

      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-rotate");
        var period = elements[i].getAttribute("data-period");

        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }

      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML =
        ".txt-rotate > .wrap { border-right: 0.08em solid #1A1818 }";
      document.body.appendChild(css);
    },
    false
  );
})(jQuery);
