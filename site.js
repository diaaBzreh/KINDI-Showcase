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
        serviceOption3: "Pathology Report"
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
        serviceOption3: "Patoloji Raporu"
    }
};

document.getElementById("profile-section").style.display = "none";
document.getElementById("service-section").style.display = "none";

let languageChosen = false;
let profileChosen = false;

function changeLanguage(lang) {
    languageChosen = true;
    const {
        welcomeTitle,
        welcomeDescription,
        profileTitle,
        profileOption1,
        profileOption2,
        serviceTitleHospital,
        serviceTitleProfessional,
        serviceOption1,
        serviceOption2,
        serviceOption3
    } = translations[lang];

    document.getElementById("welcome-title").textContent = welcomeTitle;
    document.getElementById("welcome-description").textContent = welcomeDescription;
    document.getElementById("profile-title").textContent = profileTitle;
    document.getElementById("profile-option-1").textContent = profileOption1;
    document.getElementById("profile-option-2").textContent = profileOption2;

    const isHospital = document.getElementById("profile-option-1").classList.contains("active");
    const serviceTitle = isHospital ? serviceTitleHospital : serviceTitleProfessional;

    document.getElementById("service-title").textContent = serviceTitle;
    document.getElementById("service-option-1").textContent = serviceOption1;
    document.getElementById("service-option-2").textContent = serviceOption2;
    document.getElementById("service-option-3").textContent = serviceOption3;

    document.getElementById("profile-section").style.display = "flex";
    document.getElementById("service-section").style.display = "none";

    document.getElementById("profile-section").scrollIntoView({ behavior: "smooth" });
}

const profileOptions = document.querySelectorAll(".profile-option");
profileOptions.forEach((option, index) => {
    option.addEventListener("click", () => {
        if (!languageChosen) {
            alert("Please choose a language first!");
            return;
        }

        profileChosen = true;
        const isHospital = index === 0;
        const lang = document.getElementById("welcome-title").textContent.includes("Welcome") ? "en" : "tr";

        const {
            serviceTitleHospital,
            serviceTitleProfessional,
            serviceOption1,
            serviceOption2,
            serviceOption3
        } = translations[lang];

        const serviceTitle = isHospital ? serviceTitleHospital : serviceTitleProfessional;

        document.getElementById("service-title").textContent = serviceTitle;
        document.getElementById("service-option-1").textContent = serviceOption1;
        document.getElementById("service-option-2").textContent = serviceOption2;
        document.getElementById("service-option-3").textContent = serviceOption3;

        document.getElementById("service-section").style.display = "flex";

        document.getElementById("service-section").scrollIntoView({ behavior: "smooth" });
    });
});
