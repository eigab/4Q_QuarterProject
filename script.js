/* I NEVER DID */

window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    var bigText = document.getElementById('big-text');
    var donateButton = document.getElementById('donate-button');
    
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#f8f9fa'; // Change background color on scroll
        bigText.style.fontSize = '1.5rem'; // Shrink big text
        bigText.style.marginTop = '10px'; // Center big text
        donateButton.style.display = 'block'; // Display donate button
    } else {
        header.style.backgroundColor = 'transparent'; // Revert background color
        bigText.style.fontSize = '2.5rem'; // Revert big text size
        bigText.style.marginTop = '0'; // Revert big text margin
        donateButton.style.display = 'none'; // Hide donate button
    }
});