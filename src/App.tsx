import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Layout Components
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';

// Page Components (Lazy Loading)
const MarketingPage = lazy(() => import('./pages/MarketingPage'));
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const SimpleLoginPage = lazy(() => import('./pages/auth/SimpleLoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const HomeSimplePage = lazy(() => import('./pages/HomeSimplePage'));

// Project Management
const ModernProjectPage = lazy(() => import('./pages/projects/ModernProjectPage'));
const ProjectDetailPage = lazy(() => import('./pages/projects/ProjectDetailPage'));
const ConstructionDiaryPage = lazy(() => import('./pages/projects/ConstructionDiaryPage'));
const MilestonesPage = lazy(() => import('./pages/projects/MilestonesPage'));

// Customer Management
const ModernCustomerPage = lazy(() => import('./pages/customers/ModernCustomerPage'));
const ModernCompanyPage = lazy(() => import('./pages/customers/ModernCompanyPage'));

// Geo & Maps
const TiefbauMapPage = lazy(() => import('./pages/geo/TiefbauMapPage'));
const TiefbauMapSearchablePage = lazy(() => import('./pages/geo/TiefbauMapSearchablePage'));
const SimpleTiefbauMapPage = lazy(() => import('./pages/geo/SimpleTiefbauMapPage'));
const NewTiefbauMapPage = lazy(() => import('./pages/geo/NewTiefbauMapPage'));
const TiefbauMapFixPage = lazy(() => import('./pages/geo/TiefbauMapFixPage'));

// Soil Analysis (Premium)
const BodenAnalysePage = lazy(() => import('./pages/geo/BodenAnalysePage'));
const BodenklassenOverlayPage = lazy(() => import('./pages/geo/BodenklassenOverlayPage'));
const BodenanalyseTestPage = lazy(() => import('./pages/geo/BodenanalyseTestPage'));

// Specialized Geo Features
const DenkmalAtlasPage = lazy(() => import('./pages/geo/DenkmalAtlasPage'));
const StreetModulesNewPage = lazy(() => import('./pages/geo/StreetModulesNewPage'));

// Calculations
const KostenkalkulationPage = lazy(() => import('./pages/calculations/KostenkalkulationPage'));
const MaschinenAuswahlPage = lazy(() => import('./pages/calculations/MaschinenAuswahlPage'));

// Data Quality & Analytics
const DataQualityPage = lazy(() => import('./pages/analytics/DataQualityPage'));
const ModernDataQualityPage = lazy(() => import('./pages/analytics/ModernDataQualityPage'));
const DataQualityDashboardPage = lazy(() => import('./pages/analytics/DataQualityDashboardPage'));
const DBStructureQualityPage = lazy(() => import('./pages/analytics/DBStructureQualityPage'));
const DBStructureFixPage = lazy(() => import('./pages/analytics/DBStructureFixPage'));

// Admin Pages
const AdminPage = lazy(() => import('./pages/admin/AdminPage'));
const UserManagementPage = lazy(() => import('./pages/admin/UserManagementPage'));
const ModernUserManagementPage = lazy(() => import('./pages/admin/ModernUserManagementPage'));
const SystemLogsPage = lazy(() => import('./pages/admin/SystemLogsPage'));
const SqlAnalyticsPage = lazy(() => import('./pages/admin/SqlAnalyticsPage'));
const BackupStatusPage = lazy(() => import('./pages/admin/BackupStatusPage'));
const DeploymentDocsPage = lazy(() => import('./pages/admin/DeploymentDocsPage'));

// Developer Tools
const DeveloperDocumentationPage = lazy(() => import('./pages/admin/DeveloperDocumentationPage'));
const TestingGuidePage = lazy(() => import('./pages/admin/TestingGuidePage'));
const SystemAnalysisPage = lazy(() => import('./pages/admin/SystemAnalysisPage'));
const SystemOptimizationPage = lazy(() => import('./pages/admin/SystemOptimizationPage'));

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // TODO: Implement authentication check
  const isAuthenticated = true; // Placeholder
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

// Admin Protected Route
const AdminProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // TODO: Implement admin check
  const isAdmin = true; // Placeholder
  
  return isAdmin ? <>{children}</> : <Navigate to="/dashboard" />;
};

// Role-based Protected Route
const RoleProtectedRoute = ({ children, roles }: { children: React.ReactNode; roles: string[] }) => {
  // TODO: Implement role check
  const userRole = 'admin'; // Placeholder
  
  return roles.includes(userRole) ? <>{children}</> : <Navigate to="/dashboard" />;
};

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
          <Route path="/simple-login" element={<AuthLayout><SimpleLoginPage /></AuthLayout>} />
          
          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="home-page" element={<HomePage />} />
            <Route path="home-simple" element={<HomeSimplePage />} />
            
            {/* Project Management */}
            <Route path="modern-project-page" element={<ModernProjectPage />} />
            <Route path="project-detail-page" element={<ProjectDetailPage />} />
            <Route path="construction-diary-page" element={<ConstructionDiaryPage />} />
            <Route path="milestones-page" element={<MilestonesPage />} />
            
            {/* Customer Management */}
            <Route path="modern-customer-page" element={<ModernCustomerPage />} />
            <Route path="modern-company-page" element={<ModernCompanyPage />} />
            
            {/* Geo & Maps */}
            <Route path="tiefbau-map" element={<TiefbauMapPage />} />
            <Route path="tiefbau-map-searchable" element={<TiefbauMapSearchablePage />} />
            <Route path="simple-tiefbau-map" element={<SimpleTiefbauMapPage />} />
            <Route path="new-tiefbau-map" element={<NewTiefbauMapPage />} />
            <Route path="tiefbau-map-fix" element={<TiefbauMapFixPage />} />
            
            {/* Soil Analysis (Premium) */}
            <Route path="BodenAnalyse" element={<BodenAnalysePage />} />
            <Route path="bodenklassen-overlay-page" element={<BodenklassenOverlayPage />} />
            <Route path="bodenanalyse-test" element={<BodenanalyseTestPage />} />
            
            {/* Specialized Geo Features */}
            <Route path="denkmal-atlas-page" element={<DenkmalAtlasPage />} />
            <Route path="street-modules-new" element={<StreetModulesNewPage />} />
            
            {/* Calculations */}
            <Route path="kostenkalkulation" element={<KostenkalkulationPage />} />
            <Route path="MaschinenAuswahl" element={<MaschinenAuswahlPage />} />
            
            {/* Data Quality & Analytics */}
            <Route path="data-quality-page" element={<DataQualityPage />} />
            <Route path="modern-data-quality-page" element={<ModernDataQualityPage />} />
            <Route path="data-quality-dashboard" element={<DataQualityDashboardPage />} />
            <Route path="db-structure-quality-page" element={<DBStructureQualityPage />} />
            <Route path="db-structure-fix-page" element={<DBStructureFixPage />} />
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminProtectedRoute><AdminLayout /></AdminProtectedRoute>}>
            <Route index element={<AdminPage />} />
            <Route path="user-management" element={<UserManagementPage />} />
            <Route path="modern-user-management" element={<ModernUserManagementPage />} />
            <Route path="system-logs" element={<SystemLogsPage />} />
            <Route path="sql-analytics" element={<SqlAnalyticsPage />} />
            <Route path="backup-status" element={<BackupStatusPage />} />
            <Route path="deployment-docs" element={<DeploymentDocsPage />} />
            <Route path="developer-documentation-page" element={<DeveloperDocumentationPage />} />
            <Route path="testing-guide-page" element={<TestingGuidePage />} />
            <Route path="system-analysis-page" element={<SystemAnalysisPage />} />
            <Route path="system-optimization" element={<SystemOptimizationPage />} />
          </Route>
          
          {/* 404 Route */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;