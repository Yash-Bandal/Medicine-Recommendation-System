const options = {
    method: 'GET',
    headers: {
       // 'X-RapidAPI-Key': '206ac9a9a6mshd24a1c916e57812p1383f4jsn0f3293b14933',
        'X-RapidAPI-Key': '8a927be3aamshf85f78aedd8fa4bp16391cjsncce9ea07b8e9', //yashodeep
        //  'X-RapidAPI-Key': 'cf7e8d256bmsh156f5a4d8d2279dp138c3djsne28dba10e3f1', //yashbhaimore

        'X-RapidAPI-Host': 'wikipedia-api1.p.rapidapi.com'
    }
};

const getWikipediaData = (query) => {
    fetch('https://wikipedia-api1.p.rapidapi.com/search?q=' + query + '&lang=en', options)
        .then(response => response.json())
        .then((data) => {
            displayWikipediaData(data);
        })
        .catch(err => console.error(err));
}

const displayWikipediaData = (data) => {
    const resultsContainer = document.getElementById('wikipediaResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (data.data.length === 0) {
        resultsContainer.innerHTML = '<div class="list-group-item">No results found</div>';
    } else {
        data.data.forEach(item => {
            const resultItem = document.createElement('a');
            resultItem.classList.add('list-group-item', 'list-group-item-action');
            resultItem.href = 'https://en.wikipedia.org/wiki/' + item.replace(/\s+/g, '_'); // Create Wikipedia link
            resultItem.textContent = item;
            resultsContainer.appendChild(resultItem);
        });
    }
}

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    getWikipediaData(searchInput.value);
});
