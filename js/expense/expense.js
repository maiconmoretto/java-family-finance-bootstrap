$(document).ready(function() {
    var userId = "622213a205cbe91ac023f189";
    var url = "http://localhost:8084/expense/";
    var tBody;
    var paginationUrl = "paginationAndSort/0/30/id/";

    $.get(url + paginationUrl  + userId,
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
                '<td>' +
                    '<a href="/expenses/updateExpense.html?id=' + data[i].id + '">' +
                        '<button type="button"  style="float: right;" class="btn btn-primary">Update</button>' +
                    '</a>' +
                    '<button type="button"  style="float: right;" class="btn btn-primary delete-expense" '+ 
                        'id="' + data[i].id + '" >Delete</button>' +
                '</td>'
             '</tr>'; 

         
        }
        $('#table-list').append(tBody);

        
        $(".delete-expense").click(function() {
            console.log('aqui ' + $(this).attr('id'));

            $.ajax({
                type: "DELETE",
                url: url,
                success: function (result) {
                    console.log(result);
                    return false;
                },error: function (request, status, error) {
                    console.log(request.responseText);
                },
                dataType: "json"
            });
        })

    });





});