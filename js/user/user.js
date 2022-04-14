$(document).ready(function() {
    var url = "http://localhost:8081/user/";
    var tBody =
 
    $.get(url,
    function (data, textStatus, jqXHR) {
        console.log( data);

        console.log(data.length)
        for (var i = 0; i < data.length; i++ ) {
            console.log(data[i].id)

            tBody =    
            '<tr>'+
                '<th scope="row">' + data[i].id + '</th>'+
                '<td>' + data[i].name + '</td>'+
             '</tr>';

            $('#table-list').append(tBody);
        }
    });

});