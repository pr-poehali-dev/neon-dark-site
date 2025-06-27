import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AccountsStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card className="hover:shadow-lg transition-all duration-300 animate-pulse-glow">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Всего аккаунтов</p>
              <p className="text-2xl font-bold text-primary">12</p>
            </div>
            <Icon name="Users" className="text-primary w-8 h-8" />
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Активные</p>
              <p className="text-2xl font-bold text-green-500">9</p>
            </div>
            <Icon name="CheckCircle" className="text-green-500 w-8 h-8" />
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Заблокированы</p>
              <p className="text-2xl font-bold text-red-500">2</p>
            </div>
            <Icon name="XCircle" className="text-red-500 w-8 h-8" />
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Офлайн</p>
              <p className="text-2xl font-bold text-red-500">1</p>
            </div>
            <Icon name="Clock" className="text-red-500 w-8 h-8" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsStats;
