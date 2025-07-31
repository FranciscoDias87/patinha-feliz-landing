import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marina Silva",
      pet: "Luna (Golden Retriever)",
      content: "A Luna fica sempre linda depois do banho no Patinha Feliz! O cuidado e carinho que eles têm com ela é incrível. Recomendo muito!",
      rating: 5
    },
    {
      name: "Carlos Eduardo",
      pet: "Max (Labrador)",
      content: "Excelente atendimento veterinário! O Dr. João cuidou muito bem do Max quando ele estava doente. Equipe super profissional e atenciosa.",
      rating: 5
    },
    {
      name: "Ana Paula",
      pet: "Mimi (Poodle)",
      content: "A tosa da Mimi ficou perfeita! Ela até parece que sabe que está bonita. O ambiente é limpo e os funcionários são muito carinhosos.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sunshine/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-sunshine mb-4">
            <Star className="w-6 h-6 fill-current" />
            <span className="font-inter font-medium text-sm uppercase tracking-wide">
              Depoimentos
            </span>
            <Star className="w-6 h-6 fill-current" />
          </div>
          <h2 className="font-nunito font-bold text-4xl md:text-5xl text-foreground mb-6">
            O que nossos{" "}
            <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            A alegria dos pets e a satisfação dos tutores são nossa maior recompensa!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm relative">
              <CardContent className="p-8">
                <div className="absolute -top-4 left-8 bg-sunshine text-sunshine-foreground p-3 rounded-full shadow-lg">
                  <Quote className="w-5 h-5" />
                </div>
                
                <div className="space-y-6 pt-4">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-5 h-5 ${star <= testimonial.rating ? 'fill-sunshine text-sunshine' : 'text-muted'}`} 
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t pt-4">
                    <div className="font-nunito font-bold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      Tutor(a) do {testimonial.pet}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-sunshine text-sunshine" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-nunito font-bold text-xl text-foreground">5.0</div>
              <div className="text-sm text-muted-foreground">Mais de 200 avaliações</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;