var app = function(app) {
    app.makePages = function(stage, stageW, stageH, layoutManager, buddyhappy, buddymedium, buddylow, buddydead, bar1, bar2, bar3, health, hunger, happiness, one, two, three, four, five, six, notice, banner, restart, reset, healthlabel, happinesslabel, hungerlabel){
        var p = {}; 
        
        /////Page 1///////
        var page1 = p.page1 = new zim.Container(stageW, stageH);

        var logo = new zim.Rectangle(300,50,"#000")
            .addTo(page1);

        var title = new zim.Label({text:"My Little Buddy", color:"#fff"})
        .addTo(logo);
        title.x = ((logo.width)/2)-((title.width)/2);

        var content = new zim.Rectangle(700,600,frame.tin)
            .addTo(page1);

        reset.addTo(content);

        healthlabel.addTo(content);
        happinesslabel.addTo(content);
        hungerlabel.addTo(content);
       
        notice.addTo(reset);
        banner.addTo(reset);
        restart.addTo(reset);

        buddyhappy.addTo(content);
        buddyhappy.x = (content.width/2)-(buddymedium.width/2)+30;
        buddyhappy.y = (content.height/2)-40;

        buddymedium.addTo(content);
        buddymedium.x = (content.width/2)-(buddymedium.width/2);
        buddymedium.y = (content.height/2)-50;

        buddylow.addTo(content);
        buddylow.x = (content.width/2)-(buddylow.width/2)-30;
        buddylow.y = (content.height/2)-70;

        buddydead.addTo(content);
        buddydead.x = (content.width/2)-(buddydead.width/2)-30;
        buddydead.y = (content.height/2)-70;

        bar1.addTo(content);
        bar2.addTo(content);
        bar3.addTo(content);

        var buttons = new zim.Container()
            .addTo(page1);
        var help = p.help = new zim.Button({label:"HELP", color:"red"}).addTo(buttons);

        // LAYOUT
        var layout = new zim.Layout({
            holder:page1,
            regions:[
        {object:logo, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"},
        {object:content, marginTop:5, maxWidth:100, backgroundColor:frame.grey},
        {object:buttons, marginTop:5, maxWidth:100, minHeight:10,}
            ],
            lastMargin:3,
            scalingObject:stage
        });
        
        ///////Page 2///////
         var page2 = p.page2 = new zim.Container(stageW, stageH);

        var logo2 = page2.logo = new zim.Rectangle(300,100,"#000")
            .addTo(page2);

        var title2 = new zim.Label({text:"BACK", color:"#fff", size:"70", valign:"top"})
            .addTo(logo2);
            title2.x = ((logo2.width)/2)-((title2.width)/2);

        var content2 = new zim.Container(700,600)
            .addTo(page2);

        one.addTo(content2);
        two.addTo(content2);
        three.addTo(content2);
        four.addTo(content2);
        five.addTo(content2);
        six.addTo(content2);

        // LAYOUT
        var layout2 = new zim.Layout({
            holder:page2,
            regions:[
        {object:logo2, marginTop:2, maxWidth:80, height:15, align:"center", valign:"top"},
        {object:content2, marginTop:2, maxWidth:100, backgroundColor:frame.tin},
        // {object:buttons2, marginTop:2, maxWidth:100, minHeight:10,}
            ],
            lastMargin:2,
            regionShape:new zim.Shape(),
            scalingObject:stage
        });
        
        layoutManager.add(layout);
        layoutManager.add(layout2);
        
        return p;
    }

    return app;
}(app || {});


