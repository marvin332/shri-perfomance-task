module.exports = {
    plugins: [
        // 1) Удаляем неиспользуемые селекторы из CSS
        require('@fullhuman/postcss-purgecss')({
            // Путь к твоим шаблонам/компонентам
            content: [
                './index.html',
                './src/**/*.js',
                './src/**/*.jsx',
                './src/**/*.ts',
                './src/**/*.tsx'
            ],
            // Классы, которые PurgeCSS не трогает
            safelist: [/^modal/, /^dropdown/, 'active', 'show'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
        // 2) Автопрефиксы (для поддержки старых браузеров)
        require('autoprefixer'),
        // 3) Минификация
        require('cssnano')({
            preset: 'default',
        })
    ]
}
