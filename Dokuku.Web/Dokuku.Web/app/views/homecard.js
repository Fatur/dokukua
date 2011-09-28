ToolbarDemo.views.detailMenuToolbar=new Ext.Toolbar({
	    items:[{
		text:'back',
		ui:'back',
		handler:function(){
		    ToolbarDemo.views.homecard.setActiveItem('listmenuwrapper',{type:'slide',direction:'right'});
		}
	    }]
	});
ToolbarDemo.views.detailMenuPanel =new Ext.Panel({
	    id:'detailmenupanel',
	    tpl:'Hello, {firstName}!',
	    dockedItems:[ToolbarDemo.views.detailMenuToolbar]
	});
ToolbarDemo.views.listMenu = new Ext.List({
            id: 'indexmenu',
            store: ToolbarDemo.MenuStore,
            itemTpl: '<div class="contact">{firstName} {lastName}</div>',
            onItemDisclosure: function(record){
              	var name=record.data.firstName + " " + record.data.lastName;
				ToolbarDemo.views.detailMenuToolbar.setTitle(name);
            	ToolbarDemo.views.detailMenuPanel.update(record.data);
            	ToolbarDemo.views.homecard.setActiveItem('detailmenupanel');
            }
        });
ToolbarDemo.views.listMenuWrapper =new Ext.Panel({
	    id:'listmenuwrapper',
	    layout:'fit',
	    items:[ToolbarDemo.views.listMenu],
	    dockedItems:[{
		xtype: 'toolbar',
		title: 'Menu Dokuku'
	    }]
	});
	
ToolbarDemo.views.Homecard = Ext.extend(Ext.Panel, {
    title: "home",
    iconCls: "home",
    initComponent: function() {
        Ext.apply(this, {
        	layout: 'card',
	    	items: [ToolbarDemo.views.listMenuWrapper,ToolbarDemo.views.detailMenuPanel]
        });
        ToolbarDemo.views.Homecard.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('homecard', ToolbarDemo.views.Homecard);
