import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent, formType: string) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-secondary" style={{ fontFamily: 'Cormorant, serif' }}>
              Милана Недвижимость
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#lawyer" className="text-foreground hover:text-primary transition-colors">Юрист</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-medium">20 лет на рынке недвижимости</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
                Недвижимость в России для граждан Казахстана
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Находимся на границе в Оренбурге. Гарантируем простоту, быстроту и чистоту сделки по всей России. 
                Все услуги для покупателей — бесплатно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
                  <Icon name="Search" size={20} className="mr-2" />
                  Подобрать квартиру
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Консультация
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'Cormorant, serif' }}>20+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'Cormorant, serif' }}>100%</div>
                  <div className="text-sm text-muted-foreground">чистота сделки</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'Cormorant, serif' }}>0₽</div>
                  <div className="text-sm text-muted-foreground">для покупателей</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/5a231341-a871-4292-955b-388fd0efebf7/files/f591832e-212a-4ab0-b18f-ae828b7e2ab3.jpg" 
                alt="Премиальная недвижимость"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
              Почему выбирают нас
            </h2>
            <p className="text-lg text-muted-foreground">
              Мы находимся в Оренбурге — на границе с Казахстаном, что делает сотрудничество максимально удобным для вас
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "MapPin",
                title: "Удобное расположение",
                description: "Находимся в Оренбурге на границе с Казахстаном. Легко добраться для личной встречи"
              },
              {
                icon: "Shield",
                title: "Гарантия чистоты",
                description: "20 лет опыта. Проверяем всю документацию и юридическую чистоту каждого объекта"
              },
              {
                icon: "Zap",
                title: "Быстрая сделка",
                description: "Оформляем документы в кратчайшие сроки. Берём все вопросы на себя"
              },
              {
                icon: "Users",
                title: "Работа по всей России",
                description: "Помогаем найти недвижимость в любом регионе России с нашей гарантией"
              },
              {
                icon: "DollarSign",
                title: "Бесплатно для покупателей",
                description: "Все наши услуги по подбору и покупке недвижимости — абсолютно бесплатны"
              },
              {
                icon: "Award",
                title: "Полное сопровождение",
                description: "От первого звонка до получения ключей — мы с вами на каждом этапе"
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Помогаем гражданам Казахстана приобрести недвижимость в России с полным юридическим сопровождением
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/5a231341-a871-4292-955b-388fd0efebf7/files/bef24209-8513-4528-b6d2-c501956fccf9.jpg"
                alt="Покупка квартир"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                  Покупка квартир в России
                </h3>
                <p className="text-muted-foreground mb-6">
                  Подберём идеальную квартиру по вашим критериям в любом городе России. 
                  Проверим документы, организуем просмотры и оформим сделку.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Подбор объектов по вашим критериям",
                    "Проверка юридической чистоты",
                    "Организация просмотров",
                    "Полное сопровождение сделки",
                    "Помощь с регистрацией"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Подобрать квартиру
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/5a231341-a871-4292-955b-388fd0efebf7/files/f0a8ce30-ffc0-4388-9305-edcbf7b81ba7.jpg"
                alt="Юридическое сопровождение"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                  Юридическое сопровождение
                </h3>
                <p className="text-muted-foreground mb-6">
                  Полная юридическая поддержка на всех этапах. Наши специалисты обеспечат 
                  безопасность и законность сделки.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Проверка всех документов",
                    "Консультации по законодательству РФ",
                    "Составление договоров",
                    "Регистрация права собственности",
                    "Защита ваших интересов"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  Проконсультироваться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="lawyer" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                <Icon name="Scale" className="text-primary" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
                Бесплатная консультация юриста
              </h2>
              <p className="text-lg text-muted-foreground">
                Получите ответы на все вопросы о покупке недвижимости в России
              </p>
            </div>
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={(e) => handleSubmit(e, 'lawyer')} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ваше имя
                    </label>
                    <Input 
                      type="text"
                      placeholder="Введите имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Номер телефона
                    </label>
                    <Input 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-14">
                    <Icon name="Send" size={20} className="mr-2" />
                    Получить консультацию
                  </Button>
                  <p className="text-sm text-center text-muted-foreground">
                    Мы перезвоним в течение 15 минут
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-secondary text-white border-0 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              <CardContent className="relative p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                      Готовы купить квартиру в России?
                    </h3>
                    <p className="text-white/90 mb-6">
                      Оставьте заявку, и мы подберём для вас лучшие варианты с гарантией чистоты сделки
                    </p>
                  </div>
                  <form onSubmit={(e) => handleSubmit(e, 'cta')} className="space-y-4">
                    <Input 
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12 bg-white"
                    />
                    <Input 
                      type="tel"
                      placeholder="Номер телефона"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-12 bg-white"
                    />
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white h-12">
                      Отправить заявку
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
              Контакты
            </h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                  Телефон
                </h3>
                <p className="text-muted-foreground mb-4">Звоните ежедневно с 9:00 до 21:00</p>
                <a href="tel:+73532123456" className="text-primary font-medium hover:underline">
                  +7 (3532) 12-34-56
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                  Адрес
                </h3>
                <p className="text-muted-foreground mb-4">Приезжайте к нам в офис</p>
                <p className="text-foreground">г. Оренбург, ул. Центральная, 123</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                  Email
                </h3>
                <p className="text-muted-foreground mb-4">Пишите в любое время</p>
                <a href="mailto:info@milana-realty.ru" className="text-primary font-medium hover:underline">
                  info@milana-realty.ru
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} />
                <span className="text-xl font-bold" style={{ fontFamily: 'Cormorant, serif' }}>
                  Милана Недвижимость
                </span>
              </div>
              <p className="text-white/80 text-sm">
                20 лет помогаем гражданам Казахстана приобретать недвижимость в России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#lawyer" className="hover:text-primary transition-colors">Юрист</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Покупка квартир</li>
                <li>Покупка домов</li>
                <li>Коммерческая недвижимость</li>
                <li>Юридическое сопровождение</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>г. Оренбург</li>
                <li>ул. Центральная, 123</li>
                <li>+7 (3532) 12-34-56</li>
                <li>info@milana-realty.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 Милана Недвижимость. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
