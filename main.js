//Using slider to control the visibility of am image
//The original design comes from https://www.nasa.gov/feature/goddard/2016/arctic-sea-ice-is-losing-its-bulwark-against-warming-summers
//Here, I utilized slider to realize the function. Pictures are coming from the above website
$( function() {
    $( ".image-container" ).css("width", "50%");
    $( "#slider" ).slider({
        range: "min",
        value: 50,
        min: 1,
        max: 100,
        slide: function( event, ui ) {
            $( ".image-container" ).css( "width", ui.value+"%" );
        }
    });
} );