import React, { useState } from 'react';
import './Header.css';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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
          {/* We will implement the dropdown info here later */}
        </div>

        <div className="divider"></div>
        
        {/* Profile Section */}
        <div className="profileContainer">
          <button 
            className="profileBtn" 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <span className="profileName">Ricardo Silva</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              expand_more
            </span>
          </button>
          
          {isProfileOpen && (
            <div className="profileDropdown">
              <div className="dropdownItem">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5B7BHemjsrba5Zv1V57oNcU9CBt7Jp5K_DCdDVwjJ1AsCpdjnBLCi3GjDDo5qMOQSYK0Nzm-4448O6bdVxfsS0pNT3NBECPapVOaFVjBimiOcpQntQF7i9xVoSjPW6dyCwHlzKUZ2sMPsoAjcuBZk49CFf7I_1FaVhk0ytFvdzQnchHgcgDyMnDLhkVlnxDWbaJoPGKe1KKDzvgfIeBjtA2SFUn-I4Sz0L6NfHreyt6hz7lOkraoK91maoOD7Du8OPoZ-xRSwNqM"
                  alt="Perfil"
                  className="dropdownImg"
                />
                <span>Perfil do Usuário</span>
              </div>
              <div className="dropdownDivider"></div>
              <button className="dropdownItem textError">
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
