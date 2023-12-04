import Button from "./Button"

const Card = () =>{

    return (
        <div className="card-container">
            {/* la imagen animal y edad tienen que venir por props */}
            <img src="" alt="" />
            <p>Perro </p>
            <p>3 años </p>
            <button>Adquirir mascota </button> {/* Tiene que ser con el componente Button y el mensaje y la clase vienen por props */}
            <button>ver despues </button> {/* Tiene que ser con el componente Button y el mensaje y la clase vienen por props */}
        </div>
    )
  }
  
  export default Card