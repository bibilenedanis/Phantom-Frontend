export default function getQueryString() {
    if (!window.location.search) {
        return {};
    }

    try {
        return JSON.parse('{"' + decodeURI(window.location.search.substring(1))
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g,'":"')
        + '"}');
    } catch (e) {
        return {};
    }
}