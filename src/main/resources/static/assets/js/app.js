function updateDrpdownText() {
    $(".dropdown").each(function (idx, e) {
        $(e).find(".dropdown-menu a").click(function () {
            $(e).find(".btn").text($(this).text());
            $(e).find(".btn").val($(this).text());
        });
    });
}
$(document).ready(function () {

    updateDrpdownText();

    $("form").submit(function (e) {
        e.preventDefault();
        $.ajax({
            "url": $(this).attr("action"),
            "method": "POST",
            "data": $(this).serialize()
        }).done(refreshPage);
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

function updateDropdown(id) {
    $("#select_form").load("/unit_option/" + id);
    updateDrpdownText();
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
        "url": "/views/",
        "data": "_csrf=" + token + "&itinerary=" + id
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