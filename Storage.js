/**
 * Checking function for inconsintency
 * @param obj
 */

function isEmpty(obj){
    for (var key in obj) {
        return !obj.hasOwnProperty(key);
    }
}


/**
 * Saves one entry to plugin-storage
 * @param entry
 */

function set (entry) {
    return new Promise((resolve, reject) => {
        browser.storage.local.set({
            entry
        }).then(() => {
            resolve();
        }).catch(() => {
            reject();
        })
    });
}

/**
 * Returns one entry from plugin-storage
 * @param key
 */

function get (key) {
    return new Promise((resolve, reject) => {
        browser.storage.local.get(key).then((value) => {
            resolve(value);
        }).catch((err) => {
            reject()
        });
    });
}

/**
 * Deletes one entry from plugin-storage
 * @param key
 */

function deleteOne (key) {
    return new Promise((resolve, reject) => {
        browser.storage.local.remove(key).then(() => {
            resolve()
        }).catch(() => {
            reject()
        })
    })
}

/**
 * Function to delete all entrys in plugin-storage
 */

function deleteAll () {
    return new Promise((resolve, reject) => {
        browser.storage.local.clear().then(() => {
            resolve();
        }).catch(() => {
            reject();
        });

    });
}

async function showResults() {
    try {
        console.log(await get("hello"));
        console.log(await get("hello1"));
        console.log(await get("hello2"));
    }catch (e) {
        console.log("Fehler beim Anzeigen");
    }
}

async function test() {
    try {
        await set({hello: "world"});
        await set({hello1: "world1"});
        await set({hello2: "world2"});
        await showResults();
    }catch (e) {
        console.log("Fehler: " + e);
    }
}

test();
