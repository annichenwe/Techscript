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
btnEvents.addEventListener("click", selectEvents);

function selectEvents(event) {
    document.getElementById('events').classList.add('selected');
    document.getElementById('articles').classList.remove('selected')
}

// Saved Articles-button

var btnArticles = document.getElementById("articles");
btnArticles.addEventListener("click", selectArticles);

function selectArticles(event) {
    document.getElementById('articles').classList.add('selected');
    document.getElementById('events').classList.remove('selected');
}
