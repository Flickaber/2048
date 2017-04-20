$(document).ready(function(){
  (function ($){
    $.fn.extend({
      mygame: {
        size: function(size){ // function to set the size
          var gameObject = $("body").attr('id');
          blockSize = size;
          boardSize = (blockSize + 12.5) * 4;
        },

        creatediv: function(){ // function to create the general div
          $("body").append("<div id='board' style='height:"+boardSize+"px;width:"+boardSize+"px;'></div>");
        },

        create16div: function(){ // function to create the 16 smaller div with an indiviual id contained between 1 and 16
          for (var i = 1; i <= 16; i++){
            $("#board").append("<div id='"+ i +"'class='square-container' style='height:"+blockSize+"px;width:"+blockSize+"px;'></div>");
          }
        },

        maketiles: function (){ // function to create the 2 first tiles with random number 2 or 4, creation of one tile when key press, order of direction depending on the direction of the arrow, addition of number
          var min = Math.ceil(1); var max = Math.floor(16); randomid1 = Math.floor(Math.random() * (max - min + 1)) + min;
          var min = Math.ceil(1); var max = Math.floor(16); randomid2 = Math.floor(Math.random() * (max - min + 1)) + min;
          var nbr = '24'; randomnbr1 = ''; randomnbr2 = '';
          for(var i=1; i<2; i++){
            randomnbr1 += nbr[Math.floor(Math.random() * nbr.length)];
            randomnbr2 += nbr[Math.floor(Math.random() * nbr.length)];
          }
          while (randomid1 == randomid2){
            randomid1 = Math.floor(Math.random() * (max - min + 1)) + min;
          }
          $("#" + randomid1).append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr1+"</div>");
          $("#" + randomid2).append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr2+"</div>");
          $(document).keydown(function(e){ // generation of one tile when arrow push down on the keyboard
            if (e.keyCode > 36 && e.keyCode < 41){
              if (e.keyCode == 37){ //left arrow
                for (var a = 0; a < 3; a++){
                  if (!$('#4').is(':empty')){
                    if ($('#3').is(':empty')){
                      $("#3").append($("#4").html());
                      $('#4').children().remove();
                    }
                    else{
                      if ($('#4').children().html() == $('#3').children().html()){
                        var nb1 = parseInt($("#4").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#4').children().remove();
                        $('#3').children().remove();
                        $("#3").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#3').is(':empty')){
                    if ($('#2').is(':empty')){
                      $("#2").append($("#3").html());
                      $('#3').children().remove();
                      // $('#2').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#3').children().html() == $('#2').children().html()){
                        var nb1 = parseInt($("#3").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#3').children().remove();
                        $('#2').children().remove();
                        $("#2").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#2').is(':empty')){
                    if ($('#1').is(':empty')){
                      $("#1").append($("#2").html());
                      $('#2').children().remove();
                      // $('#1').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#2').children().html() == $('#1').children().html()){
                        var nb1 = parseInt($("#2").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#2').children().remove();
                        $('#1').children().remove();
                        $("#1").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#8').is(':empty')){
                    if ($('#7').is(':empty')){
                      $("#7").append($("#8").html());
                      $('#8').children().remove();
                      // $('#7').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#8').children().html() == $('#7').children().html()){
                        var nb1 = parseInt($("#8").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#8').children().remove();
                        $('#7').children().remove();
                        $("#7").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#7').is(':empty')){
                    if ($('#6').is(':empty')){
                      $("#6").append($("#7").html());
                      $('#7').children().remove();
                      // $('#6').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#7').children().html() == $('#6').children().html()){
                        var nb1 = parseInt($("#7").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#7').children().remove();
                        $('#6').children().remove();
                        $("#6").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#6').is(':empty')){
                    if ($('#5').is(':empty')){
                      $("#5").append($("#6").html());
                      $('#6').children().remove();
                      // $('#5').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#6').children().html() == $('#5').children().html()){
                        var nb1 = parseInt($("#6").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#6').children().remove();
                        $('#5').children().remove();
                        $("#5").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#12').is(':empty')){
                    if ($('#11').is(':empty')){
                      $("#11").append($("#12").html());
                      $('#12').children().remove();
                      // $('#11').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#12').children().html() == $('#11').children().html()){
                        var nb1 = parseInt($("#12").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#12').children().remove();
                        $('#11').children().remove();
                        $("#11").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#11').is(':empty')){
                    if ($('#10').is(':empty')){
                      $("#10").append($("#11").html());
                      $('#11').children().remove();
                      // $('#10').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#11').children().html() == $('#10').children().html()){
                        var nb1 = parseInt($("#11").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#11').children().remove();
                        $('#10').children().remove();
                        $("#10").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#10').is(':empty')){
                    if ($('#9').is(':empty')){
                      $("#9").append($("#10").html());
                      $('#10').children().remove();
                      // $('#9').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#10').children().html() == $('#9').children().html()){
                        var nb1 = parseInt($("#10").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#10').children().remove();
                        $('#9').children().remove();
                        $("#9").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#16').is(':empty')){
                    if ($('#15').is(':empty')){
                      $("#15").append($("#16").html());
                      $('#16').children().remove();
                      // $('#15').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#16').children().html() == $('#15').children().html()){
                        var nb1 = parseInt($("#16").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#16').children().remove();
                        $('#15').children().remove();
                        $("#15").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#15').is(':empty')){
                    if ($('#14').is(':empty')){
                      $("#14").append($("#15").html());
                      $('#15').children().remove();
                      // $('#14').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#15').children().html() == $('#14').children().html()){
                        var nb1 = parseInt($("#15").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#15').children().remove();
                        $('#14').children().remove();
                        $("#14").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#14').is(':empty')){
                    if ($('#13').is(':empty')){
                      $("#13").append($("#14").html());
                      $('#14').children().remove();
                      // $('#13').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#14').children().html() == $('#13').children().html()){
                        var nb1 = parseInt($("#14").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#14').children().remove();
                        $('#13').children().remove();
                        $("#13").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                }
              }
              if (e.keyCode == 38){ //up arrow
                for (var a = 0; a < 3; a++){
                  if (!$('#13').is(':empty')){
                    if ($('#9').is(':empty')){
                      $("#9").append($("#13").html());
                      $('#13').children().remove();
                      // $('#3').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#13').children().html() == $('#9').children().html()){
                        var nb1 = parseInt($("#13").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#13').children().remove();
                        $('#9').children().remove();
                        $("#9").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#9').is(':empty')){
                    if ($('#5').is(':empty')){
                      $("#5").append($("#9").html());
                      $('#9').children().remove();
                      // $('#5').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#9').children().html() == $('#5').children().html()){
                        var nb1 = parseInt($("#9").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#9').children().remove();
                        $('#5').children().remove();
                        $("#5").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#5').is(':empty')){
                    if ($('#1').is(':empty')){
                      $("#1").append($("#5").html());
                      $('#5').children().remove();
                      //$('#1').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#5').children().html() == $('#1').children().html()){
                        var nb1 = parseInt($("#5").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#5').children().remove();
                        $('#1').children().remove();
                        $("#1").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#14').is(':empty')){
                    if ($('#10').is(':empty')){
                      $("#10").append($("#14").html());
                      $('#14').children().remove();
                      // $('#10').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#14').children().html() == $('#10').children().html()){
                        var nb1 = parseInt($("#14").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#14').children().remove();
                        $('#10').children().remove();
                        $("#10").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#10').is(':empty')){
                    if ($('#6').is(':empty')){
                      $("#6").append($("#10").html());
                      $('#10').children().remove();
                      // $('#6').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#10').children().html() == $('#6').children().html()){
                        var nb1 = parseInt($("#10").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#10').children().remove();
                        $('#6').children().remove();
                        $("#6").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#6').is(':empty')){
                    if ($('#2').is(':empty')){
                      $("#2").append($("#6").html());
                      $('#6').children().remove();
                      // $('#2').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#6').children().html() == $('#2').children().html()){
                        var nb1 = parseInt($("#6").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#6').children().remove();
                        $('#2').children().remove();
                        $("#2").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#15').is(':empty')){
                    if ($('#11').is(':empty')){
                      $("#11").append($("#15").html());
                      $('#15').children().remove();
                      // $('#11').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#15').children().html() == $('#11').children().html()){
                        var nb1 = parseInt($("#15").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#15').children().remove();
                        $('#11').children().remove();
                        $("#11").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#11').is(':empty')){
                    if ($('#7').is(':empty')){
                      $("#7").append($("#11").html());
                      $('#11').children().remove();
                      // $('#7').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#11').children().html() == $('#7').children().html()){
                        var nb1 = parseInt($("#11").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#11').children().remove();
                        $('#7').children().remove();
                        $("#7").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#7').is(':empty')){
                    if ($('#3').is(':empty')){
                      $("#3").append($("#7").html());
                      $('#7').children().remove();
                      // $('#3').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#7').children().html() == $('#3').children().html()){
                        var nb1 = parseInt($("#7").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#7').children().remove();
                        $('#3').children().remove();
                        $("#3").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#16').is(':empty')){
                    if ($('#12').is(':empty')){
                      $("#12").append($("#16").html());
                      $('#16').children().remove();
                      // $('#12').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#16').children().html() == $('#12').children().html()){
                        var nb1 = parseInt($("#4").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#16').children().remove();
                        $('#12').children().remove();
                        $("#12").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#12').is(':empty')){
                    if ($('#8').is(':empty')){
                      $("#8").append($("#12").html());
                      $('#12').children().remove();
                      // $('#8').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#12').children().html() == $('#8').children().html()){
                        var nb1 = parseInt($("#12").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#12').children().remove();
                        $('#8').children().remove();
                        $("#8").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#8').is(':empty')){
                    if ($('#4').is(':empty')){
                      $("#4").append($("#8").html());
                      $('#8').children().remove();
                      // $('#4').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#8').children().html() == $('#4').children().html()){
                        var nb1 = parseInt($("#4").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#8').children().remove();
                        $('#4').children().remove();
                        $("#3").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                }
              }
              if (e.keyCode == 39){ //arrow right
                for (var a = 0; a < 3; a++){
                  if (!$('#1').is(':empty')){
                    if ($('#2').is(':empty')){
                      $("#2").append($("#1").html());
                      $('#1').children().remove();
                      // $('#2').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#1').children().html() == $('#2').children().html()){
                        var nb1 = parseInt($("#1").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#1').children().remove();
                        $('#2').children().remove();
                        $("#2").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#2').is(':empty')){
                    if ($('#3').is(':empty')){
                      $("#3").append($("#2").html());
                      $('#2').children().remove();
                      // $('#3').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#2').children().html() == $('#3').children().html()){
                        var nb1 = parseInt($("#4").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#2').children().remove();
                        $('#3').children().remove();
                        $("#3").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#3').is(':empty')){
                    if ($('#4').is(':empty')){
                      $("#4").append($("#3").html());
                      $('#3').children().remove();
                      // $('#4').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#3').children().html() == $('#4').children().html()){
                        var nb1 = parseInt($("#3").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#3').children().remove();
                        $('#4').children().remove();
                        $("#4").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#5').is(':empty')){
                    if ($('#6').is(':empty')){
                      $("#6").append($("#5").html());
                      $('#5').children().remove();
                      // $('#6').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#5').children().html() == $('#6').children().html()){
                        var nb1 = parseInt($("#5").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#5').children().remove();
                        $('#6').children().remove();
                        $("#6").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#6').is(':empty')){
                    if ($('#7').is(':empty')){
                      $("#7").append($("#6").html());
                      $('#6').children().remove();
                      // $('#7').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#6').children().html() == $('#7').children().html()){
                        var nb1 = parseInt($("#6").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#6').children().remove();
                        $('#7').children().remove();
                        $("#7").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#7').is(':empty')){
                    if ($('#8').is(':empty')){
                      $("#8").append($("#7").html());
                      $('#7').children().remove();
                      // $('#8').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#7').children().html() == $('#8').children().html()){
                        var nb1 = parseInt($("#7").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#7').children().remove();
                        $('#8').children().remove();
                        $("#8").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#9').is(':empty')){
                    if ($('#10').is(':empty')){
                      $("#10").append($("#9").html());
                      $('#9').children().remove();
                      // $('#10').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#9').children().html() == $('#10').children().html()){
                        var nb1 = parseInt($("#9").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#9').children().remove();
                        $('#10').children().remove();
                        $("#10").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#10').is(':empty')){
                    if ($('#11').is(':empty')){
                      $("#11").append($("#10").html());
                      $('#10').children().remove();
                      // $('#11').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#10').children().html() == $('#11').children().html()){
                        var nb1 = parseInt($("#10").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#10').children().remove();
                        $('#11').children().remove();
                        $("#11").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#11').is(':empty')){
                    if ($('#12').is(':empty')){
                      $("#12").append($("#11").html());
                      $('#11').children().remove();
                      // $('#12').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#11').children().html() == $('#12').children().html()){
                        var nb1 = parseInt($("#11").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#11').children().remove();
                        $('#12').children().remove();
                        $("#12").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#13').is(':empty')){
                    if ($('#14').is(':empty')){
                      $("#14").append($("#13").html());
                      $('#13').children().remove();
                      // $('#14').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#13').children().html() == $('#14').children().html()){
                        var nb1 = parseInt($("#13").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#13').children().remove();
                        $('#14').children().remove();
                        $("#14").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#14').is(':empty')){
                    if ($('#15').is(':empty')){
                      $("#15").append($("#14").html());
                      $('#14').children().remove();
                      // $('#15').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#14').children().html() == $('#15').children().html()){
                        var nb1 = parseInt($("#14").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#14').children().remove();
                        $('#15').children().remove();
                        $("#15").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#15').is(':empty')){
                    if ($('#16').is(':empty')){
                      $("#16").append($("#15").html());
                      $('#15').children().remove();
                      // $('#16').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#15').children().html() == $('#16').children().html()){
                        var nb1 = parseInt($("#15").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#15').children().remove();
                        $('#16').children().remove();
                        $("#16").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                }
              }
              if (e.keyCode == 40){ //down arrow
                for (var a = 0; a < 3; a++){
                  if (!$('#1').is(':empty')){
                    if ($('#5').is(':empty')){
                      $("#5").append($("#1").html());
                      $('#1').children().remove();
                      // $('#5').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#1').children().html() == $('#5').children().html()){
                        var nb1 = parseInt($("#1").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#1').children().remove();
                        $('#5').children().remove();
                        $("#5").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#5').is(':empty')){
                    if ($('#9').is(':empty')){
                      $("#9").append($("#5").html());
                      $('#5').children().remove();
                      // $('#9').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#5').children().html() == $('#9').children().html()){
                        var nb1 = parseInt($("#5").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#5').children().remove();
                        $('#9').children().remove();
                        $("#9").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#9').is(':empty')){
                    if ($('#13').is(':empty')){
                      $("#13").append($("#9").html());
                      $('#9').children().remove();
                      // $('#13').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#9').children().html() == $('#13').children().html()){
                        var nb1 = parseInt($("#9").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#9').children().remove();
                        $('#13').children().remove();
                        $("#13").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#2').is(':empty')){
                    if ($('#6').is(':empty')){
                      $("#6").append($("#2").html());
                      $('#2').children().remove();
                      // $('#6').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#2').children().html() == $('#6').children().html()){
                        var nb1 = parseInt($("#2").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#2').children().remove();
                        $('#6').children().remove();
                        $("#6").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#6').is(':empty')){
                    if ($('#10').is(':empty')){
                      $("#10").append($("#6").html());
                      $('#6').children().remove();
                      // $('#10').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#6').children().html() == $('#10').children().html()){
                        var nb1 = parseInt($("#6").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#6').children().remove();
                        $('#10').children().remove();
                        $("#10").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#10').is(':empty')){
                    if ($('#14').is(':empty')){
                      $("#14").append($("#10").html());
                      $('#10').children().remove();
                      // $('#14').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#10').children().html() == $('#14').children().html()){
                        var nb1 = parseInt($("#10").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#10').children().remove();
                        $('#14').children().remove();
                        $("#14").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#3').is(':empty')){
                    if ($('#7').is(':empty')){
                      $("#7").append($("#3").html());
                      $('#3').children().remove();
                      // $('#7').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#3').children().html() == $('#7').children().html()){
                        var nb1 = parseInt($("#4").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#3').children().remove();
                        $('#7').children().remove();
                        $("#7").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#7').is(':empty')){
                    if ($('#11').is(':empty')){
                      $("#11").append($("#7").html());
                      $('#7').children().remove();
                      // $('#11').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#7').children().html() == $('#11').children().html()){
                        var nb1 = parseInt($("#7").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#7').children().remove();
                        $('#11').children().remove();
                        $("#11").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#11').is(':empty')){
                    if ($('#15').is(':empty')){
                      $("#15").append($("#11").html());
                      $('#11').children().remove();
                      // $('#15').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#11').children().html() == $('#15').children().html()){
                        var nb1 = parseInt($("#11").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#11').children().remove();
                        $('#15').children().remove();
                        $("#15").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#4').is(':empty')){
                    if ($('#8').is(':empty')){
                      $("#8").append($("#4").html());
                      $('#4').children().remove();
                      // $('#8').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#4').children().html() == $('#8').children().html()){
                        var nb1 = parseInt($("#4").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#4').children().remove();
                        $('#8').children().remove();
                        $("#8").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#8').is(':empty')){
                    if ($('#12').is(':empty')){
                      $("#12").append($("#8").html());
                      $('#8').children().remove();
                      // $('#12').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#8').children().html() == $('#12').children().html()){
                        var nb1 = parseInt($("#8").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#8').children().remove();
                        $('#12').children().remove();
                        $("#12").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                  if (!$('#12').is(':empty')){
                    if ($('#16').is(':empty')){
                      $("#16").append($("#12").html());
                      $('#12').children().remove();
                      // $('#16').append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");
                    }
                    else{
                      if ($('#12').children().html() == $('#16').children().html()){
                        var nb1 = parseInt($("#12").children().html(), 10);
                        var sum = nb1 * 2;
                        $('#12').children().remove();
                        $('#16').children().remove();
                        $("#16").append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+sum+"</div>");
                      }
                    }
                  }
                }
              }
              $('.square-container').each(function(elem) { //check if the board if full or not
                if ($('.square-container').is(':empty')){
                  isempty = true;
                }
                else{
                  isempty = false;
                }
              });
              var min = Math.ceil(1); var max = Math.floor(16); // random of the id to put the tile on the board randomly
              randomid = Math.floor(Math.random() * (max - min + 1)) + min;
              while(!$("#"+randomid).is(':empty') && isempty == true){ // if the till is already filled, do another random
                randomid = Math.floor(Math.random() * (max - min + 1)) + min;
              }
              var nbr = '24'; var randomnbr = ''; // random between 2 and 4 to insert into the new tile
              for(var i=1; i<2; i++){
                randomnbr += nbr[Math.floor(Math.random() * nbr.length)];
              }
              $("#"+randomid).append("<div class='tile' style='height:"+blockSize+"px;width:"+blockSize+"px;'>"+randomnbr+"</div>");

              if (isempty == false){
                $('#board').prepend("<div id='gameover' style='height:"+boardSize+"px;width:"+boardSize+"px;'>GAME OVER</div>");
                $('#gameover').append("<button id='button2' class='waves-effect waves-light btn' type='submit' name='action'>Play Again</button>");
                $("#button2").click(function(){
                  window.location.href="http://coding_academy.com/JavaScript/JavaScript_RUSH/ex_06/mygame.html";
                });
              }
            }
          });
        },

        newgame: function(){ // function to activate the "New Game" button by recharging the page
          $("#button").click(function(){
            window.location.href="http://coding_academy.com/JavaScript/JavaScript_RUSH/ex_06/mygame.html";
          });
        },

      pushthepluggin: function(){ // function to call all the functions of the plugin
        $("body").mygame.size(100);
        $("body").mygame.creatediv();
        $("body").mygame.create16div();
        $("body").mygame.maketiles();
        $("body").mygame.newgame();
      },
    }
  });
}(jQuery));
$("body").mygame.pushthepluggin();
});
