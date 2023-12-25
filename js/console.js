const std = {
    dom: null,
    init: function(id) {
        this.dom = document.getElementById(id);
        let baseLog = console.log;
        console.log = function() {
            baseLog.apply(console, arguments);

            let args = Array.prototype.slice.call(arguments);
            for(let i=0;i<args.length;i++){
                let node = std.createLogNode(args[i]);
                std.dom.appendChild(node);
            }
        };

        let baseError = console.error;
        console.error = function() {
            baseError.apply(console, arguments);

            let args = Array.prototype.slice.call(arguments);
            for(let i = 0; i < args.length; ++i) {
                let node = std.createNode(args[i]);
                std.dom.appendChild(node);
            }
        };
    },
    log: function(msg) {
        let node = std.createNode(msg);
        std.dom.appendChild(node);
    },
    createNode: function(msg) {
        let node = document.createElement("div");
        let textNode = document.createTextNode(msg);
        node.appendChild(textNode);
        return node;
    }
}