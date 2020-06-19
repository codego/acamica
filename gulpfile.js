const {src, dest, series, parallel} = require('gulp');
let clean = require('gulp-clean');
let ts = require('gulp-typescript');
let pm2 = require('pm2');


function cleanup() {
    return src('dist', {read: false, allowEmpty: true}).pipe(clean())
}

function config() {
    return src('src/config/**/*.json')
        .pipe(dest('dist/config/'))
}

function controllers() {
    return src('src/controllers/**/*.*')
        .pipe(dest('dist/controllers/'))
}


function views() {
    return src('src/views/**/*.ejs')
        .pipe(dest('dist/views/'))
}

function public() {
    return src('./public/**/*.*')
        .pipe(dest('dist/public/'))
}

function compile() {
    let tsProject = ts.createProject('tsconfig.json');
    let result = tsProject.src().pipe(tsProject());
    return result.js.pipe(dest('dist'));
}

function start() {
    pm2.connect(err => {
        if (err) {
            console.error(err);
            process.exit(2);
        }

        pm2.start(
            {
                script: 'dist/index.js',
                name: 'breaio'
            },
            (err, apps) => {
                if (err) throw err;
                pm2.streamLogs('all', 0);
            })
    })
}

build = series(cleanup, parallel(config, views, public, compile))

exports.clean = cleanup
exports.config = config
exports.compile = compile
exports.build = build
exports.start = start
exports.views = views
exports.controllers = controllers
exports.development = series(build, start)
