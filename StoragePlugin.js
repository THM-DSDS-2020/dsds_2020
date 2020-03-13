/**
 * ***************************************************************************************
 * Javascript for CRUD-operations to get, persist and delete JSON-objects to storage.local
 * ***************************************************************************************
 */

class StoragePlugin {

    constructor() {}

    /**
     * Checking method for empty JSON-object
     * @param obj
     */

    isEmpty(obj){
        return Object.keys(obj).length === 0;
    }

    /**
     * Saves one entry to plugin-storage
     * @param entry
     */

    set (entry) {
        return new Promise((resolve, reject) => {
            if (!this.isEmpty(entry)) {
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

    get (key = null) {
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

    deleteOne (key) {
        return new Promise((resolve, reject) => {
            //if (key == null) reject("Gib einen Key an!");
            browser.storage.local.remove(key).then(() => {
                resolve()
            }).catch(() => {
                reject("Something went wrong in deleteOne()-function")
            })
        })
    }

    /**
     * Method to delete all entrys in plugin-storage
     */

    deleteAll () {
        return new Promise((resolve, reject) => {
            browser.storage.local.clear().then(() => {
                resolve();
            }).catch(() => {
                reject("Something went wrong in deleteAll()-function");
            });
        });
    }
}
