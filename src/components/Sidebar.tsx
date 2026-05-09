import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import NovoChamadoModal from './NovoChamadoModal';
import { useAuth } from '../context/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { user, role } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { name: 'Painel Geral', icon: 'dashboard', path: '/' },
    { name: 'Meus Chamados', icon: 'confirmation_number', path: '/meus-chamados' },
    { name: 'Relatórios', icon: 'bar_chart', path: '/relatorios' },
    { name: 'Configurações', icon: 'settings', path: '/configuracoes' },
  ];

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebarHeader">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc21uFE399m04Pc0ftP10Qc6V6Z0fwJBSQfYAVUDdFhIOtIUAAS5V_qmCl2iNp9QEFF-DAdwdENin7DlDnJt8AKWm3PvN5TntR9rN5v-65Ye7HcpiQF1U7TJydJ1SDuYWQVKOXaCvFnnmFUrphpV-AJpj37zA5bi0MyQYXp6ktTES2OEcV-rSibMYFMqum_ZBu3H_VlADF5yz3C-iPuxaQML16M9XXWTJHF_Y_8qKvkJdjjUeU-dByQgvDEuhuapqY177dSwNyMt0"
            alt="TechSupport Logo"
            className="logo"
          />
          <div>
            <h1 className="title">TechSupport</h1>
            <p className="subtitle">Enterprise Portal</p>
          </div>
        </div>
        
        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `navItem ${isActive ? 'active' : ''}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
        
        <div className="sidebarFooter">
          <button className="newTicketBtn" onClick={() => setIsModalOpen(true)}>
            <span className="material-symbols-outlined">add</span>
            <span>Novo Chamado</span>
          </button>
          
          <div className="sidebarProfile">
            <div className="sidebarProfileImg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-primary)', color: 'white', fontWeight: 'bold' }}>
              {user?.email?.charAt(0).toUpperCase()}
            </div>
            <div className="sidebarProfileInfo">
              <span className="sidebarProfileName">{user?.email?.split('@')[0]}</span>
              <span className="sidebarProfileRole">{role === 'admin' ? 'Administrador' : 'Técnico'}</span>
            </div>
          </div>
        </div>
      </aside>

      <NovoChamadoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={() => {
          setIsModalOpen(false);
          window.location.reload();
        }} 
      />
    </>
  );
};

export default Sidebar;
