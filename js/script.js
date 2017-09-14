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

/*ADD TWO LI TO UL*/
/*#1*/
function addtime1() {
    var ul = document.getElementById("clock");
    var li = document.createElement("li");
    var children = ul.children.length + 1;
    li.innerHTML = '<div class="clock">' + time1.innerHTML + '</div>';
    ul.appendChild(li);
}

function addtext1() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var children = ul.children.length + 1;
    li.innerHTML = '<div class="list">' + title1.innerHTML + '</div>';
    ul.appendChild(li);
}

function toggle1() {
    add1.classList.toggle('displaynone');
    check1.classList.toggle('displaynone');
}

document.querySelector('.btn1').addEventListener('click', function () {

    addtime1();
    addtext1();
    toggle1();

});

/*#2*/
function addtime2() {
    var ul = document.getElementById("clock");
    var li = document.createElement("li");
    var children = ul.children.length + 1;
    li.innerHTML = '<div class="clock">' + time2.innerHTML + '</div>';
    ul.appendChild(li);
}

function addtext2() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var children = ul.children.length + 1;
    li.innerHTML = '<div class="list">' + title2.innerHTML + '</div>';
    ul.appendChild(li);
}

function toggle2() {
    add2.classList.toggle('displaynone');
    check2.classList.toggle('displaynone');
}

document.querySelector('.btn2').addEventListener('click', function () {

    addtime2();
    addtext2();
    toggle2();

});

/*#3*/
function addtime3() {
    var ul = document.getElementById("clock");
    var li = document.createElement("li");
    var children = ul.children.length + 1;
    li.innerHTML = '<div class="clock">' + time3.innerHTML + '</div>';
    ul.appendChild(li);
}

function addtext3() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var children = ul.children.length + 1;
    li.innerHTML = '<div class="list">' + title3.innerHTML + '</div>';
    ul.appendChild(li);
}

function toggle3() {
    add3.classList.toggle('displaynone');
    check3.classList.toggle('displaynone');
}

document.querySelector('.btn3').addEventListener('click', function () {

    addtime3();
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

    document.getElementById('news').classList.toggle('selected');
    document.getElementById('mypage').classList.remove('selected');

    document.querySelector('.newsarticle1').classList.toggle('displaynone');
    document.querySelector('.newsarticle2').classList.toggle('displaynone');
    document.querySelector('.newsarticle3').classList.toggle('displaynone');


}


// Interviews-button

var btnInterview = document.getElementById("interview");
btnInterview.addEventListener("click", selectInterview);

function selectInterview(event) {
    console.log("interview");

    document.getElementById('article_box').classList.remove('displaynone');
    document.getElementById('mypage_box').classList.add('displaynone');


    document.getElementById('interview').classList.toggle('selected');
    document.getElementById('mypage').classList.remove('selected');

    document.querySelector('.intarticle1').classList.toggle('displaynone');
    document.querySelector('.intarticle2').classList.toggle('displaynone');
    document.querySelector('.intarticle3').classList.toggle('displaynone');
}


// Reviews-button

var btnReview = document.getElementById("review");
btnReview.addEventListener("click", selectReview);

function selectReview(event) {
    console.log("review");

    document.getElementById('article_box').classList.remove('displaynone');
    document.getElementById('mypage_box').classList.add('displaynone');


    document.getElementById('review').classList.toggle('selected');
    document.getElementById('mypage').classList.remove('selected');

    document.querySelector('.revarticle1').classList.toggle('displaynone');
    document.querySelector('.revarticle2').classList.toggle('displaynone');
    document.querySelector('.revarticle3').classList.toggle('displaynone');
}


// My Page-button

var btnMypage = document.getElementById("mypage");
btnMypage.addEventListener("click", selectMypage);

function selectMypage(event) {
    console.log("mypage");
    document.getElementById('mypage').classList.add('selected');

    document.getElementById('news').classList.remove('selected');
    document.getElementById('interview').classList.remove('selected');
    document.getElementById('review').classList.remove('selected');

    document.getElementById('article_box').classList.add('displaynone');
    document.getElementById('mypage_box').classList.remove('displaynone');

    // Add displaynone to all articled

    document.querySelector('.newsarticle1').classList.add('displaynone');
    document.querySelector('.newsarticle2').classList.add('displaynone');
    document.querySelector('.newsarticle3').classList.add('displaynone');

    document.querySelector('.intarticle1').classList.add('displaynone');
    document.querySelector('.intarticle2').classList.add('displaynone');
    document.querySelector('.intarticle3').classList.add('displaynone');

    document.querySelector('.revarticle1').classList.add('displaynone');
    document.querySelector('.revarticle2').classList.add('displaynone');
    document.querySelector('.revarticle3').classList.add('displaynone');

}

// Events-button

var btnEvents = document.getElementById("events");
var switch1 = document.querySelector('.event_wrapper');
var switch2 = document.querySelector('.reading_wrapper');
btnEvents.addEventListener("click", selectEvents);


function selectEvents(event) {
    document.getElementById('events').classList.add('selected');
    document.getElementById('articles').classList.remove('selected')

    switch1.classList.remove('displaynone');
    switch2.classList.add('displaynone');

}

// Saved Articles-button

var btnArticles = document.getElementById("articles");
btnArticles.addEventListener("click", selectArticles);

function selectArticles(event) {
    document.getElementById('articles').classList.add('selected');
    document.getElementById('events').classList.remove('selected');

    switch1.classList.add('displaynone');
    switch2.classList.remove('displaynone');
}
