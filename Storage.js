/**
 * ***************************************************************************************
 * Javascript for CRUD-operations to get, persist and delete JSON-objects to storage.local
 * ***************************************************************************************
 */

/**
 * Checking function for empty JSON-object
 * @param obj
 */

function isEmpty(obj){
    return Object.keys(obj).length === 0;
}

/**
 * Saves one entry to plugin-storage
 * @param entry
 */

function set (entry) {
    return new Promise((resolve, reject) => {
        if (!isEmpty(entry)) {
            browser.storage.local.set(
                entry
            ).then(() => {
                resolve();
            }).catch(() => {
                reject("Something went wrong in set()-function");
            })
        }else {
            reject("JSON-Object is empty");
        }
    });
}

/**
 * Returns one entry from plugin-storage
 * @param key
 */

//Use param: null to get all objects

function get (key) {
    return new Promise((resolve, reject) => {
        browser.storage.local.get(key).then((value) => {
            resolve(value);
        }).catch(() => {
            reject("Something went wrong in get()-function")
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
            reject("Something went wrong in deleteOne()-function")
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
            reject("Something went wrong in deleteAll()-function");
        });
    });
}

/**
 * ***************************************************************************************
 * Section for testing
 * ***************************************************************************************
 */

/**
 * Testing function set
 * @return {Promise<void>}
 */

async function testSet() {
    try {
        var setTestData = {
            'web.de': {
                sources: [
                    'google.de',
                    'gmx.de'
                ]
            },
            'img.web.de': {
                sources: [
                    'web.de',
                    'gmx.de'
                ]
            },
            'gmx.de': {
                sources: [
                    'google.com',
                    'facebook.com'
                ]
            }
        };
        await set(setTestData);
    }catch (e) {
        console.error(e);
    }
}

/**
 * Testing function get
 * @return {Promise<void>}
 */

async function testGet() {
    try {
        var getTestData = await get(null);
        console.log(getTestData)
    }catch (e) {
        console.error(e);
    }
}

/**
 * Testing function deleteOne
 * @return {Promise<void>}
 */

async function testDeleteOne() {
    try {
        await deleteOne('web.de');
        var deletedData = await get('web.de');
        var isDeleted = isEmpty(deletedData);
        console.log("testDelete functional: " + isDeleted);
    }catch (e) {
        console.error(e);
    }
}

/**
 * Testing function deleteAll
 * @return {Promise<void>}
 */

async function testDeleteAll() {
    try{
        await deleteAll();
        var deletedData = await get(null); //If you pass null, or an undefined value, the entire storage contents will be retrieved.
        var isDeleted = isEmpty(deletedData);
        console.log("testDeleteAll functional: " + isDeleted);
    }catch (e) {
        console.error(e);
    }
}

/**
 * Runs all test functions
 * @return {Promise<void>}
 */

async function testAll() {
    try {
        await testSet();
        await testGet();
        await testDeleteOne();
        await testDeleteAll();
    }catch (e) {
        console.error("Something went wrong with testAll()...")
    }
}

testAll();
