$(document).ready(function () {
  // $(".burger-menu").click(function () {
  //   $(this).toggleClass("menu-on");
  //   $(".menu_mob2").toggleClass("active");
  // });

  $(".sec2_card").click(function () {
    const x = $(this).data("cards");
    $('.sec2_card_popup[data-cards="' + x + '"]').removeClass("d-none");
    $('.sec2_card_popup[data-cards="' + x + '"]').addClass("d-flex");
    $('.sec2_card_popup').not($('.sec2_card_popup[data-cards="' + x + '"]')).addClass("d-none");
    $('.sec2_card_popup').not($('.sec2_card_popup[data-cards="' + x + '"]')).removeClass("d-flex");
  });
  $(".sec2_close").click(function () {
    $('.sec2_card_popup').addClass("d-none");
    $('.sec2_card_popup').removeClass("d-flex");
  });
  $("#montant1").click(function () {
    $("#radio4").attr('checked', 'checked');
  });

  $('.sec2_cards_container_mob').slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    arrow: true,
    initialSlide: 1,
    swipe: false
  });
  $('.sec3_radios_holder2').slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    arrow: true,
    initialSlide: 1,
    adaptiveHeight: true
  });
  $('.section4_part3').slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    arrow: true,
    initialSlide: 1,
  });
  function changeText(x) {
    const etat = $(x).data('etat');
    if (etat == "1") {
      $(x).data('etat', "2");
      $(x).text("Plus épanouie");
    } else if (etat == "2") {
      $(x).data('etat', "3");
      $(x).text("Plus libre");
    } else if (etat == "3") {
      $(x).data('etat', "1");
      $(x).text("Plus autonome");
    }
  }
  setInterval(function () {
    // console.log("dfsfdg");
    changeText(".txt1");
  }, 2000);
  // button header
  // #don1
  function changeUrl(target, url, amount, ratio) {
    const quotient = amount * ratio;
    $(target).attr('href', url + quotient);
  }
  changeUrl("#don1", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", 90, 1);
  $("#choise1").click(function () {
    changeUrl("#don1", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", 50, 1);
  });
  $("#choise2").click(function () {
    changeUrl("#don1", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", 90, 1);
  });
  $("#choise3").click(function () {
    changeUrl("#don1", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", 175, 1);
  });
  $("#choise4").click(function () {
    $("#montant2").focus();
  });
  $("#montant2").keyup(function () {
    changeUrl("#don1", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", $(this).val(), 1);
  });

  // changeUrl("#don2", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", 50, 1);
  $("#radio1").click(function () {
    changeUrl("#don2", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", 50, 1);
  });
  $("#radio2").click(function () {
    changeUrl("#don2", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", 90, 1);
  });
  $("#radio3").click(function () {
    changeUrl("#don2", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", 175, 1);
  });
  $("#radio4").click(function () {
    $("#montant1").focus();
  });
  $("#montant1").keyup(function () {
    changeUrl("#don2", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", $(this).val(), 1);
  });
  if ($(window).width() < 992) {
    changeUrl("#don2", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", 90, 1);

  }
  else {
    changeUrl("#don2", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", 90, 1);

  }
  $(window).resize(function () {
    if ($(window).width() < 992) {
      changeUrl("#don2", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", 90, 1);

    }
    else {
      changeUrl("#don2", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", 50, 1);

    }
  });

  $('.sec3_radios_holder2').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var CurrentSlideDom = $(slick.$slides.get(currentSlide));
    var NextSlideDom = $(slick.$slides.get(nextSlide));
    // console.log($(NextSlideDom).find(".target").data("prix"));
    if ($(NextSlideDom).find(".target").data("prix")) {
      changeUrl("#don2", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", $(NextSlideDom).find(".target").data("prix"), 1);
    } else {
      // $("#montant4").focus();
    }
  });
  $("#montant4").keyup(function () {
    changeUrl("#don2", "https://don.handichiens.org/le-noel-handichiens/fill?engagement=don_simple&montant=", $(this).val(), 1);
  });
  $(".quantity").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      //display error message
      // $("#errmsg").html("Digits Only").show().fadeOut("slow");
      return false;
    }
  });
});