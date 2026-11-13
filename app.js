document.addEventListener("DOMContentLoaded", function() {

    const lookup = document.getElementById("lookup");
    const result = document.getElementById("result");
    const query = document.getElementById("name");
    lookup.addEventListener('click', function() {
        const url = 'superheroes.php?query=' + encodeURIComponent(query.value.trim());
        fetch(url)
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                result.innerHTML = data;
            })
            .catch();
    });
})