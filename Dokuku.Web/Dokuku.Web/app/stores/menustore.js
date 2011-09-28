ToolbarDemo.MenuStore = new Ext.data.Store({
    model: 'MenuItem',
    /*sorters: 'namaMenu',
    getGroupString : function(record){
    return record.get('namaMenu')[0];
    },*/
    data: [
        { namaMenu: "Profil Usaha", menuId: 'menuprofilusaha', keterangan: "" },
        { namaMenu: "Daftar Barang",
            menuId: "menudaftarbarang",
            keterangan: ""
        },
        { namaMenu: "Pembelian", menuId: 'menupembelian', keterangan: "" }

    ]
});



