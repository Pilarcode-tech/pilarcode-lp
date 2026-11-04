/**
 * Grafico estatico (SVG inline, server component) de custo acumulado:
 * SaaS (mensalidade que acumula) vs sob medida (investimento unico + infra baixa),
 * ao longo de 36 meses, com o "ponto de virada" destacado.
 *
 * Sem JS no cliente, entra no HTML inicial (bom para SEO/Core Web Vitals).
 * Eixo de custo proposital sem numeros: a ideia e qualitativa (cada empresa faz a
 * conta com os proprios numeros), como o texto do artigo deixa claro.
 */
const CustoAcumuladoChart = () => {
  // Pontos ja em coordenadas do viewBox (eixo X: 0..36 meses; eixo Y: custo acumulado).
  const saas = "60,287 240,222 420,149 600,45";
  const sobMedida = "60,183 240,165 420,144 600,123";
  const meses = [
    { x: 60, label: "0" },
    { x: 240, label: "12" },
    { x: 420, label: "24" },
    { x: 600, label: "36" },
  ];

  return (
    <figure className="not-prose my-10">
      <svg
        viewBox="0 0 640 360"
        className="w-full h-auto"
        role="img"
        aria-labelledby="custo-chart-title custo-chart-desc"
      >
        <title id="custo-chart-title">
          Custo acumulado: SaaS contra sistema sob medida em 36 meses
        </title>
        <desc id="custo-chart-desc">
          O custo do SaaS comeca baixo e sobe de forma contínua com as mensalidades,
          enquanto o sob medida tem um investimento inicial alto e cresce pouco depois.
          As duas curvas se cruzam por volta do mês 25, o ponto de virada a partir do
          qual o sob medida tende a sair mais barato no acumulado.
        </desc>

        {/* Eixos */}
        <line x1="60" y1="40" x2="60" y2="300" stroke="#e5e7eb" strokeWidth="1.5" />
        <line x1="60" y1="300" x2="600" y2="300" stroke="#e5e7eb" strokeWidth="1.5" />

        {/* Marcadores de mes no eixo X */}
        {meses.map((m) => (
          <text
            key={m.x}
            x={m.x}
            y="320"
            textAnchor="middle"
            className="font-dmsans"
            fontSize="13"
            fill="#6b7280"
          >
            {m.label}
          </text>
        ))}
        <text x="600" y="345" textAnchor="end" className="font-dmsans" fontSize="12" fill="#9ca3af">
          meses
        </text>

        {/* Titulo do eixo Y */}
        <text
          x="20"
          y="170"
          textAnchor="middle"
          transform="rotate(-90 20 170)"
          className="font-dmsans"
          fontSize="12"
          fill="#9ca3af"
        >
          Custo acumulado
        </text>

        {/* Linha do ponto de virada */}
        <line
          x1="431"
          y1="143"
          x2="431"
          y2="300"
          stroke="#211cda"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.5"
        />
        <text x="431" y="92" textAnchor="middle" className="font-manrope" fontSize="12" fill="#211cda" fontWeight="600">
          ponto de virada
        </text>

        {/* Curva SaaS (tracejada, cinza) */}
        <polyline
          points={saas}
          fill="none"
          stroke="#94a3b8"
          strokeWidth="3"
          strokeDasharray="7 5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Curva sob medida (solida, azul da marca) */}
        <polyline
          points={sobMedida}
          fill="none"
          stroke="#211cda"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Marcador do cruzamento */}
        <circle cx="431" cy="143" r="5" fill="#fff" stroke="#211cda" strokeWidth="2.5" />
      </svg>

      {/* Legenda */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
        <span className="flex items-center gap-2 font-dmsans text-sm text-gray-600">
          <span className="inline-block w-6 h-0.5 bg-[#211cda]" aria-hidden="true" />
          Sob medida (investimento único, depois infra baixa)
        </span>
        <span className="flex items-center gap-2 font-dmsans text-sm text-gray-600">
          <span
            className="inline-block w-6 h-0.5 bg-[#94a3b8]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #94a3b8 0 7px, transparent 7px 12px)",
              backgroundColor: "transparent",
            }}
            aria-hidden="true"
          />
          SaaS (mensalidade que acumula)
        </span>
      </div>

      <figcaption className="font-dmsans text-xs text-gray-400 text-center mt-3">
        Ilustração qualitativa. O ponto de virada varia conforme os seus números (usuários, reajuste, integrações).
      </figcaption>
    </figure>
  );
};

export default CustoAcumuladoChart;
