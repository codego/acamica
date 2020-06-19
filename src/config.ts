import convict from 'convict';
import { Config } from 'convict';

const conf: Config<any> = convict({
  env: {
    default: 'development',
    doc: 'The applicaton environment',
    format: ['production', 'staging', 'development', 'test'],
    env: 'NODE_ENV',
  },
  database: {
    type: {
        default: 'mysql',
        doc: 'Database connection type',
        format: String,
        env: 'DB_TYPE',
      },
    host: {
        default: 'localhost',
        doc: 'Database connection host string',
        format: String,
        env: 'DB_HOST',
      },
    port: {
        default: '9000',
        doc: 'Database connection port',
        format: String,
        env: 'DB_PORT',
      },
    username: {
        default: 'acamica',
        doc: 'Database username',
        format: String,
        env: 'DB_USER',
      },
    password: {
        default: 'acamica',
        doc: 'Database password',
        format: String,
        env: 'DB_PASSWORD',
      },
    database: {
        default: 'acamica',
        doc: 'Database name',
        format: String,
        env: 'DB_NAME',
      },
  },
});

conf.loadFile(`${__dirname}/config/${conf.get('env')}.json`);
conf.validate({ allowed: 'strict' });

export default conf;
