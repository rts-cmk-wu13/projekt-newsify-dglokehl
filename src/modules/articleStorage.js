import * as storage from "./storage.js";


export default function articleStorage() {
    let articleStorage = storage.parseFrom("articleStorage")
    // console.log("articleStorage", articleStorage);
    
    if (articleStorage !== null) {
        return articleStorage
    } else {
        return []
    }
}