var cards = document.getElementsByClassName('card');
var popup = document.getElementById('popup');
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(){
        popup.style.display = "block";
    });
}