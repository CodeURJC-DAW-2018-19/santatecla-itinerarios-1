function updateDrpdownText() {
    $(".dropdown").each(function (idx, e) {
        $(e).find(".dropdown-menu a").click(function () {
            $(e).find(".btn").text($(this).text());
            $(e).find(".btn").val($(this).text());
        });
    });
}

function readURL(input) {
    if (input.files) {

        var filesAmount = input.files.length;

        for (i = 0; i < filesAmount; i++) {
            var reader = new FileReader();
            var filename = input.files[i].name;
            reader.onload = function (e) {
                var $img = $(`<img style="max-width:100%;max-height:100%;" title="${filename}">`);
                $img.attr('src', e.target.result);
                $($img).appendTo('#preview');
                /* $('#preview').attr('src', e.target.result);*/
            };

            reader.readAsDataURL(input.files[i]);
        }
    }
}

function refreshMarkdown() {
    $(".mark-down").each(function (index, element) {
        marked.setOptions({
            'baseUrl': '/api/forms/' + $(element).data("id") + '/images/'
        });
        $(element).data("description", $(element).text());
        $(element).html(marked($(element).text()));
    });
}

function visualize_image() {
    $("#upload_image").change(function () {
        readURL(this);
    });
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

    visualize_image();

    refreshMarkdown();
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
            $(element).parents(".dropdown-group").find(".select_form .dropdown-menu").attr("style", "");
        }
    });
}

function updateItinerariesDropdown(id, element, itinerary_id, original_id, token) {
    $.ajax({
        "url": "/dropdown/itineraries/" + id,
        "success": function (html) {
            $(element).parents(".dropdown-group").find(".select_itinerary").replaceWith(html);
            updateDrpdownText();
            $(element).parents(".dropdown-group").find(".select_itinerary").find("a").click(function (e) {
                e.preventDefault();
                var new_id = $(this).attr("href");
                $.ajax({
                    "url": "/itineraries/" + itinerary_id + "/items/" + original_id + "?newSubItinerary=" + new_id,
                    "method": "PUT",
                    "data": "_csrf=" + token,
                    "success": refreshPage
                });
            });
        }
    });
}

function add_form_to_view(id, token, element) {
    var form_id = $(element).parents(".dropdown-group").find(".select_form").prev("input").val();
    $.ajax({
        "url": "/api/views/" + id + "/forms",
        "method": "POST",
        "data": "_csrf=" + token + "&id=" + form_id,
        "error": refreshPage
    }).done(refreshPage);
}

function deleteView(id, token) {
    $.ajax({
        "url": "/api/views/" + id,
        "method": "DELETE",
        "data": "_csrf=" + token
    }).done(refreshPage);
}

function deleteItinerary(id, token) {
    $.ajax({
        "url": "/api/itineraries/" + id,
        "method": "DELETE",
        "data": "_csrf=" + token
    }).done(refreshPage);
}

function removeItinerary(itinerary_id, id, token) {
    $.ajax({
        "url": "/api/itineraries/" + itinerary_id + "/items/" + id,
        "method": "DELETE",
        "data": "_csrf=" + token
    }).done(refreshPage);
}

function deleteUnit(id, token) {
    $.ajax({
        "url": "/api/units/" + id,
        "method": "DELETE",
        "data": "_csrf=" + token
    }).done(refreshPage);
}

function removeForm(view_id, id, token) {
    $.ajax({
        "url": "/api/views/" + view_id + "/" + id,
        "method": "DELETE",
        "data": "_csrf=" + token,
        "error": refreshPage
    }).done(refreshPage)
}

function deleteByIdForm(id, token) {
    $.ajax({
        "method": "DELETE",
        "url": "/api/forms/" + id,
        "data": "_csrf=" + token
    }).done(refreshPage);
}

function addView(id, token) {
    $.ajax({
        "method": "POST",
        "url": "/api/views/",
        "data": "_csrf=" + token + "&itinerary=" + id,
        "error": refreshPage
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
        refreshMarkdown();
    });
}

function edit_form(element) {
    clear_form();
    $('#new_form input[name=id]').val($(element).data("id"));
    $('#new_form input[name=title]').val($(element).parent().parent().find('.card-title').text());
    $('#new_form textarea[name=description]').val($(element).parent().parent().parent().parent().parent().find('.mark-down').data("description"));
    $(element).find("span").each(function (idx, element) {
        $(`<img src="/api/images/${$(element).data("image")}" title="${$(element).data("filename")}" style="max-width:100%;max-height:100%;">`).appendTo("#preview");
    });
}

function clear_form() {
    $('#new_form form')[0].reset();
    $('#new_form #preview').empty();
}