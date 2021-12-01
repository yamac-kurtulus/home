export default {
        plugins: [
            [
                '@snowpack/plugin-run-script',
                {
                    cmd: '',
                    watch: 'npx tailwind-config-viewer -p 3001 -o'
                },
            ],
        ]
    };

