$(function () {

    $('article').each(function () {

        $(this).readingTime({
            readingTimeTarget: $(this).find('.eta'),
            remotePath: $(this).attr('data-file'),
            remoteTarget: $(this).attr('data-target')
        });

    });

});

$('article').readingTime();



// READINGLIST

var title1 = document.querySelector('.title_1');
var title2 = document.querySelector('.title_2');
var title3 = document.querySelector('.title_3');

var time1 = document.querySelector('.time_1');
var time2 = document.querySelector('.time_2');
var time3 = document.querySelector('.time_3');

var add1 = document.querySelector('.btn1');
var add2 = document.querySelector('.btn2');
var add3 = document.querySelector('.btn3');

var check1 = document.querySelector('.btn1check');
var check2 = document.querySelector('.btn2check');
var check3 = document.querySelector('.btn3check');





var close2 = document.querySelector('.close2');
var close3 = document.querySelector('.close3');



/*ADD TWO LI TO UL*/
/*#1*/
function addtext1() {
    var ul = document.getElementById("clock");
    var li = document.createElement("li");
    li.className = 'li1';
    var children = ul.children.length + 1;
    li.innerHTML = '<a class="link_list link_list1" href="articles/article_mind_news.html">' + '<div class="list">' + title1.innerHTML + '</div>' + '<div class="clock">' + time1.innerHTML + '<img class="stopwatch" src="svg/timewatch.svg">' + '</div>' + '</a>' + '<div class="add_remove">' +
        '<a class="read read1" href="articles/article_mind_news.html">Read</a>' + '<div class="close close1">x</div>' + '</div>';
    ul.appendChild(li);

    //if (ul == 0) {
    //    document.getElementById('clock').classList.remove(displaynone);
    //}

    document.querySelector('.close1').addEventListener('click', function () {
        var remove = document.querySelector('.li1');
        console.log('halvveis');

        remove.parentNode.removeChild(remove);

        add1.classList.toggle('displaynone');
        check1.classList.toggle('displaynone');

    });
}


function toggle1() {
    add1.classList.toggle('displaynone');
    check1.classList.toggle('displaynone');
}

document.querySelector('.btn1').addEventListener('click', function () {

    addtext1();
    toggle1();

});

/*#2*/
function addtext2() {
    var ul = document.getElementById("clock");
    var li = document.createElement("li");
    li.className = 'li2';
    var children = ul.children.length + 1;
    li.innerHTML = '<a class="link_list" href="articles/article_Runa_int.html">' + '<div class="list">' + title2.innerHTML + '</div>' + '<div class="clock">' + time2.innerHTML + '<img class="stopwatch" src="svg/timewatch.svg">' + '</div>' + '</a>' + '<div class="add_remove">' +
        '<a class="read read2" href="articles/article_mind_news.html">Read</a>' + '<div class="close close2">x</div>' + '</div>';
    ul.appendChild(li);

    document.querySelector('.close2').addEventListener('click', function () {
        var remove = document.querySelector('.li2');
        console.log('halvveis');

        remove.parentNode.removeChild(remove);

        add2.classList.toggle('displaynone');
        check2.classList.toggle('displaynone');

    });
}


function toggle2() {
    add2.classList.toggle('displaynone');
    check2.classList.toggle('displaynone');
}

document.querySelector('.btn2').addEventListener('click', function () {

    addtext2();
    toggle2();

});

/*#3*/
function addtext3() {
    var ul = document.getElementById("clock");
    var li = document.createElement("li");
    li.className = 'li3';
    var children = ul.children.length + 1;
    li.innerHTML = '<a class="link_list" href="articles/article_iphone_rev.html">' + '<div class="list">' + title3.innerHTML + '</div>' + '<div class="clock">' + time3.innerHTML + '<img class="stopwatch" src="svg/timewatch.svg">' + '</div>' + '</a>' + '<div class="add_remove">' +
        '<a class="read read3" href="articles/article_mind_news.html">Read</a>' + '<div class="close close3">x</div>' + '</div>';
    ul.appendChild(li);

    document.querySelector('.close3').addEventListener('click', function () {
        var remove = document.querySelector('.li3');
        console.log('halvveis');

        remove.parentNode.removeChild(remove);

        add3.classList.toggle('displaynone');
        check3.classList.toggle('displaynone');

    });
}


function toggle3() {
    add3.classList.toggle('displaynone');
    check3.classList.toggle('displaynone');
}

document.querySelector('.btn3').addEventListener('click', function () {

    addtext3();
    toggle3();

});








// News-button


var btnNews = document.getElementById("news");
btnNews.addEventListener("click", selectNews);

function selectNews(event) {

    console.log("news");

    document.getElementById('article_box').classList.remove('displaynone');
    document.getElementById('mypage_box').classList.add('displaynone');

    document.getElementById('newsslide').classList.toggle('selected');
    document.getElementById('newsslide').classList.toggle('selected_back');
    document.getElementById('mypageslide').classList.remove('selected');

    document.querySelector('.newsarticle1').classList.toggle('displaynone');
}


// Interviews-button

var btnInterview = document.getElementById("interview");
btnInterview.addEventListener("click", selectInterview);

function selectInterview(event) {

    console.log("interview");

    document.getElementById('article_box').classList.remove('displaynone');
    document.getElementById('mypage_box').classList.add('displaynone');


    document.getElementById('intslide').classList.toggle('selected');
    document.getElementById('intslide').classList.toggle('selected_back');
    document.getElementById('mypageslide').classList.remove('selected');

    document.querySelector('.intarticle1').classList.toggle('displaynone');
}


// Reviews-button

var btnReview = document.getElementById("review");
btnReview.addEventListener("click", selectReview);

function selectReview(event) {

    console.log("review");

    document.getElementById('article_box').classList.remove('displaynone');
    document.getElementById('mypage_box').classList.add('displaynone');


    document.getElementById('revslide').classList.toggle('selected');
    document.getElementById('revslide').classList.toggle('selected_back');
    document.getElementById('mypageslide').classList.remove('selected');

    document.querySelector('.revarticle1').classList.toggle('displaynone');
}


// My Page-button

var btnMypage = document.getElementById("mypage");
btnMypage.addEventListener("click", selectMypage);

function selectMypage(event) {

    console.log("mypage");
    document.getElementById('mypageslide').classList.add('selected');


    document.getElementById('newsslide').classList.remove('selected');
    document.getElementById('intslide').classList.remove('selected');
    document.getElementById('revslide').classList.remove('selected');

    document.getElementById('article_box').classList.add('displaynone');
    document.getElementById('mypage_box').classList.remove('displaynone');

    // Add displaynone to all articles

    document.querySelector('.newsarticle1').classList.add('displaynone');
    document.querySelector('.intarticle1').classList.add('displaynone');
    document.querySelector('.revarticle1').classList.add('displaynone');

}

// Events-button

var btnEvents = document.getElementById("events");
var switch1 = document.querySelector('.event_wrapper');
var switch2 = document.querySelector('.reading_wrapper');
btnEvents.addEventListener("click", selectEvents);


function selectEvents(event) {
    document.getElementById('eventslide').classList.add('selected_top');
    document.getElementById('savedslide').classList.remove('selected_top')

    switch1.classList.remove('displaynone');
    switch2.classList.add('displaynone');

}

// Saved Articles-button

var btnArticles = document.getElementById("articles");
btnArticles.addEventListener("click", selectArticles);

function selectArticles(event) {
    document.getElementById('savedslide').classList.add('selected_top');
    document.getElementById('eventslide').classList.remove('selected_top');

    switch1.classList.add('displaynone');
    switch2.classList.remove('displaynone');
}
