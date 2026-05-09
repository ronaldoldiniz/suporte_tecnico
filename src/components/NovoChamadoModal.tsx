import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import './NovoChamadoModal.css';

interface NovoChamadoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const NovoChamadoModal: React.FC<NovoChamadoModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const { user } = useAuth();
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('TI / Infraestrutura');
  const [priority, setPriority] = useState('BAIXA');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const ticketNumber = `#TK-${Math.floor(1000 + Math.random() * 9000)}`;

    const { error } = await supabase.from('tickets').insert([
      {
        ticket_number: ticketNumber,
        subject,
        category,
        priority,
        status: 'Aberto',
        created_by: user?.id,
        // Atribui a si mesmo caso o criador seja um técnico testando, ou deixa aberto para admin
        assigned_to: user?.id 
      }
    ]);

    setLoading(false);

    if (error) {
      alert('Erro ao criar chamado: ' + error.message);
    } else {
      setSubject('');
      onSuccess();
      onClose();
    }
  };

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <div className="modalHeader">
          <h2>Novo Chamado</h2>
          <button onClick={onClose} className="closeBtn">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="modalForm">
          <div className="formGroup">
            <label>Assunto / Problema</label>
            <input 
              type="text" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Ex: Impressora sem tinta"
              required 
            />
          </div>

          <div className="formRow">
            <div className="formGroup">
              <label>Categoria</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>TI / Infraestrutura</option>
                <option>Elétrica</option>
                <option>Predial/Civil</option>
                <option>Segurança Eletrônica</option>
                <option>Telecomunicações</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Prioridade</label>
              <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option>BAIXA</option>
                <option>MÉDIA</option>
                <option>ALTA</option>
                <option>CRÍTICA</option>
              </select>
            </div>
          </div>

          <div className="modalFooter">
            <button type="button" onClick={onClose} className="btnCancel" disabled={loading}>
              Cancelar
            </button>
            <button type="submit" className="btnSubmit" disabled={loading}>
              {loading ? 'Criando...' : 'Criar Chamado'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NovoChamadoModal;
