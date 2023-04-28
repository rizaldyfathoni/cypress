describe('Open Linux Server Monitoring the Netmonk.id Website', () => {
    it('Go to Linux Server Monitoring the Netmonk Website', () => {
        cy.viewport(1440, 750)
        cy.visit('https://netmonk.id/products/server-monitoring')
    })

    it('Check font size in product Linux Server Monitroing', () => {
        cy.viewport(1440, 750)
        cy.get('h1').contains('Server Monitoring')
        cy.get('div').contains('Setiap bisnis terutama bisnis digital membutuhkan server yang handal. Memastikan server beroperasi sesuai ekspektasi menjadi penting agar pengelolaan infrastruktur IT menjadi lebih baik dan mendukung bisnis berjalan optimal.')
    })

    it('Open the button "Coba “Netmonk Prime” Gratis"', () => {
        cy.viewport(1440, 750)
        cy.contains('Coba “Netmonk Prime” Gratis').click()
        cy.visit('https://netmonk.id/products/server-monitoring')
    })

    it('Check font size in product Linux Server Monitroing', () => {
        cy.viewport(1440, 750)
        cy.get('h2').contains('Kenali Modul')
        cy.get('h2').contains('Server Monitoring')
        cy.get('div').contains('Modul monitoring server linux dapat mendeteksi visibilitas dan performansi server baik fisik maupun virtual, untuk memastikan server beroperasi sesuai ekspektasi, dan bersifat proactive maintenance.')
    })

    it('Check font size in product Linux Server Monitroing', () => {
        cy.viewport(1440, 750)
        cy.get('h2').contains('Alasan Menggunakan Server Monitoring')
        cy.get('p').contains('Berikut beberapa manfaat yang perusahaan Anda dapatkan dari modul Server Monitoring, monitoring server berbasis web.')
    })

    it('Check font size in reason card product (1)', () => {
        cy.viewport(1440, 750)
        cy.get('p').contains('Sangat mudah melakukan Instalasi Agent Server')
        cy.get('p').contains('Netmonk memudahkan dan mempercepat proses instalasi agent server. Ucapkan selamat tinggal pada proses konfigurasi yang manual dan lama.')
    })

    it('Check font size in reason card product (2)', () => {
        cy.viewport(1440, 750)
        cy.get('p').contains('Memberikan Support berbagai linux distributions')
        cy.get('p').contains('Memberikan support monitoring untuk berbagai jenis linux distribution. Tidak perlu khawatir linux server yang sedang digunakan tidak compatible dengan monitoring tools kami.')
    })

    it('Check font size in reason card product (3)', () => {
        cy.viewport(1440, 750)
        cy.get('p').contains('Monitoring bersifat Proactive Maintenance')
        cy.get('p').contains('Terdapat fitur notifikasi secara real-time melalui aplikasi Telegram maupun e-mail untuk memudahkan Anda melakukan monitoring di mana saja dan kapan saja.')
    })

    it('Check font size in reason card product (4)', () => {
        cy.viewport(1440, 750)
        cy.get('p').contains('Monitoring performa secara realtime selama 24/7')
        cy.get('p').contains('Modul Web/API monitoring mempermudah Anda untuk melakukan monitoring performa web/API bisnis Anda secara real-time selama 24/7.')
    })
})