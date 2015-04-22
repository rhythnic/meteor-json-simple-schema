Package.describe({
	name: 'bshamblen:json-simple-schema',
	version: '0.0.1',
	summary: 'Converts a JSON Schema to a SimpleSchema, for use with Collection2 and AutoForm.',
	git: 'https://github.com/yodata/meteor-json-simple-schema.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);
	api.use('aldeed:simple-schema@1.3.2');
	api.use('underscore');
	api.addFiles('json-simple-schema.js');
	api.export(['JSONSchema'], ['client', 'server']);
});
