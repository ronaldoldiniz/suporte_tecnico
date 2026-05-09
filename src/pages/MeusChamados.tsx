import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import './MeusChamados.css';

interface Ticket {
  id: string;
  ticket_number: string;
  subject: string;
  category: string;
  priority: string;
  status: string;
  created_at: string;
  updated_at: string;
}

const MeusChamados: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const { data, error } = await supabase
        .from('tickets')
        .select('*')
        .order('updated_at', { ascending: false });
      
      if (error) {
        console.error('Erro ao buscar chamados:', error);
      } else {
        setTickets(data || []);
      }
    } catch (err) {
      console.error('Erro de conexão:', err);
    } finally {
      setLoading(false);
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch(priority.toUpperCase()) {
      case 'CRÍTICA': return 'priority_high';
      case 'ALTA': return 'priority_high';
      case 'MÉDIA': return 'drag_handle';
      case 'BAIXA': return 'arrow_downward';
      default: return 'horizontal_rule';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority.toUpperCase()) {
      case 'CRÍTICA': return 'var(--color-error)';
      case 'ALTA': return '#F97316';
      case 'MÉDIA': return 'var(--color-on-tertiary-fixed-variant)';
      case 'BAIXA': return 'var(--color-on-surface-variant)';
      default: return 'var(--color-on-surface)';
    }
  };

  const getCategoryTagStyle = (category: string) => {
    if (category.toLowerCase().includes('telecom')) {
      return { backgroundColor: 'rgba(249,115,22,0.1)', color: '#F97316' };
    } else if (category.toLowerCase().includes('predial')) {
      return { backgroundColor: 'var(--color-secondary-container)', color: 'var(--color-on-secondary-container)' };
    } else if (category.toLowerCase().includes('elétrica')) {
      return { backgroundColor: 'rgba(245,158,11,0.1)', color: '#F59E0B' };
    } else if (category.toLowerCase().includes('segurança')) {
      return { backgroundColor: 'var(--color-tertiary-fixed)', color: 'var(--color-on-tertiary-container)' };
    }
    return { backgroundColor: '#e2e8f0', color: '#475569' };
  };

  const getStatusColor = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes('pendente') || s.includes('aberto')) return 'var(--color-error)';
    if (s.includes('progresso') || s.includes('atendimento')) return '#3b82f6';
    if (s.includes('validando')) return '#F59E0B';
    return '#64748b';
  };

  return (
    <div className="meusChamadosContainer">
      <div className="pageHeader">
        <div>
          <h3 className="pageTitle">Meus Chamados Ativos</h3>
          <p className="pageSubtitle">Você possui {tickets.filter(t => !t.status.toLowerCase().includes('concluído')).length} chamados pendentes para resolução hoje.</p>
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
          {loading ? (
            <div style={{ padding: '20px', textAlign: 'center' }}>Carregando dados...</div>
          ) : tickets.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center' }}>Nenhum chamado encontrado.</div>
          ) : (
            tickets.map((ticket) => (
              <div className="listRow" key={ticket.id}>
                <div className="ticketId">{ticket.ticket_number}</div>
                <div>
                  <p className="ticketSubject">{ticket.subject}</p>
                  <p className="ticketMeta">Última atualização: {new Date(ticket.updated_at).toLocaleDateString('pt-BR')} às {new Date(ticket.updated_at).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
                <div>
                  <span className="tag" style={getCategoryTagStyle(ticket.category)}>{ticket.category.toUpperCase()}</span>
                </div>
                <div>
                  <div className="priority" style={{ color: getPriorityColor(ticket.priority) }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>{getPriorityIcon(ticket.priority)}</span> {ticket.priority.toUpperCase()}
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="dot" style={{ backgroundColor: getStatusColor(ticket.status) }}></div>
                    <span style={{ fontSize: '13px', fontWeight: 500 }}>{ticket.status}</span>
                  </div>
                </div>
                <div className="rowActions">
                  <button className="rowActionBtn"><span className="material-symbols-outlined">visibility</span></button>
                  <button className="rowActionBtn"><span className="material-symbols-outlined">edit_note</span></button>
                  <button className="rowActionBtn"><span className="material-symbols-outlined">add_comment</span></button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="pagination">
          <span>Exibindo {tickets.length} chamados</span>
          <div className="paginationBtns">
            <button className="pageBtn" disabled><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_left</span></button>
            <button className="pageBtn" style={{ backgroundColor: 'var(--color-on-secondary-fixed)', color: 'white' }}>1</button>
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
            <p className="contextDesc">Existem tickets com SLA próximo de estourar. Verifique os marcados como CRÍTICA.</p>
          </div>
        </div>
        <div className="contextCard">
          <span className="material-symbols-outlined contextIcon">groups</span>
          <div>
            <h4 className="contextTitle">Plantão Técnico</h4>
            <p className="contextDesc">Atendimento compartilhado ativo hoje.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeusChamados;
