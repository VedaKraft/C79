name_student_array=[];

function submit(){
    var name_1=document.getElementById("student_1").value;
    var name_2=document.getElementById("student_2").value;
    var name_3=document.getElementById("student_3").value;
    var name_4=document.getElementById("student_4").value;

    name_student_array.push(name_1);
    name_student_array.push(name_2);
    name_student_array.push(name_3);
    name_student_array.push(name_4);

    console.log(name_student_array);
    document.getElementById("display_name").innerHTML=name_student_array;

    document.getElementById("submit_btn").style.display="none";
    document.getElementById("sort_btn").style.display="inline-block";
}

function sorting(){

    name_student_array.sort();
    document.getElementById("display_name").innerHTML=name_student_array;
}