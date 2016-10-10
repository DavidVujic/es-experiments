import log from 'log';
import get from 'ajax-with-promise';

function main() {
    log('the async promise module:');

    function ajaxCalls() {
        get('examples/hello.json').then(log).catch(log);

        get('examples/world.json').then(log).catch(log);
    }

    ajaxCalls();
}

export default main;
