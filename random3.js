function randomHero() {
    var heroPics = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/392/musician-background-1680.jpg','https://s3-us-west-2.amazonaws.com/s.cdpn.io/392/pink-floyd-division-bell-228953.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/392/northstar.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/392/womensrights.jpg'];

    $('body').css({
        'background' : 'url('+ heroPics[Math.floor(Math.random() * heroPics.length)] + ') no-repeat',
        'background-attachment' : 'scroll',
        'background-position' : '50% 50%',
        'background-size' : 'cover'
    });
}

// Show Random Image on Page Load
randomHero();
