ToolbarDemo.views.PembelianWrapper = Ext.extend(Ext.Panel, {
    initComponent: function() {
    	var backButton, titleBar;
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
            title: 'Pembelian',
            items:[backButton]
        };
        Ext.apply(this, {
	    	layout:'fit',
	    	dockedItems:[titleBar],
	    	html:"Masukkan data pembelian anda!"
        });
        ToolbarDemo.views.PembelianWrapper.superclass.initComponent.apply(this, arguments);
    },
    onBackAction: function(){
    	Ext.dispatch({
            controller: 'MenusCtl',
            action: 'backToHome'
        });
    }
    
});

Ext.reg('ToolbarDemo.views.PembelianWrapper', ToolbarDemo.views.PembelianWrapper);