describe('Open Web/API Monitoring the Netmonk.id Website', () => {
    it('Go to Web/API Monitoring the Netmonk Website', () => {
        cy.viewport(1440, 750)
        cy.visit('https://netmonk.id/products/web-api-monitoring')
    })

    it('Check font size in product Web/API Monitroing', () => {
        cy.viewport(1440, 750)
        cy.get('h1').contains('Web/API Monitoring')
        cy.get('div').contains('Memastikan situs/aplikasi web dan HTTP API perusahaan dapat tersedia dan diakses oleh pengguna menjadi hal yang sangat penting untuk setiap bisnis. Layanan yang tidak bisa diakses pengguna akan menyebabkan kerugian pada suatu bisnis.')
    })

    it('Open the button "Coba “Netmonk Prime” Gratis"', () => {
        cy.viewport(1440, 750)
        cy.contains('Coba “Netmonk Prime” Gratis').click()
        cy.visit('https://netmonk.id/products/web-api-monitoring')
    })

    it('Check font size in product Web/API Monitroing', () => {
        cy.viewport(1440, 750)
        cy.get('h2').contains('Kenali Modul')
        cy.get('h2').contains('Web/API Monitoring')
        cy.get('div').contains('Modul monitoring situs/aplikasi web dan HTTP API dapat memastikan fungsionalitas layanan perusahaan Anda dapat tersedia dan diakses oleh pengguna, memiliki fitur proactive maintenance yang handal.')
    })

    it('Check font size in product Web/API Monitroing', () => {
        cy.viewport(1440, 750)
        cy.get('h2').contains('Alasan Menggunakan Web/API Monitoring')
        cy.get('p').contains('Berikut beberapa manfaat yang perusahaan Anda dapatkan dari modul Web/API Monitoring, monitoring situs/aplikasi web dan HTTP API.')
    })

    it('Check font size in reason card product (1)', () => {
        cy.viewport(1440, 750)
        cy.get('p').contains('Otomasi Laporan Audit Performansi website/API')
        cy.get('p').contains('Modul Web/API monitoring mampu mempermudah Anda mendapatkan laporan performa website/API secara otomatis hanya dalam 1 klik.')
    })

    it('Check font size in reason card product (2)', () => {
        cy.viewport(1440, 750)
        cy.get('p').contains('Monitoring bersifat Proactive Maintenance')
        cy.get('p').contains('Terdapat fitur notifikasi secara real-time melalui aplikasi Telegram maupun e-mail untuk memudahkan Anda melakukan monitoring di mana saja dan kapan saja.')
    })

    it('Check font size in reason card product (3)', () => {
        cy.viewport(1440, 750)
        cy.get('p').contains('Menampilkan informasi dalam bentuk grafis')
        cy.get('p').contains('Modul Web/API monitoring menampilkan informasi “Response Time” dan status “Up/Down” melalui tampilan grafis yang mudah dimengerti.')
    })

    it('Check font size in reason card product (4)', () => {
        cy.viewport(1440, 750)
        cy.get('p').contains('Monitoring performa secara realtime selama 24/7')
        cy.get('p').contains('Modul Web/API monitoring mempermudah Anda untuk melakukan monitoring performa web/API bisnis Anda secara real-time selama 24/7.')
    })
})