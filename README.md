# Twitter User Search
This is a basic application that will search user on twitter using twitter API.

This will look for all users related to the query you are looking for.


# How to use it

## Create config.json
Use type the username on the input bar. It handles ```onkeydown``` event listener where you do not need
to submit every time you type. 

## How it works?

- As mentioned before it will automatically detect every single character you type.
- Once you stop typing after 250 milliseconds it will send the call to the API to populate your list. This uses a timeout that waits 250 milliseconds to send the call if time haven't past and you keep typing then it clears the time out.
- Once it sends the call it parses the response which is JSON.
- It create elements to create a simple view using Vanilla Javascript and  bind it with the JSON Object by looping throw the whole user list given on the reponse.
- It makes sure to clear the list if something inside first. 
- Then It populates the list element by element.

## Library used

- Codebird.js: This library is used to handle requests to twitter.
- Bootstrap.css: We are using bootstrap to CSS framework to make our site responsive and elegant.


# License & Credits

This software is published under the [MIT License](http://en.wikipedia.org/wiki/MIT_License
