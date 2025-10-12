import './style.css';
import logo from '../../assets/colombia.png'; // Asegúrate de que la ruta sea correcta

function Informativo() {
  return (
    
    <div className="informativo-container">
      <h1>Informativo</h1>
      <header className="informativo-header">
        <h1 className="informativo-titulo">COLOMBIA</h1>
        <img src={logo} alt="Logo Colombia" className="informativo-logo" />
        
      </header>

      <main className="informativo-contenido">
        <h2>Santiago Guzmán Suarez</h2>
        <p>
          Aplicación desarrollada para mostrar información sobre los 
          <strong> departamentos y capitales de Colombia</strong>.  
          Permite visualizar detalles, porcentajes y otros datos 
          relevantes de cada región del país.
        </p>

        <div className="informativo-links">
          <a 
            href="https://github.com/Sanguzsua/Colombia" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            🔗 Repositorio en GitHub
          </a>
        </div>

        <p className="informativo-version">Versión actual: <strong>v1.0.0</strong></p>
      </main>
    </div>
  );
}

export default Informativo;
