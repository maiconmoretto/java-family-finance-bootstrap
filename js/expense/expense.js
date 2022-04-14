$(document).ready(function() {
    var userId = "622213a205cbe91ac023f189";
    var url = "http://localhost:8084/expense/paginationAndSort/0/30/id/" + userId;
    var tBody =
 


    $.get(url,
    function (data, textStatus, jqXHR) {
        console.log( data);

        console.log(data.length)
        var data = data.content;
        for (var i = 0; i < data.length; i++ ) {
            console.log(data[i].id)

            tBody +=    
            '<tr>'+
                '<th scope="row">R$ ' + data[i].amount + '</th>'+
                '<td>' + data[i].category + '</td>'+
                '<td>' + data[i].description + '</td>'+
                '<td>' + data[i].spendAt[2]  + '/' + data[i].spendAt[1] + '/' + data[i].spendAt[0] + '</td>'+
             '</tr>';

         
        }
        $('#table-list').append(tBody);
    });

});