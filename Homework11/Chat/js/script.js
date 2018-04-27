var main = document.querySelector(".main");
var help = document.querySelector(".help");
var inputMessage = document.querySelector("#input");
var button = document.querySelector("#button");

var commentUL = document.querySelector(".ul");
var form = document.querySelector(".form");

var trash = document.querySelector("#trash");

var imgDiv;
var MessageDiv;
var newLi;

help.addEventListener("click", function () {
    main.style.display = "block";
    help.style.display = "none";

    inputMessage.focus();

    button.addEventListener("click", function () {
        Main();
    });

    // dont work
    inputMessage.addEventListener("keydown", function (e) {
        if (e.which == 13) {
            e.preventDefault();
            Main();
        }
    });
});

function warning(mess) {
    alert(mess);
}

function controlSymvol(char) {
    if (char >= 65 && char <= 90) {
        return true;
    }
    else if (char >= 97 && char <= 122) {
        return false;
    }
}

function bothTop() {
    newLi = document.createElement("li");
    newLi.classList.add("mainli");

    MessageDiv = document.createElement("div");
    MessageDiv.classList.add("MessageDiv");
    MessageDiv.innerHTML = inputMessages;
}

function Main() {
    inputMessages = inputMessage.value;

    var firstChar = inputMessages.charCodeAt(0);

    var contrlChar = controlSymvol(firstChar);

    if (inputMessages != "") {

        if (contrlChar) {
            bothTop();

            imgDiv = document.createElement("div");
            imgDiv.className = "leftImg";


            newLi.appendChild(imgDiv);
            newLi.appendChild(MessageDiv);

            commentUL.appendChild(newLi);
        }
        else {
            bothTop();

            MessageDiv.classList.add("MessageDivRight");

            imgDiv = document.createElement("div");
            imgDiv.className = "rightImg";

            newLi.appendChild(MessageDiv);
            newLi.appendChild(imgDiv);

            commentUL.appendChild(newLi);
        }

        var first = true;

        imgDiv.addEventListener("click", function (e) {
            var temp = e.target.parentElement;

            var commonLi = document.querySelectorAll(".mainli");
            var lim;

            trash.addEventListener("click", function () {
                for (lim of commonLi) {
                    if (lim.className == clas) {
                        lim.remove();
                        CreateTrash("delete");
                    }
                }
            });

            function checkControlForDeleteTrash() {
                for (lim of commonLi) {
                    if (lim.className == clas) {
                        return true;
                    }
                }
                return false;
            }

            if (first) {
                temp.classList.add("mainLiColor");

                clas = temp.className;

                for (lim of commonLi) {
                    if (lim.className == clas) {
                        CreateTrash("create");
                    }
                }
            } else {
                temp.classList.remove("mainLiColor");

                var checkContrl = checkControlForDeleteTrash();

                if (!checkContrl) {
                    CreateTrash("delete");
                }

            }
            first = !first;
        });

    }
    else {
        warning("Mesaj bos ola bilmez");
    }

    inputMessage.focus();
    form.reset();
}

function CreateTrash(info) {

    if (info == "create") {
        trash.style.display = "block";
    }
    else if (info == "delete") {
        trash.style.display = "none";
    }
}
