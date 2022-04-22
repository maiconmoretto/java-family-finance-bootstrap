$(document).ready(function() {

    let url = "http://localhost:8084/expense/";
    let searchParams = new URLSearchParams(window.location.search)
    searchParams.has('id') // true
    let id = searchParams.get('id')
    console.log(id)

    let description;
    let amount; 
    let category;
    let spendAt;
    let userId;

    //get the data of the expense
    $.ajax({
        type: "GET",
        url: url + id,
        success: function (result) {
            console.log(result);
             description = $('#description').val(result.description);
             amount = $('#amount').val(result.amount);
             category = $('#category').val(result.category);
             spendAt = "2020-01-01";
             userId = result.userId;
            return false;
        },error: function (request, status, error) {
            console.log(request.responseText);
        },
        dataType: "json"
    });


    //update the expense
    $('#sendSpentForm').click(function() {

        let description = $('#description').val();
        let amount = $('#amount').val();
        let category = $('#category').val();
        let spendAt = "2020-01-01";
        let userId = "622213a205cbe91ac023f189";

        if (description == "" || description == null || 
            amount  == "" || amount  == null || 
            spendAt == "" || spendAt  == null) {
                $('#div-message').removeClass("success");
                $('#div-message').addClass("alert-danger");
                $('#div-message').html("All the fields are mandatory!");
                return false;
        }

        if(!$.isNumeric(amount)) {
            $('#div-message').addClass("alert-danger");
            $('#div-message').html("The amount must be numeric!");
            return false;
        }
            
        let data = {
            "id": id,
            "amount": amount,
            "userId": userId,
            "category": category,
            "spendAt": spendAt,
            "description": description
        };

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (result) {
                console.log(result);
                $('#div-message').removeClass("danger");
                $('#div-message').addClass("alert-success");
                $('#div-message').html("Expense updated!");
                return false;
            },error: function (request, status, error) {
                console.log(request.responseText);
            },
            dataType: "json"
        });
    })

});