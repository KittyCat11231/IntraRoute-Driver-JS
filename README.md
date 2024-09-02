# IntraRoute API Driver for JavaScript

This package makes it easy to send requests to IntraRoute's API.

## Install

`npm install @kyle11231/intraroute`

## Import

`import intraRoute from '@kyle11231/intraroute';`

or

`const { intraRoute } = require('@kyle11231/intraroute');`

## Syntax

    intraRoute(start, end, options (optional))
    .then(response => console.log(response));

or...

    async function getRoute() {
        let response = await intraRoute(start, end, options);
        console.log (response);
    }

    getRoute();

## Required Parameters

- start: The stop code for the starting point of your route.
- end: The stop code for the ending point of your route.

IntraRoute stop codes include a prefix for the mode of travel (such as 'rail' for IntraRail) followed by a three letter code.

Example:

    intraRoute('airSSI', 'railCCW')
    .then(response => console.log(response))

    // Finds a route between Sunshine Coast Máspalmas International Airport (SSI) and Central City Warp Rail Terminal (CCW);

All valid IntraRoute stop codes can be found here:
https://docs.google.com/spreadsheets/d/19Rz6TCs5rGDBuS4mZfN5R6axIINSoZxgjQgpaEVVxgg/edit?usp=sharing

## Optional Parameters

The third parameter is a config object with the following optional parameters:

- excludeModes: An array of Intra transport modes to exclude from the search. Valid modes are: "air", "bahn", "bus", "rail", "sail", "local". If not specified, all modes are included in the search.

- type: (default: "json") Specifies the return type of the response. There are three options:
    - "json": Returns a normal JSON object.
    - "simple-json": Returns a JSON object with human readable values.
    - "plain-text": Returns a response in plain text.

- useCors: (default: true) Specifies whether or not to proxy the request via a CORS proxy. Necessary for use in front-end code.

Example:

    intraRoute('airSSI', 'railCCW', {
        excludeModes: ['sail'], // Will exclude IntraSail routes in the search.
        type: 'simple-json', // Will return a simple JSON response.
        useCors: false // Will not proxy the request via a CORS proxy.
    })

# Find any issues?

If you find a bug or any other issues, please email us at intra@felineholdings.com.