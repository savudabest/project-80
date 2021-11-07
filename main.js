var name_of_the_guest_array = [];
function submit() {
    var Guest_name = document.getElementById("Enter_name").value
    name_of_the_guest_array.push(Guest_name);
    document.getElementById("Display_names").innerHTML = name_of_the_guest_array;
    console.log(name_of_the_guest_array);
    var lenght_of_the_array = name_of_the_guest_array.lenght;
    console.log(lenght_of_the_array);
}


function Show_list() {
    var i = name_of_the_guest_array.join("<br>");
    console.log(name_of_the_guest_array);
    document.getElementById("show_names").innerHtml = i.toString();
}


function sorting() {
    name_of_the_guest_array.sort();
    var i = name_of_the_guest_array.join("<br>");
    console.log(name_of_the_guest_array);
    document.getElementById("Sorted_names").innerHtml = i.toString();
}
function Search() {
    var s = document.getElementById("Search_name").value;
    var found = 0;
    var j;
    for(j=0; j<name_of_the_guest_array.lenght; j++) {
        if(s==name_of_the_guest_array[j]) {
            found = found+1;
        }
    }
    document.getElementById("Search_names").innerHTML = "Name found"+found+" Time/s";
    console.log("Found Name "+found+" Time.\
    /s")
}