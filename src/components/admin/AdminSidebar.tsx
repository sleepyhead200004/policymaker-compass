import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, Users, LogOut } from 'lucide-react';
import { authApi } from '@/lib/api';
import { Button } from '@/components/ui/button';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authApi.logout();
    navigate('/admin/login');
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
      isActive
        ? 'bg-primary text-primary-foreground'
        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
    }`;

  return (
    <aside className="w-64 min-h-screen bg-card border-r border-border p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-foreground">Admin Panel</h1>
      </div>

      <nav className="flex-1 space-y-2">
        <NavLink to="/admin" end className={linkClass}>
          <LayoutDashboard className="h-5 w-5" />
          Dashboard
        </NavLink>
        <NavLink to="/admin/blogs" className={linkClass}>
          <FileText className="h-5 w-5" />
          Blogs
        </NavLink>
        <NavLink to="/admin/team" className={linkClass}>
          <Users className="h-5 w-5" />
          Team
        </NavLink>
      </nav>

      <Button
        variant="ghost"
        className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground"
        onClick={handleLogout}
      >
        <LogOut className="h-5 w-5" />
        Logout
      </Button>
    </aside>
  );
};

export default AdminSidebar;
