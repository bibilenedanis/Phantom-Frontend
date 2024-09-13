import PocketBase from 'pocketbase';

const pb = new PocketBase(window.location.origin);
// const pb = new PocketBase('https://pw.semiherdogan.net');
// const pb = new PocketBase('http://127.0.0.1:8090');

export default pb;