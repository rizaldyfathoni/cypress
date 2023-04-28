describe('Open Network Monitoring the Netmonk.id Website', () => {
    it('Go to Network Monitoring the Netmonk Website', () => {
        cy.viewport(1440, 750)
        cy.visit('https://netmonk.id/products/network-monitoring')
    })

    it('Check font size in product Network Monitroing', () => {
        cy.viewport(1440, 750)
        cy.get('h1').contains('Network Monitoring')
        cy.get('div').contains('Di jaman digital saat ini, memastikan layanan jaringan selalu tersedia adalah hal yang penting bagi setiap bisnis. Tanpa monitoring jaringan, bisnis dapat mengalami kerugian akibat operasional yang tidak berjalan lancar.')
    })

    it('Click the button "Coba “Netmonk Prime” Gratis"', () => {
        cy.viewport(1440, 750)
        cy.contains('Coba “Netmonk Prime” Gratis').click()
        cy.visit('https://netmonk.id/products/network-monitoring')
    })

    it('Check font size in product how to work Network Monitroing', () => {
        cy.viewport(1440, 750)
        cy.get('h2').contains('Kenali Modul')
        cy.get('h2').contains('Network Monitoring')
        cy.get('div').contains('Modul monitoring jaringan mampu mengakuisisi data dari perangkat jaringan, ditampilkan menjadi dashboard analitik yang mudah dipahami dan membuat tim IT mudah melakukan proactive dan preventive maintenance.')
    })

    it('Check font size in product Network Monitroing', () => {
        cy.viewport(1440, 750)
        cy.get('h2').contains('Alasan Menggunakan Network Monitoring')
        cy.get('p').contains('Berikut beberapa manfaat yang perusahaan Anda dapatkan dari modul Network Monitoring, monitoring jaringan berbasis web.')
    })

    it('Check font size in reason card product (1)', () => {
        cy.viewport(1440, 750)
        cy.get('p').contains('Maintenance bersifat proactive & preventive')
        cy.get('p').contains('Dapatkan notifikasi secara proaktif melalui Telegram atau e-mail saat perangkat jaringan di perusahaan mengalami masalah tanpa harus terpaku pada layar monitor.')
    })

    it('Check font size in reason card product (2)', () => {
        cy.viewport(1440, 750)
        cy.get('p').contains('Memudahkan tim IT menjalankan operasional')
        cy.get('p').contains('Melalui dashboard operasional di Netmonk Prime, tim IT akan mudah memantau perangkat jaringan berdasarkan kondisi paling krusial hingga yang paling aman.')
    })

    it('Check font size in reason card product (3)', () => {
        cy.viewport(1440, 750)
        cy.get('p').contains('Tersedia Dashboard untuk Manajemen dan Operasional')
        cy.get('p').contains('Terdapat 2 jenis tampilan dashboard yang mudah digunakan untuk manajemen dan tim operasional, bisa disesuaikan dengan 1 klik.')
    })

    it('Check font size in reason card product (4)', () => {
        cy.viewport(1440, 750)
        cy.get('p').contains('Mudah dan cepat untuk setup data perangkat')
        cy.get('p').contains('Cukup mendaftarkan alamat IP sekali dan semua data terkait perangkat bisa ditampilkan.')
    })
})