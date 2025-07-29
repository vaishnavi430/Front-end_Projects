document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const bookTableBtn = document.getElementById('book-table-btn');
    const contactForm = document.getElementById('contactForm');
    const navBarLinks = document.querySelectorAll('.nav-links a');
    const searchButton = document.querySelector('.search-bar button');

    // 1. Mobile Menu Toggle
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            console.log('Mobile menu toggled.');
        });
    }

    // 2. Smooth Scrolling for Navigation Links
    navBarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll smoothly to the target section
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for fixed header height
                    behavior: 'smooth'
                });
                console.log(`Mapsd to section: ${targetId}`);

                // Close mobile menu if open after clicking a link
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    console.log('Mobile menu closed after navigation.');
                }
            }
        });
    });

    // 3. Log "Book a Table" button click
    if (bookTableBtn) {
        bookTableBtn.addEventListener('click', () => {
            console.log('Book a Table button clicked!');
            // You can add further logic here, e.g., open a booking form modal
            alert('Booking feature coming soon!');
        });
    }

    // 4. Handle Contact Form Submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Contact Form Submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Basic validation
            if (name && email && message) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset(); // Clear the form
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // 5. Log Search Button Click
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchTerm = document.getElementById('search').value;
            console.log(`Search button clicked. Search term: "${searchTerm}"`);
            // Implement actual search functionality here if needed
        });
    }

    // 6. Log when a social media icon is clicked (example)
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            // Prevent default navigation for demonstration; remove if you want to navigate
            e.preventDefault(); 
            console.log(`Social icon clicked: ${e.currentTarget.querySelector('i').className}`);
            // In a real scenario, you'd navigate: window.open(e.currentTarget.href, '_blank');
        });
    });
});