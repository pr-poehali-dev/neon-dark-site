import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const ProfileSettings = () => {
  return (
    <Card className="mb-6 hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Icon name="User" className="text-primary w-5 h-5" />
          <span>Настройки профиля</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="api-id">API ID</Label>
            <Input
              id="api-id"
              placeholder="Введите API ID"
              className="focus:ring-primary"
            />
          </div>
          <div>
            <Label htmlFor="api-hash">API Hash</Label>
            <Input
              id="api-hash"
              placeholder="Введите API Hash"
              className="focus:ring-primary"
            />
          </div>
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90 neon-glow">
          <Icon name="Save" className="w-4 h-4 mr-2" />
          Сохранить настройки
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileSettings;
