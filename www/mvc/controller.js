var app = function(app){
    app.makeController = function(stage, p, pages, one, two, three, four, five, six){ 

        p.help.on("mousedown", function(){
            pages.go(p.page2, "right");
        }) 
        
        p.page2.logo.on("mousedown", function(){
            pages.go(p.page1, "up");
        })

        one.on("mousedown", function() {
            pages.go(p.page1, "left");
        })
        two.on("mousedown", function() {
            pages.go(p.page1, "left");
        })
        three.on("mousedown", function() {
            pages.go(p.page1, "left");
        })
        four.on("mousedown", function() {
            pages.go(p.page1, "left");
        })
        five.on("mousedown", function() {
            pages.go(p.page1, "left");
        })
        six.on("mousedown", function() {
            pages.go(p.page1, "left");
        })
    }
    
    return app;
}(app|| {});