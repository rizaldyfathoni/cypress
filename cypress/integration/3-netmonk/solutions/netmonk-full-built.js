describe('Open Full Custom Built the Netmonk.id Website', () => {
    it('Go to Full Custom Built the Netmonk Website', () => {
        cy.viewport(1440, 750)
        cy.visit('https://netmonk.id/solutions/netmonk-full-built')
    })

    it('Check font size in product Full Custom Built', () => {
        cy.viewport(1440, 750)
        cy.get('h1').contains('Full Custom Built')
        cy.get('div').contains('Solusi yang dibuat dengan pendekatan custom dari modul utama Netmonk Prime untuk disesuaikan dengan budaya perusahaan.')
    })

    it('Check font size Portofolio Solusi in Full Custom Built', () => {
        cy.viewport(1440, 750)
        cy.get('h2').contains('Portofolio Solusi “Full Custom Built” Kami')
        cy.get('h3').contains('Netmonk memberikan 2 opsi metodologi pengembangan dengan menyesuaikan kebutuhan client/pengguna, yaitu waterfall dan agile scrum. Berikut beberapa portofolio solusi yang kami buat dengan pendekatan full custom build')
        cy.get('p').contains('Wifi (Controller-Based) Monitoring')
        cy.get('p').contains('GPON (OLT and ONT) Monitoring')
        cy.get('p').contains('HSI (High-Speed Internet) Monitoring')
        cy.get('p').contains('Node Telemetry Monitoring')
        cy.get('p').contains('Traffic Flow Monitoring (NetFlow and NBAR)')
        cy.get('p').contains('Video Conference Monitoring (Jitsi On-Premise)')
    })

    it('Check font size reason in Full Custom Built', () => {
        cy.viewport(1440, 750)
        cy.get('h2').contains('Alasan Memilih Solusi Full Custom Built')
        cy.get('h3').contains('Berikut keunggulan menggunakan solusi full custom built dari Netmonk sebagai solusi monitoring jaringan Perusahaan Anda.')
    })

    it('Check font size in reason card Full Custom Built (1)', () => {
        cy.viewport(1440, 750)
        cy.get('div').contains('Fitur yang Tidak Terbatas')
        cy.get('div').contains('Anda dapat meminta penyesuaian fitur sesuai kebutuhan karena fitur yang disediakan tidak terbatas.')
    })

    it('Check font size in reason card Full Custom Built (2)', () => {
        cy.viewport(1440, 750)
        cy.get('div').contains('Penyesuaian SLA')
        cy.get('div').contains('Perhitungan parameter SLA dapat disesuaikan berdasarkan formula yang digunakan Perusahaan/Organisasi Anda.')
    })

    it('Check font size in reason card Full Custom Built (3)', () => {
        cy.viewport(1440, 750)
        cy.get('div').contains('Dapat Diintegrasikan')
        cy.get('div').contains('Full Custom Built dapat diintegrasikan dengan aplikasi third-party, yaitu aplikasi yang sudah digunakan oleh Perusahaan Anda.')
    })
})