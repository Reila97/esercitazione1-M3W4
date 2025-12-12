document.addEventListener("DOMContentLoaded", () => {

    // Seleziono tutti gli slider-wrapper
    const sliders = document.querySelectorAll(".slider-wrapper");

    sliders.forEach(wrapper => {

        const track = wrapper.querySelector(".slider-track");
        const cards = track.querySelectorAll(".card");
        const btnLeft = wrapper.querySelector(".arrow.left");
        const btnRight = wrapper.querySelector(".arrow.right");

        const cardWidth = cards[0].offsetWidth + 8; // larghezza + gap (8px)
        let position = 0; // posizione corrente dello slider

        // --- LOOP INFINITO FAKE ---
        // Clono gli elementi in modo che quando scorri non finisci mai
        track.innerHTML += track.innerHTML;

        // Numero totale dopo la duplicazione
        const totalCards = track.querySelectorAll(".card").length;


        //  ---- EVENTI FRECCE ----
        btnRight.addEventListener("click", moveRight);
        btnLeft.addEventListener("click", moveLeft);

        // ---- FUNZIONI DI SCORRIMENTO 
        function moveRight() {
            position -= cardWidth;

            // se vai oltre metà, resetti in modo invisibile
            if (Math.abs(position) >= (totalCards / 2) * cardWidth) {
                position = 0;
                track.style.transition = "none";
                track.style.transform = `translateX(${position}px)`;

                // forzo il reflow per far ripartire la transizione
                void track.offsetWidth;
            }

            track.style.transition = "transform 0.4s ease";
            track.style.transform = `translateX(${position}px)`;
        }

        function moveLeft() {
            position += cardWidth;

            // stesso trucco anche andando a sinistra
            if (position > 0) {
                position = -(totalCards / 2) * cardWidth;
                track.style.transition = "none";
                track.style.transform = `translateX(${position}px)`;
                void track.offsetWidth;
            }

            track.style.transition = "transform 0.4s ease";
            track.style.transform = `translateX(${position}px)`;
        }



    });
});
