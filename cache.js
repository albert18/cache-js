class Cache_Reuse {
    constructor() { }
    StoreJsonData(key, jsonData) {
        window.localStorage.setItem(keyname + key, JSON.stringify(jsonData));
    }
    GetJsonData(key) {
        var data = window.localStorage.getItem(keyname + "." + key);
        if (data == null) return null;
        return JSON.parse(data);
    }
    RemoveItem(key) {
        window.localStorage.removeItem(keyname + "." + key);
    }
    Clear() {
        window.localStorage.clear();
    }
}
const cache = new Cache_Reuse();