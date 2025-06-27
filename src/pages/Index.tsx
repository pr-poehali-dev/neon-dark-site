import Header from "@/components/Header";
import ProfileSettings from "@/components/ProfileSettings";
import AccountsStats from "@/components/AccountsStats";
import MainFunctions from "@/components/MainFunctions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark font-roboto">
      <Header />

      <main className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 neon-text">
            Панель управления Telegram
          </h2>
          <p className="text-muted-foreground">
            Управляйте множественными аккаунтами из одного места
          </p>
        </div>

        <ProfileSettings />
        <AccountsStats />
        <MainFunctions />
      </main>
    </div>
  );
};

export default Index;
