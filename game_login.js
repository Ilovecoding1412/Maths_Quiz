function addUser(){
    number1 = document.getElementById("player_name_input").value;
    number2 = document.getElementById("player_name_input").value;
    localStorage.setItem("number1", number1);
    localStorage.setItem("number2", number2);
    window.location = "game_page.html";
}
