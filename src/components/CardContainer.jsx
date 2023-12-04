import Card from "./Card"

const CardContainer = (props) =>{

  const animal = [
    {     
     id: 1,
     nombre: "perro",
     edad: 7,
     img: "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
    },
    {
    id: 2,     
    nombre: "gato",
    edad: 3,
    img: "https://s1.eestatic.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg"
    },
    {
    id: 3,     
    nombre: "caballo",
    edad: 6,
    img: "https://concepto.de/wp-content/uploads/2021/07/caballos-e1626738224231.jpg"
    }

]

  return (
    <div>
      <h3>Comprar mascota</h3>  
      <Card />
      <h3>adopta tu mascota</h3>        
      <Card />
      <h3>mascotas mas elegidas</h3>        
      <Card />
    </div>
  )
}

export default CardContainer