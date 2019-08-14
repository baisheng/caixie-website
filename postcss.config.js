// postcss.config.js
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-preset-env', {
            importFrom: 'src/styles/global.css',
            features: {
                'custom-properties': true, // already enabled by default
                'custom-media-queries': true,
                'custom-selectors': true
            }
        })
    ]
}
