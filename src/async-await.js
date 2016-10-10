import log from 'log';
import get from 'ajax-with-promise';

function main() {
    log('the async-await module:');

    async function ajaxCalls() {
        let result = await get('examples/hello.json');
        log(result);

        try {
            let result2 = await get('examples/world.json');
            log(result2);
        } catch (e) {
            log(e);
        }
    }

    ajaxCalls();
}

export default main;
