$(function() {

    /*----- mobile nav toggle -----*/
    if ($('#nav-toggle').length !=0) {

        $('ul.navList > li').hover(function() {
               $(this).find('.nav-dropdown').stop(true, true).delay(200).fadeIn();
           }, function() {
               $(this).find('.nav-dropdown').stop(true, true).delay(200).fadeOut();
       });

        $('html').click(function() {
          $('.nav-dropdown').hide();
        });
        $('#nav-toggle').click(function() {
         $('nav ul').slideToggle();
       });
       $('#nav-toggle').on('click', function() {
         this.classList.toggle('active');
         $('.navigation__overlay').toggleClass('visible');
         $('body').toggleClass('overflow-hidden');
       });
    }

    /*----- home page carousel init -----*/
    if ($('#topCarousel').length !=0) {
        $('#topCarousel').owlCarousel({
            loop: true,
            items: 1,
            responsive: {
                0:{
                    nav: true,
                    navText: ["<button class = 'carouselCommon__prevArrow'>prev</button>", "<button class = 'carouselCommon__nextArrow'>next</button>"],
                    dots: false
                },
                768:{
                    nav: false,
                    dots: true
                }
            }
        });
    }
    /*----- minisite carousel init -----*/
    if ($('#minisiteCarousel').length !=0) {
        $('#minisiteCarousel').owlCarousel({
            loop: true,
            items: 1,
            responsive: {
                0:{
                    nav: true,
                    navText: ["<button class = 'carouselCommon__prevArrow'>prev</button>", "<button class = 'carouselCommon__nextArrow'>next</button>"],
                    dots: false
                },
                768:{
                    nav: false,
                    dots: true
                }
            }
        });
    }
    /*----- minisite table scroll init -----*/
    if ($('.resultForm__table').length !=0) {
        $(window).on("load",function(){
            $(".resultForm__tableWrapper").mCustomScrollbar({
              axis:"yx",
              theme:"dark-3"

            });
        });
    }

    /*----- input type=range customizing -----*/
    if ($('#range1').length !=0) {
        var range1 = $('#range1');
        var range1Val = $('#range1Val');
        $('#range1').ionRangeSlider({
            min: 0,
           max: 100,
           from: 16,
           to: 24,
            type: 'double',
            hide_min_max: true,
            hide_from_to: true
        });
        range1.on("change", function () {
        var $this = $(this),
            from = $this.data("from"),
            to = $this.data("to");
        range1Val.html(from + " - " + to);
        });
    }
    if ($('#range2').length !=0) {
        var range2 = $('#range2');
        var range2Hours = $('#range2Hours');
        var range2Mins = $('#range2Mins');
        $('#range2').ionRangeSlider({
            min: 0,
            max: 360,
            from: 50,
            hide_min_max: true,
            hide_from_to: true
        });
        range2.on("change", function () {
        var $this = $(this),
            newValH,
            newValM,
            value = $this.prop("value");
            newValH = Math.floor((value/60));
            newValM = value - newValH*60;
        range2Hours.html('0' + newValH);
        if (newValM<10) {
            range2Mins.html( '0' + newValM);
        }
        else {
            range2Mins.html(newValM);
        }

        });
    }

    /*----- minisite gallery init -----*/
    if ($('#minisiteGallery').length !=0) {
        $(window).on("load",function(){
            $(".mainInfoItem_gallery .mainInfoItem__box_noSh").mCustomScrollbar({
              axis:"x",
              theme:"dark-3",
              scrollbarPosition: "inside",
               advanced:{ autoExpandHorizontalScroll: true }
            });

        });

    }


    /*-----  Links SCROLL DOWN -----*/

        if ($('.scroll-link').length !=0) {
            var link = $('.scroll-link');
            var linkParent = link.parent('li');
            $('.scroll-link').click( function(event){
                event.preventDefault();
                var scroll_el = $(this).attr('href');
                linkParent.removeClass('active-item');
                $(this).parent().addClass('active-item');
               if ($(scroll_el).length != 0) {
               $('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 500);
               }
               return false;
            });
        }


        /*----- change stuff at mobile screens -----*/
		function acc(){
            var bodyWidth = $('body').outerWidth();
            if (bodyWidth<=751) {
                if ($('#minisiteGallery').length !=0){
                    //$(".mainInfoItem_gallery .mainInfoItem__box_noSh").mCustomScrollbar('destroy');
                }

            }
            if (bodyWidth<=975) {
                $('.contentCollapse:not(.visibleContent)').slideUp();
				$('h2[role="button"]').removeClass('buttonActive');
				$('.contentCollapse').removeClass('active');
				$('.visibleContent').prev().addClass('buttonActive');

                $('h2[role="button"]').click(function() {
                      target =  $(this).next();
                      if(!target.hasClass('active')){
                         $('.contentCollapse').removeClass('active').slideUp();
                         target.addClass('active').slideDown();
                      }
					  $('h2[role="button"]').removeClass('buttonActive');
                      $(this).addClass('buttonActive');
                  });
            }else{
				$('.contentCollapse').slideDown();
			}
		}
		acc();
        $(window).resize(function () {
			acc();
        });
        /*----- onepage carousel init -----*/

            if ($('#productsCarousel').length !=0) {
                $('#productsCarousel').owlCarousel({
                    loop: true,
                    responsive: {
                        0: {
                            dots: false,
                            nav: true
                        },
                        992: {
                            dots: true,
                            nav: true
                        }
                    },
                    items: 1,
                    smartSpeed: 1000,
                    navText: ["<button class = 'carouselCommon__prevArrow'>prev</button>", "<button class = 'carouselCommon__nextArrow'>next</button>"]
                });
            }
        /*----- onepage galleryBottom init -----*/

            if ($('#galleryBottom').length !=0) {
                $('#galleryBottom').owlCarousel({
                    loop: true,
                    responsive: {
                        0: {
                            items: 1,
                            center: false,
                            nav: false,
                            dots: true
                        },
                        992: {
                            items: 3,
                            nav:false,
                            autoWidth: true,
                            center: true,
                            margin: 85,
                            dots: true
                        }
                    }
                });
            }
            /*-----modal popups toggling -----*/
            if ($('#signUpButton').length !=0) {
                $('#signUpButton').click(function() {
                       $('#loginModal').one('hidden.bs.modal', function() {
                           $('#signUpFormModal').modal('show');
                       }).modal('hide');
                   });
            }

            if ($('#loginLink').length !=0) {
                $('#loginLink').click(function() {
                       $('#loginModal').one('hidden.bs.modal', function() {
                           $('#signUpFormModal').modal('show');
                       }).modal('hide');
                   });
            }

            /*----- contUp numbers -----*/
            if ($('#contentCollapse3').length !=0) {
                var waypoint = new Waypoint({ element: document.getElementById('contentCollapse3'), handler: function() { $('.counter').countUp({
                    delay: 10,
                    time: 1000,
                    formatter: function (n) {
                      return n.replace(/,/g, '%');
                    }
                }); this.destroy(); }, offset: '60%' });
            }

            /* -----  custom select plugin init  -----*/
            if ($('.select').length !=0) {
                $('select').niceSelect();
            }

            /*----- parallax effect -----*/
            if ($('.parallax').length !=0) {
                $(".parallax").paroller({ factor: '0.7', type: 'background', direction: 'vertical' });
            }
            if ($('.parallax-for').length !=0) {
                $(".parallax-for").paroller({ factor: '0.8', type: 'foreground', direction: 'vertical' });
            }

            /*----- fixed aside -----*/
            if ($('.minisiteAside').length !=0) {


                $(window).scroll(function() {
                    var sideBar = $('#sideBar');
                    var footer = $('#footer');
                    var sections = $('.mainInfoItem');
                    var navlinks = $('.minisiteAsideList__item a');
                    var linkParents = navlinks.parent('li');
                    sections.waypoint(
                        {

                            handler: function(event, direction){
                                var active_section;
                    			active_section = $(this);

                                if (direction === "up") active_section = active_section.prev();

                                var activeId = this.element.id;
                    			var active_link = $('.minisiteAsideList__item a[href="#' + activeId + '"]');
                                var linkParent = active_link.parent('li');
                    			linkParents.removeClass("active-item");
                    			linkParent.addClass("active-item");
                            },
                            offset: '25%'
                        }
                    );

                    var waypointSidebar = new Waypoint(
                        {
                            element: document.getElementById('sideBar'),
                            handler: function(direction){
                                sideBar.addClass('fixedSidebar');
                            },
                            offset: '0%'
                        }
                    );
                    var sideBarContainer = $('.aside-wrapper');
                    var footerHeight = $('footer').outerHeight();
                    var waypointFooter = new Waypoint(
                        {
                            element: document.getElementById('footer'),
                            handler: function(direction){
                                if (direction === 'down') {
                                    sideBar.removeClass('fixedSidebar');
                                    sideBar.addClass('bottomSidebar').css('bottom', footerHeight);
                                }
                                else {
                                    sideBar.addClass('fixedSidebar');
                                    sideBar.removeClass('bottomSidebar').css('bottom', footerHeight);
                                }

                            },
                            offset: '100%'
                        }
                    );
                    var waypointHeader = new Waypoint(
                        {
                            element: document.getElementById('mainInfo'),
                            handler: function( direction){
                                if (direction == 'up') {
                                    sideBar.removeClass('fixedSidebar');
                                }

                            },
                            offset: '10px'
                        }
                    );
                });


            }


});

window.onload = function () {

    /*----- chart init -----*/

    var container = document.getElementById('contentCollapse3');
        if (container) {
            var waypointBars = new Waypoint({ element: document.getElementById('barCharts'), handler: function() { barCharts(); this.destroy(); }, offset: '60%' });
            var waypointDonut = new Waypoint({ element: document.getElementById('donutChart'), handler: function() { donutChart(); this.destroy(); }, offset: '60%' });
            var waypointLine = new Waypoint({ element: document.getElementById('lineChart'), handler: function() { lineChart(); this.destroy(); }, offset: '60%' });

        var button = document.getElementById('buttonCollapse3');
        button.onclick = function(){
            lineChart();
            donutChart();
            barCharts();
        };

        function lineChart(){
            var chart = new Chartist.Line('.ct-chart', {
                  labels: ['', '4', '5', '6', '7', '8', '9', '10','11'],
                  series:[[null, 0.1, 0.5, 0.2, 0.5, 0.4, 0.3, 0.6, 0.45]]
                }, {
                    showPoint: false,
                    fullWidth: true,
                     showArea: false,
                    high: 1,
                    low: 0,
                    height: '290px',
                    width: '100%',
                    axisY: {
                        scaleMinSpace: 55,
                        labelInterpolationFnc: function(value) {
                     return  value*100 + '%';
                     },
                     axisX: {
                         scaleMinSpace: 55
                     }
                    }
                },
                {
                    responsiveOptions: [
                              ['screen and (min-width: 300px) and (max-width: 425px)', {
                                height: '290px'
                              }],
                            ]
                }
            );
            chart.on('draw', function(data) {
              if(data.type === 'line') {
                data.element.animate({
                  d: {
                    begin: 2000 * data.index,
                    dur: 2000,
                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                    to: data.path.clone().stringify(),
                    easing: Chartist.Svg.Easing.easeOutQuint
                  }
                });
              }
            });
        }

            /*----- donut chart -----*/
            function donutChart() {
                var chart2 = new Chartist.Pie('.ct-chart2', {
                      series: [75, 25],
                      labels: [1, 2]
                    }, {
                      donut: true,
                      donutWidth: 10,
                      // donutSolid: true,
                      showLabel: false
                    });
                    chart2.on('draw', function(data) {
                        if(data.type === 'slice') {
                        var pathLength = data.element._node.getTotalLength();

                        data.element.attr({
                          'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                        });

                        var animationDefinition = {
                          'stroke-dashoffset': {
                            id: 'anim' + data.index,
                            dur: 1000,
                            from: -pathLength + 'px',
                            to:  '0px',
                            easing: Chartist.Svg.Easing.easeOutQuint,
                            fill: 'freeze'
                          }
                        };
                        if(data.index !== 0) {
                          animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
                        }
                        data.element.attr({
                          'stroke-dashoffset': -pathLength + 'px'
                        });
                        data.element.animate(animationDefinition, false);
                        }
                    });
            }


                    /*----- stacked bars -----*/
            function barCharts() {
                var chart3 = new Chartist.Bar('.ct-chart3', {
                      labels: ['1'],
                      series: [
                        [54],
                        [46]
                      ]
                    }, {
                      stackBars: true,
                      chartPadding: 0,
                       horizontalBars: true,
                       height: '20px',
                       width: '100%',
                       axisX: {
                           showGrid: false,
                           showLabel: false,
                           offset: 0
                       },
                       axisY: {
                           showGrid: false,
                           showLabel: false,
                           offset: 0
                       }

                    }).on('draw', function (data)
                {
                    if (data.type === 'bar') {
                        data.element.attr({
                            style: 'stroke-width: 0px'
                        });
                        var strokeWidth = 10;

                        for (var s = 0; s <= data.series.length; ++s) {
                            if (data.seriesIndex === s) {
                                data.element.animate({
                                    x2:             {
                                        begin:  s * 500,
                                        dur:    500,
                                        from:   data.x1,
                                        to:     data.x2,
                                        easing: Chartist.Svg.Easing.easeOutSine
                                    },
                                    'stroke-width': {
                                        begin: s * 500,
                                        dur:   1,
                                        from:  0,
                                        to:    strokeWidth,
                                        fill:  'freeze'
                                    }
                                }, false);
                            }
                        }
                    }
                });

                var chart4 = new Chartist.Bar('.ct-chart4', {
                      labels: ['1'],
                      series: [
                        [78],
                        [22]
                      ]
                    }, {
                      stackBars: true,
                      chartPadding: 0,
                       horizontalBars: true,
                       height: '20px',
                       width: '100%',
                       axisX: {
                           showGrid: false,
                           showLabel: false,
                           offset: 0
                       },
                       axisY: {
                           showGrid: false,
                           showLabel: false,
                           offset: 0
                       }

                    }).on('draw', function (data)
                {
                    if (data.type === 'bar') {
                        data.element.attr({
                            style: 'stroke-width: 0px'
                        });
                        var strokeWidth = 10;

                        for (var s = 0; s <= data.series.length; ++s) {
                            if (data.seriesIndex === s) {
                                data.element.animate({
                                    x2:             {
                                        begin:  s * 500,
                                        dur:    500,
                                        from:   data.x1,
                                        to:     data.x2,
                                        easing: Chartist.Svg.Easing.easeOutSine
                                    },
                                    'stroke-width': {
                                        begin: s * 500,
                                        dur:   1,
                                        from:  0,
                                        to:    strokeWidth,
                                        fill:  'freeze'
                                    }
                                }, false);
                            }
                        }
                    }
                });


                var chart5 = new Chartist.Bar('.ct-chart5', {
                      labels: ['1'],
                      series: [[32],[68]]
                    }, {
                      stackBars: true,
                      chartPadding: 0,
                       horizontalBars: true,
                       height: '20px',
                       width: '100%',
                       axisX: {
                           showGrid: false,
                           showLabel: false,
                           offset: 0
                       },
                       axisY: {
                           showGrid: false,
                           showLabel: false,
                           offset: 0
                       }

                    }).on('draw', function (data)
                {
                    if (data.type === 'bar') {
                        data.element.attr({
                            style: 'stroke-width: 0px'
                        });
                        var strokeWidth = 10;

                        for (var s = 0; s <= data.series.length; ++s) {
                            if (data.seriesIndex === s) {
                                data.element.animate({
                                    x2:             {
                                        begin:  s * 500,
                                        dur:    500,
                                        from:   data.x1,
                                        to:     data.x2,
                                        easing: Chartist.Svg.Easing.easeOutSine
                                    },
                                    'stroke-width': {
                                        begin: s * 500,
                                        dur:   1,
                                        from:  0,
                                        to:    strokeWidth,
                                        fill:  'freeze'
                                    }
                                }, false);
                            }
                        }
                    }
                });
            }
        }




};
