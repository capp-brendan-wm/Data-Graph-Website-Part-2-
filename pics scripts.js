google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
    var data = google.visualization.arrayToDataTable([
        ['Type of Gambling', '2013', '2014'],
        ['Lottery', 312100270, 319500000],
        ['Off-Track Betting', 3644167, 3723791],
        ['Mohegan Sun', 157863949, 148345903],
        ['Casino Subtotal', 296395892, 279873545],
        ['Foxwoods', 138531943, 131527642]
    ]);

    var data = google.visualization.arrayToDataTable([
        ['Type of Gambling', '2013', {type: 'string', role: 'annotation'},
            '2014', {type: 'string', role: 'annotation'}],
        ['Lottery', 312100270, '312M', 319500000, '320M'],
        ['Off-Track Betting', 3644167, '3.6M', 3723791, '3.7M'],
        ['Mohegan Sun', 157863949, '160M', 148345903, '140M'],
        ['Casino Subtotal', 296395892, '300M', 279873545, '280M'],
        ['Foxwoods', 138531943, '140M', 131527642, '131M']
    ]);

    var options = {
        title: 'Gambling Money',
        width: 900,
        height: 200,

        annotations: {
            alwaysOutside: true,
            textStyle: {
                fontSize: 12,
                auraColor: 'none',
                color: '#555'
            },
            boxStyle: {
                stroke: '#ccc',
                strokeWidth: 1,
                gradient: {
                    color1: '#f3e5f5',
                    color2: '#f3e5f5',
                    x1: '0%', y1: '0%',
                    x2: '100%', y2: '100%'
                }
            }
        },
        hAxis: {
            title: 'Total Money Spent',
            minValue: 0,
        },
        vAxis: {
            title: 'Type of Gambling'
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['2010',     196449110],
        ['2011',      122237727],
        ['2012',  123872079],
        ['2013', 128098469],
        ['2014',    122621630]
    ]);

    var options = {
        title: 'Amount of Money Made Off of Hunting'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

var main = function() {
    $('#image1').click(function() {
        $('#image1').attr('src', "http://weknowyourdreams.com/images/casino/casino-03.jpg");
    });
    $('#textImage1').click(function() {
        var text1 = function(answer){
            $('#image1text').html(answer);
        };
        text1(prompt("Enter Text."));
    });

    $('#image2').click(function() {
        $('#image2').attr('src', "https://www.pechanga.com/images/casino/large/Roulette_2.jpg");
    });
    $('#textImage2').click(function() {
        var text2 = function(answer){
            $('#image2text').html(answer);
        };
        text2(prompt("Enter Text."));
    });

    $('#image3').click(function() {
        $('#image3').attr('src', "http://thumbs.dreamstime.com/x/casino-machine-15364661.jpg");
    });
    $('#textImage3').click(function() {
        var text3 = function(answer){
            $('#image3text').html(answer);
        };
        text3(prompt("Enter Text."));
    });

    $('#image4').click(function() {
        $('#image4').attr('src', "http://www.winstonpersonalinjury.com/wp-content/uploads/2014/05/Las-Vegas-Casino-Accidents.jpg");
    });
    $('#textImage4').click(function() {
        var text4 = function(answer){
            $('#image4text').html(answer);
        };
        text4(prompt("Enter Text."));
    });

    $('#image5').click(function() {
        $('#image5').attr('src', "http://www.dominicanrepublicembassylondon.com/wp-content/uploads/2014/09/Puerto-Plata-casino.jpg");
    });
    $('#textImage5').click(function() {
        var text5 = function(answer){
            $('#image5text').html(answer);
        };
        text5(prompt("Enter Text."));
    });

    $('#image6').click(function() {
        $('#image6').attr('src', "http://static8.depositphotos.com/1300028/798/v/950/depositphotos_7982175-Vector-gambling-illustration-with-casino-elements.jpg");
    });
    $('#textImage6').click(function() {
        var text6 = function(answer){
            $('#image6text').html(answer);
        };
        text6(prompt("Enter Text."));
    });

    $('#image7').click(function() {
        $('#image7').attr('src', "http://static4.depositphotos.com/1013869/301/v/950/depositphotos_3019519-Casino-poker-background-vector.jpg");
    });
    $('#textImage7').click(function() {
        var text7 = function(answer){
            $('#image7text').html(answer);
        };
        text7(prompt("Enter Text."));
    });
    $('#image8').click(function() {
        $('#image8').attr('src', "http://spiritmountain.com/images/uploads/blog/Poker_Tips.jpg");
    });
    $('#textImage8').click(function() {
        var text8 = function(answer){
            $('#image8text').html(answer);
        };
        text8(prompt("Enter Text."));
    });

    $('#image9').click(function() {
        $('#image9').attr('src', "http://searchengineland.com/figz/wp-content/seloads/2015/02/casino-games-ss-1920.jpg");
    });
    $('#textImage9').click(function() {
        var text9 = function(answer){
            $('#image9text').html(answer);
        };
        text9(prompt("Enter Text."));
    });
};
$(document).ready(main);