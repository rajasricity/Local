var server = "https://panaromic.com/application/";
$(document).ready(function(){
$("#login").on('submit', function(e){
   e.preventDefault();
   var fdata = $("#login").serialize();
   $.ajax({
      url:server+"checkLogin.php",
      data:fdata,
      type:"post",
      dataType: "json",
      beforeSend: function(){
        $("#loader").show();
      },
      success: function(str1){
        str = jQuery.parseJSON(str1);
        $("#loader").hide();
        if(str.Userno == ''){
          $("#wmsg").show();
          $("#mnumber").val('');
          $("#pword").val('');
        }else{
        $("#wmsg").hide();
        alert(str.Userno);
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
