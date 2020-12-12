<p align="left"><a href="https://grafolean.com/"><img src="https://grafolean.com/logo.svg" alt="Grafolean" width="115" height="50" /></a></p>

# Widget Plugin Template for Grafolean

This repository serves as a template for building your own custom widget plugins for [Grafolean](https://github.com/grafolean/grafolean/).

There are two simple steps to create a working plugin:

1) fork this repository

2) in your fork, click on `Actions` and enable running of workflows (feel free to inspect them first)

3) create a release "v0.0.1-rc.1"

This is it! GitHub Actions will now automatically package the code and publish the plugin (as an asset to the release) so that any Grafolean admin will be able to install it. You might need to wait a few minutes (check "Actions" tab for progress) before the plugin is ready to be used.

Now that this works, edit the code (clone it, edit `src/*` files locally, commit and push) to modify the plugin as you see fit. Once ready, create a new release to publish a new version.

## Releases

- releases *must* start with a letter `v`
- only the *latest* release can currently be installed in Grafolean (i.e.: do *not* mark it as pre-release - pre-releases can't be used)
- it is recommended that releases follow [semantic versioning](https://semver.org/)

## Modifying the code

Prop `g` contains everything that is passed from Grafolean to the widget plugin components. It includes:
- `urlParams` - parts of URL paths as parsed by `react-router` (i.e., `accountId` and `dashboardId`), and
- `components` - access to some of the components available in Grafolean (most notably `PersistentFetcher`).

## Limitations

* Connections to 3rd party servers disallowed

    To limit potential privacy and security issues, Grafolean uses [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP). The settings employed forbid any connection to any server, except for the Grafolean deployment itself. In other words, never fetch resources (data, images, scripts,...) from external addresses as it will not work. Use `PersistentFetcher` component instead to fetch data from the Grafolean server.
