ToolbarDemo.models.Barang = Ext.regModel('Barang', {
    fields: [{
            name: 'id',
            type: 'int'
        },
    	{
    		name:'barcode',
    		type:'string'
    	},{
    		name:'nama',
    		type:'string'
    	},{
    		name:'hargajual',
    		type:'number'
    	}
    ],
    validations: [
    	{
    		type: 'presence',
            name: 'nama',
            message: 'nama harus di isi'
    	},{
    		type: 'presence',
            name: 'barcode',
            message: 'bacodenya jangan dikosongin ye...'
    	}
    ],
    proxy:{
    	type:'localstorage',
    	id:'dokukubarang'
    	}
});
