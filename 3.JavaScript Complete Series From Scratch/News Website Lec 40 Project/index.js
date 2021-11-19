console.log("this is my index js file");
// my api key : ad93fabc14674140b4e4130d9cb71002

// Initialize the news api parameters 
// let source = 'techcrunch';
let apiKey = '8a82501ff4fcb678d6eae21aeeb0cd32';


// grab the news container 
let newsAccordion = document.getElementById('newsAccordion');

// create an ajax get request 
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://api.mediastack.com/v1/news?access_key=${apiKey}`, true)
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);

        let data = json.data;
        let newshtml = ""
        data.forEach(function(element,index) {
            console.log(element,index);
    
            console.log(data[element]);
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["description"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newshtml += news;


        });

        newsAccordion.innerHTML = newshtml;

    }

    else {
        console.log("some error occoured");
    }
}

xhr.send();
