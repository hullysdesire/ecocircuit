
$(function()
{
    function after_form_submitted(data) 
    {
        if(data.result == 'success')
        {
            $('#success_message').show();
            $('.on-submit-hide').hide();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

	$('#booking_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' ); 
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });
        

                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json' 
            });        
        
      });	
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbwzla2RVLSb8T4WhWpg0w5KFXvN9VssXlwfNd08qJB1dYzoG5scQ3Wl1DDpGEKW_77GQQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Votre reservation a été effectuer avec succès! Nous vous contactons dans quelques instants."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


// document.addEventListener('DOMContentLoaded', function () {
//     const scriptURL = 'https://script.google.com/macros/s/AKfycbwzla2RVLSb8T4WhWpg0w5KFXvN9VssXlwfNd08qJB1dYzoG5scQ3Wl1DDpGEKW_77GQQ/exec';
//     const form = document.forms['contact-form'];
//     const popup = document.getElementById('custom-popup');
//     const closePopup = document.querySelector('.close-popup');
//     const popupMessage = document.querySelector('.popup-message');
  
//     form.addEventListener('submit', e => {
//       e.preventDefault();
//       fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => {
//           if (response.ok) {
//             // Afficher le pop-up
//             popupMessage.textContent = "Votre réservation a été effectuée avec succès! Nous vous contacterons dans quelques instants.";
//             popup.style.display = 'block';
//           } else {
//             throw new Error('Une erreur est survenue lors de l\'envoi du formulaire.');
//           }
//         })
//         .catch(error => {
//           console.error('Error!', error.message);
//           // Afficher un message d'erreur dans le pop-up si nécessaire
//           popupMessage.textContent = "Une erreur est survenue. Veuillez réessayer.";
//           popup.style.display = 'block';
//         });
//     });
  
//     closePopup.addEventListener('click', () => {
//       // Fermer le pop-up lorsqu'on clique sur le bouton de fermeture
//       popup.style.display = 'none';
//       // Réinitialiser le formulaire si nécessaire
//       form.reset();
//     });
//   });
  
  