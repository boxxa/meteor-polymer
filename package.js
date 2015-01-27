Package.describe({
  name: 'boxxa:polymer',
  version: '0.5.4',
  summary: 'Adds Polymers Core to Meteor',
  git: 'https://github.com/boxxa/meteor-polymer.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
	api.use('webapp', 'server');
  	api.use(['templating'], 'client');
  	api.use(['underscore'], ['client', 'server']);
	api.versionsFrom('METEOR@0.9.0');
	api.addFiles('boxxa:polymer.js', 'server');
	api.addFiles('import.html', 'client');
});

Npm.depends({
	bower: '1.3.12'
});