import React, { useState } from 'react';
import './Header.css';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, role, signOut } = useAuth();

  return (
    <header className="header">
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <button className="menuBtn" onClick={onToggleSidebar}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="searchContainer">
          <div className="searchWrapper">
            <input
              type="text"
              className="searchInput"
              placeholder="Buscar chamados por título ou usuário..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  // handle search
                }
              }}
            />
            <button className="searchActionBtn">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="actions">
        {/* Status Filter Combo */}
        <select className="statusFilterCombo">
          <option value="">Filtrar por Status</option>
          <option value="aberto">Em Aberto</option>
          <option value="andamento">Em Andamento</option>
          <option value="concluido">Concluído</option>
        </select>
        
        {/* Help Button with dropdown for Help Info (requested feature) */}
        <div className="helpContainer">
          <button className="iconBtn" title="Ajuda">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>

        <div className="divider"></div>
        
        {/* Profile Section */}
        <div className="profileContainer">
          <button 
            className="profileBtn" 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <span className="profileName">{user?.email?.split('@')[0] || 'Usuário'} ({role === 'admin' ? 'Admin' : 'Técnico'})</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              expand_more
            </span>
          </button>
          
          {isProfileOpen && (
            <div className="profileDropdown">
              <div className="dropdownItem">
                <span className="material-symbols-outlined">person</span>
                <span>{user?.email}</span>
              </div>
              <div className="dropdownDivider"></div>
              <button className="dropdownItem textError" onClick={signOut}>
                <span className="material-symbols-outlined">logout</span>
                <span>Sair</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
