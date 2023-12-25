window.onload = function() {
    std.init("log");

    console.log('test log');

    throw new Error('This is an error');
}
