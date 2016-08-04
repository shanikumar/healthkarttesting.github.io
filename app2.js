$.getJSON("myProducts.js", function(result){
    var pList = $("#products");
    var dummyURL = "https://healthkarttesting.github.io/"
    $.each(result, function(i)
    {
        var li = $('<li/>')
            .html(
                $('<a>').attr({
                    'href' : dummyURL + result[i].url
                }).text(result[i].url)
            )
            .appendTo(pList);
    });
});

$.getJSON("myJSON.js", function(result){
    var cList = $("#myID");
    $.each(result, function(i)
    {
        var li = $('<li/>')
            .text(result[i].name)
            .appendTo(cList);
    });
});
