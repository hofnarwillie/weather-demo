import url from './../constants/weather.config.js';
import nanoajax from 'nanoajax';

export default class swapiData {
    static getData() {

        return new Promise((resolve, reject) => {
            let options = {
                url: url
            };

            nanoajax.ajax(options, (status, responseText) => {
                if (status === 200) {
                    resolve(JSON.parse(responseText));
                }
                else {
                    reject(responseText);
                }
            });
        });
    }
}