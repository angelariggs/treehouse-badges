// (function() {
  
  
//   var newForm = document.createElement('form');

//   var makeDiv = function(labelName, labelInnerHTML, inputType) {
//     var newDiv = document.createElement('div');
//     newDiv.setAttribute("id", "badge");

//     var newLabel = document.createElement('label');
//     newLabel.setAttribute("for", labelName);
//     newLabel.innerHTML = labelInnerHTML;

//     var newInput = document.createElement('input');
//     newInput.setAttribute("type", inputType);
//     newInput.setAttribute("name", labelName);

//     var submit = document.createElement('input');
//     submit.setAttribute("type", "submit");
//     submit.setAttribute("name", labelInnerHTML);
//     submit.InnerHTML = ("Submit");

//     //append label, input box, and submit button to the new div
//     newDiv.appendChild(newLabel);
//     newDiv.appendChild(newInput);
//     newDiv.appendChild(submit);
  

//     return newDiv;
//   }; // closing bracket for the var makeDiv

//   // append the div to the new form, and then append the new form to the document body
//   newForm.appendChild(makeDiv("name", "Username:", "text"));
//   document.body.appendChild(newForm);

//   var theForm = document.getElementsByTagName("form")[0];
//   theForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     var request = new XMLHttpRequest();
//     request.onload = function() {
//       var text = JSON.parse(this.responseText);

//       var counter = 0;

//       //picks the badge images out of the json file and then resizes them to 100px.
//       for(var i = 0; i < text.badges.length; i++) {
//         var badgeImage = document.createElement("img");
//         badgeImage.classList.add("imgStyle");
        
//         //creates a 'p' element, and pulls the attribute from the icon
//         var badgeName = document.createElement("p");
//         badgeName.classList.add("nameStyle");
//         badgeImage.setAttribute("src", text.badges[i].icon_url);
        
//         badgeName.innerHTML = text.badges[i].name;

//         document.body.appendChild(badgeName);
//         document.body.appendChild(badgeImage);

//         badgeImage.style.height = "50px";
//         counter++;
//         console.log(counter);
//       } // closes for loop
      
    
//       var results = document.createElement("p"); 
//       // document.body.appendChild(results);
//       document.body.insertBefore(results, theForm.nextSibling);
//       results.innerHTML = "You have " + counter + " badges!";
//       results.setAttribute("id", "resultFormat")
//       console.log(results);

//       if (counter > 20) {
//         results.innerHTML += " Way to go, tiger!"
//       }
//       else {
//         results.innerHTML += " Not too shabby!"
//       }

//     }; // closes request

//     var inputs = document.getElementsByTagName('input');
//     request.open("get", "http://teamtreehouse.com/" + inputs[0].value + ".json");
//     request.send();

//   }); // close event listener



// })();// This is the closing bracket for the original function at the top.