$(document).ready(function(){
  thermostat = new Thermostat();
  $('#display').prepend(thermostat.temperature);
  $('#increaseTemp').on('click',function(){
    thermostat.increaseTemp();
    $('#display').replaceWith("<span id='display'>" + thermostat.temperature + "</span>");
    console.log(thermostat.temperature);
  });
  $('#decreaseTemp').on('click',function(){
    thermostat.decreaseTemp();
    $('#display').replaceWith("<span id='display'>" + thermostat.temperature + "</span>");
    console.log(thermostat.temperature);
  });
  $('#resetTemp').on('click',function(){
    thermostat.resetTemp();
    $('#display').replaceWith("<span id='display'>" + thermostat.temperature + "</span>");
    console.log(thermostat.temperature);
  });
  $('#psmOn').on('click',function(){
    thermostat.powerSavingModeOn();
    $('#psm').replaceWith("<span id='psm'>" + 'on' + "</span>");
    console.log(thermostat.temperature);
  });
  $('#psmOff').on('click',function(){
    thermostat.powerSavingModeOff();
    $('#psm').replaceWith("<span id='psm'>" + 'off' + "</span>");
    console.log(thermostat.temperature);
  });

});
