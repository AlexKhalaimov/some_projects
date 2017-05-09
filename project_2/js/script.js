document.addEventListener("DOMContentLoaded", function(event) {
    function getId(id){
        return document.getElementById(id);

    }
    function createTag(tag) {
        return document.createElement(tag);
    }
    var submitBtn = getId('submitBtn');
        submitBtn.addEventListener('click',showImg);
        var input = getId('dataInput');

        input.addEventListener('keypress', function(e) {
            if (e.keyCode === 13) {
              e.preventDefault();
              showImg();
                }

        });



        var value = '';
        var form = getId('searchForm');
        var body = document.body;
        var wrapper = getId('img-container');
        // Masonry script
        var container = document.querySelector('#img-container');
        var msnry;
        // Инициализация Масонри, после загрузки изображений
        imagesLoaded( container, function() {
          msnry = new Masonry( container, {
              columnWidth: 25,
            itemSelector: '.item',
            percentPosition: true,
            gutter: 10

          } );
        });

        function showImg() {
            var input = getId('dataInput');
             value = input.value;

            var url = 'https://pixabay.com/api/?key=4908823-a0ca04a1321d11ff69c0bb4d9&q='+ value +'&image_type=photo&per_page=7&orientation=horizontal';


            var wrapper = getId('img-container');


            var xtp = new XMLHttpRequest();
                xtp.open("GET", url);
                xtp.onreadystatechange = function() {
                if (xtp.readyState == 4) {
                 if(xtp.status == 200) {
                  var data = JSON.parse(xtp.responseText);
                  var res = data.hits.length;


                      if (res > 0) {
                          for (var i = 0; i < res; i++) {
                              var img = document.querySelectorAll('.item_img');
                              var caption = document.querySelectorAll('.item_caption');
                              caption[i].innerHTML = data.hits[i].tags;
                              var src = data.hits[i].webformatURL;
                              img[i].setAttribute('src', src);


                              }
                      }



                    }
              }};
               xtp.send(null);

        }


        showImg();

   });
