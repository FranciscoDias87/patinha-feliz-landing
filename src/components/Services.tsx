import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Heart, Stethoscope, Sparkles, ShieldCheck, Clock } from "lucide-react";

const Services = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar um serviço para meu pet.', '_blank');
  };

  const banhoTosaServices = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Banho Relaxante",
      description: "Banho com produtos premium, massagem e secagem com carinho especial.",
      price: "A partir de R$ 35"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Tosa Profissional",
      description: "Corte estilizado conforme a raça ou preferência do tutore com máquinas esterilizadas.",
      price: "A partir de R$ 45"
    },
    {
      icon: <Heart className="w-8 h-8 fill-current" />,
      title: "Hidratação & SPA",
      description: "Tratamento hidratante para pelagem sedosa e saudável, com aromaterapia.",
      price: "A partir de R$ 55"
    }
  ];

  const veterinaryServices = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Consulta Geral",
      description: "Avaliação completa da saúde do seu pet com veterinário experiente.",
      price: "A partir de R$ 80"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Vacinação",
      description: "Aplicação de vacinas com acompanhamento e carteirinha atualizada.",
      price: "A partir de R$ 60"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Check-up Completo",
      description: "Exames preventivos e avaliação geral para manter seu pet sempre saudável.",
      price: "A partir de R$ 120"
    }
  ];

  return (
    <>
      {/* Banho & Tosa Section */}
      <section id="banho-tosa" className="py-20 bg-gradient-to-br from-secondary-soft to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Scissors className="w-6 h-6" />
              <span className="font-inter font-medium text-sm uppercase tracking-wide">
                Banho & Tosa
              </span>
              <Scissors className="w-6 h-6" />
            </div>
            <h2 className="font-nunito font-bold text-4xl md:text-5xl text-foreground mb-6">
              Seu pet sempre{" "}
              <span className="text-primary">lindo e cheiroso!</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
              Oferecemos serviços completos de higiene e beleza para deixar seu companheiro 
              sempre bem cuidado e feliz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {banhoTosaServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary-soft text-primary rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="font-nunito text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="font-nunito font-bold text-lg text-primary">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Agendar Banho & Tosa
            </Button>
          </div>
        </div>
      </section>

      {/* Veterinário Section */}
      <section id="veterinario" className="py-20 bg-gradient-to-br from-accent-soft to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-accent mb-4">
              <Stethoscope className="w-6 h-6" />
              <span className="font-inter font-medium text-sm uppercase tracking-wide">
                Atendimento Veterinário
              </span>
              <Stethoscope className="w-6 h-6" />
            </div>
            <h2 className="font-nunito font-bold text-4xl md:text-5xl text-foreground mb-6">
              Saúde em{" "}
              <span className="text-accent">primeiro lugar!</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
              Nossa equipe veterinária experiente cuida da saúde do seu pet com dedicação 
              e tecnologia de ponta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {veterinaryServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-accent-soft text-accent rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="font-nunito text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="font-nunito font-bold text-lg text-accent">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;