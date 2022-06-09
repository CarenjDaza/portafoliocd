let jobs=[
    {
        id:1,
        empresa:"LikeU",
        cargo:"Asesora de gestión de riesgos",
        jefe:"Beatriz Restrepo",
        telefono:6045521220,
        tiempo:"actualmente",
        funciones: "Venta y expedición de seguros de movilidad, vida, exequias y salud. Seguimiento a los casos escalados."
    },
    {
        id:2,
        empresa:"Servitrans",
        cargo:"Auxiliar de trámites de transito a nivel nacional",
        jefe:"Marcela Reyes",
        telefono:6015847552,
        tiempo:"2018 - 2019",
        funciones:"Servicio al cliente, atención de usuarios, asesoría de servicios, gestión de trámites y solicitudes, quejas y reclamos, liquidación de impuestos. "
    },
    {
        id:3,
        empresa:"Teleperformance",
        cargo:"Asesora de servicio al cliente",
        jefe:"Esteban Moreno",
        telefono:3154785962,
        tiempo:"2016 - 2018",
        funciones:"Atencion de la linea de servicio al cliente para linea española de telecomunicaciones, venta cruzada, soporte tecnico y resolución de pqr's"
    }
]

export function getAllJobs(){
    return jobs;
}

export function getJob(id){
    return jobs.find((j)=> j.id===id)
}