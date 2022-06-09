let study=[
    {
        id:1,
        instituto:"Institucion Educativa Distrital Francisco de Miranda",
        titulo:"Primaria y bachillerato",
        anio:"2001 - 2011"
    },
    {
        id:2,
        instituto:"Servicio nacional de aprendizaje SENA",
        titulo:"Técnico en desarrollo de operaciones logísticas",
        anio:"2010 - 2011"
    },
    {
        id:3,
        instituto:"Servicio nacional de aprendizaje SENA",
        titulo:"Tecnólogo en gestión logística",
        anio:"2021 - 2022"
    }
]

export function getAllStudies(){
    return study;
}

export function getStudy(id){
    return study.find((est)=> est.id===id)
}