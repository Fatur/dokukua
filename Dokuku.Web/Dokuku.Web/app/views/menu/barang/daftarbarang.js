ToolbarDemo.views.DaftarBarangWrapper = Ext.extend(Ext.Panel, {
    initComponent: function() {
    	var titleBar, backButton, listBarang, addButton;
    	
    	addButton = {
            itemId: 'addButton',
            iconCls: 'add',
            iconMask: true,
            ui: 'plain',
            handler: this.onAddAction,
            scope: this
        };

    	backButton ={
    					scope:this,
						text:'Menu Dokuku',
						ui:'back',
						iconCls:'home',
						iconMask:true,
						handler:this.onBackAction
						};
    	titleBar = {
            dock: 'top',
            xtype: 'toolbar',
            title: 'Daftar Barang',
            items:[backButton,
            { xtype: 'spacer' }, addButton
            ]
        };
        
        listBarang={
        	id:'listbarang',
            xtype: 'list',
            itemTpl: '<div class="lstbarang">{nama}</div>',
            store: ToolbarDemo.stores.Barang,
            listeners: {
            	scope: this,
            	itemtap: this.onItemtapAction
            }
        };
        Ext.apply(this, {
	    	layout:'fit',
	    	dockedItems:[titleBar],
	    	items:[listBarang]
        });
        ToolbarDemo.views.DaftarBarangWrapper.superclass.initComponent.apply(this, arguments);
    },
    onAddAction: function() {
        Ext.dispatch({
            controller: 'BarangCtl',
            action: 'newForm'
        });
    },
    onBackAction: function(){
    	Ext.dispatch({
            controller: 'MenusCtl',
            action: 'backToHome'
        });
    },
    onItemtapAction: function(list, index, item, e){
		Ext.dispatch({
			controller: 'BarangCtl',
			action: 'editForm',
			index: index
		});
	}
    
});

Ext.reg('ToolbarDemo.views.DaftarBarangWrapper', ToolbarDemo.views.DaftarBarangWrapper);