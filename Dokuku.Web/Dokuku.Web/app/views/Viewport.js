ToolbarDemo.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,

    initComponent: function () {
        Ext.apply(this, {
            tabBar: {
                dock: 'bottom',
                layout: {
                    pack: 'center'
                }
            },
            items: [
                { xtype: 'homecard', id: 'home' },
                { xtype: 'searchcard' },
                { xtype: 'actioncard' },
                { xtype: 'settingscard' },
                { xtype: 'morecard' }
            ]
        });
        ToolbarDemo.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
    reveal: function (target) {
        var direction = (target === 'home') ? 'right' : 'left'
        this.setActiveItem(
        	target,
            { type: 'slide', direction: direction }
        );
    }
});
