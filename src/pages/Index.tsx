import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const tours = [
    {
      id: 1,
      name: "Лесная тропа",
      duration: "3 часа",
      difficulty: "Легкий",
      price: "4500 ₽",
      description: "Спокойная поездка по лесным тропам для новичков",
      features: ["Инструктаж", "Экипировка", "Фотосессия"]
    },
    {
      id: 2,
      name: "Горные вершины",
      duration: "6 часов",
      difficulty: "Сложный",
      price: "8900 ₽",
      description: "Экстремальное приключение с подъемом на горные склоны",
      features: ["Профи-гид", "Обед", "Сертификат"]
    },
    {
      id: 3,
      name: "Речные переправы",
      duration: "4 часа",
      difficulty: "Средний",
      price: "6200 ₽",
      description: "Захватывающий маршрут с переправами через реки",
      features: ["Водонепроницаемая экипировка", "Страховка", "Снэки"]
    }
  ];

  const vehicles = [
    {
      model: "Yamaha Grizzly 700",
      engine: "686 см³",
      power: "46 л.с.",
      price: "2500 ₽/день"
    },
    {
      model: "Can-Am Outlander 650",
      engine: "650 см³", 
      power: "62 л.с.",
      price: "3200 ₽/день"
    },
    {
      model: "Polaris Sportsman 850",
      engine: "850 см³",
      power: "78 л.с.",
      price: "4100 ₽/день"
    }
  ];

  const routes = [
    {
      name: "Сосновый бор",
      distance: "15 км",
      terrain: "Лесные тропы",
      time: "2-3 часа"
    },
    {
      name: "Каменистые склоны",
      distance: "25 км", 
      terrain: "Горы и камни",
      time: "4-5 часов"
    },
    {
      name: "Болотистые низины",
      distance: "18 км",
      terrain: "Грязь и вода",
      time: "3-4 часа"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={32} className="text-accent" />
              <h1 className="text-2xl font-roboto-slab font-bold">Eoturs</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tours" className="hover:text-accent transition-colors">Туры</a>
              <a href="#vehicles" className="hover:text-accent transition-colors">Техника</a>
              <a href="#prices" className="hover:text-accent transition-colors">Цены</a>
              <a href="#routes" className="hover:text-accent transition-colors">Маршруты</a>
              <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Забронировать
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-earth-200 via-sand-100 to-forest-100 flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-roboto-slab font-bold text-foreground mb-6 leading-tight">
              Приключения на <span className="text-accent">квадроциклах</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Откройте для себя невероятные маршруты и испытайте адреналин от езды по бездорожью. 
              Профессиональные инструкторы, современная техника и незабываемые эмоции ждут вас!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Выбрать тур
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-accent" />
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto-slab font-bold text-foreground mb-4">Популярные туры</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите приключение по душе — от спокойных прогулок для новичков до экстремальных маршрутов для опытных райдеров
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-2 border-border/50">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={tour.difficulty === 'Легкий' ? 'secondary' : tour.difficulty === 'Средний' ? 'default' : 'destructive'}>
                      {tour.difficulty}
                    </Badge>
                    <span className="text-2xl font-roboto-slab font-bold text-accent">{tour.price}</span>
                  </div>
                  <CardTitle className="text-xl font-roboto-slab">{tour.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{tour.duration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {tour.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="vehicles" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto-slab font-bold text-foreground mb-4">Наша техника</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современные квадроциклы ведущих мировых производителей для максимального комфорта и безопасности
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="bg-card border-2 border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-roboto-slab text-lg">{vehicle.model}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Объем:</span>
                      <span className="font-semibold">{vehicle.engine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Мощность:</span>
                      <span className="font-semibold">{vehicle.power}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Аренда:</span>
                      <span className="text-lg font-roboto-slab font-bold text-accent">{vehicle.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prices" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto-slab font-bold text-foreground mb-4">Прозрачные цены</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Никаких скрытых доплат — все включено в стоимость
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center bg-card border-2 border-border/50">
              <CardHeader>
                <Icon name="Users" size={40} className="text-accent mx-auto mb-2" />
                <CardTitle className="font-roboto-slab">Групповой тур</CardTitle>
                <CardDescription>От 5 человек</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent mb-2">3500 ₽</div>
                <p className="text-sm text-muted-foreground">за человека</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card border-2 border-border/50">
              <CardHeader>
                <Icon name="User" size={40} className="text-accent mx-auto mb-2" />
                <CardTitle className="font-roboto-slab">Индивидуальный</CardTitle>
                <CardDescription>1-2 человека</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent mb-2">5500 ₽</div>
                <p className="text-sm text-muted-foreground">за человека</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card border-2 border-border/50">
              <CardHeader>
                <Icon name="Calendar" size={40} className="text-accent mx-auto mb-2" />
                <CardTitle className="font-roboto-slab">Почасовая аренда</CardTitle>
                <CardDescription>Минимум 2 часа</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent mb-2">1200 ₽</div>
                <p className="text-sm text-muted-foreground">за час</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card border-2 border-border/50 border-accent">
              <CardHeader>
                <Badge className="bg-accent text-accent-foreground mb-2">Хит</Badge>
                <Icon name="Star" size={40} className="text-accent mx-auto mb-2" />
                <CardTitle className="font-roboto-slab">VIP пакет</CardTitle>
                <CardDescription>Все включено</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent mb-2">12900 ₽</div>
                <p className="text-sm text-muted-foreground">за день</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto-slab font-bold text-foreground mb-4">Маршруты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Разнообразные трассы для любого уровня подготовки
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {routes.map((route, index) => (
              <Card key={index} className="bg-card border-2 border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-roboto-slab text-lg flex items-center gap-2">
                    <Icon name="MapPin" size={20} className="text-accent" />
                    {route.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Route" size={16} className="text-muted-foreground" />
                      <span className="text-sm">Расстояние: {route.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Mountain" size={16} className="text-muted-foreground" />
                      <span className="text-sm">Тип: {route.terrain}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span className="text-sm">Время: {route.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-roboto-slab font-bold mb-4">Быстрое бронирование</h2>
              <p className="text-lg text-primary-foreground/80">
                Оставьте заявку, и мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            
            <Card className="bg-card/95 backdrop-blur">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Введите имя" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="tour">Выберите тур</Label>
                      <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                        <option>Лесная тропа</option>
                        <option>Горные вершины</option>
                        <option>Речные переправы</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Желаемая дата</Label>
                      <Input id="date" type="date" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Дополнительные пожелания</Label>
                    <Textarea id="message" placeholder="Расскажите о своих предпочтениях..." rows={3} />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Забронировать приключение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto-slab font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Мы всегда готовы ответить на ваши вопросы
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-card border-2 border-border/50">
              <CardContent className="p-8">
                <Icon name="Phone" size={40} className="text-accent mx-auto mb-4" />
                <h3 className="text-lg font-roboto-slab font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                <p className="text-muted-foreground">+7 (925) 987-65-43</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card border-2 border-border/50">
              <CardContent className="p-8">
                <Icon name="Mail" size={40} className="text-accent mx-auto mb-4" />
                <h3 className="text-lg font-roboto-slab font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@eoturs.ru</p>
                <p className="text-muted-foreground">booking@eoturs.ru</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card border-2 border-border/50">
              <CardContent className="p-8">
                <Icon name="MapPin" size={40} className="text-accent mx-auto mb-4" />
                <h3 className="text-lg font-roboto-slab font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">Московская область</p>
                <p className="text-muted-foreground">г. Сергиев Посад</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" size={28} className="text-accent" />
                <h3 className="text-xl font-roboto-slab font-bold">Eoturs</h3>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Незабываемые приключения на квадроциклах в живописных местах Подмосковья
              </p>
            </div>
            
            <div>
              <h4 className="font-roboto-slab font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Туры на квадроциклах</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Аренда техники</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Корпоративные мероприятия</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Обучение вождению</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-roboto-slab font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Правила безопасности</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Отзывы клиентов</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Галерея</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-roboto-slab font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-primary-foreground hover:text-accent">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-primary-foreground hover:text-accent">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-primary-foreground hover:text-accent">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-primary-foreground/20" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Eoturs. Все права защищены.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Лицензия №12345 | ИП Иванов И.И.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;