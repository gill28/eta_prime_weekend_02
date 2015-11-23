$( function() {

    var slidePosition = 0;
    var currentDataSet = null;

    $( ".previous" ).on( "click", function( event ) {
            event.preventDefault();
            slidePosition--;
            if ( slidePosition < 0 ) {
                slidePosition = 0;
                reachedEnd( "beginning" );
            }
            loadData();
    } );

    // On click button for next and previous
    $( ".next" ).on( "click", function( event ) {
        event.preventDefault();
        slidePosition++;
        if ( slidePosition > currentDataSet.length - 1 ) {
            slidePosition = currentDataSet.length - 1;
            reachedEnd( "end " );
        }
        loadData();
    } );

    //Load the data for the application
    var loadData = function() {
        $.ajax( {
            url: "data/eta.json"
        } )
        .done( function( json ) {
            var item = getNextItem( slidePosition, json.eta );
            getMarkupName( item );
            getMarkupMovies( item );
            currentDataSet = json.eta;
            console.log( json.eta );
        } );
    };
    loadData();

    // Push firstName and lastName into the html to be displayed on .displayName h3 tag
    var getNextItem = function( index, data ) {
        return data[ index ];
    };

    var getMarkupName = function( data ) {
        var source = $( ".nameTemplate" ).html();
        var template = Handlebars.compile( source );
        var html = template( data );
        updateDom( html );
    };

    var getMarkupMovies = function( data ) {
        var source = $( ".moviesTemplate" ).html();
        var template = Handlebars.compile( source );
        var html = template( data );
        updateMovie( html );

    };

    var updateDom = function( html ) {
        $( ".displayName" ).fadeOut();
        $( ".displayName" ).html( html );
        $( ".displayName" ).fadeIn();
    };

    var updateMovie = function( html ) {
        $( ".movies" ).html( html );
    };
    var reachedEnd = function( whichend ) {
        alert( "You have reached the " + whichend );
    };

} );
