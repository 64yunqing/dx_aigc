class Storage{
    static instance;
    static getInstance() {
        
        if(!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }

    getItem(key) {
        return localStorage.getItem(key);
    }

    setItem(key, value) {
        localStorage.setItem(key, value);
    }
}
export default Storage;