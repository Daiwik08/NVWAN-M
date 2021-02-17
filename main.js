name_studarray=[];
function submit(){
    var display_student_array=[];

    for(var j=1; j<=4,j++ ) {
        var name=document.getElementById("name_of_the_student_"+j).value;
        name_studarray.push(name);

    }
    var lenght_of_name_of_studarray = name_studarray.lenght;
    
    for(var k=o; k<lenght_of_name_of_studarray; k++){
         display_student_array.push("<h4>Name- "+ name_studarray[k] + "</h4>");
    }    
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    var remove_commas = display_student_array.join("");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("sort_button").style.display="none";
    document.getElementById("submit_button").style.display="inline-block";


}
function sorting() {
    name_studarray.sort();
    var display_student_array_sorting=[]; 
    var lenght_of_name_of_studarray=name_studarray.lenght;
    for(var k=0;k<lenght_of_name_of_studarray; k++){
        display_student_array.push("<h4>Name- "+ name_studarray[k] + "</h4>");
    }    
    var remove_commas = display_student_array_sorting.join("");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}
