(function() {
	
  var newForm = $("<form>");

  var makeDiv = function(labelName, labelInnerHTML, inputType) {
    var newDiv = $('<div>');
    newDiv.attr("id", "badge");

    var newLabel = $('<label>');
    newLabel.attr("for", "labelName");
    newLabel.text(labelInnerHTML);

    var newInput = $('<input>');
    newInput.attr("type", "inputType");
    newInput.attr("name", "labelName");

    var submit = $('<input>');
    submit.attr("type", "submit");
    submit.attr("name", "labelInnerHTML");
    submit.InnerHTML = ("Submit");

    //append label, input box, and submit button to the new div
    $(newDiv).append(newLabel);
    $(newDiv).append(newInput);
    $(newDiv).append(submit);

    return newDiv;
  }; // closing bracket for the var makeDiv

  // append the div to the new form, and then append the new form to the document body
  $(newForm).append(makeDiv("name", "Username: ", "text"));
  $(document.body).append(newForm);

  var theForm = ($("form").get()[0]);
  $(theForm).submit(function(event) {
    event.preventDefault();
    var counter = 0;
    var inputs = $('input');
    $.ajax("http://teamtreehouse.com/" + inputs.val() + ".json", {
        dataType: "json",
        method: "get",

        success: function(text) {

          for(var i = 0; i < text.badges.length; i++) {
            var badgeImage = $("<img>");
            badgeImage.attr("class", "imgStyle");
            
            //creates a 'p' element, and pulls the attribute from the icon
            var badgeName = $("<p>");
            // badgeName.classList.add("nameStyle");
            badgeImage.attr("src", text.badges[i].icon_url);
            
            badgeName.text(text.badges[i].name);

            $(document.body).append(badgeName);
            $(document.body).append(badgeImage);

            $(badgeImage).css("height", "50px");
            counter++;
            console.log(counter);
          } // closes for loop

          var results = $("<p>"); 
          $(document.body).append(results);
          $(results).insertBefore(theForm.nextSibling);
          results.text("You have " + counter + " badges!");
          results.attr("id", "resultFormat")
          console.log(results);

          if (counter > 20) {
            results.text += (" Way to go, tiger!")
          }
          else {
            results.text += (" Not too shabby!")
          }

        } //closes success function
      }); // closes ajax request

  
    // }); // close $("request").load(function() {

    

  }); // close event listener



})();// This is the closing bracket for the original function at the top.