Ext.regController('MenusCtl', {
	store:ToolbarDemo.MenuStore,
	
	index: function() {
        ToolbarDemo.views.homecard.reveal('listmenu');
        ToolbarDemo.views.homecard.unhideTitle();
    },
    selectMenu: function(params) {
        var model = this.store.getAt(params.index).data;
        ToolbarDemo.views.homecard.hideTitle();
        ToolbarDemo.views.homecard.reveal(model.menuId);
    	
    },
    backToHome: function(){
    	this.index()
    }
    

});
