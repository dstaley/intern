# Intern

<!-- start-github-only -->

Software testing for humans

<!--[![Build Status](https://travis-ci.org/theintern/intern.svg?branch=master)](https://travis-ci.org/theintern/intern)-->

[![CI status](https://travis-ci.org/theintern/intern.svg?branch=master)](https://travis-ci.org/theintern/intern)
[![codecov](https://codecov.io/gh/theintern/intern/branch/master/graph/badge.svg)](https://codecov.io/gh/theintern/intern)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/theintern/intern.svg)](http://isitmaintained.com/project/theintern/intern 'Average time to resolve an issue')
[![Percentage of issues still open](http://isitmaintained.com/badge/open/theintern/intern.svg)](http://isitmaintained.com/project/theintern/intern 'Percentage of issues still open')
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftheintern%2Fintern.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftheintern%2Fintern?ref=badge_shield)

<br><p align="center"><img src="https://cdn.rawgit.com/theintern/intern/master/docs/logo.svg" alt="Intern logo" height="128"></p><br>

<!-- end-github-only -->

> ⚠️ This documentation is for the development version of Intern. For the
> current release version, go
> [here](https://github.com/theintern/intern/tree/4.7).

Intern is a complete test system for JavaScript designed to help you write and
run consistent, high-quality test cases for your JavaScript libraries and
applications. It can be used to test _any_ JavaScript code.

- Plain JavaScript code, in any module format (or no module format!)
- Web pages generated by server-side languages (like Java, PHP, or Ruby)
- Native or hybrid iOS, Android, and Firefox OS applications
- TypeScript code when running in Node, with no additional config

Intern is minimally prescriptive and enforces only a basic set of best practices
designed to ensure your tests stay maintainable over time. Its extensible
architecture allows you to write custom test interfaces, executors, and
reporters to influence how your tests run & easily integrate with your existing
coding environment. Intern also comes with Grunt tasks so it can be quickly
added to existing Grunt-based workflows, and is designed to work out-of-the-box
with popular continuous integration services like Jenkins and Travis CI.

If you’re into name-dropping, Intern gets used every day by teams at Twitter,
Stripe, Mozilla, IBM, Marriott, Philips, Zenput, Alfresco, Esri, HSBC, ING,
Intuit, and more. It’s also the testing framework of choice for
[growing numbers of open-source projects](https://github.com/search?p=2&q=tests+filename%3Aintern.js&ref=searchresults&type=Code&utf8=%E2%9C%93).

<!-- prettier-ignore-start -->
> 💡 Recently updated your browser and your WebDriver tests stopped working? You
    may need to [pin your WebDriver versions](./docs/running.md#selenium).
<!-- prettier-ignore-end -->

## Quick start

1.  Install from npm

    ```sh
    $ cd /my/project
    $ npm install intern
    ```

2.  Create an `intern.json` file in your project root.

    ```js
    {
      "suites": "tests/unit/**/*.js"
    }
    ```

3.  Verify that your configuration works by running Intern and checking that no
    errors are output.

    ```sh
    $ ./node_modules/.bin/intern
    ```

4.  Start [writing tests](docs/writing_tests.md)!

## TypeScript setup

Intern installs a global variable that tests may not be aware of if nothing
imports the base `intern` package. To ensure Intern’s types are loaded, add the
following to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["intern"]
  }
}
```

Alternatively, add a triple-slash directive to the top of your suite files:

```ts
/// <reference types="intern" />
```

## Compatibility

Intern can run unit tests in most browsers that support ECMAScript 5, including
mobile browsers on Android and iOS, and in Node 10+. Note that Internet Explorer
versions below 11 are not supported.

Intern’s self-tests run against IE 11, Safari 13, and the most recent few
vesions of Firefox, Chrome, and Chromium Edge, as well as the latest LTS and
current versions of Node.

Intern can run functional tests using WebDriver-compatible applications and
services, including Selenium, Appium, Selendroid. It has built-in support for
cloud testing services from [BrowserStack](https://browserstack.com),
[CrossBrowserTesting](https://crossbrowsertesting.com),
[SauceLabs](https://saucelabs.com), and [TestingBot](https://testingbot.com).

<!-- start-github-only -->

## More information

### Using Intern

- [Getting started](docs/getting_started.md) - Setting up Intern to test a
  project
- [How To](docs/how_to.md) - Quick answers to common questions
- [Configuration](docs/configuration.md) - How to configure Intern
- [Writing tests](docs/writing_tests.md) - The various ways of writing tests
  with Intern
- [Running](docs/running.md) - How to run Intern
- [Concepts](docs/concepts.md) - General testing concepts and definitions
- [Continuous integration](docs/ci.md) - Using Intern with CI systems
- [API](docs/api.md) - Summary API documentation

### Extending Intern

- [Architecture](docs/architecture.md) - How Intern is organized
- [Extending](docs/extending.md) - Extending Intern with reporters and other
  plugins
- [Developing](docs/developing.md) - For Intern developers
- [Contributing](CONTRIBUTING.md) - How to contribute to Intern development
  <!-- end-github-only -->

## Get help

The best place to ask questions and get answers about Intern is Stack Overflow.
Just tag your question with `intern`. If you have more immediate questions, or
just want to chat with other people interested in Intern, join the Gitter room
at [theintern/intern](https://gitter.im/theintern/intern). See the
[Help](docs/help.md) page for more information.

<!-- start-github-only -->

## License

Intern is a JS Foundation project offered under the [New BSD](LICENSE) license.

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftheintern%2Fintern.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Ftheintern%2Fintern?ref=badge_large)

© [SitePen, Inc.](http://sitepen.com) and its
[contributors](https://github.com/theintern/intern/graphs/contributors)

<p align="center">Intern’s self-tests run on<br>
<a href="https://browserstack.com"><img alt="BrowserStack logo" src="https://theintern.io/images/browserstack-logo.svg" height="32" align="middle"></a></p>
<!-- end-github-only -->

<!-- doc-viewer-config
{
    "api": "packages/core/docs/api.json",
    "pages": [
        "docs/getting_started.md",
        "docs/changes_from_3.md",
        "docs/how_to.md",
        "docs/concepts.md",
        "docs/architecture.md",
        "docs/configuration.md",
        "docs/writing_tests.md",
        "docs/running.md",
        "docs/ci.md",
        "docs/extending.md",
        "docs/developing.md"
    ]
}
-->
