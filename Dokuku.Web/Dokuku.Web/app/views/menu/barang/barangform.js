ToolbarDemo.views.BarangForm = Ext.extend(Ext.form.FormPanel, {
	defaultInstructions: 'Silahkan lengkapi informasi di atas.',
	
    initComponent: function(){
        var titlebar, cancelButton, buttonbar, saveButton;

        cancelButton = {
            text: 'cancel',
            ui: 'back',
            handler: this.onCancelAction,
            scope: this
        };

        titlebar = {
            id: 'barangFormTitlebar',
            xtype: 'toolbar',
            title: 'Tambah Barang',
            items: [ cancelButton ]
        };

        saveButton = {
            id: 'barangFormSaveButton',
            text: 'save',
            ui: 'confirm',
            handler: this.onSaveAction,
            scope: this
        };
		
		deleteButton ={
			id:'barangFormDeleteButton',
			text:'delete',
			ui:'decline',
			handler:this.onDeleteAction,
			scope:this
		};
        buttonbar = {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [deleteButton, {xtype: 'spacer'}, saveButton]
        };

		fields ={
			xtype: 'fieldset',
			id: 'barangFormFieldset',
			title: 'User detail',
			instructions: this.defaultInstructions,
			defaults: {
				xtype: 'textfield',
                labelAlign: 'left',
                labelWidth: '40%',
                required: false,
                useClearIcon: true,
                autoCapitalize : false
			},
			items: [
				{
					name: 'barcode',
					label: 'Barcode'
				},{
					xtype:'ToolbarDemo.views.ErrorField',
					fieldname: 'barcode'
				},{
					name: 'nama',
					label: 'Nama'
				},{
					xtype:'ToolbarDemo.views.ErrorField',
					fieldname: 'nama'
				},{
					name: 'hargajual',
					label: 'Harga Jual',
					xtype: 'numberfield'
				},{
					xtype:'ToolbarDemo.views.ErrorField',
					fieldname: 'hargajual'
				}
			]
		}
        Ext.apply(this, {
            scroll: 'vertical',
            dockedItems: [ titlebar, buttonbar ],
            items:[fields],
            listeners: {
            	beforeactivate: function(){
            		var deleteButton =this.down('#barangFormDeleteButton'),
            			saveButton = this.down('#barangFormSaveButton'),
            			titlebar = this.down('#barangFormTitlebar');
            			model = this.getRecord();
            			
            		if(model.phantom) {
            			titlebar.setTitle('Tambah Barang');
            			saveButton.setText('Tambah');
            			deleteButton.hide();
            		}else{
            			titlebar.setTitle('Update Barang');
            			saveButton.setText('Update');
            			deleteButton.show();
            		}
            	},
            	deactivate: function(){this.resetForm()}
            }
        });

        ToolbarDemo.views.BarangForm.superclass.initComponent.call(this);
    },

    onCancelAction: function() {
        Ext.dispatch({
            controller: 'BarangCtl',
            action: 'index'
        });
    },

    onSaveAction: function() {
    	var model = this.getRecord();
        Ext.dispatch({
            controller: 'BarangCtl',
            action: (model.phantom ? 'save' : 'update'),
            data: this.getValues(),
            record: model,
            form: this
        });
    },
    
    onDeleteAction: function(){
    	Ext.Msg.confirm("Hapus barang ini?","",function(answer){
    		if(answer === "yes") {
    			Ext.dispatch({
    				controller: 'BarangCtl',
    				action:'remove',
    				record:this.getRecord()
    			});
    		};
    	},this);
    },
    
	showErrors: function(errors){
		var fieldset = this.down('#barangFormFieldset');
		this.fields.each(function(field) {
			var fieldErrors =errors.getByField(field.name);
			
			if(fieldErrors.length>0){
				var errorField =this.down('#'+field.name+'ErrorField');
				errorField.update(fieldErrors);
				errorField.show();
				field.addCls('invalid-field');
			} else {
				this.resetField(field);
			}
		},this);
		fieldset.setInstructions("Silahkan diisi dahulu yang belum lengkap");
	},
	
	resetForm: function(){
		var fieldset= this.down('#barangFormFieldset');
		this.fields.each(function(field){
			this.resetField(field);
		},this);
		fieldset.setInstructions(this.defaultInstructions);
		this.reset();
	},
	
	resetField: function(field){
		var errorField = this.down('#'+field.name+'ErrorField');
		errorField.hide();
		field.removeCls('invalid-field');
		return errorField;
	}
});

Ext.reg('ToolbarDemo.views.BarangForm', ToolbarDemo.views.BarangForm);
