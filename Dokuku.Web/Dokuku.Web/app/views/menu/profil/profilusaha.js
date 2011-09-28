ToolbarDemo.views.ProfilUsahaWrapper = Ext.extend(Ext.Panel, {
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
            title: 'Profil Usaha Anda',
            items:[backButton]
        };
        
        Ext.apply(this, {
	    	layout:'fit',
	    	dockedItems:[titleBar],
	    	html:"Masukkan profil usaha anda!"
        });
        ToolbarDemo.views.ProfilUsahaWrapper.superclass.initComponent.apply(this, arguments);
    },
    onBackAction: function(){
    	Ext.dispatch({
            controller: 'MenusCtl',
            action: 'backToHome'
        });
    }
    
});

Ext.reg('ToolbarDemo.views.ProfilUsahaWrapper', ToolbarDemo.views.ProfilUsahaWrapper);