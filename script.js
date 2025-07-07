// Basic form handler (for demo: doesn't actually send data)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('applicationForm');
    const success = document.getElementById('successMessage');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            form.style.display = 'none';
            success.style.display = 'block';
        });
    }
});