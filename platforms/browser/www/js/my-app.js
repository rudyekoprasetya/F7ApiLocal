// Initialize your app
var myApp = new Framework7({
   swipePanel: 'left',
   material: true,
});

// Export selectors engine
var $$ = Dom7;
 
// Add view
var mainView = myApp.addView('.view-main', {
    // untuk dinamis navbar
    dynamicNavbar: true
});

//untuk halaman index langsung di load
mainView.router.refreshPage();

// memanggil halaman lain
myApp.onPageInit('index', function (page) {
  //loading
  myApp.showPreloader();
  setTimeout(function () {
    myApp.hidePreloader();
  },3000);

  //ambil data json dari server
  $$.getJSON('http://localhost/webku/index.php/api/tampil', function (data){
      console.log(data);

      var isi='';
      //perulangan untuk ditampilkan di halaman
      $$.each(data, function(i, field){
        // isi+='<li class="item-content">';
        //   isi+='<div class="item-inner">';
        //     isi+='<div class="item-title">'+field.alamat+'</div>';
        //   isi+='</div>';
        // isi+='</li>';
        isi+='<div class="card">'
          isi+='<div class="card-header">'+field.nama+'</div>'
          isi+='<div class="card-content">'
            isi+='<div class="card-content-inner">'+field.alamat+'</div>'
          isi+='</div>'
          isi+='<div class="card-footer">Gajinya adalah '+field.gaji+'</div>'
        isi+='</div>'
      });

      //memasukan data ke element dengan id data_pengurus
      $$('#data_pengurus').html(isi);
  });
});

