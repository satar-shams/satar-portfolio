
(function () {
    function initializeLanguage() {
        const portfolioElement = document.getElementById("portfolio-data");

        if (!portfolioElement) return;

        const portfolios = JSON.parse(
            portfolioElement.textContent || "{}"
        );

        function applyLanguage(language) {
            const portfolio = portfolios[language];

            if (!portfolio) return;

            document.documentElement.lang = language;

            // Navigation labels
            const navigation = portfolio.navigation;

            document
                .querySelectorAll("[data-nav-key]")
                .forEach(function (link) {
                    const item = navigation[link.dataset.navKey];

                    if (item) {
                        link.textContent = item.label;
                    }
                });

            // Home label and tagline
            const homeLabel = document.querySelector(".home-label");

            if (homeLabel) {
                homeLabel.textContent =
                    language === "ru" ? "Главная" : "Home";
            }

            const homeTagline = document.querySelector(".home-tagline");

            if (homeTagline) {
                homeTagline.textContent =
                    language === "ru"
                        ? "Здесь начинается любовь."
                        : "is where you fall in love.";
            }

            // Language dropdown
            const selectedLanguage =
                document.querySelector(".selected-language");

            if (selectedLanguage) {
                selectedLanguage.textContent =
                    language === "ru" ? "Рус" : "EN";
            }

            document
                .querySelectorAll("[data-language]")
                .forEach(function (button) {
                    const selected = button.dataset.language === language;

                    button.classList.toggle("selected", selected);
                    button.setAttribute("aria-pressed", String(selected));
                });

            // Home page content
            document
                .querySelectorAll("[data-page-language]")
                .forEach(function (section) {
                    section.hidden = section.dataset.pageLanguage !== language;
                });

            localStorage.setItem("portfolio-language", language);
        }

        const savedLanguage =
            localStorage.getItem("portfolio-language");

        applyLanguage(savedLanguage === "en" ? "en" : "ru");

        document
            .querySelectorAll("[data-language]")
            .forEach(function (button) {
                button.addEventListener("click", function () {
                    const language = button.dataset.language;

                    if (language === "ru" || language === "en") {
                        applyLanguage(language);

                        const selector =
                            document.querySelector(".language-selector");

                        if (selector) {
                            selector.open = false;
                        }
                    }
                });
            });
    }

    initializeLanguage();
})();
