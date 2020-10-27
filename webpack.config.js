const path = require( 'path' )
const pckg = require( './package.json' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const OptimizeCSSAssets = require( 'optimize-css-assets-webpack-plugin' )
const sharedConfig = require( '@beaverbuilder/webpack-config' )
const isProduction = 'production' === process.env.NODE_ENV

const alias = {
	ui: path.resolve( __dirname, './src/system/ui/' ),
	data: path.resolve( __dirname, './src/system/data' ),
	utils: path.resolve( __dirname, './src/system/utils' ),
	hooks: path.resolve( __dirname, './src/system/hooks' ),
	cloud: path.resolve( __dirname, './src/system/cloud' ),
	home: path.resolve( __dirname, './src/apps/fl-home' ),

	// These allow the fluid/vendors bundle to address these directly without getting caught by externals
	'vendor-react-router-dom': path.resolve( __dirname, './node_modules/react-router-dom/' ),
	'vendor-classnames': path.resolve( __dirname, './node_modules/classnames/' ),
	'vendor-framer-motion': path.resolve( __dirname, './node_modules/framer-motion/' ),
	'vendor-react-laag': path.resolve( __dirname, './node_modules/react-laag/' ),
	'vendor-resize-observer-polyfill': path.resolve( __dirname, './node_modules/resize-observer-polyfill/' ),
	'vendor-redux': path.resolve( __dirname, './node_modules/redux/' ),

	// Our @beaverbuilder/ packages
	'vendor-app-core': path.resolve( __dirname, './node_modules/@beaverbuilder/app-core' ),
	'vendor-forms': path.resolve( __dirname, './node_modules/@beaverbuilder/forms' ),
	'vendor-fluid': path.resolve( __dirname, './node_modules/@beaverbuilder/fluid' ),
	'vendor-cloud': path.resolve( __dirname, './node_modules/@beaverbuilder/cloud' ),
}

/**
 * Externals simply declare where a certain module is going to be access from on the DOM.
 * This ensures that, in the event that this package is included, there is only one copy on the page.
 */
const externals = [
	{

		// Vendors provided by WordPress
		'react': 'React',
		'react-dom': 'ReactDOM',
		'lodash': 'lodash',

		// Vendors set up by local fluid bundle
		'react-router-dom': 'FL.vendors.ReactRouter',
		'classnames': 'FL.vendors.classnames',
		'framer-motion': 'FL.vendors.FramerMotion',
		'react-laag': 'FL.vendors.ReactLaag',
		'resize-observer-polyfill': 'FL.vendors.ResizeObserver',
		'redux': 'FL.vendors.Redux',

		// Our own packages provided as vendors
		'@beaverbuilder/app-core': 'FL.vendors.BBAppCore',
		'@beaverbuilder/forms': 'FL.vendors.BBForms',
		'@beaverbuilder/fluid': 'FL.vendors.BBFluid',
		'@beaverbuilder/cloud': 'FL.vendors.BBCloud',

		/* system bundle */
		'assistant': 'FL.Assistant',
		'assistant/data': 'FL.Assistant.data',
		'assistant/ui': 'FL.Assistant.ui',
		'assistant/utils': 'FL.Assistant.utils',
		'assistant/hooks': 'FL.Assistant.hooks',
		'assistant/cloud': 'FL.Assistant.cloud',
	},
	function( context, request, callback ) {

		/* Nested util imports */
		if ( /assistant\/utils/.test( request ) ) {
			const parts = request.split( '/' )
			if ( 3 === parts.length ) {
				return callback( null, 'FL.Assistant.utils.' + parts.pop() )
			}
		}
		callback()
	},
]

const vendors = {
	'vendor-classnames': './src/vendors/classnames',
	'vendor-redux': './src/vendors/redux',
	'vendor-react-router-dom': './src/vendors/react-router-dom',
	'vendor-framer-motion': './src/vendors/framer-motion',
	'vendor-react-laag': './src/vendors/react-laag',
	'vendor-bb-cloud': './src/vendors/bb-cloud',
	'vendor-bb-forms': './src/vendors/bb-forms',
	'vendor-bb-app-core': './src/vendors/bb-app-core',
	'vendor-bb-fluid': './src/vendors/bb-fluid',
}

const config = {
	entry: { // if you change a key here, you need to update the enqueue url to match
		...vendors,
		system: './src/system',
		render: './src/render',
		apps: './src/apps',
	},
	externals,
	output: {
		path: path.resolve( __dirname, 'build' ),
		filename: `[name].js?var=${ pckg.version }`,
		chunkFilename: `chunk-[name].js?var=${ pckg.version }`
	},
	resolve: { alias },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ],
			},
			{
				test: /\.s?css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							sourceMap: isProduction
						}
					},
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: isProduction
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isProduction
						}
					},
				],
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} )
	]
}

if ( isProduction ) {
	config.plugins.push(
		new OptimizeCSSAssets( {
			cssProcessorOptions: {
				safe: true,
			}
		} )
	)
}

/* Look at @beaverbuilder/webpack-common for additional config.
* - production setup
* - analyzing setup
* - CleanWebpackPlugin
*/

module.exports = sharedConfig( config )
