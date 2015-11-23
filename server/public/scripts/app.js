$( function() {

//Load the data for the application
    $.ajax( {
           url: "data/eta.json"
       } )
       .done( function( json ) {
           console.log( json );
           var object = JSON.parse( json );
           console.log( object );
       } );

// Push firstName and lastName into the html to be displayed on .displayName h3 tag
       var students = function() {

       };

// On next button make it go to the next person


// On previous button make current student cycle the through names in reverse

// Each time the next or previous button is selected show favoriteMovies

// On click button for next and previous
    $('.next').on('click' function() {

    });

    $('.previous').on('click' function() {

    });

} );
