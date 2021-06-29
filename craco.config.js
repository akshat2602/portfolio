const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@layout-header-background': '#282a36',
                            '@menu-dark-bg': '#282a36',
                            '@menu-dark-item-active-bg': '#44475a',
                            '@layout-body-background': '#282a36',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};