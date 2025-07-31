import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pet.jpg";
import { Heart, Star } from "lucide-react";

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar um serviço para meu pet.', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-primary-soft via-background to-secondary-soft">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-primary">
                <Heart className="w-5 h-5 fill-current animate-bounce-gentle" />
                <span className="font-inter font-medium text-sm uppercase tracking-wide">
                  Pet Shop de Confiança
                </span>
                <Heart className="w-5 h-5 fill-current animate-bounce-gentle" />
              </div>
              
              <h1 className="font-nunito font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                Cuidamos do seu pet como se fosse{" "}
                <span className="text-primary">da família!</span>
              </h1>
              
              <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                No Patinha Feliz, oferecemos serviços completos de banho, tosa e atendimento veterinário 
                com muito carinho e profissionalismo. Seu pet merece o melhor cuidado!
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-sunshine text-sunshine" />
                  ))}
                </div>
                <span className="font-medium">5.0 • 200+ clientes felizes</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={openWhatsApp}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Agendar Agora
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('banho-tosa')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg"
              >
                Ver Serviços
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="text-center lg:text-left">
                <div className="font-nunito font-bold text-2xl text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-nunito font-bold text-2xl text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Emergência veterinária</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-nunito font-bold text-2xl text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Produtos premium</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Pet feliz após cuidados no Patinha Feliz" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-sunshine text-sunshine-foreground p-4 rounded-2xl shadow-lg animate-float">
              <Heart className="w-8 h-8 fill-current" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-4 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <Star className="w-8 h-8 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;