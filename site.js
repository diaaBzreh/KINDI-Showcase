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

let languageChosen = false;
let profileChosen = false;

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

    // Update service section
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
            return;  // No feedback, just return if language is not chosen
        }

        profileChosen = true;

        // Show the service section
        document.getElementById("service-section").style.display = "flex";
        document.getElementById("service-section").scrollIntoView({ behavior: "smooth" });
    });
});

// Handle service selection
document.querySelectorAll(".service-option").forEach((option, index) => {
    option.addEventListener("click", () => {
        if (!profileChosen) {
            return; // No feedback, just return if profile is not chosen
        }

        if (index === 1) { // Medical Translation selected
            document.getElementById("translator-section").style.display = "flex";
            document.getElementById("translator-section").scrollIntoView({ behavior: "smooth" });
        } else {
            // Other services logic can go here
        }
    });
});

// Handle translator selection
let selectedTranslator = "";

document.querySelectorAll(".translator-option img").forEach((translator, index) => {
    translator.addEventListener("click", () => {
        const translatorNames = ["Sarah", "Mary", "Zayn"];
        selectedTranslator = translatorNames[index];

        // Highlight selected translator
        document.querySelectorAll(".translator-option img").forEach((img) => {
            img.style.border = "none";
        });
        translator.style.border = "3px solid #00c6ff";
    });
});

// Approve button logic
document.getElementById("approve-button").addEventListener("click", () => {
    if (selectedTranslator) {
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

// Add a variable to track the selected doctor
let selectedDoctor = "";

// Handle service selection for "Radiology Report" or "Pathology Report"
document.querySelectorAll(".service-option").forEach((option, index) => {
    option.addEventListener("click", () => {
        if (!profileChosen) {
            return; // No feedback, just return if profile is not chosen
        }

        if (index === 0 || index === 2) { // Radiology or Pathology Report selected
            document.getElementById("doctor-selection-section").style.display = "flex";
            document.getElementById("doctor-selection-section").scrollIntoView({ behavior: "smooth" });
        } else if (index === 1) { // Medical Translation
            document.getElementById("translator-section").style.display = "flex";
            document.getElementById("translator-section").scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Handle doctor selection
document.querySelectorAll(".doctor-option img").forEach((doctor, index) => {
    doctor.addEventListener("click", () => {
        const doctorNames = ["Doctor Tom", "Doctor Elizabeth", "Doctor Angelina"];
        selectedDoctor = doctorNames[index];

        // Highlight selected doctor
        document.querySelectorAll(".doctor-option img").forEach((img) => {
            img.style.border = "3px solid white";
        });
        doctor.style.border = "3px solid #00c6ff";
    });
});

// Approve doctor selection
document.getElementById("doctor-approve-button").addEventListener("click", () => {
    if (selectedDoctor) {
        document.getElementById("report-section").style.display = "flex";
        document.getElementById("report-section").scrollIntoView({ behavior: "smooth" });
    }
});