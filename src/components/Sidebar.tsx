import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
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
          <button className="newTicketBtn">
            <span className="material-symbols-outlined">add</span>
            <span>Novo Chamado</span>
          </button>
          
          {/* User Profile in Sidebar Bottom Left */}
          <div className="sidebarProfile">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5B7BHemjsrba5Zv1V57oNcU9CBt7Jp5K_DCdDVwjJ1AsCpdjnBLCi3GjDDo5qMOQSYK0Nzm-4448O6bdVxfsS0pNT3NBECPapVOaFVjBimiOcpQntQF7i9xVoSjPW6dyCwHlzKUZ2sMPsoAjcuBZk49CFf7I_1FaVhk0ytFvdzQnchHgcgDyMnDLhkVlnxDWbaJoPGKe1KKDzvgfIeBjtA2SFUn-I4Sz0L6NfHreyt6hz7lOkraoK91maoOD7Du8OPoZ-xRSwNqM" 
              alt="User" 
              className="sidebarProfileImg" 
            />
            <div className="sidebarProfileInfo">
              <span className="sidebarProfileName">Ricardo Silva</span>
              <span className="sidebarProfileRole">Engenheiro de Suporte</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
