import React, { useEffect, useState } from "react";
import "./style.css";

function Detalles() {
  const [departamentos, setDepartamentos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const urlDpt =
      "https://gist.githubusercontent.com/diaztibata/fe3d238ee6b59ef71c8001654441a9f6/raw/4974a1b1cab3ac606dd96aa2d34d6e7c8e007daf/departamentosglobal.json";

    const fetchDepartamentos = async () => {
      try {
        const resp = await fetch(urlDpt);
        const json = await resp.json();
        setDepartamentos(json.data.dpt);
      } catch (error) {
        console.error("Error al cargar departamentos:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchDepartamentos();
  }, []);

  if (cargando) return <p>Cargando datos...</p>;

  return (
    <div className="detalle-container">
      <h1>Resultados por Departamento</h1>

      {departamentos.length === 0 ? (
        <p>No hay datos disponibles.</p>
      ) : (
        <div className="lista-deptos">
          {departamentos.map((d) => (
            <div key={d.id} className="departamento-card">
              <h2>{d.nm}</h2>
              <p><strong>ID:</strong> {d.id}</p>
              <p><strong>TVN:</strong> {d.tvn}</p>
              <p><strong>PVN:</strong> {d.pvn}</p>
              <p><strong>VNM:</strong> {d.vnm}</p>
              <p><strong>PCV:</strong> {d.pcv}</p>

              <h3>Candidatos:</h3>
              {d.cdt && d.cdt.length > 0 ? (
                <ul>
                  {d.cdt.map((candidato) => (
                    <li key={candidato.id}>
                      <strong>{candidato.nm}</strong> — {candidato.ptd_nm} ({candidato.pc}%)
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No hay candidatos disponibles.</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Detalles;
