// Language translations
const translations = {
    en: {
        welcomeTitle: "Welcome to KINDI Platform Showcase",
        welcomeDescription: "HIMSS EURASIA 2024",
        profileTitle: "Choose Your Profile",
        profileOption1: "Hospital",
        profileOption2: "Healthcare Professional",
        serviceTitleHospital: "Request a Service",
        serviceTitleProfessional: "Provide a Service",
        serviceOption1: "Radiology Report",
        serviceOption2: "Medical Translation",
        serviceOption3: "Pathology Report",
        translatorTitle: "Choose Your Translator",
        approveButton: "Approve",
        reportTitle: "Receive a Report",
        enterEmail: "Enter your email address:",
        submitButton: "Submit",
    },
    tr: {
        welcomeTitle: "KINDI Platformuna Hoşgeldiniz",
        welcomeDescription: "HIMSS EURASIA 2024",
        profileTitle: "Profilinizi Seçin",
        profileOption1: "Hastane",
        profileOption2: "Sağlık Profesyoneli",
        serviceTitleHospital: "Hizmet Talep Edin",
        serviceTitleProfessional: "Hizmet Sağlayın",
        serviceOption1: "Radyoloji Raporu",
        serviceOption2: "Tıbbi Çeviri",
        serviceOption3: "Patoloji Raporu",
        translatorTitle: "Çevirmen Seçin",
        approveButton: "Onayla",
        reportTitle: "Rapor Alın",
        enterEmail: "E-posta adresinizi girin:",
        submitButton: "Gönder",
    },
};

// Initial setup: Hide all sections except the welcome section
document.getElementById("profile-section").style.display = "none";
document.getElementById("service-section").style.display = "none";
document.getElementById("translator-section").style.display = "none";
document.getElementById("report-section").style.display = "none";
document.getElementById("doctor-selection-section").style.display = "none";

let languageChosen = false;
let profileChosen = false;
let serviceChosen = false;
let profileType = ''; // Track the type of profile (Hospital or Healthcare Professional)

// Function to change language
function changeLanguage(lang) {
    languageChosen = true;

    const {
        welcomeTitle,
        welcomeDescription,
        profileTitle,
        profileOption1,
        profileOption2,
        serviceOption1,
        serviceOption2,
        serviceOption3,
    } = translations[lang];

    // Update welcome section
    document.getElementById("welcome-title").textContent = welcomeTitle;
    document.getElementById("welcome-description").textContent = welcomeDescription;

    // Update profile section
    document.getElementById("profile-title").textContent = profileTitle;
    document.getElementById("profile-option-1").textContent = profileOption1;
    document.getElementById("profile-option-2").textContent = profileOption2;

    // Update service options
    document.getElementById("service-option-1").textContent = serviceOption1;
    document.getElementById("service-option-2").textContent = serviceOption2;
    document.getElementById("service-option-3").textContent = serviceOption3;
    

    // Show profile section and scroll to it
    document.getElementById("profile-section").style.display = "flex";
    document.getElementById("profile-section").scrollIntoView({ behavior: "smooth" });
}

// Handle profile selection
document.querySelectorAll(".profile-option").forEach((option, index) => {
    option.addEventListener("click", () => {
        if (!languageChosen) {
            return; // No feedback, just return if language is not chosen
        }

        profileChosen = true;

        // Highlight selected profile
        document.querySelectorAll(".profile-option").forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");

        // Set profile type and update service section title
        if (index === 0) {
            profileType = 'hospital';
            document.getElementById("service-title").textContent = translations[document.documentElement.lang || 'en'].serviceTitleHospital;
        } else if (index === 1) {
            profileType = 'healthcare';
            document.getElementById("service-title").textContent = translations[document.documentElement.lang || 'en'].serviceTitleProfessional;
        }

        // Show the service section and scroll to it
        document.getElementById("service-section").style.display = "flex";
        document.getElementById("service-section").scrollIntoView({ behavior: "smooth" });
    });
});

// Handle service selection
document.querySelectorAll(".service-option").forEach((option, index) => {
    option.addEventListener("click", () => {
        if (!profileChosen) { //hospital
            return; // No feedback, just return if profile is not chosen
        }

        serviceChosen = true;

        // Highlight selected service
        document.querySelectorAll(".service-option").forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");

        // Check profile type and handle accordingly
        if (profileType === 'hospital') {
            // If it's a hospital profile, proceed with the usual behavior
            if (index === 0 || index === 2) { // Radiology Report or Pathology Report
                document.getElementById("doctor-selection-section").style.display = "flex";
                document.getElementById("doctor-selection-section").scrollIntoView({ behavior: "smooth" });
            } else if (index === 1) { // Medical Translation
                document.getElementById("translator-section").style.display = "flex";
                document.getElementById("translator-section").scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

// Handle doctor selection
let selectedDoctor = "";
document.querySelectorAll(".doctor-option img").forEach((doctor, index) => {
    doctor.addEventListener("click", () => { // radiology
        const doctorNames = ["Doctor Tom", "Doctor Elizabeth", "Doctor Angelina"];
        selectedDoctor = doctorNames[index];

        // Highlight selected doctor
        document.querySelectorAll(".doctor-option img").forEach((img) => {
            img.style.border = "none";
        });
        doctor.style.border = "3px solid #00c6ff";
    });
});
///////////////////////////////////////////////////////
// Handle service selection under Healthcare Professional Profile
document.querySelectorAll(".service-option").forEach((option, index) => {
    option.addEventListener("click", () => {
        if (!profileChosen) {
            return; // No feedback, just return if profile is not chosen
        }

        serviceChosen = true;

        // Highlight selected service
        document.querySelectorAll(".service-option").forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");

        // Check profile type and handle accordingly
        if (profileType === 'healthcare') {
            // If it's a healthcare profile, handle the radiology selection
            if (index === 0) { // Radiology Report selected
                document.getElementById("xray-selection-section").style.display = "flex";
                document.getElementById("xray-selection-section").scrollIntoView({ behavior: "smooth" });
            } else if (index === 1) { // Medical Translation
                document.getElementById("translator-section").style.display = "flex";
                document.getElementById("translator-section").scrollIntoView({ behavior: "smooth" });
            } else if (index === 2) { // Pathology Report
                // Handle Pathology Report selection if necessary
            }
        }
    });
});

// Handle X-ray selection after Radiology Report selection
let xraySelection = ""; // To store the selected X-ray option

// Select the X-ray checkbox option
document.querySelectorAll(".xray-option input[type='checkbox']").forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        // Store the selected X-ray option value
        if (checkbox.checked) {
            const xrayOptions = ["Chest X-ray", "Bone X-ray", "CT Scan"]; // Example options
            xraySelection = xrayOptions[index];
        } else {
            xraySelection = ""; // If unchecked, reset the selection
        }

        console.log("Selected X-ray Option: ", xraySelection); // Log for debugging
    });
});

// Optionally, add validation before proceeding with the next step (e.g., doctor selection)
document.getElementById("xray-approve-button").addEventListener("click", () => {
    if (xraySelection) {
        // Proceed to report section after X-ray selection approval
        document.getElementById("xray-selection-section").style.display = "none"; // Hide the X-ray selection section
        document.getElementById("report-section").style.display = "flex"; // Show the report section
        document.getElementById("report-section").scrollIntoView({ behavior: "smooth" });
    } else {
        alert("Please select an X-ray option before proceeding.");
    }
});

// Handle report form submission
document.getElementById("report-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    if (email) {
        // Proceed with report submission (you can add further logic here)
        alert("Report submitted successfully to " + email);
        
        // Optionally, reset the form or move to another section
        document.getElementById("report-form").reset(); 
        document.getElementById("report-section").style.display = "none"; // Hide the report section after submission

        // Optionally, move to a new page or another section after report submission
        // window.location.href = "thank_you.html";  // Redirect to a thank you page or other section
    } else {
        alert("Please enter a valid email.");
    }
});


///////////////////////////////////////////////////

//////////////////////////////////////////////////
// Handle service selection under Healthcare Professional Profile
document.querySelectorAll(".service-option").forEach((option, index) => {
    option.addEventListener("click", () => {
        if (!profileChosen) {
            return; // No feedback, just return if profile is not chosen
        }

        serviceChosen = true;

        // Highlight selected service
        document.querySelectorAll(".service-option").forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");

        // Check profile type and handle accordingly
        if (profileType === 'healthcare') {
            // If it's a healthcare profile, handle the pathology selection
            if (index === 0) { // Radiology Report selected
                document.getElementById("xray-selection-section").style.display = "flex";
                document.getElementById("xray-selection-section").scrollIntoView({ behavior: "smooth" });
            } else if (index === 1) { // Medical Translation
                document.getElementById("translator-section").style.display = "flex";
                document.getElementById("translator-section").scrollIntoView({ behavior: "smooth" });
            } else if (index === 2) { // Pathology Report
                // Handle Pathology Report selection if necessary
                document.getElementById("path-selection-section").style.display = "flex";
                document.getElementById("path-selection-section").scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

// Handle Pathology selection after Pathology Report selection
let pathologySelection = ""; // To store the selected Pathology option

// Select the Pathology checkbox option
document.querySelectorAll(".path-option input[type='checkbox']").forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        // Store the selected Pathology option value
        if (checkbox.checked) {
            const pathologyOptions = ["Blood Test", "Biopsy", "Urine Test"]; // Example options
            pathologySelection = pathologyOptions[index];
        } else {
            pathologySelection = ""; // If unchecked, reset the selection
        }

        console.log("Selected Pathology Option: ", pathologySelection); // Log for debugging
    });
});

// Optionally, add validation before proceeding with the next step (e.g., report form submission)
document.getElementById("path-approve-button").addEventListener("click", () => {
    if (pathologySelection) {
        // Proceed to report section after Pathology selection approval
        document.getElementById("path-selection-section").style.display = "none"; // Hide the Pathology selection section
        document.getElementById("report-section").style.display = "flex"; // Show the report section
        document.getElementById("report-section").scrollIntoView({ behavior: "smooth" });
    } else {
        alert("Please select a Pathology option before proceeding.");
    }
});

// Handle report form submission
document.getElementById("report-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    if (email) {
        // Proceed with report submission (you can add further logic here)
        alert("Report submitted successfully to " + email);
        
        // Optionally, reset the form or move to another section
        document.getElementById("report-form").reset(); 
        document.getElementById("report-section").style.display = "none"; // Hide the report section after submission

        // Optionally, move to a new page or another section after report submission
        // window.location.href = "thank_you.html";  // Redirect to a thank you page or other section
    } else {
        alert("Please enter a valid email.");
    }
});

//////////////////////////////////////////////////

// Approve doctor selection
document.getElementById("doctor-approve-button").addEventListener("click", () => {
    if (selectedDoctor) {
        // Show the report section and scroll to it
        document.getElementById("report-section").style.display = "flex";
        document.getElementById("report-section").scrollIntoView({ behavior: "smooth" });
    }
});

// Handle translator selection
let selectedTranslator = "";
document.querySelectorAll(".translator-option img").forEach((translator, index) => {
    translator.addEventListener("click", () => { //medical translator
        const translatorNames = ["Sarah", "Mary", "Zayn"];
        selectedTranslator = translatorNames[index];

        // Highlight selected translator
        document.querySelectorAll(".translator-option img").forEach((img) => {
            img.style.border = "none";
        });
        translator.style.border = "3px solid #00c6ff";
    });
});

// Approve translator selection
document.getElementById("approve-button").addEventListener("click", () => {
    if (selectedTranslator) {
        // Show the report section and scroll to it
        document.getElementById("report-section").style.display = "flex";
        document.getElementById("report-section").scrollIntoView({ behavior: "smooth" });
    }
});

// Handle email submission
document.getElementById("report-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    if (email) {
        // Proceed with report submission
    }
});
