document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel img');
    const reviews = document.querySelectorAll('.review .review-text');
    let currentImageIndex = 0;
    let currentReviewIndex = 0;

    function showNextImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    function showNextReview() {
        reviews[currentReviewIndex].classList.remove('active');
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        reviews[currentReviewIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
    setInterval(showNextReview, 3000); // Change review every 3 seconds

    document.getElementById('newsletter-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for subscribing!');
        hideNewsletterPopup();
    });

    setTimeout(showNewsletterPopup, 1000); // Show popup after 1 second
});

function showNewsletterPopup() {
    document.getElementById('newsletter-popup').style.display = 'block';
}

function hideNewsletterPopup() {
    document.getElementById('newsletter-popup').style.display = 'none';
}