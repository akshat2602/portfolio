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
                            '@text-color': '#6272a4',
                            '@heading-color': '#6272a4',
                            '@text-selection-bg': '#44475a',
                            '@menu-item-color': '#44475a',
                            '@card-background': '#44475a',
                            '@card-skeleton-bg': '#44475a',
                            '@font-family': 'Roboto Slab, serif',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};