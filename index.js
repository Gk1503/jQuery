$(document).ready(function () {
    $('#p').click(function () { 
        alert('you Clicked');
        
    });
});
$(document).ready(function () {
    $('.img').mouseover(function () { 
        alert('You Clicked img 1');
    });
    $('.img').mouseout(function () { 
        alert('thanks');
    });
});

$(document).ready(function () {
    $('.img1').hide(4);
});