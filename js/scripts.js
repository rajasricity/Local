var server = "https://panaromic.com/application/";
$(document).ready(function(){
$("#login").on('submit', function(e){
   e.preventDefault();
   var fdata = $("#login").serialize();
   $.ajax({
      url:server+"checkLogin.php",
      data:fdata,
      type:"post",
      beforeSend: function(){
        $("#loader").show();
      },
      success: function(str){
         alert(str.Role);
        $("#loader").hide();
        if(str == 'Wrong'){
          $("#wmsg").show();
          $("#mnumber").val('');
          $("#pword").val('');
        }else{
        $("#wmsg").hide();
        alert(str.Role);
        //localStorage.setItem("Userno",str);
        //location.href="Dashboard.html";
        }
      },
      error:function(qXHR, exception){
      alert(jqXHR.status);
      }
   });
});
});
