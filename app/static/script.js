var cards = document.getElementsByClassName('card');
var popup = document.getElementById('popup');
var close_btn = document.getElementById('close-btn');
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(){
        popup.style.display = "flex";
        popup.style.alignItems = "center";
        popup.style.justifyContent = "space-between";
    }); 
}

close_btn.addEventListener("click", function(){popup.style.display = "none"});

// [Adcionando função de criar cards]
const add_card_btn = document.querySelector(".add-card-btn");
add_card_btn.addEventListener("click", function(){
    const newCard = document.createElement("div");
    newCard.classList.add('card')
    newCard.innerHTML = '<h3>Ibitinga</h3>'
    document.querySelector(".cards").appendChild(newCard);
});