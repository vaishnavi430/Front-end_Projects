// Get references to the mobile toggle button and the navigation links container
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const navLinksContainer = document.getElementById('nav-links-container');

// Function to close the mobile menu
function closeMobileMenu() {
    if (mobileNavToggle.classList.contains('active')) {
        mobileNavToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Event listener for the mobile toggle button
if (mobileNavToggle && navLinksContainer) {
    mobileNavToggle.addEventListener('click', () => {
        mobileNavToggle.classList.toggle('active');
        navLinksContainer.classList.toggle('active');

        // Prevent scrolling when mobile menu is open
        if (navLinksContainer.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
}


// Smooth scroll when clicking navbar links
document.querySelectorAll('#nav-links-container a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the href attribute (e.g., "#home")
        
        // Check if the targetId is not just "#" (which would scroll to top)
        if (targetId && targetId !== '#') {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                closeMobileMenu(); // Close the menu after clicking a link
            }
        }
    });
});

// Contact form validation and submit handling
const contactForm = document.querySelector('#contact-form'); // Use the correct ID for the form

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent page reload on form submit

        // Get form field values
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const phone = document.querySelector('#phone').value.trim();
        const message = document.querySelector('#message').value.trim();

        // Validate fields
        if (!name || !email || !phone || !message) {
            alert('Please fill all the fields!');
            return;
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate phone number (simple 10-digit check for India)
        // Adjust regex if other phone number formats are expected
        if (!/^\d{10}$/.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        // Log all data to console
        console.log('--- Form Submission Data ---');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone Number:', phone);
        console.log('Message:', message);
        console.log('--------------------------');

        // Success message
        alert('Thank you for contacting us, ' + name + '! Your message has been received.');
        
        // Reset the form after successful submission
        contactForm.reset();
    });
}