angular.module('summerApp', [])
.controller('MainController', function($scope) {
    $scope.hero = {
        title: 'Welcome to SummerTime Blues!',
        subtitle: 'High Quality',
        mainText: 'Digital Art & Prints',
        offer: 'Holi offer 40% off + Additional surprises on first purchase',
        buttonText: 'Shop Now'
    };

    $scope.features = [
        { imgSrc: 'Images/Logo/13416130_5243860.jpg', title: 'Free Shipping' },
        { imgSrc: 'Images/Logo/19466810_6134225.jpg', title: 'Order Online' },
        { imgSrc: 'Images/Logo/12516923_4968837.jpg', title: 'Promotions' },
        { imgSrc: 'Images/Logo/10117945_4365502.jpg', title: 'Happy Selling' },
        { imgSrc: 'Images/Logo/12704338_5064484.jpg', title: 'Support' }
    ];

    $scope.products = [
        { imgSrc: 'Images/Products/Prod1.png', artist: 'Mitski', title: 'Short Hair Illustration', price: 'Rs 540' },
        { imgSrc: 'Images/Products/Prod2.png', artist: 'The Strokes', title: 'Band Poster', price: 'Rs 650' },
        { imgSrc: 'Images/Products/Prod3.png', artist: 'Lorde', title: 'Minimalist Portrait', price: 'Rs 720' },
        { imgSrc: 'Images/Products/Prod4.png', artist: 'Phoebe Bridgers', title: 'Illustrated Album Cover', price: 'Rs 830' },
        { imgSrc: 'Images/Products/Prod5.png', artist: 'Arctic Monkeys', title: 'Retro Concert Poster', price: 'Rs 590' }
    ];
    
    // Function to toggle mobile menu
    $scope.toggleMenu = function() {
        var navbar = document.getElementById('navbar');
        navbar.classList.toggle('active');
    };
});
