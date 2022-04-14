$(document).ready(function() {

    $('#sendSpentForm').click(function() {
        let url = "http://localhost:8084/expense/";
        let description = $('#description').val();
        let amount = $('#amount').val();
        let category = $('#category').val();
        let spendAt = "2020-01-01";
        let userId = "622213a205cbe91ac023f189";


        if (description == "" || description == null || 
            amount  == "" || amount  == null || 
            spendAt == "" || spendAt  == null) {
                //$('#div-message').removeClass("success");
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
                $('#div-message').html("New expense created!");
                return false;
            },error: function (request, status, error) {
                console.log(request.responseText);
            },
            dataType: "json"
        });
    })

});