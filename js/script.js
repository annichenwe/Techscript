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



// LEGG TIL LI TIL UL

document.querySelector('.btn').addEventListener('click', addLi);

function addLi(task) {
    console.log("hi");
    var ul = document.getElementById("test");
    var li = document.createElement("li");
    var children = ul.children.length + 1;

    ul.appendChild(li);
}
