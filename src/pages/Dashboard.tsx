import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import './Dashboard.css';

interface Ticket {
  id: string;
  ticket_number: string;
  subject: string;
  category: string;
  priority: string;
  status: string;
  created_at: string;
}

const Dashboard: React.FC = () => {
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
        .order('created_at', { ascending: false });
      
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

  const getPriorityColor = (priority: string) => {
    switch(priority.toUpperCase()) {
      case 'CRÍTICA': return 'var(--color-error)';
      case 'ALTA': return '#F97316';
      case 'MÉDIA': return 'var(--color-on-tertiary-fixed-variant)';
      case 'BAIXA': return 'var(--color-on-surface-variant)';
      default: return 'var(--color-on-surface)';
    }
  };

  const getPriorityBgColor = (priority: string) => {
    switch(priority.toUpperCase()) {
      case 'CRÍTICA': return 'var(--color-error)';
      case 'ALTA': return '#F97316';
      case 'MÉDIA': return 'var(--color-on-tertiary-fixed-variant)';
      case 'BAIXA': return 'var(--color-outline)';
      default: return 'var(--color-outline)';
    }
  };

  const getCategoryTagStyle = (category: string) => {
    if (category.toLowerCase().includes('telecom')) {
      return { backgroundColor: 'rgba(249,115,22,0.1)', color: '#F97316', border: '1px solid rgba(249,115,22,0.2)' };
    } else if (category.toLowerCase().includes('predial')) {
      return { backgroundColor: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' };
    } else if (category.toLowerCase().includes('elétrica')) {
      return { backgroundColor: 'rgba(245,158,11,0.1)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.2)' };
    } else if (category.toLowerCase().includes('segurança')) {
      return { backgroundColor: 'var(--color-tertiary-fixed)', color: 'var(--color-on-tertiary-container)', border: 'none' };
    }
    return { backgroundColor: '#e2e8f0', color: '#475569', border: 'none' };
  };

  const getStatusStyle = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes('pendente') || s.includes('aberto')) {
      return { backgroundColor: 'var(--color-error-container)', color: 'var(--color-on-error-container)' };
    } else if (s.includes('progresso') || s.includes('atendimento')) {
      return { backgroundColor: 'var(--color-secondary-container)', color: 'var(--color-on-secondary-container)' };
    } else if (s.includes('validando')) {
      return { backgroundColor: 'var(--color-tertiary-fixed)', color: 'var(--color-on-tertiary-fixed)' };
    }
    return { backgroundColor: '#f1f5f9', color: '#64748b' };
  };

  return (
    <>
      <section className="dashboardSection">
        <div className="summaryGrid">
          <div className="summaryCard">
            <div className="cardHeader">
              <p className="cardTitle">Chamados Abertos</p>
              <span className="material-symbols-outlined cardIcon">folder_open</span>
            </div>
            <h2 className="cardValue">{tickets.filter(t => t.status.toLowerCase().includes('aberto') || t.status.toLowerCase().includes('pendente')).length}</h2>
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
            <h2 className="cardValue">{tickets.filter(t => t.status.toLowerCase().includes('progresso') || t.status.toLowerCase().includes('atendimento')).length}</h2>
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
            <h2 className="cardValue">0</h2>
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
            <h2 className="cardValue">0</h2>
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
              {loading ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '20px' }}>Carregando dados...</td>
                </tr>
              ) : tickets.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '20px' }}>Nenhum chamado encontrado.</td>
                </tr>
              ) : (
                tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td className="ticketId">{ticket.ticket_number}</td>
                    <td>
                      <p className="ticketSubject">{ticket.subject}</p>
                      <p className="ticketMeta">Registrado em {new Date(ticket.created_at).toLocaleDateString('pt-BR')}</p>
                    </td>
                    <td>
                      <span className="tag" style={getCategoryTagStyle(ticket.category)}>{ticket.category}</span>
                    </td>
                    <td>
                      <div className="priority" style={{ color: getPriorityColor(ticket.priority) }}>
                        <span className="dot" style={{ backgroundColor: getPriorityBgColor(ticket.priority) }}></span> {ticket.priority}
                      </div>
                    </td>
                    <td>
                      <span className="status" style={getStatusStyle(ticket.status)}>{ticket.status}</span>
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
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <span>Exibindo {tickets.length} chamados</span>
          <div className="paginationBtns">
            <button className="pageBtn" disabled>Anterior</button>
            <button className="pageBtn" disabled>Próximo</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
