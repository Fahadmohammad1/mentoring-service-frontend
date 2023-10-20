import Sidebar from "@/components/ui/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Sidebar>{children}</Sidebar>
    </section>
  );
};

export default DashboardLayout;
