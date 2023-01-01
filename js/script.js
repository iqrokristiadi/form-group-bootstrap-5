const scriptURL = 'https://script.google.com/macros/s/AKfycbwWMZazRNFi1MsWymeYW-1DZDdwWJslYHbgKZSy9uvA5gJWVBu3vCMk1aP6-ofnXStQ/exec'
      const form = document.forms['login-test'];
      const btnKirim = document.querySelector('.btn-kirim');
      const btnLoading = document.querySelector('.btn-loading');
      const myAlert = document.querySelector('.my-alert');

      form.addEventListener('submit', e => {
        e.preventDefault()

        // Ketika tombol submit di klik / belum berhasil
        // tampilkan tombol loading, hilangkan tombol kirim
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        
        // bagian mengirimkan data
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          // ketika berhasil di submit
          // tampilkan tombol kirim, hilangkan tombol loading
          .then(response => {
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');

            // tampilkan alert ketika sudah selesai dikirim
            myAlert.classList.toggle('d-none');

            // reset form
            form.reset();
            console.log('Success!', response)
            

          })
          .catch(error => console.error('Error!', error.message))
      })


      // AOS
      AOS.init();

      // GSAP

      gsap.to('.slogan', {duration: 1.5, text: 'Change The Quality Of Your Life'});
      // gsap.from('.slogan', {duration:1, x: -100, opacity:0, delay: 0.5, ease: 'back'});
      gsap.from('.desc', {duration:1, y: 100, opacity:0, delay: 0.5, ease: 'back'});
