$(document).ready(function(){
    $('.filter__select select').select2({
        width: 'resolve'
     });

     $('.human-modal-open').click(function(){
         $('#modal-human').modal('show');
     });

});