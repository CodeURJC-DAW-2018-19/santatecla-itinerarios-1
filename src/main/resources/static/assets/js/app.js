$(document).ready(function () {
    $(".dropdown").each((idx, e) => {
        $(e).find(".dropdown-menu a").click(function () {
            $(e).find(".btn").text($(this).text());
            $(e).find(".btn").val($(this).text());
        });
    });
});

function updateDropdown(id){
    $("#select_form").load("/unit_option/" + id);
}