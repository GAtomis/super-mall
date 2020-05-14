module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                assets: '@/assets',
                network: '@/network',
                common: '@/common',
                components: '@/components',
                views: '@/views',
                '@img': '@/assets/img',
                static: '@/static',
                store: '@/store'
            }
        }
    },
    devServer: {
        // ... your configs
        disableHostCheck: true // 加上这段
    }
}