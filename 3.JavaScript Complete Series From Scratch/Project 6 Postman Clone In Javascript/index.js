console.log("This is a Postman Clone in Javascript");

// Utility Functions 
// 1. Utility functions to get DOM element from the string 
function GetElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}



// function 
// initilize number of parameters 
let addedParamsCount = 0;
// Hide the parameter box initially 
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// if the user click on params box, hide the JSON box 
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    // to hide the element display='none'
    document.getElementById('requestJsonBox').style.display = 'none';

    // to show the element display='block'
    document.getElementById('parametersBox').style.display = 'block';

});

// if the user clicks on json box, hide the params box 
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';
});


// if user clicks on "+" button add more parameter 
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `<div class="form-row my-2">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamsCount + 2}</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${addedParamsCount + 2}" placeholder="Enter Parameter ${addedParamsCount + 2} Key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${addedParamsCount + 2}" placeholder="Enter Parameter ${addedParamsCount + 2} Value">
                    </div>
                        <button class="btn btn-primary deleteParam"> - </button>
                </div>`

    // convert the element string to DOM node 
    let paramElement = GetElementFromString(string);
    params.appendChild(paramElement);

    // add an event listener to remove the parameter on clicking "-" button 
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (items of deleteParam) {
        items.addEventListener('click', (e) => {
            // ADD A CONFIRMATION BOX TO CONFIRM PARAMETER DELETION 
            e.target.parentElement.remove();

        });
    }
    // console.log(paramElement);
    addedParamsCount++;
});

// if the user clicks on submit button 
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    //show please wait in the response box to request patience from the user 
    document.getElementById('responsePrism').innerHTML = "Fetching Response .. Please Wait......";
    // fetch all the values user has entered 
    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;


    // if user has use params option instead of json ,collect all the parameter in the object 
    if (contentType == 'params') {
        data = {};
        for (let i = 0; i < addedParamsCount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }

    else {
        data = document.getElementById('responsePrism').value;
    }


    // log all values in the console 
    console.log("URL is : ", url);
    console.log("Request Type : ", requestType);
    console.log("Content Type : ", contentType);
    console.log(data);

    // If requestType is post , invoke api to create a post request 
    if (requestType == 'GET') {
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.text())
            .then((text) => {
                // document.getElementById('responseJsonText').value = text;
                document.getElementById('responsePrism').innerHTML = text;
                Prism.highlightAll();
            });
    }

    else {
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.text())
            .then((text) => {
                // document.getElementById('responseJsonText').value = text;
                document.getElementById('responsePrism').innerHTML = text;
                Prism.highlightAll();
            });

    }

});