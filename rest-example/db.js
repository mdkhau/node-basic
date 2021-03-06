/** 
* Mockup database module. The data is volatile, it is stored only in memory and will be reset whenever the server is restarted.
* @module db 
*/ 

/**
 * Coordinates
 * @typedef {Object} Coords
 * @property {number} lat - latitude 
 * @property {number} lng - longitude 
 */

/**
 * A Point of Interest (POI)
 * @typedef {Object} POI
 * @property {string} name - name of POI
 * @property {string} description - description of POI 
 * @property {string} city - location of POI
 * @property {Coords} coordinates - coordinates for POI
 */

const uuid = require('uuid/v1');

const storage = {
        id: 'e62a37e0-7864-11e9-9e75-e5ec65767070',
        name: 'Business College Helsinki',
        description: 'Business College Helsinki has long experience and a good reputation as an expert and developer of high quality vocational education. As a forward-looking training provider, we offer our students versatile learning environments, individual career paths, and various skills for developing personal and professional skills. In addition to teaching, we focus on our good connections with working life.',
        city: 'Helsinki',
        coordinates: {
            lat: 60.2018773,
            lng: 24.9353841
        }
}

/**
 * Get one entry by id or all POIs
 * 
 * @param {string=} id - id of entry to get, if no id given all entries are returned as an array
 */
function getPoi(id) {
    if (id) {
        return storage[id];
    } else {
        return Object.values(storage);
    }
}

/**
 * Update or create an entry.
 * If the id exists, the contents of the entry are updated. If id does not exist, a new entry is created for key id
 * 
 * @param {string} id - id of POI to update or create
 * @param {POI} poi - new POI data
 */
function setPoi(id, poi) {
    storage[id] = { id, ...poi };
    return storage[id];
}

/**
 * Create a new entry.
 * A new entry with a new unique identifier is created
 * @param {*} poi - new POI data
 */
function createPoi(poi) {
    const id = uuid();
    return setPoi(id, poi);
}

/**
 * Delete an entry.
 * If the entry does not exist, returns false, otherwise true.
 * @param {string} id 
 */
function deletePoi(id) {
    if (id && getPoi(id)) {
        delete storage[id];
        return true;
    } else {
        return false;
    }
}

module.exports = {
    storage,
    getPoi,
    setPoi,
    createPoi,
    deletePoi
}
