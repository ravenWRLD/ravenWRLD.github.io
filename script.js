/* MANUAL AND AUTOMATIC SLIDE */

var slideIndex = 0;
showSlidesAuto();

function plusSlides(n) {
    clearTimeout(autoSlideTimeout); // Ferma l'auto slide quando l'utente cambia manualmente
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    clearTimeout(autoSlideTimeout); // Ferma l'auto slide quando l'utente cambia manualmente
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    autoSlideTimeout = setTimeout(showSlidesAuto, 20000); // Riprende l'auto slide dopo il cambio manuale
}

var autoSlideTimeout;

function showSlidesAuto() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    autoSlideTimeout = setTimeout(showSlidesAuto, 5000); // Cambia slide ogni 20 secondi
}  


/* CATALOGO DROPDOWN*/

/*
document.addEventListener('DOMContentLoaded', function() {
    const catalogo = document.getElementById('catalogo');
    const catalogoDropdown = document.querySelector('.catalogo-dropdown');
    const catalogoTriangle = document.getElementById('catalogo-triangle');
    const yamaha = document.getElementById('yamaha');
    const yamahaDropdown = document.getElementById('yamaha-dropdown');
    const yamahaTriangle = document.getElementById('yamaha-triangle');
    const suzuki = document.getElementById('suzuki');
    const suzukiDropdown = document.getElementById('suzuki-dropdown');
    const suzukiTriangle = document.getElementById('suzuki-triangle');
    const honda = document.getElementById('honda');
    const hondaDropdown = document.getElementById('honda-dropdown');
    const hondaTriangle = document.getElementById('honda-triangle');
    const kawasaki = document.getElementById('kawasaki');
    const kawasakiDropdown = document.getElementById('kawasaki-dropdown');
    const kawasakiTriangle = document.getElementById('kawasaki-triangle');
    const bmw = document.getElementById('bmw');
    const bmwDropdown = document.getElementById('bmw-dropdown');
    const bmwTriangle = document.getElementById('bmw-triangle');
    const ktm = document.getElementById('ktm');
    const ktmDropdown = document.getElementById('ktm-dropdown');
    const ktmTriangle = document.getElementById('ktm-triangle');
    const ducati = document.getElementById('ducati');
    const ducatiDropdown = document.getElementById('ducati-dropdown');
    const ducatiTriangle = document.getElementById('ducati-triangle');
    const aprilia = document.getElementById('aprilia');
    const apriliaDropdown = document.getElementById('aprilia-dropdown');
    const apriliaTriangle = document.getElementById('aprilia-triangle');

    catalogo.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDropdown(catalogoDropdown, catalogoTriangle);
    });

    yamaha.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDropdown(yamahaDropdown, yamahaTriangle);
    });

    suzuki.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDropdown(suzukiDropdown, suzukiTriangle);
    });

    honda.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDropdown(hondaDropdown, hondaTriangle);
    });

    kawasaki.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDropdown(kawasakiDropdown, kawasakiTriangle);
    });

    bmw.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDropdown(bmwDropdown, bmwTriangle);
    });

    ktm.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDropdown(ktmDropdown, ktmTriangle);
    });

    ducati.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDropdown(ducatiDropdown, ducatiTriangle);
    });

    aprilia.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDropdown(apriliaDropdown, apriliaTriangle);
    });

    document.addEventListener('click', function(e) {
        if(!catalogo.contains(e.target) && !catalogoDropdown.contains(e.target)) {
            closeDropdowns();
        }
    });

    function toggleDropdown(dropdown, triangle) {
        if(dropdown.classList.contains('closed')) {
            dropdown.classList.remove('closed');
            dropdown.classList.add('open');
            triangle.classList.remove('triangle-down');
            triangle.classList.add('triangle-up');
        } else {
            dropdown.classList.remove('open');
            dropdown.classList.add('closed');
            triangle.classList.remove('triangle-up');
            triangle.classList.add('triangle-down');
        }
    }

    function closeDropdowns() {
        var controllo = 0;
        if (yamahaDropdown.classList.contains("open")) {
            toggleDropdown(yamahaDropdown, yamahaTriangle);
            controllo = 1;
        }
        if (suzukiDropdown.classList.contains("open")) {
            toggleDropdown(suzukiDropdown, suzukiTriangle);
            controllo = 1;
        }
        if (hondaDropdown.classList.contains("open")) {
            toggleDropdown(hondaDropdown, hondaTriangle);
            controllo = 1;
        }
        if (kawasakiDropdown.classList.contains("open")) {
            toggleDropdown(kawasakiDropdown, kawasakiTriangle);
            controllo = 1;
        }
        if (bmwDropdown.classList.contains("open")) {
            toggleDropdown(bmwDropdown, bmwTriangle);
            controllo = 1;
        }
        if (ktmDropdown.classList.contains("open")) {
            toggleDropdown(ktmDropdown, ktmTriangle);
            controllo = 1;
        }
        if (ducatiDropdown.classList.contains("open")) {
            toggleDropdown(ducatiDropdown, ducatiTriangle);
            controllo = 1;
        }
        if (apriliaDropdown.classList.contains("open")) {
            toggleDropdown(apriliaDropdown, apriliaTriangle);
            controllo = 1;
        }
        if (catalogoDropdown.classList.contains("open")) {
            if(controllo==1)
                {
                    setTimeout(() => {
                        toggleDropdown(catalogoDropdown, catalogoTriangle);
                    }, 450);
                }
            else {
                toggleDropdown(catalogoDropdown, catalogoTriangle);
            }
        }
    }
    
});

*/

document.addEventListener('DOMContentLoaded', function() {
    // Array contenente i nomi dei brand
    const brands = ['yamaha', 'suzuki', 'honda', 'kawasaki', 'bmw', 'ktm', 'ducati', 'aprilia'];
    // Oggetto che conterrà i riferimenti ai pulsanti e ai dropdowns di ciascun brand
    const dropdowns = {};

    // Per ogni brand, memorizza i riferimenti agli elementi del DOM
    brands.forEach(brand => {
        dropdowns[brand] = {
            button: document.getElementById(brand),
            dropdown: document.getElementById(`${brand}-dropdown`),
            triangle: document.getElementById(`${brand}-triangle`)
        };
    });

    // Riferimenti per il dropdown "catalogo"
    const catalogo = document.getElementById('catalogo');
    const catalogoDropdown = document.querySelector('.catalogo-dropdown');
    const catalogoTriangle = document.getElementById('catalogo-triangle');

    // Aggiunge un listener per il click sul pulsante "catalogo"
    catalogo.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenire l'azione predefinita del click
        toggleCatalogoDropdown();
    });

    // Aggiunge un listener per il click in qualsiasi parte del documento
    document.addEventListener('click', function(e) {
        let clickedInsideDropdown = catalogo.contains(e.target) || catalogoDropdown.contains(e.target);

        // Verifica se il click è avvenuto all'interno di uno dei dropdowns dei brand
        brands.forEach(brand => {
            if (dropdowns[brand].button.contains(e.target) || dropdowns[brand].dropdown.contains(e.target)) {
                clickedInsideDropdown = true;
            }
        });

        // Se il click è avvenuto fuori da tutti i dropdowns, chiude tutti i dropdowns
        if (!clickedInsideDropdown) {
            closeAllDropdowns();
        }
    });

    // Aggiunge un listener per il click su ciascun brand
    brands.forEach(brand => {
        dropdowns[brand].button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenire l'azione predefinita del click
            toggleBrandDropdown(brand);
        });
    });

    // Funzione per gestire l'apertura e la chiusura del dropdown "catalogo"
    function toggleCatalogoDropdown() {
        const isOpen = catalogoDropdown.classList.contains('open');
        let anyBrandOpen = false;

        // Verifica se uno dei dropdowns dei brand è aperto
        brands.forEach(brand => {
            if (dropdowns[brand].dropdown.classList.contains('open')) {
                anyBrandOpen = true;
            }
        });

        // Se il dropdown "catalogo" è aperto
        if (isOpen) {
            // Se c'è almeno un dropdown di un brand aperto, chiude prima quelli e poi "catalogo"
            if (anyBrandOpen) {
                closeBrandDropdowns();
                setTimeout(() => {
                    closeDropdown(catalogoDropdown, catalogoTriangle);
                }, 450);
            } else {
                // Altrimenti, chiude "catalogo" immediatamente
                closeDropdown(catalogoDropdown, catalogoTriangle);
            }
        } else {
            // Se "catalogo" non è aperto, chiude tutti i dropdowns dei brand e apre "catalogo"
            closeBrandDropdowns();
            openDropdown(catalogoDropdown, catalogoTriangle);
        }
    }

    // Funzione per aprire/chiudere un dropdown generico
    function toggleDropdown(dropdown, triangle) {
        const isOpen = dropdown.classList.contains('open');

        if (!isOpen) {
            closeBrandDropdowns();
            openDropdown(dropdown, triangle);
        } else {
            closeDropdown(dropdown, triangle);
        }
    }

    // Funzione specifica per gestire l'apertura e la chiusura dei dropdowns dei brand
    function toggleBrandDropdown(brand) {
        const { dropdown, triangle } = dropdowns[brand];
        const isOpen = dropdown.classList.contains('open');

        if (!isOpen) {
            let anyOtherBrandOpen = false;
            brands.forEach(otherBrand => {
                if (otherBrand !== brand && dropdowns[otherBrand].dropdown.classList.contains('open')) {
                    anyOtherBrandOpen = true;
                }
            });

            if (anyOtherBrandOpen) {
                closeBrandDropdowns();
                setTimeout(() => {
                    openDropdown(dropdown, triangle);
                }, 450);
            } else {
                closeBrandDropdowns();
                openDropdown(dropdown, triangle);
            }
        } else {
            closeDropdown(dropdown, triangle);
        }
    }

    // Funzione per aprire un dropdown specifico
    function openDropdown(dropdown, triangle) {
        dropdown.classList.remove('closed');
        dropdown.classList.add('open');
        triangle.classList.remove('triangle-down');
        triangle.classList.add('triangle-up');
    }

    // Funzione per chiudere un dropdown specifico
    function closeDropdown(dropdown, triangle) {
        dropdown.classList.remove('open');
        dropdown.classList.add('closed');
        triangle.classList.remove('triangle-up');
        triangle.classList.add('triangle-down');
    }

    // Funzione per chiudere tutti i dropdowns dei brand
    function closeBrandDropdowns() {
        brands.forEach(brand => {
            const { dropdown, triangle } = dropdowns[brand];
            if (dropdown.classList.contains('open')) {
                closeDropdown(dropdown, triangle);
            }
        });
    }

    // Funzione per chiudere tutti i dropdowns, incluso "catalogo"
    function closeAllDropdowns() {
        let anyBrandOpen = false;
        brands.forEach(brand => {
            if (dropdowns[brand].dropdown.classList.contains('open')) {
                anyBrandOpen = true;
            }
        });

        closeBrandDropdowns();

        if (anyBrandOpen) {
            setTimeout(() => {
                closeCatalogoDropdown();
            }, 450);
        } else {
            closeCatalogoDropdown();
        }
    }

    // Funzione per chiudere il dropdown "catalogo"

    function closeCatalogoDropdown() {
        if (catalogoDropdown.classList.contains('open')) {
            catalogoDropdown.classList.remove('open');
            catalogoDropdown.classList.add('closed');
            catalogoTriangle.classList.remove('triangle-up');
            catalogoTriangle.classList.add('triangle-down');
        }
    }
});