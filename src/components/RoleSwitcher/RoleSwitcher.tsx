import React, { useState, useRef, useEffect } from 'react';
import { Bot, Server, Layers, Layout, ShieldCheck, LifeBuoy, Check } from 'lucide-react';
import type { RoleKey, ProfileMetadata } from '../../types/portfolio.types';
import './RoleSwitcher.css';

interface RoleSwitcherProps {
  roles: ProfileMetadata[];
  activeRole: RoleKey;
  onSelectRole: (role: RoleKey) => void;
}

// Map each role to a clear Lucide icon
const getRoleIcon = (roleId: RoleKey) => {
  switch (roleId) {
    case 'zoho-developer':
      return <Bot size={14} className="role-icon" />;
    case 'backend-developer':
      return <Server size={14} className="role-icon" />;
    case 'fullstack-developer':
      return <Layers size={14} className="role-icon" />;
    case 'frontend-developer':
      return <Layout size={14} className="role-icon" />;
    case 'erp-engineer':
      return <ShieldCheck size={14} className="role-icon" />;
    case 'technical-support':
      return <LifeBuoy size={14} className="role-icon" />;
    default:
      return null;
  }
};

export const RoleSwitcher: React.FC<RoleSwitcherProps> = ({
  roles,
  activeRole,
  onSelectRole,
}) => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const handleScroll = () => {
    setIsScrolling(true);
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      setIsScrolling(false);
    }, 900);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="role-switcher-container no-print" aria-label="Target Role Selector">
      {/* Mobile & Small Tablet Dropdown View */}
      <div className="role-switcher-mobile">
        <label htmlFor="role-select" className="role-select-label">
          Profile:
        </label>
        <div className="role-select-wrapper">
          <select
            id="role-select"
            className="role-native-select"
            value={activeRole}
            onChange={(e) => onSelectRole(e.target.value as RoleKey)}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.label} ({role.badge})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Desktop Compact Segmented Chip Tabs with Auto-Hiding Scrollbar */}
      <div
        className={`role-switcher-tabs ${isScrolling ? 'is-scrolling' : ''}`}
        role="tablist"
        onScroll={handleScroll}
      >
        {roles.map((role) => {
          const isActive = role.id === activeRole;
          return (
            <button
              key={role.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              tabIndex={0}
              className={`role-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectRole(role.id)}
              title={`${role.label}: ${role.tagline}`}
            >
              <span className="role-tab-icon-wrap">{getRoleIcon(role.id)}</span>
              <span className="role-tab-label">{role.shortLabel}</span>
              {isActive && <Check size={12} className="role-active-check" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default RoleSwitcher;
