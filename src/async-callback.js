import log from 'log';
import get from 'ajax-with-callback';

function main() {
    log('the async callback module:');

    function ajaxCalls() {
        get('examples/hello.json', function(result) {
            log(result);
        }, function(error) {
            log(error);
        });

        get('examples/world.json', function(result) {
            log(result);
        }, function(error) {
            log(error);
        });
    }

    ajaxCalls();
}

export default main;
