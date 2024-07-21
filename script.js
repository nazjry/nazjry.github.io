// Mendisable klik kanan di seluruh halaman
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Mendisable pemantauan jaringan untuk sumber video
document.addEventListener('DOMContentLoaded', function() {
    var videos = document.getElementsByTagName('video');
    for (var i = 0; i < videos.length; i++) {
        videos[i].addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        videos[i].addEventListener('play', function(e) {
            e.preventDefault();
        });
        videos[i].addEventListener('pause', function(e) {
            e.preventDefault();
        });
        videos[i].addEventListener('seeking', function(e) {
            e.preventDefault();
        });
        videos[i].addEventListener('timeupdate', function(e) {
            e.preventDefault();
        });
    }
});
