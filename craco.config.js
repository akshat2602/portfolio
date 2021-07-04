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
                            '@card-background': '#282a36',
                            '@font-family': 'Roboto Slab, serif',
                            '@border-color-base': '#6272a4',
                            '@border-color-split': '#6272a4',
                            '@border-color-inverse': '#6272a4',
                            '@descriptions-extra-color': '#6272a4',
                            '@descriptions-bg': '#6272a4',
                            '@tooltip-color': '#282a36',
                            '@btn-primary-bg': '#6272a4',
                            '@btn-link-hover-bg': '#44475a',
                            '@card-actions-background': '#282a36',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};