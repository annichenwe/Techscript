$(function () {

    $('article').each(function () {

        $(this).readingTime({
            readingTimeTarget: $(this).find('.eta'),
            wordCountTarget: $(this).find('.words'),
            remotePath: $(this).attr('data-file'),
            remoteTarget: $(this).attr('data-target')
        });

    });

});

$('article').readingTime();
