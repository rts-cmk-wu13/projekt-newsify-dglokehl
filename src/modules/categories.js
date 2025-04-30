import * as storage from "./storage.js";


export default function categories() {
    // let categoriesDefault = [
    //     {
    //         "name": "europe",
    //         "title": "Europe",
    //         "enabled": true,
    //     },
    //     {
    //         "name": "health",
    //         "title": "Health",
    //         "enabled": true,
    //     },
    //     {
    //         "name": "sport",
    //         "title": "Sport",
    //         "enabled": true,
    //     },
    //     {
    //         "name": "business",
    //         "title": "Business",
    //         "enabled": true,
    //     },
    //     {
    //         "name": "travel",
    //         "title": "Travel",
    //         "enabled": true,
    //     },
    // ]
    let categoriesDefault = [
        {
            "section": "admin",
            "display_name": "Admin",
            "enabled": true,
        },
        {
            "section": "arts",
            "display_name": "Arts",
            "enabled": true,
        },
        {
            "section": "automobiles",
            "display_name": "Automobiles",
            "enabled": true,
        },
        {
            "section": "books",
            "display_name": "Books",
            "enabled": true,
        },
        {
            "section": "briefing",
            "display_name": "Briefing",
            "enabled": true,
        },
        {
            "section": "business",
            "display_name": "Business",
            "enabled": true,
        },
        {
            "section": "climate",
            "display_name": "Climate",
            "enabled": true,
        },
        {
            "section": "corrections",
            "display_name": "Corrections",
            "enabled": true,
        },
        {
            "section": "education",
            "display_name": "Education",
            "enabled": true,
        },
        {
            "section": "en español",
            "display_name": "En español",
            "enabled": true,
        },
        {
            "section": "fashion",
            "display_name": "Fashion",
            "enabled": true,
        },
        {
            "section": "food",
            "display_name": "Food",
            "enabled": true,
        },
        {
            "section": "gameplay",
            "display_name": "Gameplay",
            "enabled": true,
        },
        {
            "section": "guide",
            "display_name": "Guide",
            "enabled": true,
        },
        {
            "section": "health",
            "display_name": "Health",
            "enabled": true,
        },
        {
            "section": "home & garden",
            "display_name": "Home & Garden",
            "enabled": true,
        },
        {
            "section": "home page",
            "display_name": "Home Page",
            "enabled": true,
        },
        {
            "section": "job market",
            "display_name": "Job Market",
            "enabled": true,
        },
        {
            "section": "the learning network",
            "display_name": "The Learning Network",
            "enabled": true,
        },
        {
            "section": "lens",
            "display_name": "Lens",
            "enabled": true,
        },
        {
            "section": "magazine",
            "display_name": "Magazine",
            "enabled": true,
        },
        {
            "section": "movies",
            "display_name": "Movies",
            "enabled": true,
        },
        {
            "section": "multimedia/photos",
            "display_name": "Multimedia/Photos",
            "enabled": true,
        },
        {
            "section": "new york",
            "display_name": "New York",
            "enabled": true,
        },
        {
            "section": "obituaries",
            "display_name": "Obituaries",
            "enabled": true,
        },
        {
            "section": "opinion",
            "display_name": "Opinion",
            "enabled": true,
        },
        {
            "section": "parenting",
            "display_name": "Parenting",
            "enabled": true,
        },
        {
            "section": "podcasts",
            "display_name": "Podcasts",
            "enabled": true,
        },
        {
            "section": "reader center",
            "display_name": "Reader Center",
            "enabled": true,
        },
        {
            "section": "real estate",
            "display_name": "Real Estate",
            "enabled": true,
        },
        {
            "section": "smarter living",
            "display_name": "Smarter Living",
            "enabled": true,
        },
        {
            "section": "science",
            "display_name": "Science",
            "enabled": true,
        },
        {
            "section": "sports",
            "display_name": "Sports",
            "enabled": true,
        },
        {
            "section": "style",
            "display_name": "Style",
            "enabled": true,
        },
        {
            "section": "sunday review",
            "display_name": "Sunday Review",
            "enabled": true,
        },
        {
            "section": "t brand",
            "display_name": "T Brand",
            "enabled": true,
        },
        {
            "section": "t magazine",
            "display_name": "T Magazine",
            "enabled": true,
        },
        {
            "section": "technology",
            "display_name": "Technology",
            "enabled": true,
        },
        {
            "section": "theater",
            "display_name": "Theater",
            "enabled": true,
        },
        {
            "section": "times insider",
            "display_name": "Times Insider",
            "enabled": true,
        },
        {
            "section": "today’s paper",
            "display_name": "Today’s Paper",
            "enabled": true,
        },
        {
            "section": "travel",
            "display_name": "Travel",
            "enabled": true,
        },
        {
            "section": "u.s.",
            "display_name": "U.S.",
            "enabled": true,
        },
        {
            "section": "universal",
            "display_name": "Universal",
            "enabled": true,
        },
        {
            "section": "the upshot",
            "display_name": "The Upshot",
            "enabled": true,
        },
        {
            "section": "video",
            "display_name": "Video",
            "enabled": true,
        },
        {
            "section": "the weekly",
            "display_name": "The Weekly",
            "enabled": true,
        },
        {
            "section": "well",
            "display_name": "Well",
            "enabled": true,
        },
        {
            "section": "world",
            "display_name": "World",
            "enabled": true,
        },
        {
            "section": "your money",
            "display_name": "Your Money",
            "enabled": true,
        }
    ]

    let categoriesStorage = storage.parseFrom("categories")
    
    if (categoriesStorage === null) {
        storage.stringifyTo("categories", categoriesDefault)
    }

    return storage.parseFrom("categories")
}