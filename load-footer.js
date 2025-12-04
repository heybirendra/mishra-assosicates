// Load common footer across all pages
document.addEventListener('DOMContentLoaded', function () {
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        // Embed footer HTML directly (works with file:// protocol)
        const footerHTML = `
<!-- FOOTER -->
<footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h3>KK Mishra & Associates</h3>
            <p>
                Providing expert legal services across Bihar with integrity, dedication, and
                a commitment to justice. Your trusted legal partner for all court matters.
            </p>
        </div>

        <div class="footer-section">
            <h3>Quick Links</h3>
            <ul class="footer-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="kamal-mishra.html">Kamal K. Mishra</a></li>
                <li><a href="jitendra-mishra.html">Jitendra K. Mishra</a></li>
                <li><a href="index.html#specializations">Specializations</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h3>Practice Areas</h3>
            <ul class="footer-links">
                <li><a href="index.html#specializations">Criminal Defense</a></li>
                <li><a href="index.html#specializations">Civil Litigation</a></li>
                <li><a href="index.html#specializations">Property Law</a></li>
                <li><a href="index.html#specializations">Family Law</a></li>
                <li><a href="index.html#specializations">Constitutional Law</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h3>Contact Info</h3>
            <ul class="footer-links">
                <li>📍 Patna High Court, Bihar</li>
                <li>📍 Darbhanga Dist. Court, Bihar</li>
                <li>📧 kamal@kkmishra.in </li>
                <li>📞 +91 6207 356 612</li>
                <li>📧 jitendra@kkmishra.in</li>
                <li>📞 +91 6202 805 957</li>
                <li>🕐 Mon-Sat: 10 AM - 6 PM</li>
            </ul>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2025 KK Mishra & Associates. All rights reserved. | Advocate practicing in Bihar Courts</p>
    </div>
</footer>
        `;

        footerPlaceholder.innerHTML = footerHTML;
    }
});
