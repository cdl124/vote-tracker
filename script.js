$( document ).ready(function() {

  function Kittens(filename) {
    this.filename = filename;
    this.votes = 0;
  }

  // Global variables
  var leftSide = 0;
  var rightSide = 0;
  var getIdx;


  var imagesArray = [
  'images/01.jpg',
  'images/02.jpg',
  'images/03.jpg',
  'images/04.jpg',
  'images/05.jpg',
  'images/06.jpg',
  'images/07.jpg',
  'images/08.jpg',
  'images/09.jpg',
  'images/10.jpg',
  'images/11.jpg',
  'images/12.jpg',
  'images/13.jpg',
  'images/14.jpg'
  ];

  var shuffle = function() { // Picks a random integer btwn 0 and imagesArray.length twice

    this.leftSide = Math.floor(Math.random() * imagesArray.length);
    if (imagesArray.length > 1) {
      // This do while loop picks the second random number, and keeps looping
      // if the second number is the same as the first number.
      do {
        this.rightSide = Math.floor(Math.random() * imagesArray.length);
      } while (this.leftSide === this.rightSide);
    }
  }

  shuffle();

  var photos = function() { // Appends the two images to the document.


    var addPhoto = $('#photos').append('<img idx="' + this.leftSide + '" src="' + imagesArray[this.leftSide] + '" />');
    var add2ndPhoto = $('#photos').append('<img idx="' + this.rightSide + '" src="' + imagesArray[this.rightSide] + '" />');
  };

  photos();

  // Chart generator
  function renderChart() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var data = {
      labels: imageObjectsArray.map(function (cat) {
        return cat.filename;
        }),
        datasets: [
          {
            label: "Cats",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: imageObjectsArray.map(function (cats) {
                return cats.votes;
                })
              }
            ]
        };
        var myBarChart = new Chart(ctx).Bar(data, {
          barShowStroke: false
      });
    };

  // This event listener will highlight the clicked pic...
  var clickEvent = function() {
  $("#photos img").click(function(event) {
    $("#photos img").removeClass("select");
    $(this).addClass("select");
    this.getIdx = $(this).attr('idx');

  // ... and add one vote to the kitty image object...
  // (Each click on an image = 1 vote)

    for (i = 0; i < imageObjectsArray.length; i++) {
      if (Number(this.getIdx) === i) { // If getIdx equals index number in images array
        imageObjectsArray[i].votes += 1;
        console.log(imageObjectsArray[Number(this.getIdx)].votes);
        renderChart(); // ...refresh the bar chart to show the new data...
        break;
        }
      };
    var trackerKeys = Object.keys(tracker);
    for (var i in trackerKeys) {
      if (this.getIdx === i) {
        var getKey = trackerKeys[i];
        tracker[getKey] += 1;
        break;
        }
      }
    });
  };

  clickEvent();

  // Hard-coded image objects
  var cat01 = new Kittens('01.jpg');
  var cat02 = new Kittens('02.jpg');
  var cat03 = new Kittens('03.jpg');
  var cat04 = new Kittens('04.jpg');
  var cat05 = new Kittens('05.jpg');
  var cat06 = new Kittens('06.jpg');
  var cat07 = new Kittens('07.jpg');
  var cat08 = new Kittens('08.jpg');
  var cat09 = new Kittens('09.jpg');
  var cat10 = new Kittens('10.jpg');
  var cat11 = new Kittens('11.jpg');
  var cat12 = new Kittens('12.jpg');
  var cat13 = new Kittens('13.jpg');
  var cat14 = new Kittens('14.jpg');

  var imageObjectsArray = [cat01, cat02, cat03, cat04, cat05, cat06, cat07, cat08, cat09, cat10, cat11, cat12, cat13, cat14];

  // User tracker object
  var tracker = {
    cat01votes: 0,
    cat02votes: 0,
    cat03votes: 0,
    cat04votes: 0,
    cat05votes: 0,
    cat06votes: 0,
    cat07votes: 0,
    cat08votes: 0,
    cat09votes: 0,
    cat10votes: 0,
    cat11votes: 0,
    cat12votes: 0,
    cat13votes: 0,
    cat14votes: 0
  }

  // "Random" button shuffles pics again
  $('button').click( function(event) {
    if ($('#photos img').hasClass('select')) {
      $("#photos img").remove();
      shuffle();
      photos();
      clickEvent();
    } else {
      alert("D'aww. You could pick at least ONE cute kitty before you continue...");
    }
  });

});
