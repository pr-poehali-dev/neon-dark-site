import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-card border-b border-border p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <Icon name="MessageCircle" className="text-primary w-8 h-8" />
          <h1 className="text-2xl font-bold neon-text">TG Manager</h1>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Icon name="Menu" className="w-4 h-4 mr-2" />
            Главное меню
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Icon name="HelpCircle" className="w-4 h-4 mr-2" />
            FAQ
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Icon name="Settings" className="w-4 h-4 mr-2" />
            Настройки
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
