// Initialize AOS animations
$(document).ready(function () {
    AOS.init({
        duration: 1200, // Makes animations smoother
        easing: 'ease-in-out', // Adds a natural feel to animations
        mirror: true, // Animates sections again when scrolling back
    });

    // Dynamic Text Highlight on Scroll
    $('.section').each(function () {
        const section = $(this);
        $(window).on('scroll', function () {
            const scrollTop = $(window).scrollTop();
            const offsetTop = section.offset().top - $(window).height() / 2;

            // Scale the text container when the section is in view
            if (scrollTop >= offsetTop && scrollTop < offsetTop + section.height()) {
                section.find('.text-container').css('transform', 'scale(1.1)');
            } else {
                section.find('.text-container').css('transform', 'scale(1)');
            }
        });
    });
});