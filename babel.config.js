module.exports = {
    'presets': [
        [
            '@babel/preset-env',
            {
                'modules': false,
                'loose': true,
                'targets': {
                    'browsers': '> 1%, IE 11, not op_mini all, not dead',
                    'node': 8
                }
            }
        ],
        [
            '@babel/preset-react'
        ]
    ],
    'plugins': [
        ['import', { libraryName: 'antd-mobile', style: 'css' }] ,
        // [
        //     '@babel/plugin-proposal-decorators',
        //     {
        //         'legacy': true
        //     }
        // ],
        // '@babel/plugin-syntax-dynamic-import',
        // [
        //     '@babel/plugin-proposal-class-properties',
        //     {
        //         'loose': true
        //     }
        // ],
        '@babel/plugin-transform-runtime'
    ]
};