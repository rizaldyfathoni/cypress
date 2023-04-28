describe('Open Netmonk Prime + Custom Built the Netmonk.id Website', () => {
    it('Go to Netmonk Prime + Custom Built the Netmonk Website', () => {
        cy.viewport(1440, 750)
        cy.visit('https://netmonk.id/solutions/netmonk-custom-built')
    })

    it('Check font size in product Netmonk Prime + Custom Built', () => {
        cy.viewport(1440, 750)
        cy.get('h1').contains('Netmonk Prime + Custom Built')
        cy.get('div').contains('Solusi yang dibuat dengan pendekatan custom dari modul utama Netmonk Prime untuk disesuaikan dengan budaya perusahaan.')
    })

    it('Check font size Portofolio Solusi in Netmonk Prime + Custom Built', () => {
        cy.viewport(1440, 750)
        cy.get('h2').contains('Apa Saja yang Dapat Dilakukan Pada Solusi ini')
        cy.get('h3').contains('Penambahan informasi/proses custom yang dilakukan seperti:')
        cy.get('p').contains('Kustomisasi format pada laporan mingguan/bulanan')
        cy.get('p').contains('Memodifikasi informasi yang sudah ada')
        cy.get('p').contains('Mengubah/menambah warna sesuai dengan brand guideline perusahaan')
    })

    it('Check font size reason in Netmonk Prime + Custom Built', () => {
        cy.viewport(1440, 750)
        cy.get('h2').contains('Alasan Memilih Solusi Netmonk Prime + Custom Built')
        cy.get('h3').contains('Berikut keunggulan menggunakan solusi Netmonk Prime + Custom Built dari Netmonk sebagai solusi monitoring jaringan perusahaan/organisasi Anda.')
    })

    it('Check font size in reason card Netmonk Prime + Custom Built (1)', () => {
        cy.viewport(1440, 750)
        cy.get('div').contains('Menggunakan fitur utama dari Netmonk Prime')
        cy.get('div').contains('Perusahaan Anda dapat menggunakan fitur utama “Netmonk Prime” yang telah terbukti menyelesaikan masalah tanpa perlu iterasi fitur dari awal.')
    })

    it('Check font size in reason card Netmonk Prime + Custom Built (2)', () => {
        cy.viewport(1440, 750)
        cy.get('div').contains('Kustomisasi Sesuai Kebutuhan')
        cy.get('div').contains('Perusahaan Anda dapat memodifikasi Netmonk Prime agar sesuai dengan format pelaporan, informasi, atau warna brand Perusahaan.')
    })

    it('Check font size in reason card Netmonk Prime + Custom Built (3)', () => {
        cy.viewport(1440, 750)
        cy.get('div').contains('Dapat Diintegrasikan')
        cy.get('div').contains('Netmonk Prime + Custom Built dapat diintegrasikan dengan aplikasi third-party yang sudah digunakan oleh Perusahaan Anda.')
    })
})