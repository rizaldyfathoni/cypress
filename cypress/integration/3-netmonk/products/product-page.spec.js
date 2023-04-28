describe('Open Product the Netmonk.id Website', () => {
    it('Go to Product the Netmonk Website', () => {
        cy.visit('https://netmonk.id/product')
        cy.viewport(1440, 750)
    })

    it('Check font size in product banner', () => {
        cy.viewport(1440, 750)
        cy.get('h1').contains('Netmonk Prime')
        cy.get('p').contains('Produk unggulan Netmonk yang mempermudah Perusahaan Anda melakukan monitoring jaringan, web/API, dan server dalam 1 aplikasi.')
    })

    it('Click the button "Coba “Netmonk Prime” Gratis"', () => {
        cy.viewport(1440, 750)
        cy.contains('Coba “Netmonk Prime” Gratis').click()
        cy.visit('https://netmonk.id/product')
    })

    it('Check font size in product banner', () => {
        cy.viewport(1440, 750)
        cy.get('h2').contains('Cara Kerja Netmonk Prime')
        cy.get('div').contains('Ucapkan selamat tinggal pada tools monitoring jaringan konvensional. Dengan Netmonk Prime, Perusahaan Anda dapat memantau kondisi jaringan, web/API, dan server secara proactive dan preventive maintenance dalam 1 aplikasi.')
        cy.get('div').contains('One tool, all purposes.')
    })

    it('Check font size in module product banner', () => {
        cy.viewport(1440, 750)
        cy.get('h2').contains('Modul Utama Netmonk Prime')
    })

    it('Check font size in module product Network Monitoring', () => {
        cy.viewport(1440, 750)
        cy.get('div').contains('#1 MODUL UTAMA NETMONK PRIME')
        cy.get('div').contains('Network Monitoring')
        cy.get('div').contains('Modul monitoring jaringan yang mengakuisisi data dari perangkat jaringan, divisualisasikan menjadi dashboard analitik yang mudah dipahami.')
    })

    it('Check font size in module product Web/API Monitoring', () => {
        cy.viewport(1440, 750)
        cy.get('div').contains('#2 MODUL UTAMA NETMONK PRIME')
        cy.get('div').contains('Web/API Monitoring')
        cy.get('div').contains('Modul monitoring situs/aplikasi web dan HTTP API untuk memastikan fungsionalitas layanan dapat tersedia dan diakses oleh pengguna.')
    })

    it('Check font size in module product Linux Server Monitoring', () => {
        cy.viewport(1440, 750)
        cy.get('div').contains('#3 MODUL UTAMA NETMONK PRIME')
        cy.get('div').contains('Linux Server Monitoring')
        cy.get('div').contains('Modul monitoring server yang mendeteksi visibilitas dan performansi server baik fisik maupun virtual, bersifat proactive maintenance.')
    })

    it('Check font size in module reason product banner', () => {
        cy.viewport(1440, 750)
        cy.get('h2').contains('Alasan Memilih Netmonk Prime')
    })

    it('Check font size in reason card product (1)', () => {
        cy.viewport(1440, 750)
        cy.get('div').contains('One tool, all purposes')
        cy.get('div').contains('Terdapat 3 modul dalam 1 aplikasi. Memudahkan manajemen untuk menjalankan bisnis secara efisien dan tim IT dalam menjalankan operasional.')
    })

    it('Check font size in reason card product (2)', () => {
        cy.viewport(1440, 750)
        cy.get('div').contains('Otomasi Laporan')
        cy.get('div').contains('Mempercepat dan mempermudah pembuatan laporan dalam 1 klik sesuai periode yang diinginkan dalam bentuk PDF.')
    })

    it('Check font size in reason card product (3)', () => {
        cy.viewport(1440, 750)
        cy.get('div').contains('Proactive & Predictive maintenance')
        cy.get('div').contains('Memiliki fitur proactive maintenance pada semua modul, dan fitur predictive maintenance pada modul Network Monitoring.')
    })
})