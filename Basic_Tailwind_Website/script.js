// Smooth Scroll to Sections
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar Background Toggle on Scroll
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-opacity-90', 'backdrop-blur-md');
    } else {
        navbar.classList.remove('bg-opacity-90', 'backdrop-blur-md');
    }
});

// download  resume button
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadResumeBtn");

    if (downloadBtn) {
        downloadBtn.addEventListener("click", function (e) {
            e.preventDefault(); // Prevents default anchor behavior
            console.log("Download Resume button clicked!");

            // You can log more data here
            console.log({
                name: "Harry Doe",
                profession: "Web Developer",
                action: "Resume Download"
            });
        });
    }
});


// Contact Form Submission with Console Logging
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('input[placeholder="Name"]').value;
    const email = this.querySelector('input[placeholder="Email"]').value;
    const message = this.querySelector('textarea').value;

    console.log("📩 Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Thank you! Your message has been submitted.");
    this.reset();
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
        scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

