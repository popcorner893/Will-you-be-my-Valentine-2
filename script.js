const messages = [
    "De verdad mi amor? 🥺",
    "Oye, eso no se hace 🥺😭",
    "De verdad no? 😭😭",
    "Piénsalo porfi, piensa en nuestros hijitos 😭😭🥺💔",
    "Si aceptas nos casamos, mi vida 😏😏🤗",
    "Osea no quieres casarnos? 😭😭😭😭",
    "Casémonosss, yo te prepararé joqueis toda la vida 🥺🥞🥞",
    "Y te daré piquitos por las mañanas 😙🤗",
    "Y besotes, en todos lados... 🥵🔥♨🤤",
    "Se viene drama mi amorcito 😭😭😭😭",
    "Cuando alguien me amaba 🥺",
    "Me sentía tan FELIZZZZZZ 🥺🥺🥺",
    "Moriré 💀😫",
    "YA PAILAS MI AMOR JEJEJE, TE AMO 🤩🤩💞💞💘"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];

    if (messageIndex < messages.length - 1) {
        messageIndex++;
    }

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}


function handleYesClick() {
    window.location.href = "yes_page.html";
}
