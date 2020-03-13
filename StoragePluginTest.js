/**
 * ***************************************************************************************
 * Class for testing Storage class
 * ***************************************************************************************
 */

class StoragePluginTest {

    storage;

    constructor() {
        this.storage = new StoragePlugin();
    }

    /**
     * Testing function set
     * @return {Promise<void>}
     */

    async testSet() {
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
            await this.storage.set(setTestData);
        }catch (e) {
            console.error(e);
        }
    }

    /**
     * Testing function get
     * @return {Promise<void>}
     */

    async testGet() {
        try {
            var getTestData = await this.storage.get(null);
            console.log(getTestData)
        }catch (e) {
            console.error(e);
        }
    }

    /**
     * Testing function deleteOne
     * @return {Promise<void>}
     */

    async testDeleteOne() {
        try {
            await this.storage.deleteOne('web.de');
            var deletedData = await this.storage.get('web.de');
            var isDeleted = this.storage.isEmpty(deletedData);
            console.log("testDelete functional: " + isDeleted);
        }catch (e) {
            console.error(e);
        }
    }

    /**
     * Testing function deleteAll
     * @return {Promise<void>}
     */

    async testDeleteAll() {
        try{
            await this.storage.deleteAll();
            var deletedData = await this.storage.get(null); //If you pass null, or an undefined value, the entire storage contents will be retrieved.
            var isDeleted = this.storage.isEmpty(deletedData);
            console.log("testDeleteAll functional: " + isDeleted);
        }catch (e) {
            console.error(e);
        }
    }

    /**
     * Runs all test functions
     * @return {Promise<void>}
     */

    async testAll() {
        try {
            await this.testSet();
            await this.testGet();
            await this.testDeleteOne();
            await this.testDeleteAll();
        }catch (e) {
            console.error("Something went wrong with testAll()..." , e)
        }
    }
}

new StoragePluginTest().testAll();
