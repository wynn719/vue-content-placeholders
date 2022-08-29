import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { babel } from '@rollup/plugin-babel'
import packageConfig from './package.json' assert { type: 'json' }

export default defineConfig(({ mode }) => {
  const isProd = mode === 'prod'
  const isDev = mode === 'dev'
  const isTest = mode === 'test'

  let build = {}
  if (isProd) {
    build = {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: '@wynn/vue-content-placeholders',
        fileName: 'index',
        formats: ['es', 'cjs', 'umd'],
      },
      rollupOptions: {
        /**
         * DESC:
         * make sure to externalize deps that shouldn't be bundled
         * into your library
         */
        external: [
          'vue',
          'vue-demi',
        ],
        output: {
          /**
           * DESC:
           * Provide global variables to use in the UMD build
           * for externalized deps
           */
          globals: {
            'vue': 'Vue',
            'vue-demi': 'VueDemi',
          },
        },
        plugins: [
          babel({
            presets: [[
              '@babel/preset-env',
            ]],
            babelHelpers: 'bundled',
          }),
        ],
      },
    }
  }

  let optimizeDeps = {
    exclude: ['vue-demi'],
  }
  if (isDev) {
    /**
     * DESC:
     * dependency pre-bundling
     */
    optimizeDeps = {
      exclude: ['vue-demi'],
    }
  }

  let test = {}
  if (isTest) {
    /**
     * DESC:
     * vitest config
     */
    test = {
      include: ['test/**/*.test.ts'],
      environment: 'happy-dom',
      deps: {
        inline: [
          '@vue',
          'vue-demi',
        ],
      },
      coverage: {
        reporter: [
          'text',
          'text-summary',
          'lcov',
        ],
      },
    }
  }

  return {
    plugins: [vue()],
    optimizeDeps,
    build,
    test,
    define: {
      __VERSION__: JSON.stringify(packageConfig.version),
      __NAME__: JSON.stringify(packageConfig.name),
    },

    /**
     * DESC:
     * defining aliases
     */
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src'),
        },
      ],
      dedupe: [
        'vue',
        'vue-demi',
        '@vue/runtime-core',
      ],
    },
  }
})
