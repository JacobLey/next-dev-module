'use strict';

module.exports = {
    future: {
        webpack5: true,
    },
    webpack: (defaultConfig, opts) => {

        defaultConfig.module.rules.push({
            test: {
                and: [
                    /\.js$/,
                    path => !path.includes('node_modules'),
                ],
            },
            include: ['/'],
            use: opts.defaultLoaders.babel,
        });

        return defaultConfig;
    },
};
