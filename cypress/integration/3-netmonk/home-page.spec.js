describe('Click Home Page the Netmonk.id Website', () => {
    it('Go to Home Page the Netmonk Website', () => {
        cy.visit('https://netmonk.id/')
        cy.viewport(1440, 750)
    })

    it('Check font size in home page banner', () => {
        cy.viewport(1440, 750)
        cy.get('h1').contains('Penyedia Aplikasi Monitoring Jaringan Indonesia')
        cy.get('h2').contains('Memenuhi kebutuhan aplikasi monitoring jaringan, web/API, dan server dalam 1 aplikasi.')
    })

    it('Click the button "Coba “Netmonk Prime” Gratis"', () => {
        cy.viewport(1440, 750)
        cy.contains('Coba “Netmonk Prime” Gratis').click()
        cy.visit('https://netmonk.id/')
    })

    it('Click the button "Tonton Video"', () => {
        cy.viewport(1440, 750)
        cy.contains('Tonton Video').click()
        cy.visit('https://netmonk.id/')
    })

    it('Check font size in home page module banner', () => {
        cy.get('h2').contains('NETMONK PRIME')
        cy.get('h3').contains('Produk unggulan Netmonk berupa aplikasi monitoring jaringan, web/API, dan server yang bersifat proactive dan preventive maintenance.')
        cy.get('h3').contains('One tool, all purposes.')
    })

    it('check font size and button in module Network Monitoring', () => {
        cy.get('span').contains('Network Monitoring')
        cy.get('p').contains('Modul monitoring jaringan yang mengakuisisi data dari perangkat jaringan, divisualisasikan menjadi dashboard analitik yang mudah dipahami.')
    })
    it('Click the button go to "Network Monitoring"', () => {
        cy.viewport(1440, 750)
        cy.contains('Selengkapnya').click()
        cy.visit('https://netmonk.id/')
    })

    it('check font size and button in module Web/API Monitoring', () => {
        cy.get('span').contains('Web/API Monitoring')
        cy.get('p').contains('Modul monitoring situs/aplikasi web dan HTTP API untuk memastikan fungsionalitas layanan dapat tersedia dan diakses oleh pengguna.')
    })
    it('Click the button go to "Web/API Monitoring"', () => {
        cy.viewport(1440, 750)
        cy.contains('Selengkapnya').click()
        cy.visit('https://netmonk.id/')
    })

    it('check font size and button in module Server Monitoring', () => {
        cy.get('span').contains('Linux Server Monitoring')
        cy.get('p').contains('Modul monitoring server yang mendeteksi visibilitas dan performansi server baik fisik maupun virtual, bersifat proactive maintenance.')
    })
    it('Click the button go to "Linux Server Monitoring"', () => {
        cy.viewport(1440, 750)
        cy.contains('Selengkapnya').click()
        cy.visit('https://netmonk.id/')
    })

    it('Checking font join Netmonk', () => {
        cy.get('h2').contains('Mereka Puas Memakai Produk & Solusi Netmonk')
        cy.get('h3').contains('Netmonk telah dipercaya oleh 15+ perusahaan di Indonesia.')
    })
    it('Click the Button "Bergabung dengan kami"', () => {
        cy.viewport(1440, 750)
        cy.contains('Bergabung dengan kami').click()
        cy.visit('https://netmonk.id/')
    })

    it('Checking font join Netmonk', () => {
        cy.get('h2').contains('Apa yang Mereka Katakan Tentang Netmonk?')
        cy.get('h2').contains('Kenapa Harus Netmonk?')
        cy.get('h3').contains('Netmonk adalah penyedia aplikasi monitoring jaringan, web/API dan server dalam 1 aplikasi yang mempermudah perusahaan Anda.')
    })

    // Footer page netmonk //

    // it('Click the icon Button "Twitter"', () => {
    //     cy.viewport(1440, 750)
    //     cy.contains('/icons/social/twitter.png').click()
    //     cy.visit('https://netmonk.id/')
    // })

    // it('Click the icon Button "Facebook"', () => {
    //     cy.viewport(1440, 750)
    //     cy.contains('Facebook Netmonk').click()
    //     cy.visit('https://netmonk.id/')
    // })

    // it('Click the icon Button "Instagram"', () => {
    //     cy.viewport(1440, 750)
    //     cy.contains('Instagram Netmonk').click()
    //     cy.visit('https://netmonk.id/')
    // })

    // it('Click the icon Button "Medium"', () => {
    //     cy.viewport(1440, 750)
    //     cy.contains('Medium Netmonk').click()
    //     cy.visit('https://netmonk.id/')
    // })

    // it('Click the icon Button "Youtube"', () => {
    //     cy.viewport(1440, 750)
    //     cy.contains('Youtube Netmonk').click()
    //     cy.visit('https://netmonk.id/')
    // })

    // Footer Netmonk //

    it('Click the button "Coba “Netmonk Prime” Gratis"', () => {
        cy.viewport(1440, 750)
        cy.contains('Coba “Netmonk Prime” Gratis').click()
        cy.visit('https://netmonk.id/')
    })

    it('Click the Button "Why Netmonk"', () => {
        cy.viewport(1440, 750)
        cy.contains('Why Netmonk').click()
        cy.visit('https://netmonk.id/')
    })

    it('Click the Button "Tentang Kami"', () => {
        cy.viewport(1440, 750)
        cy.contains('Tentang Kami').click()
        cy.visit('https://netmonk.id/')
    })

    it('Click the Button "Event & Blog"', () => {
        cy.viewport(1440, 750)
        cy.contains('Event & Blog').click()
        cy.visit('https://netmonk.id/')
    })

    // Footer Produk

    // it('Click the Button "Netmonk Prime"', () => {
    //     cy.viewport(1440, 750)
    //     cy.contains('Netmonk Prime').click()
    //     cy.visit('https://netmonk.id/')
    // })

    // Footer Solusi

    // it('Click the Button "Netmonk Prime + Custom Built"', () => {
    //     cy.viewport(1440, 750)
    //     cy.contains('Netmonk Prime + Custom Built').click()
    //     cy.visit('https://netmonk.id/')
    // })

    // it('Click the Button "Full Custom Built"', () => {
    //     cy.viewport(1440, 750)
    //     cy.contains('Full Custom Built').click()
    //     cy.visit('https://netmonk.id/')
    // })

    // Footer Kontak

    // it('Click the Button "info@netmonk.id"', () => {
    //     cy.viewport(1440, 750)
    //     cy.contains('info@netmonk.id').click()
    //     cy.visit('https://netmonk.id/')
    // })

    it('Click the Button "Whatsapp Netmonk"', () => {
        cy.viewport(1440, 750)
        cy.contains('Whatsapp Netmonk').click()
        cy.visit('https://netmonk.id/')
    })

    it('Click the Button "Kebijakan Penggunaan"', () => {
        cy.viewport(1440, 750)
        cy.contains('Kebijakan Penggunaan').click()
        cy.visit('https://netmonk.id/')
    })

    it('Click the Button "Kebijakan Privasi"', () => {
        cy.viewport(1440, 750)
        cy.contains('Kebijakan Privasi').click()
        cy.visit('https://netmonk.id/')
    })
})