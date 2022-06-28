const del = require('del');
const { src, dest } = require('gulp');
const node_modules_dir = 'node_modules';
const lib_target_dir = 'public/static/libs';

async function Libs() {
    // layui
    src(node_modules_dir + '/layui/dist/**').pipe(dest(lib_target_dir + '/layui'));
    // jquery
    src(node_modules_dir + '/jquery/dist/**').pipe(dest(lib_target_dir + '/jquery'));
    // bootstrap
    src(node_modules_dir + '/@popperjs/core/dist/umd/**').pipe(dest(lib_target_dir + '/popper'));
    src(node_modules_dir + '/bootstrap/dist/**').pipe(dest(lib_target_dir + '/bootstrap'));
    // bootstrap-table
    src(node_modules_dir + '/bootstrap-table/dist/**').pipe(dest(lib_target_dir + '/bootstrap-table'));
}

async function clean() {
    await del([lib_target_dir]);
}

exports.clean = clean;
exports.default = Libs;
