class Controller {

    storage;

    constructor() {
        this.storage = new StoragePlugin();
    }

    trackRequest(requests) {
        //Schauen, welche Daten gebraucht und welche weggeworfen werden können
    }

    getCSR(domains) {
        //Gibt JSON-Objekt mit allen dazugehörigen CSRs zurück
        return {};
    }

    getCaller(domain) {
        //Gibt ein Array mit allen Callern der übergebenen Domain zurück
        return [''];
    }
}
