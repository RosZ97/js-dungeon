window.onload = function() {
    std.init("log");
    std.log('test log');
    throw new Error('test error');
}
