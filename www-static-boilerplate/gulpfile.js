const del = require('del');
const { src, dest } = require('gulp');
const node_modules_dir = 'node_modules';
const lib_target_dir = 'public/static/libs';

async function copylibs() {
    // jQuery
    src(node_modules_dir + '/jquery/dist').pipe(dest(lib_target_dir + '/jquery'));

    // jQuery Migrate
    src(node_modules_dir + '/jquery-migrate/dist/**').pipe(dest(lib_target_dir + '/jquery'));

    // jQuery UI
    src(node_modules_dir + '/jquery-ui-dist/jquery-ui.js').pipe(dest(lib_target_dir + '/jquery-ui'));

    src(node_modules_dir + '/jquery-ui-dist/jquery-ui.min.js').pipe(dest(lib_target_dir + '/jquery-ui'));

    src(node_modules_dir + '/jquery-ui-dist/jquery-ui.css').pipe(dest(lib_target_dir + '/jquery-ui'));

    src(node_modules_dir + '/jquery-ui-dist/jquery-ui.min.css').pipe(dest(lib_target_dir + '/jquery-ui'));

    src(node_modules_dir + '/jquery-ui-dist/images/**').pipe(dest(lib_target_dir + '/jquery-ui/images'));

    // jQuery Tree Table
    src(node_modules_dir + '/jquery-treetable/jquery.treetable.js').pipe(dest(lib_target_dir + '/jquery-tree-table'));

    src(node_modules_dir + '/jquery-treetable/css/**').pipe(dest(lib_target_dir + '/jquery-tree-table'));

    // jQuery Form
    src(node_modules_dir + '/jquery-form/src/jquery.form.js').pipe(dest(lib_target_dir + '/jquery-plugin'));

    src(node_modules_dir + '/jquery-form/dist/jquery.form.min.js').pipe(dest(lib_target_dir + '/jquery-plugin'));

    src(node_modules_dir + '/jquery-form/dist/jquery.form.min.js.map').pipe(dest(lib_target_dir + '/jquery-plugin'));

    // jQuery Validation
    src(node_modules_dir + '/jquery-validation/dist/jquery.validate.js').pipe(dest(lib_target_dir + '/jquery-plugin'));

    src(node_modules_dir + '/jquery-validation/dist/jquery.validate.min.js').pipe(
        dest(lib_target_dir + '/jquery-plugin'),
    );

    // jQuery SlimScroll
    src(node_modules_dir + '/jquery-slimscroll/jquery.slimscroll.js').pipe(dest(lib_target_dir + '/jquery-plugin'));

    src(node_modules_dir + '/jquery-slimscroll/jquery.slimscroll.min.js').pipe(dest(lib_target_dir + '/jquery-plugin'));

    // cropperjs
    src(node_modules_dir + '/jquery-cropper/dist/**').pipe(dest(lib_target_dir + '/cropper'));

    src(node_modules_dir + '/cropperjs/dist/**').pipe(dest(lib_target_dir + '/cropper'));

    // JsRender
    src(node_modules_dir + '/jsrender/jsrender.js').pipe(dest(lib_target_dir + '/jsrender'));

    src(node_modules_dir + '/jsrender/jsrender.min.js').pipe(dest(lib_target_dir + '/jsrender'));

    src(node_modules_dir + '/jsrender/jsrender.min.js.map').pipe(dest(lib_target_dir + '/jsrender'));

    // Bootstrap
    src(node_modules_dir + '/bootstrap/dist/**').pipe(dest(lib_target_dir + '/bootstrap'));

    // bootstrap-switch
    src(node_modules_dir + '/bootstrap-switch/dist/**').pipe(dest(lib_target_dir + '/bootstrap-switch'));

    // bootstrap-slider
    src(node_modules_dir + '/bootstrap-slider/dist/**').pipe(dest(lib_target_dir + '/bootstrap-slider'));

    // admin-lte
    src(node_modules_dir + '/admin-lte/dist/css/**').pipe(dest(lib_target_dir + '/admin-lte/css'));

    src(node_modules_dir + '/admin-lte/dist/img/**').pipe(dest(lib_target_dir + '/admin-lte/img'));

    src(node_modules_dir + '/admin-lte/dist/js/adminlte.js').pipe(dest(lib_target_dir + '/admin-lte/js'));

    src(node_modules_dir + '/admin-lte/dist/js/adminlte.min.js').pipe(dest(lib_target_dir + '/admin-lte/js'));

    // blueimp-file-upload
    src(node_modules_dir + '/blueimp-file-upload/css/**').pipe(dest(lib_target_dir + '/jquery-file-upload/css'));

    src(node_modules_dir + '/blueimp-file-upload/js/**').pipe(dest(lib_target_dir + '/jquery-file-upload/js'));

    src(node_modules_dir + '/blueimp-file-upload/img/**').pipe(dest(lib_target_dir + '/jquery-file-upload/img'));

    // eonasdan-bootstrap-datetimepicker
    src(node_modules_dir + '/eonasdan-bootstrap-datetimepicker/build/**').pipe(
        dest(lib_target_dir + '/eonasdan-bootstrap-datetimepicker/'),
    );

    // echarts
    src(node_modules_dir + '/echarts/dist/**').pipe(dest(lib_target_dir + '/echarts'));

    // moment
    src(node_modules_dir + '/moment/moment.js').pipe(dest(lib_target_dir + '/moment/'));

    src(node_modules_dir + '/moment/min/moment.min.js').pipe(dest(lib_target_dir + '/moment/'));

    src(node_modules_dir + '/moment/min/moment.min.js.map').pipe(dest(lib_target_dir + '/moment/'));

    src(node_modules_dir + '/moment/locale/zh-cn.js').pipe(dest(lib_target_dir + '/moment/locale/'));

    src(node_modules_dir + '/moment/locale/zh-hk.js').pipe(dest(lib_target_dir + '/moment/locale/'));

    // pace-js
    src(node_modules_dir + '/pace-js/pace*.js').pipe(dest(lib_target_dir + '/pace'));

    src(node_modules_dir + '/pace-js/themes/**').pipe(dest(lib_target_dir + '/pace/themes'));

    // selectize
    src(node_modules_dir + '/selectize/dist/css/**').pipe(dest(lib_target_dir + '/selectize/css'));

    src(node_modules_dir + '/selectize/dist/js/**').pipe(dest(lib_target_dir + '/selectize/js'));

    // unslider
    src(node_modules_dir + '/unslider/dist/**').pipe(dest(lib_target_dir + '/jquery-unslider'));

    // icheck
    src(node_modules_dir + '/icheck/icheck.*js').pipe(dest(lib_target_dir + '/iCheck/'));

    src(node_modules_dir + '/icheck/skins/**').pipe(dest(lib_target_dir + '/iCheck/skins/'));

    // select2
    src(node_modules_dir + '/select2/dist/**').pipe(dest(lib_target_dir + '/select2'));

    // autosize
    src(node_modules_dir + '/autosize/dist/**').pipe(dest(lib_target_dir + '/autosize'));

    // quill
    // src(node_modules_dir + '/quill/dist/quill.snow.css')
    //     .pipe(dest(lib_target_dir + '/quill'));

    src(node_modules_dir + '/quill/dist/**').pipe(dest(lib_target_dir + '/quill'));

    src(node_modules_dir + '/quill-emoji/dist/*').pipe(dest(lib_target_dir + '/quill/emoji'));

    src(node_modules_dir + '/quill-image-resize-module/image-resize.min.js').pipe(dest(lib_target_dir + '/quill'));

    src(node_modules_dir + '/quill-video-resize-module/video-resize.min.js').pipe(dest(lib_target_dir + '/quill'));

    // imagesloaded
    src(node_modules_dir + '/imagesloaded/imagesloaded.js').pipe(dest(lib_target_dir + '/imagesloaded'));

    src(node_modules_dir + '/imagesloaded/imagesloaded.pkgd.js').pipe(dest(lib_target_dir + '/imagesloaded'));

    src(node_modules_dir + '/imagesloaded/imagesloaded.pkgd.min.js').pipe(dest(lib_target_dir + '/imagesloaded'));

    // Font-awesome
    src(node_modules_dir + '/font-awesome/css/**').pipe(dest(lib_target_dir + '/font-awesome/css'));

    src(node_modules_dir + '/font-awesome/fonts/**').pipe(dest(lib_target_dir + '/font-awesome/fonts'));

    // video.js
    src(node_modules_dir + '/video.js/dist/alt/*').pipe(dest(lib_target_dir + '/video.js/alt'));

    src(node_modules_dir + '/video.js/dist/font/*').pipe(dest(lib_target_dir + '/video.js/font'));

    src(node_modules_dir + '/video.js/dist/ie8/*').pipe(dest(lib_target_dir + '/video.js/ie8'));

    src(node_modules_dir + '/video.js/dist/lang/*').pipe(dest(lib_target_dir + '/video.js/lang'));

    src(node_modules_dir + '/video.js/dist/video.js').pipe(dest(lib_target_dir + '/video.js/'));

    src(node_modules_dir + '/video.js/dist/video.min.js').pipe(dest(lib_target_dir + '/video.js/'));

    src(node_modules_dir + '/video.js/dist/video-js.css').pipe(dest(lib_target_dir + '/video.js/'));

    src(node_modules_dir + '/video.js/dist/video-js.min.css').pipe(dest(lib_target_dir + '/video.js/'));

    // node-forge
    src(node_modules_dir + '/node-forge/dist/forge.min.js').pipe(dest(lib_target_dir + '/node-forge/'));

    src(node_modules_dir + '/node-forge/dist/forge.min.js.map').pipe(dest(lib_target_dir + '/node-forge/'));

    // nzh
    src(node_modules_dir + '/nzh/dist/**').pipe(dest(lib_target_dir + '/nzh/'));

    // screenfull.js
    src(node_modules_dir + '/screenfull/dist/**').pipe(dest(lib_target_dir + '/screenfull/'));

    // handlebars
    src(node_modules_dir + '/handlebars/dist/handlebars.js').pipe(dest(lib_target_dir + '/handlebars/'));

    src(node_modules_dir + '/handlebars/dist/handlebars.min.js').pipe(dest(lib_target_dir + '/handlebars/'));

    // colorpicker
    src(node_modules_dir + '/bootstrap-colorpicker/dist/**').pipe(
        dest(lib_target_dir + '/bootstrap-colorpicker/dist/'),
    );

    // bootstrap-table
    src(node_modules_dir + '/bootstrap-table/dist/**').pipe(dest(lib_target_dir + '/bootstrap-table/dist/'));

    // html2canvas
    src(node_modules_dir + '/html2canvas/dist/**').pipe(dest(lib_target_dir + '/html2canvas/dist/'));

    // printJS
    src(node_modules_dir + '/print-js/dist/**').pipe(dest(lib_target_dir + '/print-js/dist/'));

    // sockjs-client
    src(node_modules_dir + '/sockjs-client/dist/**').pipe(dest(lib_target_dir + '/sockjs-client'));

    // stomp-websocket
    src(node_modules_dir + '/@stomp/stompjs/bundles/**').pipe(dest(lib_target_dir + '/stomp'));

    // PDFJS
    src(node_modules_dir + '/pdfjs-dist/legacy/build/**').pipe(dest(lib_target_dir + '/pdfjs/'));

    await Promise.resolve('copy libs finished.');
}

async function clean() {
    await del([lib_target_dir]);
}

exports.clean = clean;

exports.default = copylibs;
