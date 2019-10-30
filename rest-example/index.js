const express = require('express')
const app = express()
const port = 3000
const dba =  require('./db');
let pois=[
    {
    id: 0,
    name: 'Business College Helsinki',
    description: 'Business College Helsinki has long experience and a good reputation as an expert and developer of high quality vocational education. As a forward-looking training provider, we offer our students versatile learning environments, individual career paths, and various skills for developing personal and professional skills. In addition to teaching, we focus on our good connections with working life.',
    city: 'Helsinki',
    coordinates: {
    lat: 60.2018773,
        lng: 24.9353841
}},

    {
        id: 1,
        name: 'Business College espoo',
        description: 'Business College Espoo has long experience and a good reputation as an expert and developer of high quality vocational education. As a forward-looking training provider, we offer our students versatile learning environments, individual career paths, and various skills for developing personal and professional skills. In addition to teaching, we focus on our good connections with working life.',
        city: 'Espoo',
        coordinates: {
            lat: 60.2018773,
            lng: 24.9353841
        }},

    {
        id: 2,
        name: 'Business College vantaa',
        description: 'Business College Vantaa has long experience and a good reputation as an expert and developer of high quality vocational education. As a forward-looking training provider, we offer our students versatile learning environments, individual career paths, and various skills for developing personal and professional skills. In addition to teaching, we focus on our good connections with working life.',
        city: 'Vantaa',
        coordinates: {
            lat: 60.2018773,
            lng: 24.9353841
        }},

];
function getPoi(id) {
    if (id) {
        return pois[id];
    } else {
        return Object.values(pois);
    }
}
/**
 * Update or create an entry.
 * If the id exists, the contents of the entry are updated. If id does not exist, a new entry is created for key id
 *
 * @param {string} id - id of POI to update or create
 * @param {POI} poi - new POI data
 */
function setPoi(poi) {
    id=pois.length;
    pois[id] = { id, ...poi };
    return pois[id];
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
        delete pois[id];
        return true;
    } else {
        return false;
    }
}

app.get('/pois', (req, res) => res.send( pois))
app.get('/pois/:id', (req, res) => res.send(getPoi(req.params.id)))
app.delete('/pois/:id', (req, res) => res.send(deletePoi(req.params.id)))
app.post('/pois/', (req, res) => res.send(setPoi(req.params.poi)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))