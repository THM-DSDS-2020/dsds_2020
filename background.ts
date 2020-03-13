function logURL(requestDetails) {
    let requestedSourceDomain = requestDetails.url
        .replace('http://','').replace('https://','').split(/[/?#]/)[0];
    let requestOriginDomain = requestDetails.documentUrl
        .replace('http://','').replace('https://','').split(/[/?#]/)[0];
    console.log("" +
        "Loading: " + requestDetails.url + "\n" +           // URL from the request
        "docUrl: " + requestOriginDomain + "\n" +           // URL where the element should be loaded to / "request origin"
        "Methode: " + requestDetails.method + "\n" +        // The HTTP Method (GET, PUT, ...)
        "Third Party: " + requestDetails.thirdParty + "\n" +
        "Type: " + requestDetails.type + "\n" +             // The Element Type (image, ...)
        "domain name: " + requestedSourceDomain + "\n");    // Source domain of the requested element

    //Erkenntnis: Origin wertlos, verweist auf .css-Dateien wenn Bilder geladen werden.
    //Erkenntnis: firstParty funktioniert nicht, thirdParty nehmen
    //Erkenntnis: HostURL irrelevant

    requestDetails = new URL(requestDetails.url)


}

browser.webRequest.onBeforeRequest.addListener(
    logURL,
    {urls: ["<all_urls>"]}
);
