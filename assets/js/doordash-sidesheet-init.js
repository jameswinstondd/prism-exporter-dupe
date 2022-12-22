// zeynepjs initialization for demo
$(function() {

    var zeynep = $('.zeynep').zeynep({
      opened: function () {
        console.log('the side menu is opened')
      }
    })
  
    // dynamically bind 'closing' event
    zeynep.on('closing', function () {
      console.log('this event is dynamically binded')
    })
  
    // handle zeynepjs overlay click
    $('.zeynep-overlay').on('click', function () {
      zeynep.close()
    })

    $('.btn-close').on('click', function () {
        zeynep.close()
      })
  
    // open zeynepjs side menu
    $('.btn-open').on('click', function () {
      zeynep.open()
    })
  
  })