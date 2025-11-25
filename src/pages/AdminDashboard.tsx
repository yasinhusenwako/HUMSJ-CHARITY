import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  DollarSign,
  Image,
  MessageSquare,
  Mail,
  BookOpen,
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AdminOverview from "./admin/AdminOverview";
import DonorsManagement from "./admin/DonorsManagement";
import SubscriptionsManagement from "./admin/SubscriptionsManagement";
import DonationsManagement from "./admin/DonationsManagement";
import GalleryManagement from "./admin/GalleryManagement";
import QuotesManagement from "./admin/QuotesManagement";
import ContactMessages from "./admin/ContactMessages";
import EmailLogs from "./admin/EmailLogs";

const AdminDashboard = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Get tab from URL hash (e.g., /admin#donors -> "donors")
    const hash = location.hash.replace("#", "");
    if (hash) {
      setActiveTab(hash);
    }
  }, [location.hash]);

  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage HUMSJ Charity Platform</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="donors" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Donors</span>
            </TabsTrigger>
            <TabsTrigger value="subscriptions" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span className="hidden sm:inline">Subscriptions</span>
            </TabsTrigger>
            <TabsTrigger value="donations" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span className="hidden sm:inline">Donations</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Image className="w-4 h-4" />
              <span className="hidden sm:inline">Gallery</span>
            </TabsTrigger>
            <TabsTrigger value="quotes" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Quotes</span>
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Messages</span>
            </TabsTrigger>
            <TabsTrigger value="emails" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email Logs</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <AdminOverview />
          </TabsContent>

          <TabsContent value="donors">
            <DonorsManagement />
          </TabsContent>

          <TabsContent value="subscriptions">
            <SubscriptionsManagement />
          </TabsContent>

          <TabsContent value="donations">
            <DonationsManagement />
          </TabsContent>

          <TabsContent value="gallery">
            <GalleryManagement />
          </TabsContent>

          <TabsContent value="quotes">
            <QuotesManagement />
          </TabsContent>

          <TabsContent value="messages">
            <ContactMessages />
          </TabsContent>

          <TabsContent value="emails">
            <EmailLogs />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
