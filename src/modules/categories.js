import * as storage from "./storage.js";


export default function categories() {
    let categoriesDefault = [
        {
            "name": "europe",
            "title": "Europe",
            "enabled": true,
        },
        {
            "name": "health",
            "title": "Health",
            "enabled": true,
        },
        {
            "name": "sport",
            "title": "Sport",
            "enabled": true,
        },
        {
            "name": "business",
            "title": "Business",
            "enabled": true,
        },
        {
            "name": "travel",
            "title": "Travel",
            "enabled": true,
        },
    ]

    let categoriesStorage = storage.parseFrom("categories")
    
    if (categoriesStorage === null) {
        storage.stringifyTo("categories", categoriesDefault)
    }

    return storage.parseFrom("categories")
}