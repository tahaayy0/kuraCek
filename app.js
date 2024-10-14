var isimler = [];
let sayac = 0;
let secim = Math.floor(Math.random() * sayac)
var isimSayisi = isimler.length;
function ekle() {
    isimSayisi = isimler.length
    var eklenecekİsim = document.getElementById("degerAlma").value;
    if(eklenecekİsim == ''){
        alert("Lütfen İsim Giriniz");
    }
    else if (sayac == 12){
        alert("Maks Kisi Sayısına Ulaştınız")
    }
    else{
    
    sayac++;
    isimler.push(eklenecekİsim);
    var liste = document.createElement('div');
    var iptal = document.createElement('button');
    iptal.setAttribute('class','iptalDugmesi');
    iptal.setAttribute('onclick','sil()');
    liste.setAttribute('class','liste');
    liste.setAttribute('id','liste');
    liste.innerHTML = eklenecekİsim;
    iptal.innerHTML = "x"
    document.getElementById("kisiListesi").appendChild(iptal);
    document.getElementById("kisiListesi").appendChild(liste);
    document.getElementById("degerAlma").value = ""
    
   }
}
function sifirla() {
    isimler = [];
    document.getElementById("kisiListesi").innerHTML="";
    document.getElementById("degerAlma").value = "";
    document.getElementById("sonuc").innerHTML = "";
    sayac = 0;
}

function kuraCek(){
    document.getElementById("sonuc").innerHTML = isimler[secim];
    secim = Math.floor(Math.random() * sayac);
}

