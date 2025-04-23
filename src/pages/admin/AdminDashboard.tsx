
import DashboardLayout from '@/components/DashboardLayout';
import AdminStats from '@/components/admin/AdminStats';
import AdminUserManagement from '@/components/admin/AdminUserManagement';

const AdminDashboard = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage users, projects, and system settings</p>
        </div>
        
        <AdminStats />
        <AdminUserManagement />
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
