define({
	// The port on which the instrumenting proxy will listen
	proxyPort: 9000,

	// A fully qualified URL to the Intern proxy
	proxyUrl: 'http://localhost:9000/',

	// Default desired capabilities for all environments. Individual capabilities can be overridden by any of the
	// specified browser environments in the `environments` array below as well. See
	// https://code.google.com/p/selenium/wiki/DesiredCapabilities for standard Selenium capabilities and
	// https://saucelabs.com/docs/additional-config#desired-capabilities for Sauce Labs capabilities.
	// Note that the `build` capability will be filled in with the current commit ID from the Travis CI environment
	// automatically
	capabilities: {
		'selenium-version': '2.41.0',
		'idle-timeout': 30
	},

	// Browsers to run integration testing against. Note that version numbers must be strings if used with Sauce
	// OnDemand. Options that will be permutated are browserName, version, platform, and platformVersion; any other
	// capabilities options specified for an environment will be copied as-is
	environments: [
		{ browserName: 'internet explorer', version: '11', platform: 'Windows 8.1' },
		{ browserName: 'internet explorer', version: '10', platform: 'Windows 8' },
		{ browserName: 'internet explorer', version: [ '8', '9' ], platform: 'Windows 7' },
		{ browserName: 'internet explorer', version: [ '6', '7' ], platform: 'Windows XP' },
		{ browserName: 'firefox', version: '28', platform: [ 'OS X 10.9', 'Windows 7', 'Linux' ] },
		{ browserName: 'chrome', version: '34', platform: [ 'OS X 10.9', 'Windows 7', 'Linux' ] },
		{ browserName: 'safari', version: '7', platform: 'OS X 10.9' }
	],

	// Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
	maxConcurrency: 3,

	// Name of the tunnel class to use for WebDriver tests
	tunnel: 'SauceLabsTunnel',

	// Configuration options for the module loader; any AMD configuration options supported by the Dojo loader can be
	// used here
	loader: {
		// Packages that should be registered with the loader in each testing environment
		packages: [ { name: 'intern-selftest', location: '.' } ],
		map: {
			'intern-selftest': {
				dojo: 'intern-selftest/node_modules/dojo',

				// TODO: This is a hack -- it should be replaced when the Dojo loader has been fixed.
				// We need to load a custom dojo/node for dependencies like
				// "dojo/has!host-node?dojo/node!istanbul/lib/hook", but the current 1.9.3 loader won't do that with a
				// simple 'dojo/node' mapping.
				'intern-selftest/node_modules/dojo/node': 'intern-selftest/lib/node'
			}
		}
	},

	// Non-functional test suite(s) to run in each browser
	suites: [
		'intern-selftest/tests/unit/all'
	],

	// Functional test suite(s) to run in each browser once non-functional tests are completed
	functionalSuites: [
		'intern-selftest/tests/functional/lib/ProxiedSession',
		'intern-selftest/tests/functional/compat'
	],

	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: /^(?:tests|node_modules)\//,

	isSelfTestConfig: true
});