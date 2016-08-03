$.getJSON("myJSON.js", function(result){
    var cList = $("#myID");
    $.each(result, function(i)
    {
        var li = $('<li/>')
            .text(result[i].name)
            .appendTo(cList);
    });
});
