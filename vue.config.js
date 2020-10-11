module.exports = {
    devServer: {
        proxy: {
            '/api': {// 相当于一个变量
                target: 'http://182.92.128.115/',
                //   ws: true,
                changeOrigin: true
            },

        }
    }
}