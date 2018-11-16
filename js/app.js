(function () {
    'use strict';
    var timeoutCall,
        cb = new Codebird,
        input = document.getElementsByTagName("input")[0];


    cb.setConsumerKey("0FNuPgKy1g4U7wGIbMiysms3G", "7n1M3aeIoBqRI3BS4czvhWhpevG2MaDbigtZhVR248BthTtiSN");
    cb.setToken("1063219889689829376-44sg1l2yszQjp1xxk7k0g7QHwlDQDZ", "YsxxPMzdBtkYjo9aYZ2KYP5ypAue5uZUSli4rIK3QRNFB");


    function searchUser(username) {
        clearUserList();

        var params = {
            q: username
        };

        cb.__call(
            "users_search",
            params,

            function (reply, rate, err) {

                var contentView = document.getElementsByClassName('user-list')[0];
                for (let index in reply) {
                    let user = reply[index];
                    // console.log(user.name);
                    // console.log('=====================');
                    if (user !== undefined) bindUserView(contentView, user);
                }
            }
        );
    }

    function retrieveUserList() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
                document.getElementsByClassName('content-view')[0].innerHTML = this.responseText;
            }
        };

        xhttp.open("GET", "view/user_list.html", true);
        xhttp.send();
    }

    function clearUserList() {
        document.getElementsByClassName('user-list')[0].innerHTML = '';
    }

    function bindUserView(parentView, user) {
        // console.log('creating element');

        // Creating li element
        let liElem = document.createElement('li');
        liElem.classList.add('user-item');

        // Creating our card container
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card');
        cardContainer.style = 'width: 18rem;';


        // Creating our card container
        let imgContainerDiv = document.createElement('div');

        // Creating user profile image src
        let profileImg = document.createElement('img');
        profileImg.setAttribute('class', 'card-img-top card-img-left');
        profileImg.setAttribute('src', user.profile_image_url);
        profileImg.setAttribute('alt', 'any text');


        // Creating card body
        let cardBodyContainer = document.createElement('div');
        cardBodyContainer.classList.add('card-body');

        // Creating name as title container
        let nameElem = document.createElement('h4');
        nameElem.classList.add('card-title');
        nameElem.innerHTML = user.name;

        // Creating username as text container
        let usernameElem = document.createElement('p');
        usernameElem.classList.add('card-text');
        usernameElem.innerHTML = '@' + user.screen_name;


        // Adding content to body
        cardBodyContainer.appendChild(nameElem);
        cardBodyContainer.appendChild(usernameElem);


        imgContainerDiv.appendChild(profileImg);

        cardContainer.appendChild(imgContainerDiv);
        cardContainer.appendChild(cardBodyContainer);


        liElem.appendChild(cardContainer);


        parentView.appendChild(liElem);
    }

    retrieveUserList();

    if (input) {
        input.addEventListener('keydown', function (e) {
            console.log(input.value);

            clearTimeout(timeoutCall);
            timeoutCall = setTimeout(function () {
                searchUser(input.value);
                console.log('firing')
            }, 250);
        });
    }
})();