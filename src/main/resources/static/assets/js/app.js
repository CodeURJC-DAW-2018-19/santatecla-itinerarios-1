function updateDrpdownText() {
    $(".dropdown").each(function (idx, e) {
        $(e).find(".dropdown-menu a").click(function () {
            $(e).find(".btn").text($(this).text());
            $(e).find(".btn").val($(this).text());
        });
    });
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#preview').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function () {
    updateDrpdownText();

    $("form").submit(function (e) {
        e.preventDefault();
        var formData = new FormData($(this)[0]);
        $.ajax({
            "url": $(this).attr("action"),
            "method": $(this).attr("method") || "POST",
            "data": formData,
            "cache": false,
            "contentType": false,
            "processData": false
        }).done(refreshPage);
    });

    $("#upload_image").change(function () {
        readURL(this);
    });
});

function refreshPage() {
    $.ajax({
        "url": window.location.pathname,
        "method": "GET"
    }).done(function (data) {
        var newDoc = document.open("text/html", "replace");
        newDoc.write(data);
        newDoc.close();
    });
}

function updateFormsDropdown(id, element) {
    $.ajax({
        "url": "/dropdown/forms/" + id,
        "success": function (html) {
            $(element).parents(".dropdown-group").find(".select_form").replaceWith(html);
            updateDrpdownText();
        }
    });
}

function updateItinerariesDropdown(id, element) {
    $.ajax({
        "url": "/dropdown/itineraries/" + id,
        "success": function (html) {
            $(element).parents(".dropdown-group").find(".select_itinerary").replaceWith(html);
            updateDrpdownText();
        }
    });
}

function add_form_to_view(id, token, element) {
    var form_id = $(element).parents(".dropdown-group").find(".select_form > input").val();
    $.ajax({
        "url": "/views/" + id + "/forms",
        "method": "POST",
        "data": "_csrf=" + token + "&id=" + form_id
    }).done(refreshPage);
}

function deleteView(id, token) {
    $.ajax({
        "url": "/views/" + id,
        "method": "DELETE",
        "data": "_csrf=" + token
    }).done(refreshPage);
}

function deleteItinerary(id, token) {
    $.ajax({
        "url": "/itineraries/" + id,
        "method": "DELETE",
        "data": "_csrf=" + token
    }).done(refreshPage);
}

function deleteUnit(id, token) {
    $.ajax({
        "url": "/units/" + id,
        "method": "DELETE",
        "data": "_csrf=" + token
    }).done(refreshPage);
}

function deleteByIdForm(id, token) {
    $.ajax({
        "method": "DELETE",
        "url": "/forms/" + id,
        "data": "_csrf=" + token
    }).done(refreshPage);
}

function addView(id, token) {
    $.ajax({
        "method": "POST",
        "url": "/views/" + id,
        "data": "_csrf=" + token
    }).done(refreshPage);
}

function addSubitinerary(id, token) {
    $.ajax({
        "method": "POST",
        "url": "/itineraries/" + id,
        "data": "_csrf=" + token + "&id=" + id
    }).done(refreshPage);
}

function more(element, api, page) {
    $.ajax({
        "method": "GET",
        "url": api + "?page=" + page,
    }).done(function (html) {
        $(element).parent().replaceWith(html);
    });
}