document.addEventListener('DOMContentLoaded', function () {
    // Sidebar toggle for small devices
    const navbarToggler = document.querySelector('.navbar-toggler');
    const sidebar = document.querySelector('#sidebar');

    navbarToggler.addEventListener('click', function () {
        sidebar.classList.toggle('show');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function (event) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(event.target) && !navbarToggler.contains(event.target)) {
                sidebar.classList.remove('show');
            }
        }
    });

    // Form submission handlers (mock functionality with alerts)
    document.getElementById('profileForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        alert(`Profile Updated:\nName: ${name}\nEmail: ${email}`);
        bootstrap.Modal.getInstance('#editProfileModal').hide();
    });

    document.getElementById('passwordForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (newPassword !== confirmPassword) {
            alert('New password and confirm password do not match.');
            return;
        }
        alert(`Password Updated for Email: winslaise383@gmail.com`);
        bootstrap.Modal.getInstance('#updatePasswordModal').hide();
    });

    document.getElementById('creditForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        const amount = document.getElementById('creditAmount').value;
        alert(`Store Credit Topped Up: $${amount}`);
        bootstrap.Modal.getInstance('#topUpCreditModal').hide();
    });

    document.getElementById('addressForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('addressName').value;
        const email = document.getElementById('addressEmail').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        alert(`Address Updated:\nName: ${name}\nEmail: ${email}\nAddress: ${address}\nPhone: ${phone}`);
        bootstrap.Modal.getInstance('#editAddressModal').hide();
    });

    document.getElementById('newsletterForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        const preference = document.querySelector('input[name="newsletter"]:checked').value;
        const frequency = document.getElementById('frequency').value;
        alert(`Newsletter Preference Updated:\nReceive: ${preference}\nFrequency: ${frequency}`);
        bootstrap.Modal.getInstance('#newsletterPreferencesModal').hide();
    });

    document.getElementById('reviewForm')?.addEventListener('submit', function (e) {
        e.preventDefault();
        const product = document.getElementById('product').value;
        const rating = document.getElementById('rating').value;
        const reviewText = document.getElementById('reviewText').value;
        if (!product) {
            alert('Please select a product to review.');
            return;
        }
        alert(`Review Submitted:\nProduct: ${product}\nRating: ${rating} Stars\nReview: ${reviewText}`);
        bootstrap.Modal.getInstance('#reviewsModal').hide();
    });
});