/**
 * @name my-counter
 * @authors JonathanL
 * @version 1.0.0
 * @decription Gère un composant de type compteur
 */

 // Gestion d'événement dur le bouton + (id=increase-value)
$('#increase-value').on(
    'click', 
    function(event) {
        // lecture de la valeur du champ de saisie (input)
        const inputField = $('#quantity');

        // récupérer la valeur/borne max : 
        const maxVal = parseInt(inputField.attr('data-max'));
        //const directMaxVal = inputField.data('max'); // identique à celle du dessus
        //console.log('la valeur max possible est : ' + maxVal + ', [', directMaxVal, ']');

        // Introduction de la contrainte fonctionnelle : newVal < maxVal... sinon... NOOP
        if(parseInt(inputField.val()) < maxVal)  {
            // incrémenter la valeur de 1
            let newVal = parseInt(inputField.val()) + 1;
            console.log('nouvelle valeur attendue :' + newVal);

            // Afficher dans l'interface la nouvelle valeur
            inputField.val(newVal);

            // Activation du bouton -
            const decreaseButton = $('#decrease-value');
            decreaseButton.removeAttr('disabled');

            // Est-ce que la valeur a atteint le max, si oui... afficher un message
            if (newVal === maxVal) {
                console.log('Le maximum tu as atteint');
                $(this).attr('disabled', 'disabled');

                //$('[role="alert"] span.messageMax').html('vous avez atteint le maximum !');
                //$('[role="alert"]').show();
                $('#messageUtilMax').show();
            }   
        }
    }
)
$('#decrease-value').on(
    'click',
    function(event) {
        // lecture de la valeur du champ de saisie (input)
        const inputField = $('#quantity');

        // récupérer la valeur/borne min : 
        const minVal = parseInt(inputField.attr('data-min'));
        console.log('la valeur min possible est : ' + minVal);

        // Introduction de la contrainte fonctionnelle : newVal > minVal... sinon... NOOP
        if(parseInt(inputField.val()) > minVal)  {
            // diminuer la valeur de 1
            let newVal = parseInt(inputField.val()) - 1;
            console.log('nouvelle valeur attendue :' + newVal);
            $('#increase-value').removeAttr('disabled', 'disabled');

            // Afficher dans l'interface la nouvelle valeur
            inputField.val(newVal);

            // Est-ce que la valeur a atteint le mmon, si oui... Désactivation du bouton - et afficher un message
            if (newVal === minVal) {
                console.log('Le minimum tu as atteint');
                $(this).attr('disabled', 'disabled');
                $('#messageUtilMin').show();
        }
    }
}
 );