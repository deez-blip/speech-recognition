
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
let recognition = new SpeechRecognition()

// Configurer les paramètres de reconnaissance
recognition.lang = 'fr-FR';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.start();

recognition.onresult = function(event) {
    var command = event.results[0][0].transcript.toLowerCase();
    console.log('Commande : ' + command);

    if (command === 'aller en haut') {
        window.scrollBy(0, -500);
    }

    if (command === 'aller en bas') {
        window.scrollBy(0, 500);
    }
};

// Réactiver la reconnaissance vocale lorsque la transcription est terminée
recognition.onend = function() {
    recognition.start();
};

// Aller à la section suivante
    // if (command === 'suivant') {
    //     var sections = document.getElementsByClassName('section');
    //     for (var i = 0; i < sections.length; i++) {
    //         console.log('caca')
    //         var section = sections[i];
    //         var rect = section.getBoundingClientRect();
    //         if (rect.bottom > 0 && rect.bottom < window.innerHeight) {
    //             var nextSection = sections[i + 1];
    //             if (nextSection) {
    //                 nextSection.scrollIntoView({ behavior: 'smooth' });
    //             }
    //             break;
    //         }
    //     }
    // }

    // Aller à la section précédente
    // if (command === 'précédent') {
    //     var sections = document.getElementsByClassName('section');
    //     for (var i = sections.length - 1; i >= 0; i--) {
    //         var section = sections[i];
    //         var rect = section.getBoundingClientRect();
    //         if (rect.top < window.innerHeight && rect.top > 0) {
    //             var previousSection = sections[i - 1];
    //             if (previousSection) {
    //                 previousSection.scrollIntoView({ behavior: 'smooth' });
    //             }
    //             break;
    //         }
    //     }
    // }