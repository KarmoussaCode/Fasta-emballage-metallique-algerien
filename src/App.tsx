import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Facebook, 
  Calendar,
  MapPin,
  Star,
  Users,
  Camera,
  Mountain,
  Waves,
  Sun,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const destinations = [
    {
      name: "Tassili N'Ajjer",
      location: "Sahara",
      image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      description: "Paysages lunaires et art rupestre millénaire"
    },
    {
      name: "Casbah d'Alger",
      location: "Alger",
      image: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      description: "Patrimoine mondial de l'UNESCO"
    },
    {
      name: "Oran la Radieuse",
      location: "Oran",
      image: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      description: "Perle de la Méditerranée occidentale"
    },
    {
      name: "Tipaza",
      location: "Tipaza",
      image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      description: "Ruines romaines face à la mer"
    },
    {
      name: "Hoggar",
      location: "Tamanrasset",
      image: "https://images.pexels.com/photos/1142980/pexels-photo-1142980.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      description: "Montagnes majestueuses du Sahara"
    },
    {
      name: "Constantine",
      location: "Constantine",
      image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      description: "Ville des ponts suspendus"
    }
  ];

  const handleRdvClick = () => {
    // Simulate booking modal or redirect
    alert("Redirection vers la prise de rendez-vous...");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-red-600 rounded-lg flex items-center justify-center">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Algérie Tours</h1>
                <p className="text-xs text-gray-600">Découvrez l'Algérie</p>
              </div>
            </div>

            {/* Contact Info - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="tel:+213123456789" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+213 123 456 789</span>
              </a>
              <a href="mailto:contact@algerietours.dz" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@algerietours.dz</span>
              </a>
              <a href="https://wa.me/213123456789" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a href="https://facebook.com/algerietours" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
              <div className="py-4 space-y-3">
                <a href="tel:+213123456789" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+213 123 456 789</span>
                </a>
                <a href="mailto:contact@algerietours.dz" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>contact@algerietours.dz</span>
                </a>
                <a href="https://wa.me/213123456789" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a href="https://facebook.com/algerietours" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Découvrez l'
            <span className="bg-gradient-to-r from-green-400 to-red-400 bg-clip-text text-transparent">
              Algérie
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-300">
            Des paysages époustouflants, une histoire millénaire, une culture authentique
          </p>
          <button
            onClick={handleRdvClick}
            className="group bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 animate-fade-in-up animation-delay-600"
          >
            <Calendar className="w-5 h-5 inline-block mr-2 group-hover:rotate-12 transition-transform" />
            Prendre Rendez-vous
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "5000+", label: "Clients Satisfaits" },
              { icon: MapPin, number: "50+", label: "Destinations" },
              { icon: Camera, number: "15", label: "Années d'Expérience" },
              { icon: Star, number: "4.9", label: "Note Moyenne" }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-red-600 rounded-full mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Destinations Populaires
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explorez les merveilles de l'Algérie, des montagnes du Sahara aux côtes méditerranéennes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-800">{destination.name}</h4>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <button className="w-full bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300">
                    Explorer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-gray-900 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Contactez-nous</h3>
            <p className="text-xl opacity-90">
              Nous sommes là pour vous aider à planifier votre voyage parfait
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-2xl font-bold mb-8">Nos Coordonnées</h4>
              <div className="space-y-6">
                <a
                  href="tel:+213123456789"
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Téléphone</div>
                    <div className="opacity-90">+213 123 456 789</div>
                  </div>
                </a>

                <a
                  href="mailto:contact@algerietours.dz"
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-90">contact@algerietours.dz</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/213123456789"
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="opacity-90">Messagerie instantanée</div>
                  </div>
                </a>

                <a
                  href="https://facebook.com/algerietours"
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Facebook</div>
                    <div className="opacity-90">Suivez-nous</div>
                  </div>
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-4">Prêt pour l'aventure ?</h4>
                <p className="text-lg mb-6 opacity-90">
                  Contactez-nous dès maintenant pour planifier votre voyage sur mesure en Algérie.
                </p>
                <button
                  onClick={handleRdvClick}
                  className="w-full bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <Calendar className="w-5 h-5 inline-block mr-2" />
                  Prendre Rendez-vous Maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-red-600 rounded-lg flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Algérie Tours</h1>
                  <p className="text-sm text-gray-400">Découvrez l'Algérie</p>
                </div>
              </div>
              <p className="text-gray-400">
                Votre partenaire de confiance pour explorer les merveilles de l'Algérie.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4">Destinations</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Tassili N'Ajjer</li>
                <li>Casbah d'Alger</li>
                <li>Oran</li>
                <li>Tipaza</li>
                <li>Hoggar</li>
                <li>Constantine</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4">Contact</h5>
              <div className="space-y-2 text-gray-400">
                <p>+213 123 456 789</p>
                <p>contact@algerietours.dz</p>
                <p>Alger, Algérie</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Algérie Tours. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;