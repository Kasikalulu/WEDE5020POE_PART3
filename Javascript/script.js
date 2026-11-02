/* ===================================================== */
/* MABLFA - MAIN JAVASCRIPT FILE                         */
/* ===================================================== */

// ==========================================
// 1. SIGN IN MODAL
// ==========================================

var modal = document.getElementById("signinModal");
var btns = document.querySelectorAll(".signin-link"); 

// Only run if the modal exists on the page
if (modal && btns.length > 0) {
    btns.forEach(function(btn) {
        btn.onclick = function(event) {
            event.preventDefault(); 
            modal.style.display = "block";
        }
    });

    // Make closeModal global so the HTML button can access it
    window.closeModal = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// ==========================================
// 2. GALLERY LIGHTBOX
// ==========================================
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");
var galleryImages = document.querySelectorAll(".gallery-item img");

// Only run if the lightbox exists on the page (gallery.html)
if (lightbox && galleryImages.length > 0) {
    galleryImages.forEach(function(img) {
        img.style.cursor = "pointer"; 
        img.onclick = function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src; 
        }
    });

    window.closeLightbox = function() {
        lightbox.style.display = "none";
    }

    lightbox.onclick = function(event) {
        if (event.target == lightbox) {
            lightbox.style.display = "none";
        }
    }
}

// ==========================================
// 3. CONTACT FORM VALIDATION
// ==========================================
var contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.onsubmit = function(event) {
        event.preventDefault(); 
        var isValid = true;
        
        var name = document.getElementById("contactName").value.trim();
        var email = document.getElementById("contactEmail").value.trim();
        var subject = document.getElementById("contactSubject").value;
        var message = document.getElementById("contactMessage").value.trim();

        if (name === "") {
            document.getElementById("errorContactName").style.display = "block";
            document.getElementById("contactName").classList.add("input-error");
            isValid = false;
        } else {
            document.getElementById("errorContactName").style.display = "none";
            document.getElementById("contactName").classList.remove("input-error");
        }

        if (email === "" || !email.includes("@") || !email.includes(".")) {
            document.getElementById("errorContactEmail").style.display = "block";
            document.getElementById("contactEmail").classList.add("input-error");
            isValid = false;
        } else {
            document.getElementById("errorContactEmail").style.display = "none";
            document.getElementById("contactEmail").classList.remove("input-error");
        }

        if (subject === "") {
            document.getElementById("errorContactSubject").style.display = "block";
            document.getElementById("contactSubject").classList.add("input-error");
            isValid = false;
        } else {
            document.getElementById("errorContactSubject").style.display = "none";
            document.getElementById("contactSubject").classList.remove("input-error");
        }

        if (message === "") {
            document.getElementById("errorContactMessage").style.display = "block";
            document.getElementById("contactMessage").classList.add("input-error");
            isValid = false;
        } else {
            document.getElementById("errorContactMessage").style.display = "none";
            document.getElementById("contactMessage").classList.remove("input-error");
        }

        if (isValid) {
            document.getElementById("contactSuccess").style.display = "block";
            contactForm.reset(); 
            setTimeout(function() {
                document.getElementById("contactSuccess").style.display = "none";
            }, 4000);
        }
    }
}

// ==========================================
// 4. ENQUIRY FORM VALIDATION
// ==========================================
var enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.onsubmit = function(event) {
        event.preventDefault(); 
        var isValid = true;
        
        var name = document.getElementById("enquiryName").value.trim();
        var email = document.getElementById("enquiryEmail").value.trim();
        var phone = document.getElementById("enquiryPhone").value.trim();
        var type = document.getElementById("enquiryType").value;
        var message = document.getElementById("enquiryMessage").value.trim();

        if (name === "") {
            document.getElementById("errorEnqName").style.display = "block";
            document.getElementById("enquiryName").classList.add("input-error");
            isValid = false;
        } else {
            document.getElementById("errorEnqName").style.display = "none";
            document.getElementById("enquiryName").classList.remove("input-error");
        }

        if (email === "" || !email.includes("@") || !email.includes(".")) {
            document.getElementById("errorEnqEmail").style.display = "block";
            document.getElementById("enquiryEmail").classList.add("input-error");
            isValid = false;
        } else {
            document.getElementById("errorEnqEmail").style.display = "none";
            document.getElementById("enquiryEmail").classList.remove("input-error");
        }

        var phoneClean = phone.replace(/[\s-]/g, ''); 
        if (phoneClean.length !== 10 || isNaN(phoneClean)) {
            document.getElementById("errorEnqPhone").style.display = "block";
            document.getElementById("enquiryPhone").classList.add("input-error");
            isValid = false;
        } else {
            document.getElementById("errorEnqPhone").style.display = "none";
            document.getElementById("enquiryPhone").classList.remove("input-error");
        }

        if (type === "") {
            document.getElementById("errorEnqType").style.display = "block";
            document.getElementById("enquiryType").classList.add("input-error");
            isValid = false;
        } else {
            document.getElementById("errorEnqType").style.display = "none";
            document.getElementById("enquiryType").classList.remove("input-error");
        }

        if (message === "") {
            document.getElementById("errorEnqMessage").style.display = "block";
            document.getElementById("enquiryMessage").classList.add("input-error");
            isValid = false;
        } else {
            document.getElementById("errorEnqMessage").style.display = "none";
            document.getElementById("enquiryMessage").classList.remove("input-error");
        }

        if (isValid) {
            document.getElementById("enquirySuccess").style.display = "block";
            enquiryForm.reset();
            setTimeout(function() {
                document.getElementById("enquirySuccess").style.display = "none";
            }, 4000);
        }
    }
}

// ==========================================
// 5. LEAGUE TABLE SEARCH FILTER
// ==========================================
var teamSearch = document.getElementById("teamSearch");

if (teamSearch) {
    teamSearch.addEventListener("keyup", function() {
        // Get what the user typed and make it lowercase
        var filter = this.value.toLowerCase();
        
        // Get all the rows in the table body
        var tableRows = document.querySelectorAll(".league-table tbody tr");

        // Loop through each row
        tableRows.forEach(function(row) {
            // Find the team name inside the row
            var teamName = row.querySelector(".team-name").textContent.toLowerCase();
            
            // If the team name matches the search, show it. Otherwise, hide it.
            if (teamName.includes(filter)) {
                row.style.display = ""; 
            } else {
                row.style.display = "none";
            }
        });
    });
}