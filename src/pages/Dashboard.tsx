import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <>
      <section className="dashboardSection">
        <div className="summaryGrid">
          <div className="summaryCard">
            <div className="cardHeader">
              <p className="cardTitle">Chamados Abertos</p>
              <span className="material-symbols-outlined cardIcon">folder_open</span>
            </div>
            <h2 className="cardValue">24</h2>
            <div className="cardFooter" style={{ color: 'var(--color-error)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_upward</span>
              <span>12% em relação à ontem</span>
            </div>
          </div>
          <div className="summaryCard">
            <div className="cardHeader">
              <p className="cardTitle">Em Atendimento</p>
              <span className="material-symbols-outlined cardIcon">engineering</span>
            </div>
            <h2 className="cardValue">08</h2>
            <div className="cardFooter" style={{ color: 'var(--color-on-tertiary-container)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>check_circle</span>
              <span>Técnicos em rota</span>
            </div>
          </div>
          <div className="summaryCard">
            <div className="cardHeader">
              <p className="cardTitle">Aguardando Peças</p>
              <span className="material-symbols-outlined cardIcon">inventory_2</span>
            </div>
            <h2 className="cardValue">05</h2>
            <div className="cardFooter" style={{ color: 'var(--color-on-surface-variant)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>schedule</span>
              <span>Previsão: 48h</span>
            </div>
          </div>
          <div className="summaryCard">
            <div className="cardHeader">
              <p className="cardTitle">Concluídos Hoje</p>
              <span className="material-symbols-outlined cardIcon">task_alt</span>
            </div>
            <h2 className="cardValue">12</h2>
            <div className="cardFooter" style={{ color: 'var(--color-secondary)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>trending_up</span>
              <span>Meta diária atingida</span>
            </div>
          </div>
        </div>
      </section>

      <section className="filterSection">
        <div className="filterList">
          <button className="filterBtn active">Todos</button>
          <button className="filterBtn">
            <span className="dot" style={{ backgroundColor: '#1B263B' }}></span> Informática/TI
          </button>
          <button className="filterBtn">
            <span className="dot" style={{ backgroundColor: '#F59E0B' }}></span> Elétrica
          </button>
          <button className="filterBtn">
            <span className="dot" style={{ backgroundColor: '#10B981' }}></span> Predial/Civil
          </button>
          <button className="filterBtn">
            <span className="dot" style={{ backgroundColor: '#8B5CF6' }}></span> Segurança Eletrônica
          </button>
          <button className="filterBtn">
            <span className="dot" style={{ backgroundColor: '#F97316' }}></span> Telecomunicações
          </button>
        </div>
      </section>

      <section className="tableSection">
        <div className="tableHeader">
          <h3 className="tableTitle">Lista de Chamados</h3>
          <div className="tableActions">
            <button className="tableActionBtn">
              <span className="material-symbols-outlined">filter_list</span>
              Filtros Avançados
            </button>
            <button className="tableActionBtn">
              <span className="material-symbols-outlined">file_download</span>
              Exportar CSV
            </button>
          </div>
        </div>
        <div className="tableContainer">
          <table className="ticketsTable">
            <thead>
              <tr>
                <th>ID / TICKET</th>
                <th>ASSUNTO</th>
                <th>CATEGORIA</th>
                <th>PRIORIDADE</th>
                <th>STATUS</th>
                <th style={{ textAlign: 'right' }}>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td className="ticketId">#TK-4920</td>
                <td>
                  <p className="ticketSubject">Falha no Link Dedicado - Filial Sul</p>
                  <p className="ticketMeta">Aberto há 15 min por Admin</p>
                </td>
                <td>
                  <span className="tag" style={{ backgroundColor: 'rgba(249,115,22,0.1)', color: '#F97316', border: '1px solid rgba(249,115,22,0.2)' }}>Telecom</span>
                </td>
                <td>
                  <div className="priority" style={{ color: 'var(--color-error)' }}>
                    <span className="dot" style={{ backgroundColor: 'var(--color-error)' }}></span> CRÍTICA
                  </div>
                </td>
                <td>
                  <span className="status" style={{ backgroundColor: 'var(--color-error-container)', color: 'var(--color-on-error-container)' }}>Pendente</span>
                </td>
                <td>
                  <div className="rowActions">
                    <button className="rowActionBtn" title="Ver Detalhes">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                    <button className="rowActionBtn" title="Atribuir Técnico">
                      <span className="material-symbols-outlined">person_add</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td className="ticketId">#TK-4918</td>
                <td>
                  <p className="ticketSubject">Manutenção Preventiva de Ar Condicionado</p>
                  <p className="ticketMeta">Agendado para 14:00</p>
                </td>
                <td>
                  <span className="tag" style={{ backgroundColor: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}>Predial</span>
                </td>
                <td>
                  <div className="priority" style={{ color: 'var(--color-on-surface-variant)' }}>
                    <span className="dot" style={{ backgroundColor: 'var(--color-outline)' }}></span> BAIXA
                  </div>
                </td>
                <td>
                  <span className="status" style={{ backgroundColor: 'var(--color-secondary-container)', color: 'var(--color-on-secondary-container)' }}>Em Progresso</span>
                </td>
                <td>
                  <div className="rowActions">
                    <button className="rowActionBtn" title="Ver Detalhes">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                    <button className="rowActionBtn" title="Atribuir Técnico">
                      <span className="material-symbols-outlined">person_add</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 3 */}
              <tr>
                <td className="ticketId">#TK-4915</td>
                <td>
                  <p className="ticketSubject">Troca de Disjuntor - Quadro Principal</p>
                  <p className="ticketMeta">Prioridade Alta conforme contrato</p>
                </td>
                <td>
                  <span className="tag" style={{ backgroundColor: 'rgba(245,158,11,0.1)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.2)' }}>Elétrica</span>
                </td>
                <td>
                  <div className="priority" style={{ color: '#F97316' }}>
                    <span className="dot" style={{ backgroundColor: '#F97316' }}></span> ALTA
                  </div>
                </td>
                <td>
                  <span className="status" style={{ backgroundColor: 'var(--color-tertiary-fixed)', color: 'var(--color-on-tertiary-fixed)' }}>Validando</span>
                </td>
                <td>
                  <div className="rowActions">
                    <button className="rowActionBtn" title="Ver Detalhes">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                    <button className="rowActionBtn" title="Atribuir Técnico">
                      <span className="material-symbols-outlined">person_add</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <span>Exibindo 3 de 42 chamados ativos</span>
          <div className="paginationBtns">
            <button className="pageBtn" disabled>Anterior</button>
            <button className="pageBtn">Próximo</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
