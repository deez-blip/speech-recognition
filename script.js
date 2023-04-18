var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
        let recognition = new SpeechRecognition()

        // Configurez les paramètres de reconnaissance
        recognition.lang = 'fr-FR';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        document.getElementById('searchButton').addEventListener('click', function() {

            recognition.start();

            recognition.onresult = function(event) {
                var searchText = event.results[0][0].transcript;
                document.getElementById('searchInput').value = searchText;
                document.getElementById('searchForm').submit();
            };
    });