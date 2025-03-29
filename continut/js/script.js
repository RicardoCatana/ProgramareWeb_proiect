window.onload = function() {
    // Secțiunea 1: Afișarea informațiilor curente
    const dateElement = document.getElementById("date");
    const url = window.location.href;
    const location = window.navigator.language;  // Exemplu de locație, poți să pui altceva dacă dorești
    const browser = window.navigator.userAgent;
    const os = window.navigator.platform;

    function updateDate() {
        const currentDate = new Date();
        dateElement.innerHTML = `
            Data curentă: ${currentDate.toLocaleString()} <br>
            URL: ${url} <br>
            Locație: ${location} <br>
            Browser: ${browser} <br>
            Sistem de operare: ${os}
        `;
    }

    updateDate(); // Afișează informațiile la început
    setInterval(updateDate, 1000); // Actualizează data la fiecare secundă


    // Secțiunea 2: Desenarea pe canvas
    const canvas = document.getElementById("drawingCanvas");
    const ctx = canvas.getContext("2d");
    const strokeColorInput = document.getElementById("strokeColor");
    const fillColorInput = document.getElementById("fillColor");

    let startX, startY, isDrawing = false;

    // Când utilizatorul face un click pe canvas pentru a începe desenarea
    canvas.addEventListener('mousedown', (event) => {
        if (!isDrawing) {
            startX = event.offsetX;  // X-ul punctului de start
            startY = event.offsetY;  // Y-ul punctului de start
            isDrawing = true; // Indică că desenarea a început
        } else {
            let width = event.offsetX - startX;  // Lățimea dreptunghiului
            let height = event.offsetY - startY; // Înălțimea dreptunghiului

            // Setăm culorile de contur și umplere
            ctx.strokeStyle = strokeColorInput.value;  // Culoare contur
            ctx.fillStyle = fillColorInput.value;      // Culoare umplere

            // Desenăm dreptunghiul
            ctx.beginPath();
            ctx.rect(startX, startY, width, height);
            ctx.fill();  // Umple dreptunghiul
            ctx.stroke();  // Conturul dreptunghiului
            isDrawing = false; // Oprirea desenării
        }
    });
};
