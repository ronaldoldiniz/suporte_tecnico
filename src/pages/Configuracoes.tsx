import React from 'react';
import './Configuracoes.css';

const Configuracoes: React.FC = () => {
  return (
    <div className="configContainer">
      <div className="pageHeader">
        <h3 className="pageTitle">Configurações do Sistema</h3>
        <p className="pageSubtitle">Gerencie suas preferências e informações do perfil.</p>
      </div>

      <div className="configSection">
        <h4 className="sectionTitle">Perfil Pessoal</h4>
        <div className="formGroup">
          <label className="formLabel">Nome Completo</label>
          <input type="text" className="formInput" defaultValue="Ricardo Silva" />
        </div>
        <div className="formGroup">
          <label className="formLabel">E-mail Profissional</label>
          <input type="email" className="formInput" defaultValue="ricardo.silva@techsupport.com" />
        </div>
        <div className="formGroup">
          <label className="formLabel">Cargo</label>
          <input type="text" className="formInput" defaultValue="Engenheiro de Suporte Nível 2" disabled />
        </div>
        <button className="saveBtn">Salvar Alterações</button>
      </div>

      <div className="configSection">
        <h4 className="sectionTitle">Preferências de Notificação</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
            <input type="checkbox" defaultChecked />
            Notificar-me quando um chamado for atribuído a mim
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
            <input type="checkbox" defaultChecked />
            Alertas de SLA próximo ao vencimento
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
            <input type="checkbox" />
            Resumo diário por e-mail
          </label>
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;
