import postcss from 'postcss';

const PLUGIN_NAME = 'deflock-debug';

/**
 *
 */
export default postcss.plugin(PLUGIN_NAME, (test = true, cb = null) => {
    return async (css, result) => {
        if (test === false || (typeof test === 'function' && !test(css, result))) {
            return;
        }
        if (typeof cb !== 'function') {
            cb = (c) => console.log(c.toString());
        }
        await cb(css, result);
    };
});
