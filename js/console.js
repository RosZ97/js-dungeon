const std = {
    dom: null,
    init: function(id) {
        this.dom = document.getElementById(id);
        let baseLog = console.log;
        console.log = function() {
            baseLog.apply(console, arguments);

            var args = Array.prototype.slice.call(arguments);
            for(var i=0;i<args.length;i++){
                var node = std.createLogNode(args[i]);
                this.dom.appendChild(node);
            }
        };
    },
    log: function(msg) {
        let node = this.createNode(msg);
        this.dom.appendChild(node);
    },
    createNode: function(msg) {
        var node = document.createElement("div");
        var textNode = document.createTextNode(msg);
        node.appendChild(textNode);
        return node;
    }
}