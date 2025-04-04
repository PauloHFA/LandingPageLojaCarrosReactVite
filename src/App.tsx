import React, { useState } from 'react';
import { Car, Star, Shield, Phone, MapPin, Clock, Mail, Menu, X, Filter, DollarSign, Gauge, Calendar } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [priceFilter, setPriceFilter] = useState('all');
  const [brandFilter, setBrandFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    comments: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      comments: ''
    });
    alert('Agendamento realizado com sucesso! Entraremos em contato em breve.');
  };

  const cars = [
    {
      id: 1,
      name: 'Mercedes-Benz C300',
      brand: 'Mercedes',
      year: '2023',
      price: 389900,
      km: 0,
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 2,
      name: 'BMW X5',
      brand: 'BMW',
      year: '2023',
      price: 599900,
      km: 0,
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 3,
      name: 'Porsche 911',
      brand: 'Porsche',
      year: '2023',
      price: 999900,
      km: 0,
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 4,
      name: 'Audi RS e-tron GT',
      brand: 'Audi',
      year: '2024',
      price: 1200000,
      km: 0,
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 5,
      name: 'Range Rover Sport',
      brand: 'Land Rover',
      year: '2024',
      price: 799900,
      km: 0,
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  const filteredCars = cars.filter(car => {
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(Number);
      if (car.price < min || car.price > max) return false;
    }
    if (brandFilter !== 'all' && car.brand !== brandFilter) return false;
    if (yearFilter !== 'all' && car.year !== yearFilter) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black bg-opacity-50 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Car className="w-8 h-8 mr-2" />
              <span className="text-xl font-bold">AutoElite</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-red-500 transition duration-300">Home</a>
              <a href="#catalogo" className="hover:text-red-500 transition duration-300">Catálogo</a>
              <a href="#sobre" className="hover:text-red-500 transition duration-300">Sobre</a>
              <a href="#servicos" className="hover:text-red-500 transition duration-300">Serviços</a>
              <a href="#contato" className="hover:text-red-500 transition duration-300">Contato</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="hover:text-red-500 transition duration-300">Home</a>
                <a href="#catalogo" className="hover:text-red-500 transition duration-300">Catálogo</a>
                <a href="#sobre" className="hover:text-red-500 transition duration-300">Sobre</a>
                <a href="#servicos" className="hover:text-red-500 transition duration-300">Serviços</a>
                <a href="#contato" className="hover:text-red-500 transition duration-300">Contato</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2070"
            alt="Carros luxuosos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AutoElite Brasil</h1>
            <p className="text-xl md:text-2xl mb-8">Sua concessionária premium de confiança</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Agende uma Visita
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Por que escolher a AutoElite?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Car className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Melhor Seleção</h3>
              <p className="text-gray-600">Ampla variedade de veículos premium das melhores marcas do mundo.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Star className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Qualidade Garantida</h3>
              <p className="text-gray-600">Todos os veículos passam por rigorosa inspeção técnica.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Shield className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Garantia Estendida</h3>
              <p className="text-gray-600">Oferecemos as melhores garantias do mercado para sua tranquilidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section id="catalogo" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Veículos em Destaque</h2>
          
          {/* Filters */}
          <div className="mb-12 bg-gray-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Faixa de Preço</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                >
                  <option value="all">Todos os preços</option>
                  <option value="300000-500000">R$ 300.000 - R$ 500.000</option>
                  <option value="500000-800000">R$ 500.000 - R$ 800.000</option>
                  <option value="800000-1500000">R$ 800.000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Marca</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={brandFilter}
                  onChange={(e) => setBrandFilter(e.target.value)}
                >
                  <option value="all">Todas as marcas</option>
                  <option value="Mercedes">Mercedes-Benz</option>
                  <option value="BMW">BMW</option>
                  <option value="Porsche">Porsche</option>
                  <option value="Audi">Audi</option>
                  <option value="Land Rover">Land Rover</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ano</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                >
                  <option value="all">Todos os anos</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
              </div>
            </div>
          </div>

          {/* Cars Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredCars.map(car => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-4">{car.year} | {car.km} km | {car.transmission}</p>
                  <p className="text-2xl font-bold text-red-600">
                    {car.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-300"
                  >
                    Agendar Visita
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nossos Serviços de Seguro</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <Shield className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Seguro Total</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-red-600 mr-2" />
                  <span>Cobertura completa contra acidentes</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-red-600 mr-2" />
                  <span>Assistência 24 horas</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-red-600 mr-2" />
                  <span>Carro reserva por 30 dias</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <DollarSign className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Proteção Financeira</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-red-600 mr-2" />
                  <span>Garantia de valor de mercado</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-red-600 mr-2" />
                  <span>Cobertura contra roubo e furto</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-red-600 mr-2" />
                  <span>Proteção de parcelas</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <Gauge className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Manutenção Premium</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-red-600 mr-2" />
                  <span>Revisões programadas inclusas</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-red-600 mr-2" />
                  <span>Peças originais garantidas</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-red-600 mr-2" />
                  <span>Garantia estendida</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Entre em Contato</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p>(11) 3333-4444</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Endereço</h3>
              <p>Av. Paulista, 1000 - São Paulo</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Horário</h3>
              <p>Seg-Sáb: 9h às 19h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 AutoElite Brasil. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Scheduling Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Agendar Visita</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data da Visita
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Horário
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Observações
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  rows={3}
                  placeholder="Adicione qualquer informação adicional aqui..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
              >
                Confirmar Agendamento
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;