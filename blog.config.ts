import { IBlogConfig } from '@/types';

const config: IBlogConfig = {
  host: '0.0.0.0',
  port: 19000,
  enableHTTPS: false,
  mongoUrl: `mongodb://${process.env.BUILD_ENV === 'docker' ? 'database' : 'database'}:27017/iBlog_v2`,
  jwtSecret: 'xiaoledeblog0820jsonwebtokensecretkey'
};

export default config;
