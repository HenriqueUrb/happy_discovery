const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    await saveOrphanage(db, {
        lat: "-28.681913",
        lng: "-49.369646",
        name: "Lar das Meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "999889898",
        images: [
            "https://images.unsplash.com/photo-1598135753053-2e3075f90763?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1587155829644-b483b36bf5a0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "0",
    })
            

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orphanage, pelo ID
    const selectedOrphanage = await db.all('SELECT * FROM orphanages WHERE id = "3" ')
    console.log(selectedOrphanage)

    // deletar dado da tabela 
 //   console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
 //   console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"))
 //   console.log(await db.run("DELETE FROM orphanages WHERE id = '7'"))

})