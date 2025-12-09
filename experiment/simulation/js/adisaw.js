/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */
let adiwid=0, adihgt=0;
$(document).ready(()=>{
$("#adinxt").hide();
$("#adisim").hide();
$("#simst").click(function(){
    adisaws(1);
    $('#adisim').show();
  });

  $("#adinxt").click(function(){
    adisaws(2);
  });
});

function adisaws(a){
if(a==1){
    $("#adisaw").html("<div> <img class=\"img img-fluid\" src=\"./images/fi.png\" alt=\"Initial Setup\"></div>");
    $("#adinxt").show();
    adiwid=$("#adisaw").width();
    adihgt=$("#adisaw").height();
}
else if(a==2){
    $("#adinxt").hide();
    $("#adisaw").html("<div> <video id=\"adivid\" autoplay>  <source src=\"./images/saw.mp4\" type=\"video/mp4\"> </video></div>");
    $("#adivid").width('100%');
    $("#adivid").on("ended",function(){
        $("#adisaw").html("<div> <img class=\"img img-fluid\" src=\"./images/ff.png\" alt=\"Initial Setup\"></div>");
    });

}
};

