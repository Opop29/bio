document.addEventListener('DOMContentLoaded', function () {
    var clickButton = document.querySelector('.btn');
    var clickButton1 = document.querySelector('.btn1');
    var btnOverlay = document.getElementById('btnOverlay');
    var btn1Overlay = document.getElementById('btn1Overlay');

    clickButton.addEventListener('click', function () {
        // Display the overlay and modal for btn
        btnOverlay.style.display = 'flex';

        // Customize the modal content here for btn
        var modalContent = '<img src="./media/3.gif" alt="Image for btn">';
        modalContent += '<p>"Hey Bhiee, just wanted to remind you how incredibly special you are to me.<br> Your smile lights up my world, and your love makes every moment magical.<br> Grateful to have you by my side. 💖"</p>';
        btnOverlay.querySelector('.modal').innerHTML = modalContent;
    });

    clickButton1.addEventListener('click', function () {
        // Display the overlay and modal for btn1
        btn1Overlay.style.display = 'flex';

        // Customize the modal content here for btn1
        var modalContent = '<img src="./media/1.gif">';
        modalContent += '<p>"Sweetheart, thinking of you brightens my day. Your love is my anchor<br> and your laughter is my favorite melody. Lucky to call you mine. 🌸💕"</p>';
        btn1Overlay.querySelector('.modal').innerHTML = modalContent;
    });

    // Close the modal when clicking outside of it for btn
    btnOverlay.addEventListener('click', function (event) {
        if (event.target === btnOverlay) {
            btnOverlay.style.display = 'none';
        }
    });

    // Close the modal when clicking outside of it for btn1
    btn1Overlay.addEventListener('click', function (event) {
        if (event.target === btn1Overlay) {
            btn1Overlay.style.display = 'none';
        }
    });
});
var flyingHearts = [];
var isMouseHeld = false;
var mouseHoldTimeout;

document.addEventListener('mousedown', function (event) {
    if (event.button === 0) { // Check for left mouse button
        isMouseHeld = true;
        clearTimeout(mouseHoldTimeout);
        createFlyingHeart(event.clientX, event.clientY);
    }
});

document.addEventListener('mousemove', function (event) {
    if (isMouseHeld) {
        updateFlyingHeartsPosition(event.clientX, event.clientY);
    }
});

document.addEventListener('mouseup', function () {
    if (isMouseHeld) {
        isMouseHeld = false;
        mouseHoldTimeout = setTimeout(removeFlyingHearts, 20000); // Remove after 2 seconds
    }
});

function createFlyingHeart(x, y) {
    var flyingHeart = document.createElement('div');
    flyingHeart.className = 'flying-heart';
    setRandomPosition(flyingHeart, flyingHearts.length + 1);
    document.body.appendChild(flyingHeart);
    flyingHearts.push(flyingHeart);

    // Remove the element after the animation completes
    flyingHeart.addEventListener('animationend', function () {
        flyingHeart.remove();
        flyingHearts = flyingHearts.filter(item => item !== flyingHeart);
    });
}

function updateFlyingHeartsPosition(mouseX, mouseY) {
    flyingHearts.forEach(function (heart, index) {
        var deltaX = mouseX - parseInt(heart.style.left);
        var deltaY = mouseY - parseInt(heart.style.top);
        var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        var speed = 5; // Adjust the speed
        var directionX = deltaX / distance;
        var directionY = deltaY / distance;

        var newPositionX = parseInt(heart.style.left) + directionX * speed;
        var newPositionY = parseInt(heart.style.top) + directionY * speed;

        heart.style.left = newPositionX + 'px';
        heart.style.top = newPositionY + 'px';
    });
}

function removeFlyingHearts() {
    flyingHearts.forEach(function (heart) {
        heart.remove();
    });
    flyingHearts = [];
}

function setRandomPosition(element, count) {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var randomX, randomY;

    // Set random initial position based on click count
    switch (count % 4) {
        case 1:
            randomX = screenWidth;
            randomY = Math.floor(Math.random() * screenHeight);
            break;
        case 2:
            randomX = 0;
            randomY = Math.floor(Math.random() * screenHeight);
            break;
        case 3:
            randomX = Math.floor(Math.random() * screenWidth);
            randomY = 0;
            break;
        default:
            randomX = Math.floor(Math.random() * screenWidth);
            randomY = screenHeight;
            break;
    }

    var randomScale = Math.random() * 0.5 + 1;

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
    element.style.transform = 'scale(' + randomScale + ')';
}
document.addEventListener("DOMContentLoaded", function() {
    // Play the background music after a delay of 1000 milliseconds (1 second)
    setTimeout(function() {
        document.getElementById("backgroundMusic").play();
    }, 1000);
});