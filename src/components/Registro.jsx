const Registro = () => {
  return (
    <div>
      <form>
        <label htmlFor="nombre" className="formLabel">
          Nombre:
        </label>
        <input type="text" id="nombre" placeholder="Nombre" required></input>
        <label>Apellido:</label>
        <input type="text" id="apellido" placeholder="Apellido" required/>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" placeholder="Email" required/>
        <label htmlFor="tel">Teléfono:</label>
        <input type="text" id="tel" placeholder="Teléfono" required/>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" placeholder="Password" required/>
        <label htmlFor="confirmar">Confirmar password:</label>
        <input type="text" id="confirmar" placeholder="Confirmar Password" required/>
      </form>
    </div>
  );
};

export default Registro;
