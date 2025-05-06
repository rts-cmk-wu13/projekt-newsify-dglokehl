
// ------ SAVE ------ //
export function saveTo(key, value) {
    return localStorage.setItem(key, value);
};

export function stringifyTo(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
};



// ------ DELETE ------ //
export function deleteFrom(key, value) {
    return localStorage.setItem(key, value);
};



// ------ READ ------ //
export function readFrom(key) {
    return localStorage.getItem(key);
};

export function parseFrom(key) {
    return JSON.parse(localStorage.getItem(key));
};