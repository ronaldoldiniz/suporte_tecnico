import React from 'react';
import './Relatorios.css';

const Relatorios: React.FC = () => {
  return (
    <div className="relatoriosContainer">
      <div className="pageHeader">
        <div>
          <h2 className="pageTitle">Relatórios e Indicadores</h2>
          <p className="pageSubtitle">Desempenho operacional e análise de tickets em tempo real.</p>
        </div>
        <div className="headerActions">
          <button className="actionBtn btnSecondary">
            <span className="material-symbols-outlined">share</span> Compartilhar
          </button>
          <button className="actionBtn btnPrimary">
            <span className="material-symbols-outlined">download</span> Exportar PDF/Excel
          </button>
        </div>
      </div>

      <div className="filterBar">
        <div className="filterGroup">
          <label className="filterLabel">Período</label>
          <div className="selectWrapper">
            <span className="material-symbols-outlined selectIcon">calendar_today</span>
            <select className="filterSelect">
              <option>Últimos 30 dias</option>
              <option>Últimos 7 dias</option>
              <option>Mês Atual</option>
            </select>
          </div>
        </div>
        <div className="filterGroup">
          <label className="filterLabel">Categoria</label>
          <div className="selectWrapper">
            <span className="material-symbols-outlined selectIcon">category</span>
            <select className="filterSelect">
              <option>Todas as Categorias</option>
              <option>TI / Infraestrutura</option>
              <option>Elétrica</option>
            </select>
          </div>
        </div>
        <div className="filterGroup">
          <label className="filterLabel">Unidade</label>
          <select className="filterSelect" style={{ paddingLeft: '16px' }}>
            <option>Matriz - São Paulo</option>
            <option>Filial - RJ</option>
          </select>
        </div>
      </div>

      <div className="statsGrid">
        <div className="statCard">
          <div className="statHeader">
            <div className="statIconWrap" style={{ backgroundColor: 'var(--color-primary-container)' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--color-on-primary)' }}>timer</span>
            </div>
            <span className="statBadge" style={{ color: 'var(--color-error)' }}>
              -2.4% <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_downward</span>
            </span>
          </div>
          <p className="statLabel">SLA Médio de Atendimento</p>
          <h3 className="statValue">4h 15m</h3>
          <p className="statDesc">Comparado ao mês anterior</p>
        </div>
        
        <div className="statCard">
          <div className="statHeader">
            <div className="statIconWrap" style={{ backgroundColor: 'var(--color-secondary-container)' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--color-on-secondary-container)' }}>confirmation_number</span>
            </div>
            <span className="statBadge" style={{ color: '#16a34a' }}>
              +12% <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_upward</span>
            </span>
          </div>
          <p className="statLabel">Total de Chamados</p>
          <h3 className="statValue">154</h3>
          <p className="statDesc">Tickets registrados no período</p>
        </div>

        <div className="statCard">
          <div className="statHeader">
            <div className="statIconWrap" style={{ backgroundColor: 'var(--color-tertiary-fixed)' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--color-on-tertiary-fixed)' }}>task_alt</span>
            </div>
            <span className="statBadge" style={{ color: '#16a34a' }}>
              +5% <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_upward</span>
            </span>
          </div>
          <p className="statLabel">Resol. 1ª Visita</p>
          <h3 className="statValue">82%</h3>
          <p className="statDesc">Eficiência operacional</p>
        </div>

        <div className="statCard">
          <div className="statHeader">
            <div className="statIconWrap" style={{ backgroundColor: 'var(--color-surface-container-highest)' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>star</span>
            </div>
            <span className="statBadge" style={{ color: 'var(--color-outline)' }}>Estável</span>
          </div>
          <p className="statLabel">Satisfação do Usuário</p>
          <h3 className="statValue">4.8<span>/5.0</span></h3>
          <p className="statDesc">Média de 89 avaliações</p>
        </div>
      </div>

      <div className="chartsGrid">
        <div className="chartCard large">
          <div className="chartHeader">
            <h4 className="chartTitle">Volume de Chamados por Dia</h4>
            <div className="chartLegend">
              <span className="legendItem"><div className="legendDot" style={{ backgroundColor: 'var(--color-primary)' }}></div> Solicitados</span>
              <span className="legendItem"><div className="legendDot" style={{ backgroundColor: 'var(--color-outline)' }}></div> Resolvidos</span>
            </div>
          </div>
          
          <div className="barChart">
            {[40, 55, 45, 70, 60, 85, 65, 50, 75, 90, 60, 45, 80, 35].map((h, i) => (
              <div key={i} className="bar" style={{ height: `${h}%`, opacity: i < 8 ? (i+2)*0.1 : 1 }}></div>
            ))}
            <div className="chartAxis"></div>
            <div className="axisLabels">
              <span>01/10</span>
              <span>15/10</span>
              <span>30/10</span>
            </div>
          </div>

          <div className="chartSummary">
            <div className="summaryItem">
              <p className="summaryVal">12.5</p>
              <p className="summaryLbl">Média Diária</p>
            </div>
            <div className="summaryItem">
              <p className="summaryVal">24</p>
              <p className="summaryLbl">Pico (Dia 14)</p>
            </div>
          </div>
        </div>

        <div className="chartCard medium">
          <h4 className="chartTitle" style={{ marginBottom: '32px' }}>Status dos Chamados</h4>
          <div className="pieChart">
            <div className="pieCenter">
              <span className="pieVal">154</span>
              <span className="pieLbl">Total</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div className="legendDot" style={{ backgroundColor: 'var(--color-primary)' }}></div> Concluídos</span>
              <span style={{ fontWeight: 'bold' }}>65%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div className="legendDot" style={{ backgroundColor: 'var(--color-secondary)' }}></div> Em Progresso</span>
              <span style={{ fontWeight: 'bold' }}>20%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div className="legendDot" style={{ backgroundColor: 'var(--color-outline-variant)' }}></div> Pendentes</span>
              <span style={{ fontWeight: 'bold' }}>15%</span>
            </div>
          </div>
        </div>

        <div className="chartCard wide">
          <div className="chartHeader" style={{ marginBottom: '16px' }}>
            <h4 className="chartTitle">Performance por Técnico</h4>
            <button style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '12px' }}>Ver Todos</button>
          </div>
          <div className="tableContainer">
            <table className="techTable">
              <thead>
                <tr>
                  <th>Técnico</th>
                  <th>Resolvidos</th>
                  <th>Média SLA</th>
                  <th>Satisfação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="techProfile">
                      <div className="techAvatar" style={{ backgroundColor: 'var(--color-primary-container)' }}>RM</div>
                      <div>
                        <p style={{ fontWeight: 'bold' }}>Ricardo Martins</p>
                        <p style={{ fontSize: '11px', color: 'var(--color-outline)' }}>TI Nível 2</p>
                      </div>
                    </div>
                  </td>
                  <td>42</td>
                  <td>2h 45m</td>
                  <td><span className="material-symbols-outlined" style={{ fontSize: '16px', verticalAlign: 'middle', color: '#f59e0b' }}>star</span> 4.9</td>
                </tr>
                <tr>
                  <td>
                    <div className="techProfile">
                      <div className="techAvatar" style={{ backgroundColor: 'var(--color-on-secondary-fixed-variant)' }}>AL</div>
                      <div>
                        <p style={{ fontWeight: 'bold' }}>Ana Lúcia Silva</p>
                        <p style={{ fontSize: '11px', color: 'var(--color-outline)' }}>Elétrica / Predial</p>
                      </div>
                    </div>
                  </td>
                  <td>38</td>
                  <td>3h 10m</td>
                  <td><span className="material-symbols-outlined" style={{ fontSize: '16px', verticalAlign: 'middle', color: '#f59e0b' }}>star</span> 4.7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="chartCard narrow">
          <h4 className="chartTitle" style={{ marginBottom: '24px' }}>Distribuição por Categoria</h4>
          
          <div className="distItem">
            <div className="distHeader">
              <span style={{ fontWeight: 600 }}>TI / INFRAESTRUTURA</span>
              <span style={{ fontWeight: 'bold' }}>58 Chamados</span>
            </div>
            <div className="distBarBg">
              <div className="distBarFill" style={{ backgroundColor: 'var(--color-primary)', width: '38%' }}></div>
            </div>
          </div>

          <div className="distItem">
            <div className="distHeader">
              <span style={{ fontWeight: 600 }}>ELÉTRICA</span>
              <span style={{ fontWeight: 'bold' }}>34 Chamados</span>
            </div>
            <div className="distBarBg">
              <div className="distBarFill" style={{ backgroundColor: 'var(--color-secondary)', width: '22%' }}></div>
            </div>
          </div>

          <div className="distItem">
            <div className="distHeader">
              <span style={{ fontWeight: 600 }}>PREDIAL</span>
              <span style={{ fontWeight: 'bold' }}>28 Chamados</span>
            </div>
            <div className="distBarBg">
              <div className="distBarFill" style={{ backgroundColor: 'var(--color-on-secondary-container)', width: '18%' }}></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Relatorios;
