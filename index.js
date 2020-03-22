const { resolve } = require('path');

module.exports = function (api) {
	api.chainWebpack((config) => {
		config.module
			.rule('coffeescript')
				.test(/\.coffee?$/)
				.use('babel')
					.loader('babel-loader')
					.end()
				.use('coffee')
					.loader('coffee-loader')
					.end();

		config.resolve.extensions
			.add('.coffee');

	});
};
