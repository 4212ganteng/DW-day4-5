function submitData(){

    // default mail penerima
        const mailreceiver = "azizganteng@gmail.com";
       let nama = document.getElementById("name").value;
       let email = document.getElementById("email").value;
       let hp = document.getElementById("hp").value;
       let subject = document.getElementById("input-object").value;
       let message = document.getElementById("komentar").value;
 
        // validasi bila form input tidak di isi
        if (nama == "") {
        return alert("please input name");
        }else if(email == ""){
        return alert("please input email");
        }else if(hp == ""){
        return alert("please input hp");
        }else if(subject == ""){
        return alert("please input Subject");
        }else if(message == ""){
        return alert("please input message");
        }
        console.log(nama);

        const anchor = document.createElement("a");
        anchor.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${mailreceiver}&su=${subject}&body=${message}silahkan kontak saya ke nomor ${hp}`;
        anchor.click();
};
