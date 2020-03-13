# **Datenschutz und Datensicherheit 2020**
*****


## StoragePlugin.js 

---

### Maintainer and Creator

- Atomhirschi
- lisa-dot
- IHaveNoIdea
- DerTebbe
- mehm75

#### Storage

The StoragePlugin.js is created for maintaining the consistency of the data of the plugin. <br>

Storage is implemented with CRUD functions.<br>

#### **Set and update function**

```javascript
set (entry) {
        return new Promise((resolve, reject) => {
            ...
          browser.storage.local.set(
                    entry
                ).then(() => {
                    resolve();
                }).catch(() => {
                    reject();
                })
            }
        });
    

```

#### **Get function**

```javascript
get (key = null) {
        return new Promise((resolve, reject) => {
            browser.storage.local.get(key).then((value) => {
                resolve(value);
            }).catch(() => {
                reject()
            });
        });
    }
```

#### **Delete function**

```javascript
    deleteOne (key) {
        return new Promise((resolve, reject) => {
            browser.storage.local.remove(key).then(() => {
                resolve()
            }).catch(() => {
                reject()
            })
        })
    }
```

#### **Delete All function**

```javascript
deleteAll () {
        return new Promise((resolve, reject) => {
            browser.storage.local.clear().then(() => {
                resolve();
            }).catch(() => {
                reject();
            });
        });
    }
```

## StoragePluginTest.js

Javascript file for testing purposes of the storage area.
