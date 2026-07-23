body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: #fcfcfc;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden; /* Чтобы не появлялись полосы прокрутки, когда кнопка прыгает */
}

.main-container {
    width: 90%;
    max-width: 600px;
    padding: 20px;
    box-sizing: border-box;
}

.content-card {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 40px 30px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

h1 {
    font-size: 24px;
    color: #e67e22; /* Оранжево-жёлтый заголовок */
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.subtitle {
    color: #7f8c8d;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 35px;
    font-weight: 600;
}

.buttons-layout {
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
}

/* Кнопка ДА — залитая жёлто-оранжевым */
.btn-yellow-filled {
    background-color: #ff9f43;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 600;
    padding: 18px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
    width: 100%;
}

.btn-yellow-filled:hover {
    background-color: #ee5253; /* Слегка меняет цвет при наведении */
}

/* Кнопка НЕТ — с рамкой, как на твоём скриншоте */
.btn-yellow-outline {
    background-color: #ffffff;
    color: #ff9f43;
    border: 2px solid #ff9f43;
    font-size: 16px;
    font-weight: 600;
    padding: 16px 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    z-index: 9999;
    box-sizing: border-box;
    transition: transform 0.1s;
}
