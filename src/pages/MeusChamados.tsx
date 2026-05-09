import React from 'react';
import './MeusChamados.css';

const MeusChamados: React.FC = () => {
  return (
    <div className="meusChamadosContainer">
      <div className="pageHeader">
        <div>
          <h3 className="pageTitle">Meus Chamados Ativos</h3>
          <p className="pageSubtitle">Você possui 12 chamados pendentes para resolução hoje.</p>
        </div>
        <div className="headerActions">
          <button className="actionBtn btnSecondary">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>filter_list</span>
            Filtros Avançados
          </button>
          <button className="actionBtn btnPrimary">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
            Exportar Relatório
          </button>
        </div>
      </div>

      <div className="tabs">
        <button className="tab active">Todos</button>
        <button className="tab">Em Aberto</button>
        <button className="tab">Em Atendimento</button>
        <button className="tab">Concluídos</button>
      </div>

      <div className="ticketList">
        <div className="listHeader">
          <div>ID</div>
          <div>Assunto</div>
          <div>Categoria</div>
          <div>Prioridade</div>
          <div>Status</div>
          <div style={{ textAlign: 'right' }}>Ações</div>
        </div>

        <div className="listBody">
          <div className="listRow">
            <div className="ticketId">#TK-4918</div>
            <div>
              <p className="ticketSubject">Manutenção Preventiva de Ar Condicionado</p>
              <p className="ticketMeta">Última atualização: Hoje, às 09:45</p>
            </div>
            <div>
              <span className="tag" style={{ backgroundColor: 'var(--color-secondary-container)', color: 'var(--color-on-secondary-container)' }}>INFRAESTRUTURA</span>
            </div>
            <div>
              <div className="priority" style={{ color: 'var(--color-error)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>priority_high</span> ALTA
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="dot" style={{ backgroundColor: '#3b82f6' }}></div>
                <span style={{ fontSize: '13px', fontWeight: 500 }}>Em Atendimento</span>
              </div>
            </div>
            <div className="rowActions">
              <button className="rowActionBtn"><span className="material-symbols-outlined">visibility</span></button>
              <button className="rowActionBtn"><span className="material-symbols-outlined">edit_note</span></button>
              <button className="rowActionBtn"><span className="material-symbols-outlined">add_comment</span></button>
            </div>
          </div>
          <div className="listRow">
            <div className="ticketId">#TK-4922</div>
            <div>
              <p className="ticketSubject">Ajuste de Câmera no Estacionamento</p>
              <p className="ticketMeta">Última atualização: Ontem, 16:30</p>
            </div>
            <div>
              <span className="tag" style={{ backgroundColor: 'var(--color-tertiary-fixed)', color: 'var(--color-on-tertiary-container)' }}>SEGURANÇA</span>
            </div>
            <div>
              <div className="priority" style={{ color: 'var(--color-on-tertiary-fixed-variant)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>drag_handle</span> MÉDIA
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="dot" style={{ backgroundColor: 'var(--color-error)' }}></div>
                <span style={{ fontSize: '13px', fontWeight: 500 }}>Em Aberto</span>
              </div>
            </div>
            <div className="rowActions">
              <button className="rowActionBtn"><span className="material-symbols-outlined">visibility</span></button>
              <button className="rowActionBtn"><span className="material-symbols-outlined">edit_note</span></button>
              <button className="rowActionBtn"><span className="material-symbols-outlined">add_comment</span></button>
            </div>
          </div>
        </div>

        <div className="pagination">
          <span>Exibindo 1-10 de 48 chamados</span>
          <div className="paginationBtns">
            <button className="pageBtn" disabled><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_left</span></button>
            <button className="pageBtn" style={{ backgroundColor: 'var(--color-on-secondary-fixed)', color: 'white' }}>1</button>
            <button className="pageBtn">2</button>
            <button className="pageBtn">3</button>
            <button className="pageBtn"><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span></button>
          </div>
        </div>
      </div>

      <div className="contextCards">
        <div className="contextCard">
          <span className="material-symbols-outlined contextIcon">info</span>
          <div>
            <h4 className="contextTitle">Dica de Produtividade</h4>
            <p className="contextDesc">Você pode usar atalhos de teclado para atualizar o status rapidamente. Pressione [S] sobre um item selecionado.</p>
          </div>
        </div>
        <div className="contextCard">
          <span className="material-symbols-outlined contextIcon">timer</span>
          <div>
            <h4 className="contextTitle">SLA Próximo do Vencimento</h4>
            <p className="contextDesc">O chamado #TK-4918 vence em 45 minutos. Priorize a atualização do status deste ticket.</p>
          </div>
        </div>
        <div className="contextCard">
          <span className="material-symbols-outlined contextIcon">groups</span>
          <div>
            <h4 className="contextTitle">Plantão Técnico</h4>
            <p className="contextDesc">Atendimento compartilhado com Maria Oliveira (Infra) e João Santos (Redes) hoje.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeusChamados;
