// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const section = document.querySelector(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form validation and submission feedback
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Show confirmation message
        alert('Thank you, ' + name + '! Your message has been sent.');

        // Optionally reset the form
        form.reset();

        // If using external service like Formspree, you can uncomment this to proceed with submission
        // form.submit();
    });
});

function aboutClick(e) {
    e.preventDefault();
    showabout();
}

function projectsClick(e) {
    e.preventDefault();
    hideaboutClick();
    showprojects();
}

function contactClick(e) {
    e.preventDefault();
    hideaboutClick();
    hideprojectsClick();
    showcontact();

}

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class from all
            tabs.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            // Add active class to clicked tab and corresponding content
            tab.classList.add("active");
            const tabId = tab.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
        });
    });

    // Optional: Basic form submission alert
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        form.reset();
    });
});


const buttons = document.querySelectorAll('#button-container button');

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btn.style.display = 'none'; // Hide current button
        if (buttons[index + 1]) {
            buttons[index + 1].style.display = 'inline-block'; // Show next button
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".nav-button");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const targetSelector = this.getAttribute("data-target");
            const targetContent = document.querySelector(targetSelector);

            // Hide all content sections
            contents.forEach(content => content.style.display = "none");

            // Show the selected one
            if (targetContent) {
                targetContent.style.display = "block";
            }

            // Optionally, update active class for styling
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Optional: Show the first tab by default
    if (buttons.length > 0) {
        buttons[0].click();
    }
});
