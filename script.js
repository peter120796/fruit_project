// === Array الصور فقط ===
const items = [
    "fruit_01.jpg",
    "fruit_02.jpg",
    "fruit_03.jpg",
    "fruit_04.jpg",
    "fruit_05.jpg",
    "fruit_06.jpg",
    "fruit_07.jpg",
    "fruit_08.jpg",
    "fruit_09.jpg",
    "fruit_10.jpg",
    "fruit_11.jpg",
    "fruit_12.jpg",
    "fruit_13.jpg",
    "fruit_14.jpg",
    "fruit_15.jpg",
    "fruit_16.jpg",
    "fruit_17.jpg",
    "fruit_18.jpg",
    "fruit_19.jpg",
    "fruit_20.jpg",
    "fruit_21.jpg",
    "fruit_22.jpg",
    "fruit_23.jpg",
    "fruit_24.jpg",
    "fruit_25.jpg",
    "fruit_26.jpg",
    "fruit_27.jpg",
    "fruit_28.jpg",
    "fruit_29.jpg",
    "fruit_30.jpg",
    "fruit_31.jpg",
    "fruit_32.jpg",
    "fruit_33.jpg",
    "fruit_34.jpg",
    "fruit_35.jpg",
    "fruit_36.jpg",
    "fruit_37.jpg",
    "fruit_38.jpg",
    "fruit_39.jpg",
    "fruit_40.jpg",
    "fruit_41.jpg",
    "fruit_42.jpg",
    "fruit_43.jpg",
    "fruit_44.jpg",
    "fruit_45.jpg",
    "fruit_46.jpg",
    "fruit_47.jpg",
    "fruit_48.jpg",
    "fruit_49.jpg",
    "fruit_50.jpg",
    "fruit_51.jpg",
    "fruit_52.jpg",
    "fruit_53.jpg",
    "fruit_54.jpg",
    "fruit_55.jpg",
    "fruit_56.jpg",
    "fruit_57.jpg",
    "fruit_58.jpg",
    "fruit_59.jpg",
    "fruit_60.jpg",
    "fruit_61.jpg",
    "fruit_62.jpg",
    "fruit_63.jpg",
    "fruit_64.jpg",
    "fruit_65.jpg"
];

// === عرض الصورة من التخزين لو موجودة ===
window.onload = function () {
    const savedFruit = localStorage.getItem("chosenFruit");

    if (savedFruit) {
        showSavedFruit(savedFruit);
    }
};

// === Function لما الضغط يحصل لأول مرة ===
function showRandomFruit() {
    const savedFruit = localStorage.getItem("chosenFruit");

    // لو الشخص عنده صورة محفوظة → امنع تغييرها
    if (savedFruit) {
        showSavedFruit(savedFruit);
        return;
    }

    const randomIndex = Math.floor(Math.random() * items.length);
    const chosenImg = items[randomIndex];

    // خزّن الصور بعد أول مرة فقط
    localStorage.setItem("chosenFruit", chosenImg);

    showSavedFruit(chosenImg);
}

// === Function لعرض الصورة سواء كانت محفوظة أو جديدة ===
function showSavedFruit(chosenImg) {
    const imgElement = document.getElementById("fruitImage");
    imgElement.src = "img/" + chosenImg;
    imgElement.style.display = "block";

    // إخفاء الزر
    document.querySelector(".btn").style.display = "none";

    // إظهار الرسالة + اللوجو
    document.getElementById("message").style.display = "block";
    document.getElementById("tcLogo").style.display = "block";

    document.getElementById("fruitName").innerText = "";
}

// === إظهار المحتوى بعد اختفاء اللوجو ===
setTimeout(() => {
    document.getElementById("mainContent").classList.remove("hidden");
}, 2200);