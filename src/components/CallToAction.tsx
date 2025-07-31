import { Button } from "@/components/ui/button";
import { Heart, Phone, Clock, MapPin } from "lucide-react";

const CallToAction = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar um serviço para meu pet.', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-12">
          {/* Main CTA Content */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
              <Heart className="w-6 h-6 fill-current animate-bounce-gentle" />
              <span className="font-inter font-medium text-sm uppercase tracking-wide">
                Agende Hoje Mesmo
              </span>
              <Heart className="w-6 h-6 fill-current animate-bounce-gentle" />
            </div>
            
            <h2 className="font-nunito font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Seu pet merece o{" "}
              <span className="text-sunshine">melhor cuidado!</span>
            </h2>
            
            <p className="font-inter text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Entre em contato conosco pelo WhatsApp e agende o serviço ideal para seu companheiro. 
              Estamos prontos para receber vocês com todo carinho que merecem!
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="mx-auto w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="font-nunito font-bold text-white">WhatsApp</div>
              <div className="text-primary-foreground/80">(11) 99999-9999</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="mx-auto w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="font-nunito font-bold text-white">Horário</div>
              <div className="text-primary-foreground/80">Seg-Sáb: 8h às 18h</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="mx-auto w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="font-nunito font-bold text-white">Localização</div>
              <div className="text-primary-foreground/80">São Paulo, SP</div>
            </div>
          </div>

          {/* Big CTA Button */}
          <div className="space-y-8">
            <Button 
              onClick={openWhatsApp}
              size="lg"
              className="bg-white hover:bg-white/90 text-primary font-bold px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 text-xl group"
            >
              <svg className="w-8 h-8 mr-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
              </svg>
              Agendar pelo WhatsApp
            </Button>
            
            <p className="text-primary-foreground/70 text-sm">
              Resposta rápida • Atendimento personalizado • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;