/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating from production...'));

webpack(webpackConfig).run((err, stats) => {
  if(err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if(json.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if(jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated warning:'));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log(chalk.green('Your app has been built for production and written to /dist!'));

  return 0;
});

