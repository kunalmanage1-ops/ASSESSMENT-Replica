document.addEventListener("DOMContentLoaded", function () {

    const nav = document.getElementById("mainNav");

    if (nav) {
        const links = nav.querySelectorAll(".nav-link:not(.dropdown-toggle)");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                if (window.innerWidth < 992) {
                    const menu = bootstrap.Collapse.getInstance(nav);

                    if (menu) {
                        menu.hide();
                    }
                }
            });
        });
    }

    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".navbar .nav-link");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) {
                    return;
                }

                const id = entry.target.id;

                navLinks.forEach(function (link) {

                    if (link.classList.contains("dropdown-toggle")) {
                        return;
                    }

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === "#" + id
                    );
                });

            });

        }, {
            rootMargin: "-35% 0px -55% 0px"
        });

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }

    const hero = document.getElementById("heroCarousel");

    if (hero && window.bootstrap) {
        bootstrap.Carousel.getOrCreateInstance(hero, {
            interval: 5000,
            ride: "carousel",
            pause: false,
            touch: true,
            wrap: true
        });
    }

});