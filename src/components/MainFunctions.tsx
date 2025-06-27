import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const MainFunctions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Добавить аккаунт */}
      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-primary">
            <Icon name="UserPlus" className="w-5 h-5" />
            <span>Добавить аккаунт</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="phone">Номер телефона</Label>
            <Input id="phone" placeholder="+7 999 123 45 67" />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 neon-glow">
            <Icon name="Plus" className="w-4 h-4 mr-2" />
            Добавить
          </Button>
        </CardContent>
      </Card>

      {/* Проверить аккаунты */}
      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-primary">
            <Icon name="Search" className="w-5 h-5" />
            <span>Проверить аккаунты</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Проверка статуса всех подключенных аккаунтов
          </p>
          <Button className="w-full bg-accent hover:bg-accent/90">
            <Icon name="RefreshCw" className="w-4 h-4 mr-2" />
            Проверить все
          </Button>
        </CardContent>
      </Card>

      {/* Реферальная ссылка */}
      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-primary">
            <Icon name="Link" className="w-5 h-5" />
            <span>Реферальная ссылка</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="ref-link">Ссылка</Label>
            <Input id="ref-link" placeholder="https://t.me/bot?start=ref123" />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90">
            <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
            Перейти по ссылке
          </Button>
        </CardContent>
      </Card>

      {/* Очистить от чатов */}
      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-destructive">
            <Icon name="Trash2" className="w-5 h-5" />
            <span>Очистить от чатов</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Удаление всех чатов из выбранных аккаунтов
          </p>
          <Button variant="destructive" className="w-full">
            <Icon name="Trash" className="w-4 h-4 mr-2" />
            Очистить аккаунты
          </Button>
        </CardContent>
      </Card>

      {/* Группы/каналы */}
      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-primary">
            <Icon name="Users" className="w-5 h-5" />
            <span>Вступить в группы/каналы</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="group-links">Ссылки (по одной на строку)</Label>
            <Textarea
              id="group-links"
              placeholder="https://t.me/channel1&#10;https://t.me/group1&#10;https://t.me/channel2"
              rows={4}
            />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 neon-glow">
            <Icon name="UserPlus" className="w-4 h-4 mr-2" />
            Вступить во все
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MainFunctions;
