// =========================================================
// DEVSECOPS PORTFOLIO
// JAVASCRIPT
// =========================================================


document.addEventListener(
    "DOMContentLoaded",
    function () {


        // =================================================
        // 1. AUTOMATIC COPYRIGHT YEAR
        // =================================================

        const yearElement =
            document.querySelector(
                "#current-year"
            );


        if (yearElement) {

            yearElement.textContent =
                new Date().getFullYear();

        }



        // =================================================
        // 2. SCROLL REVEAL ANIMATION
        // =================================================

        const revealElements =
            document.querySelectorAll(
                "section, .skill-category, .project-card"
            );


        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "reveal"
                );

                observer.observe(
                    element
                );

            }
        );



        // =================================================
        // 3. ACTIVE NAVIGATION LINK
        // =================================================

        const sections =
            document.querySelectorAll(
                "section"
            );


        const navLinks =
            document.querySelectorAll(
                ".nav-links a"
            );


        window.addEventListener(
            "scroll",
            function () {

                let currentSection = "";


                sections.forEach(
                    function (section) {

                        const sectionTop =
                            section.offsetTop - 150;


                        const sectionHeight =
                            section.offsetHeight;


                        if (
                            window.scrollY >=
                                sectionTop &&
                            window.scrollY <
                                sectionTop +
                                sectionHeight
                        ) {

                            currentSection =
                                section.getAttribute(
                                    "id"
                                );

                        }

                    }
                );


                navLinks.forEach(
                    function (link) {

                        link.classList.remove(
                            "active"
                        );


                        const linkTarget =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            linkTarget ===
                            "#" + currentSection
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    }
                );

            }
        );



        // =================================================
        // 4. NAVIGATION CLICK EFFECT
        // =================================================

        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navLinks.forEach(
                            function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                        this.classList.add(
                            "active"
                        );

                    }
                );

            }
        );



        // =================================================
        // 5. BUTTON CLICK FEEDBACK
        // =================================================

        const buttons =
            document.querySelectorAll(
                ".btn"
            );


        buttons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        this.style.transform =
                            "scale(0.97)";


                        const currentButton =
                            this;


                        setTimeout(
                            function () {

                                currentButton.style.transform =
                                    "";

                            },
                            120
                        );

                    }
                );

            }
        );


    }
);