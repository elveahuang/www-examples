import jQuery from 'jquery';
import test from './utils';
import './main.scss';

Object.assign(window, { $: jQuery, jQuery });

layui.use(() => {
    const layer = layui.layer;
    test('Index');
    layer.msg('Hello World');
    layer.alert('内容');
    console.log('Layui');
});

$(() => {
    console.log('jQuery');
});
