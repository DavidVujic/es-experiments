import log from 'log';
import get from 'ajax-with-promise';
import run from 'async-runner';

function main() {

    run(function* ajaxCalls() {
        let result = yield get('examples/hello.json');
        log(result);

        let result2 = yield get('examples/world.json');
        log(result2);

        log('... and done.');
    });

    log('Waiting...');
    setTimeout(() => log('doing other stuff...'), 50);

}

export default main;
