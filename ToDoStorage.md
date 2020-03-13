- Get CSR (Cross-site-reference)
- array von domains
- aktuelle domain is da auch drin
- returns: - getCaller(Domain)<br> returns array mit allen callern


Json entwurf

//Source = Vom Request angezielte Ressource
- requestedSourceURL : String
- requestedSourceDomain : String

//Origin = Quelle des Requests (akt. Webseite)
requestOriginURL : String<br>
requestOriginDomain : String<br>
//Weitere Daten<br>
RequestMethod : String<br>
DataType : String<br>
thirdParty : boolean<br>