export default {
    copyAttribute: (object) => {
        return JSON.parse(JSON.stringify(object));            
    }
}