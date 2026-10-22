import React from 'react';
import { ViewTab, UserSession } from '../types';

interface HeaderProps {
  currentTab: ViewTab;
  onSelectTab: (tab: ViewTab) => void;
  user: UserSession;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  user,
  onLogout,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0d0f14]/95 backdrop-blur-md border-b border-[#2a2f3f] px-6 lg:px-10 h-16 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo matching Figure 4.2 / 4.3 / 4.4 */}
        <button 
          onClick={() => onSelectTab('dashboard')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#5c6ef8] shadow-[0_0_10px_#5c6ef8]" />
          <span className="font-head font-extrabold text-lg text-white tracking-tight">
            Inventory <span className="text-[#7b8aff]">System</span>
          </span>
        </button>

        {/* Center Nav Pills: ONLY Dashboard, Products, Stock History */}
        <nav className="flex items-center gap-1.5 bg-[#13161e] p-1 rounded-xl border border-[#2a2f3f]">
          <button
            onClick={() => onSelectTab('dashboard')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              currentTab === 'dashboard'
                ? 'bg-[#1a233d] text-[#7b8aff] shadow-[0_0_12px_rgba(92,110,248,0.25)]'
                : 'text-[#8b92ab] hover:text-white'
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => onSelectTab('products')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              currentTab === 'products'
                ? 'bg-[#1a233d] text-[#7b8aff] shadow-[0_0_12px_rgba(92,110,248,0.25)]'
                : 'text-[#8b92ab] hover:text-white'
            }`}
          >
            Products
          </button>

          <button
            onClick={() => onSelectTab('history')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              currentTab === 'history'
                ? 'bg-[#1a233d] text-[#7b8aff] shadow-[0_0_12px_rgba(92,110,248,0.25)]'
                : 'text-[#8b92ab] hover:text-white'
            }`}
          >
            Stock History
          </button>
        </nav>

        {/* Right Section matching Figure 4.2 / 4.3 / 4.4: "• Abhi" & "Sign out" */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#13161e] border border-[#2a2f3f] text-xs font-mono text-white">
            <span className="w-2 h-2 rounded-full bg-[#22d3a3] shadow-[0_0_8px_#22d3a3]" />
            <span className="font-semibold">{user.username || 'Abhi'}</span>
          </div>
          <button
            onClick={onLogout}
            className="px-3 py-1 rounded-lg border border-[#2a2f3f] text-[#8b92ab] hover:text-white hover:bg-[#1a1e28] text-xs font-semibold transition-all cursor-pointer"
          >
            Sign out
          </button>
        </div>

      </div>
    </header>
  );
};
