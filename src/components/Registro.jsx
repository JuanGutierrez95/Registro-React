const Registro = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card p-2" style={{ width: "400px" }}>
        <form>
          <div className="mb-2">
            <label htmlFor="nombre" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Nombre"
              required
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="apellido" className="form-label">
              Apellido:
            </label>
            <input
              type="text"
              id="apellido"
              placeholder="Apellido"
              required
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              required
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="tel" className="form-label">
              Teléfono:
            </label>
            <input
              type="text"
              id="tel"
              placeholder="Teléfono"
              required
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="text"
              id="password"
              placeholder="Password"
              required
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="confirmar" className="form-label">
              Confirmar password:
            </label>
            <input
              type="text"
              id="confirmar"
              placeholder="Confirmar Password"
              required
              className="form-control"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;
