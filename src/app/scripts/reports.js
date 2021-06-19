
var searchResults = []; // local storage of the autocomplete results list
var downArrow = $.Event("downarrow");
var enterKey = $.Event("enter");
downArrow.keyCode = $.ui.keyCode.DOWN;
enterKey.keyCode = $.ui.keyCode.ENTER;


function contentPageLoad(sender, args) {
    // load the date pickers after each postback
    $("[id*='tbDatePicker']").datepicker({ dateFormat: 'yy-mm-dd' });
}

$(function () {            

    $(".showExportIcons").click(function () {
        $('.exportContent').toggle("400");
    });

    // The autocomplete 'Name' field
    $("[id*='tbClientSearch']").keyup(function (event) {                
        //TODO: throttle input                
        $(this).attr("autocomplete", "off");
        searchController(this.value, event);
    });
    $("[id*='tbClientSearch']").focus(function () {
        $(this).val('');
        $('#resultList').empty();
    });
    $("#resultList").on('click', 'span', function (event) {
        setNameField(this.innerHTML, this.id);
    });            
});



function setNameField(name, id) {
    $("[id*='tbClientSearch']").val(name);
    $("[id*='hfClientID']").val(id);
    $('#resultList').empty();
}

function searchController(searchTerm, event) {

    $('#resultList').empty();
    if ($("[id*='tbClientSearch']").val() == "") {
        $('#searchResults').addClass('noBorder').hide();
        return;
    }

    var searchType;
    var checkedVal = $('[id*=rblTrackingType]').find(":checked").val();            

    switch (checkedVal) {

        case "0":
            searchType = "employees";
            break;

        case "1":
            searchType = "vehicles";
            break;

        case "2":
            searchType = "assets";
            break;

        default:
            searchType = "envmonmonitors";
            break;
    }            


    // Build the web service url            
    if (!window.location.origin) {  // no IE support
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }

    var origin = window.location.origin;
    var path = window.location.pathname;
    var end = path.substring(path.indexOf('/', 1));
    var root = path.substring(path.indexOf('/', 1), end);
    var service = "/api/" + searchType + "?searchTerm=" + searchTerm;

    var url = origin + root + service;

    $.ajax({
        cache: false,
        url: url

    }).then(function (data) {
               
        $.each(data, function () {
            $('#resultList').append(
                $('<li>').append(
                    $('<span id="' + this.id + '">').append(this.displayName).css('cursor', 'pointer')                            
            ));                    
        });

        searchResults = data;
        $("#resultList li").first().css("background-color", "#fafafa");

        if (event.keyCode == downArrow.keyCode) {
            //$("#resultList li").next().css("background-color", "#fafafa");
        }

        else if (event.keyCode == enterKey.keyCode) {
            setNameField(
                $("#resultList li span").first().html(),
                $("#resultList li span").first().attr('id')
            );
        }
    });
}


function validateFilters() {            

    var validation = { result: true, message: ""}

    // The name field / autocomplete
    if ($("[id*='tbClientSearch']").is(':visible')) {
        validation.result = false;
        validateName(validation);
    }

    // add other validation here


    if(validation.result == false){
        alert(validation.message);
    }
            
    return validation.result;
}


// Checks if a user has entered a value manually instead of clicking on the autocomplete values.
// If the entered value has a match, allow it and continue.
function validateName(validation) {

    var haveName = $("[id*='tbClientSearch']").val().length > 0;
    var haveID = $("[id*='hfClientID']").val().length > 0;
    var noResults = !searchResults.length;


    // The Name field (autocomplete menu)            
    var searchValue = $("[id*='tbClientSearch']").val();            
    if (searchValue == "") {
        validation.message = "Please enter a name";
    }


    // Fields are repopulated after postback but search results are cleared. If both fields have values proceed
    else if ( noResults && haveName && haveID) {
        validation.result = true;
    }


    // Otherwise try to find a match in the results
    else {
        for (i = 0; i < searchResults.length; i++) {

            var name = searchResults[i].displayName;
            var id = searchResults[i].id;

            if (name == searchValue) {

                $("[id*='hfClientID']").val(id);
                $("[id*='tbClientSearch']").html(name)
                validation.result = true;
                break;
            }
        }

        if (validation.result == false) {
            validation.message = "The name you are searching for is not available. Please choose a name from the list";
            $("[id*='hfClientID']").val('');
        }
    }
}


function disableAutoComplete(id) {

    var passwordControl = document.getElementById(id);
    passwordControl.setAttribute("autocomplete", "off");
}