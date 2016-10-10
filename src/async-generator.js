import log from 'log';
import get from 'ajax-with-promise';
import run from 'async-runner';

function main() {
    log('the async generator module:');

    run(function* ajaxCalls() {
        let result = yield get('examples/hello.json');
        log(result);

        let result2 = yield get('examples/world.json');
        log(result2);
    });
}

export default main;
