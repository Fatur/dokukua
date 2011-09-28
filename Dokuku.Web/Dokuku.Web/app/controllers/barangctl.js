Ext.regController('BarangCtl', {
	store: ToolbarDemo.stores.Barang,
	
	index: function() {
        ToolbarDemo.views.homecard.setActiveItem(
        	'menudaftarbarang',
            { type: 'slide', direction: 'right' }
        );
    },
     newForm: function() {
    	var model = new ToolbarDemo.models.Barang();
    	ToolbarDemo.views.barangForm.load(model);
        ToolbarDemo.views.homecard.reveal('formBarang');
    },
    save: function(params) {
    	params.record.set(params.data);
    	var errors = params.record.validate();
    	
    	if(errors.isValid()){
    		this.store.create(params.data);
    		this.index();
    	}else{
    		params.form.showErrors(errors);
    	}
    	
    },
    update: function(params) {
    	params.record.set(params.data);
    	errors = params.record.validate();
    	if(errors.isValid()) {
    		params.record.save();
    		this.index();
    	}else{
    		params.form.showErrors(errors);
    	}
    	
    },
    editForm: function(params){
    	var model =this.store.getAt(params.index);
    	ToolbarDemo.views.barangForm.load(model);
    	ToolbarDemo.views.homecard.reveal('formBarang');
    },
    remove: function(params){
    	this.store.remove(params.record);
    	this.store.sync();
    	this.index();
    }
    

});
