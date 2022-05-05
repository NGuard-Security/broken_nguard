document.querySelector(".logo").addEventListener("click", () => {
    let array = [
        "꽃은 저마다 필 시기가 있다.",
        "버티는게 이기는 거다.",
        "고민이 있어야 좋은 거고, 불행이 있을 때 정말 힘들지만,\n\n그 힘든 마음을 견디고 나면 단단한 사람이 된다.",
        "I walk slowly, but I never walk backwards.",
        "하면 된다. Just do it.",
        "삶이 있는 한, 희망은 있다.",
        "산다는 것은 치열한 전투이다.",
        "언제나 현재에 집중할 수 있다면 행복할 것이다.",
        "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안된다.",
        "갈을 잃는다는 것은 곧 길을 알게 된다는 것이다.",
        "오늘은 어제와 다르고, 내일은 오늘과 다를 것이다.\n\n어제 열심히 살았으면, 오늘은 밝아져있고,\n\n오늘을 열심히 살면, 내일이 밝아진다.",
    ];

    let random = Math.floor(Math.random() * (array.length - 3)) + 1;
    if (random == array.length - 5) {
        alert(array[Math.floor(Math.random() * array.length)]);
    }
});
