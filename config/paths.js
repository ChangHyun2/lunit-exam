// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/paths.js

const path = require('path');
const fs = require('fs');

// symlink 확인
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// .js .ts .tsx .json이 포함되어 있지 않은 파일일 경우 default로 js파일로 리턴
const moduleFileExtensions = ['js', 'ts', 'tsx', 'json'];
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find((extension) =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

module.exports = {
  appSrc: resolveApp('src'),
  appIndexJs: resolveModule(resolveApp, 'src/index'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appBuild: resolveApp('build'),
  appBuildPublic: resolveApp('build/public'),
  appDist: resolveApp('dist'),
  appDistPublic: resolveApp('dist/public'),
  appNodeModules: resolveApp('node_modules'),
  dotenv: resolveApp('config/.env'),
  moduleFileExtensions,
};
