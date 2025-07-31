import { Heart, MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os serviços.', '_blank');
  };

  return (
    <footer id="contato" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 fill-current text-primary" />
              <span className="font-nunito font-bold text-2xl">Patinha Feliz</span>
            </div>
            
            <p className="font-inter text-background/80 leading-relaxed max-w-md">
              Cuidamos do seu pet com carinho, dedicação e profissionalismo há mais de 10 anos. 
              Seu companheiro merece o melhor!
            </p>

            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-nunito font-bold text-xl text-primary">Contato</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-background/80">
                  <div>Rua das Flores, 123</div>
                  <div>Vila Madalena, São Paulo - SP</div>
                  <div>CEP: 05432-000</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <button 
                  onClick={openWhatsApp}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  (11) 99999-9999
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:contato@patinhafeliz.com.br"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  contato@patinhafeliz.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-6">
            <h3 className="font-nunito font-bold text-xl text-primary">Horário de Funcionamento</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-background/80">
                  <div className="font-medium">Segunda a Sexta</div>
                  <div>8:00 às 18:00</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-background/80">
                  <div className="font-medium">Sábado</div>
                  <div>8:00 às 16:00</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-background/80">
                  <div className="font-medium">Domingo</div>
                  <div>Emergências 24h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Summary */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-nunito font-bold text-primary mb-2">Banho & Tosa</h4>
              <p className="text-background/70 text-sm">Higiene completa com produtos premium</p>
            </div>
            <div>
              <h4 className="font-nunito font-bold text-primary mb-2">Veterinário</h4>
              <p className="text-background/70 text-sm">Cuidados médicos especializados</p>
            </div>
            <div>
              <h4 className="font-nunito font-bold text-primary mb-2">Emergência</h4>
              <p className="text-background/70 text-sm">Atendimento 24h para urgências</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Patinha Feliz Pet Shop. Todos os direitos reservados.
          </p>
          <p className="text-background/60 text-sm mt-2">
            Feito com{" "}
            <Heart className="w-4 h-4 inline fill-current text-primary" />{" "}
            para nossos amigos de quatro patas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;