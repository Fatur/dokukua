ToolbarDemo.views.Homecard = Ext.extend(Ext.Panel, {
    title: "home",
    iconCls: "home",
    initComponent: function() {
    	var  list;
        list = {
        	id:'listmenu',
            xtype: 'list',
            itemTpl: '{namaMenu}',
            store: ToolbarDemo.MenuStore,
            listeners: {
                scope: this,
                itemtap: this.onItemtapAction
            }
        };

        Ext.apply(this, {
        	layout: 'card',
        	dockedItems:[this.titlebar],
        	items:[list,
        		{ xtype: 'ToolbarDemo.views.DaftarBarangWrapper', id:'menudaftarbarang'},
        		{ xtype: 'ToolbarDemo.views.ProfilUsahaWrapper', id:'menuprofilusaha'},
        		{ xtype: 'ToolbarDemo.views.PembelianWrapper', id:'menupembelian'},
        		{ xtype: 'ToolbarDemo.views.BarangForm', id:'formBarang'}
        	]
        });
        ToolbarDemo.views.Homecard.superclass.initComponent.apply(this, arguments);
    },
    
    onItemtapAction: function(list, index, item, e) {
        Ext.dispatch({
            controller: 'MenusCtl',
            action: 'selectMenu',
            index: index
        });
    },
    titlebar: {
            dock: 'top',
            xtype: 'toolbar',
            title: 'Menu Dokuku',
        },
    reveal: function(target) {
        var direction = (target === 'listmenu') ? 'right' : 'left'
        this.setActiveItem(
        	target,
            { type: 'slide', direction: direction }
        );
    },
    hideTitle: function(){
    	this.removeDocked(this.dockedItems.items[0]);
    },
    unhideTitle: function(){
    	this.insertDocked(0,this.titlebar);
    }
});

Ext.reg('homecard', ToolbarDemo.views.Homecard);
