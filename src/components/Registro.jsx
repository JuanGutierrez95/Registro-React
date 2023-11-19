const Registro = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="nombre" className="formLabel">
            Nombre:
          </label>
          <input type="text" id="nombre" placeholder="Nombre" required></input>
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" id="apellido" placeholder="Apellido" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" placeholder="Email" required />
        </div>
        <div>
          <label htmlFor="tel">Teléfono:</label>
          <input type="text" id="tel" placeholder="Teléfono" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" placeholder="Password" required />
        </div>
        <div>
          <label htmlFor="confirmar">Confirmar password:</label>
          <input
            type="text"
            id="confirmar"
            placeholder="Confirmar Password"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Registro;
