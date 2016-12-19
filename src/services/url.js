export default {
    getParams: () => {
        let params = '';
        try {
            params = window.location.search.substring(1);
            return decodeURIComponent(params);
        } catch (e) {

            // if url param is invalid
            return '';
        }

    }
}