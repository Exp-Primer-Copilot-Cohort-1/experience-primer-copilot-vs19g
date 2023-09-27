function skillsMember() {
    var member = document.getElementById("member").value;
    var skill = document.getElementById("skill").value;
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;

    var member = {
        "member": member,
        "skill": skill,
        "start": start,
        "end": end
    }

    $.ajax({
        type: "POST",
        url: "/skills",
        data: member,
        success: function (data) {
            alert("Member successfully added");
        },
        error: function (data) {
            alert("Error adding member");
        }
    });
}