// Declare variables to store signup data
let signupEmail = '';
let signupPassword = '';

// --- Custom Modal Functions ---
function showModal(title, message, isPrompt = false, callback = null) {
    const modal = document.getElementById('customModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalInput = document.getElementById('modalInput');
    const modalConfirmBtn = document.getElementById('modalConfirmBtn');
    const modalCancelBtn = document.getElementById('modalCancelBtn');
    const modalOkBtn = document.getElementById('modalOkBtn');

    modalTitle.textContent = title;
    modalMessage.textContent = message;

    modalInput.classList.add('hidden');
    modalConfirmBtn.classList.add('hidden');
    modalCancelBtn.classList.add('hidden');
    modalOkBtn.classList.add('hidden');

    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10); // Add show class after a tiny delay for transition

    if (isPrompt) {
        modalInput.value = '';
        modalInput.classList.remove('hidden');
        modalConfirmBtn.classList.remove('hidden');
        modalCancelBtn.classList.remove('hidden');

        modalConfirmBtn.onclick = () => {
            hideModal();
            if (callback) callback(modalInput.value);
        };
        modalCancelBtn.onclick = () => {
            hideModal();
            if (callback) callback(null); // Indicate cancellation
        };
    } else {
        modalOkBtn.classList.remove('hidden');
        modalOkBtn.onclick = () => {
            hideModal();
            if (callback) callback();
        };
    }
}

function hideModal() {
    const modal = document.getElementById('customModal');
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300); // Hide after transition
}

// --- Signup form submission ---
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // JavaScript Validation for signup
    if (username === "" || email === "" || password === "") {
        showModal("Validation Error", "All fields are required!");
        return;
    }

    // Password Validation: 8 to 12 characters
    if (password.length < 8 || password.length > 12) {
        showModal("Validation Error", "Password must be between 8 and 12 characters!");
        return;
    }

    // Save the signup data
    signupEmail = email;
    signupPassword = password;

    // Log signup details to the console
    console.log("--- Signup Details ---");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password); // For development/debugging; avoid in production for security

    // Use custom modal for registration confirmation
    showModal("Confirm Registration", "Please type 'yes' to confirm your registration:", true, (response) => {
        if (response && response.toLowerCase() === 'yes') {
            showModal("Success", "Registration successful!");
        } else {
            showModal("Cancelled", "Registration cancelled.");
        }
    });
});

// --- Login functionality ---
document.getElementById('loginButton').addEventListener('click', function () {
    const loginEmail = document.getElementById('loginEmail').value.trim();
    const loginPassword = document.getElementById('loginPassword').value.trim();

    // JavaScript Validation for login
    if (loginEmail === "" || loginPassword === "") {
        showModal("Validation Error", "Both email and password are required!");
        return;
    }

    // Log login attempt details to the console
    console.log("--- Login Attempt Details ---");
    console.log("Login Email:", loginEmail);
    console.log("Login Password:", loginPassword); // For development/debugging; avoid in production for security

    // Check if the login email and password match the signup data
    if (loginEmail === signupEmail && loginPassword === signupPassword) {
        // Password Validation: 8 to 12 characters (redundant if already checked at signup, but kept for robustness)
        if (loginPassword.length < 8 || loginPassword.length > 12) {
            showModal("Validation Error", "Login password must be between 8 and 12 characters!");
        } else {
            showModal("Success", "Login successful!");
        }
    } else {
        showModal("Login Failed", "Incorrect email or password!");
    }
});
