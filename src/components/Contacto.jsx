import {useForm} from "react-hook-form"

export const Contacto = () => {
    // const {register, handleSubmit} = useForm(); 
    // const enviar = (data) =>{
    //     console.log(data)
    // }
    return (
    <div className="container">
        <h1 className="main-tittle"> Contacto </h1>
        <form className="formulario" /*onSubmit={handleSubmit(enviar)*/>
            <input type="text" placeholder="Ingresa tu nombre completo" /*{...register("nombre")}*/ />
            <input type="email" placeholder="Ingresa tu correo" /*{...register("email")}*/ />
            <input type="phone" placeholder="Ingresa tu teléfono" /*{...register("telefono")}*/ />
            <button className="enviar" type="submit">Enviar</button>
        </form>
    </div>
  )
}
