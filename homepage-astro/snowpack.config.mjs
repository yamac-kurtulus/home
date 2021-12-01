export default {
        plugins: [
            [
                '@snowpack/plugin-run-script',
                {
                    cmd: 'echo "Nothing to run on build"',
                    watch: 'npx tailwind-config-viewer -p 3001 -o'
                },
            ],
        ]
    };

