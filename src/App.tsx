import React, { useState, useEffect } from 'react';
import ImageSlider from './components/ImageSlider';
import { 
  Factory, 
  Leaf, 
  Award, 
  Globe, 
  ShoppingBag, 
  Package, 
  Box, 
  Home,
  TrendingUp,
  Settings,
  Layers,
  Palette,
  Zap,
  ShieldCheck,
  Recycle,
  Droplets,
  Heart,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ChevronRight,
  Users,
  Target,
  Eye,
  CheckCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate app loading and remove loading spinner
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('app-loaded');
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen bg-white ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/cd industry ICON O copy.png" 
                alt="CD Industries" 
                className="logo-xl"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-500 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-500 transition-colors">About</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-orange-500 transition-colors">Products</button>
              <button onClick={() => scrollToSection('capabilities')} className="text-gray-700 hover:text-orange-500 transition-colors">Capabilities</button>
              <button onClick={() => scrollToSection('sustainability')} className="text-gray-700 hover:text-orange-500 transition-colors">Sustainability</button>
              <button onClick={() => scrollToSection('contact')} className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-orange-500">Home</button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-orange-500">About</button>
                <button onClick={() => scrollToSection('products')} className="block px-3 py-2 text-gray-700 hover:text-orange-500">Products</button>
                <button onClick={() => scrollToSection('capabilities')} className="block px-3 py-2 text-gray-700 hover:text-orange-500">Capabilities</button>
                <button onClick={() => scrollToSection('sustainability')} className="block px-3 py-2 text-gray-700 hover:text-orange-500">Sustainability</button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-orange-500 font-medium">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Innovating <span className="text-orange-500">Sustainable Solutions</span> for Every Market
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Leading manufacturing powerhouse with 5M+ annual production capacity, specializing in jute goods, 
                  packaging solutions, plastic fabrication, and FMCG products for global markets.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('products')}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Explore Products <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all"
                >
                  Get Quote
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">5M+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Units Annually</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">6</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Product Lines</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">Global</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Market Reach</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <ImageSlider />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">ISO</div>
                <div className="text-sm">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About CD Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining sustainable practices with cutting-edge technology to deliver products that meet the highest global standards
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-orange-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-600">
                    To deliver high-quality, innovative, and sustainable manufacturing solutions that meet the evolving needs of global industries.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Eye className="h-6 w-6 text-orange-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-600">
                    To be Africa's leading name in sustainable manufacturing, recognized globally for our quality, innovation, and environmental responsibility.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Core Values</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: Award, label: 'Quality Excellence' },
                    { icon: Leaf, label: 'Sustainability' },
                    { icon: Zap, label: 'Innovation' },
                    { icon: ShieldCheck, label: 'Integrity' },
                    { icon: Users, label: 'Customer Focus' }
                  ].map((value, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <value.icon className="h-5 w-5 text-orange-500" />
                      <span className="font-medium text-gray-900">{value.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Manufacturing Excellence"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive manufacturing solutions across four key product categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: 'Jute Goods',
                description: 'Sustainable jute products for diverse market needs with custom branding capabilities.',
                features: [
                  'Eco-friendly jute bags (shopping, promotional, fashion accessories)',
                  'Agricultural jute sacks and industrial-grade packaging',
                  'Custom-printed jute products for branding and promotions',
                  'Export-quality jute goods for retail and wholesale markets'
                ],
                image: '/Our Product Portfolio/Jute bags.jpg'
              },
              {
                icon: Package,
                title: 'Packaging Solutions',
                description: 'Comprehensive packaging solutions across multiple industries with custom branding options.',
                features: [
                  'Industrial packaging for agriculture, construction, and manufacturing sectors',
                  'Retail packaging with custom printing and branding',
                  'Food-grade packaging for FMCG products',
                  'Protective and transport packaging solutions'
                ],
                image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                icon: Box,
                title: 'Plastic Fabrication',
                description: 'Advanced plastic manufacturing with custom design capabilities for industrial and consumer markets.',
                features: [
                  'Injection-molded plastic containers and components',
                  'Custom-designed plastic products for industrial and consumer markets',
                  'Food-safe plastic storage and packaging solutions',
                  'High-durability plastics for export'
                ],
                image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                icon: Home,
                title: 'FMCG Products',
                description: 'Complete FMCG solutions from household goods to private label manufacturing.',
                features: [
                  'Household goods and everyday consumer products',
                  'Packaged food and beverage containers',
                  'Personal care product packaging',
                  'Ready-to-market FMCG solutions for private labels'
                ],
                image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                icon: Droplets,
                title: 'Palm Oil Processing',
                description: 'Complete palm oil processing solutions from extraction to refinery operations.',
                features: [
                  'Palm Oil Mill Plant',
                  'Palm Oil Refinery Plant',
                  'Palm Oil Fractionation',
                  'Palm Kernel Oil Extraction'
                ],
                image: '/Oil Palm.jpg'
              },
              {
                icon: TrendingUp,
                title: 'CD Industries Logistics',
                description: 'Comprehensive logistics and supply chain solutions for seamless operations.',
                features: [
                  'Haulage services',
                  'Freight Logistics',
                  'Warehousing solutions',
                  'Supply chain management'
                ],
                image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities with advanced technology and flexible production systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: '5M+ Annual Capacity',
                description: 'Scalable production capacity exceeding 5 million units annually with room for expansion.'
              },
              {
                icon: Settings,
                title: 'Advanced Technology',
                description: 'Cutting-edge machinery for jute weaving, plastic injection molding, and automated packaging.'
              },
              {
                icon: Layers,
                title: 'Flexible Production',
                description: 'Small to large-scale production runs tailored to meet specific client requirements.'
              },
              {
                icon: Palette,
                title: 'Custom Solutions',
                description: 'End-to-end product design and prototyping services for unique manufacturing needs.'
              },
              {
                icon: Zap,
                title: 'Lean Manufacturing',
                description: 'Efficient systems designed to reduce waste and improve turnaround times.'
              },
              {
                icon: ShieldCheck,
                title: 'Quality Assurance',
                description: 'ISO certified processes with in-house testing and global compliance standards.'
              }
            ].map((capability, index) => (
              <div key={index} className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <capability.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Sustainability & CSR</h2>
                <p className="text-xl text-gray-600">
                  Committed to responsible manufacturing and environmental stewardship
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Leaf,
                    title: 'Sustainable Sourcing',
                    description: 'Raw jute sourced from certified sustainable farms with eco-friendly practices.'
                  },
                  {
                    icon: Recycle,
                    title: 'Waste Reduction',
                    description: 'Comprehensive recycling and waste reduction programs across all facilities.'
                  },
                  {
                    icon: Droplets,
                    title: 'Eco-Friendly Materials',
                    description: 'Biodegradable materials and eco-friendly inks in all packaging solutions.'
                  },
                  {
                    icon: Heart,
                    title: 'Community Support',
                    description: 'Local community programs focused on education and skill development.'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Sustainable Manufacturing"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-500">100%</div>
                <div className="text-sm text-gray-700">Sustainable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to partner with us? Contact our team for custom solutions and quotes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  title: 'Our Location',
                  content: '289B Corporation Drive\nDolphin Estate, Ikoyi\nLagos State, Nigeria'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+234 (0) 123 456 7890'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'info@cdindustries.ng'
                },
                {
                  icon: Globe,
                  title: 'Global Reach',
                  content: 'Serving Africa, Asia, Europe & Middle East'
                }
              ].map((contact, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{contact.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{contact.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" required>
                  <option value="">Select Product Interest</option>
                  <option value="jute">Jute Goods</option>
                  <option value="packaging">Packaging Solutions</option>
                  <option value="plastic">Plastic Fabrication</option>
                  <option value="fmcg">FMCG Products</option>
                  <option value="custom">Custom Solutions</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                  src="/cd industry ICON O copy.png" 
                  alt="CD Industries" 
                  className="logo-xl"
                />
              </div>
              <p className="text-gray-400">
                Leading manufacturing powerhouse delivering sustainable solutions for global markets.
              </p>
              <div className="flex space-x-4 text-sm">
                <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">5M+ Units Annually</span>
                <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">ISO Certified</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-500">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#products" className="hover:text-white transition-colors">Jute Goods</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Packaging Solutions</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Plastic Fabrication</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">FMCG Products</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-500">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('capabilities')} className="hover:text-white transition-colors">Capabilities</button></li>
                <li><button onClick={() => scrollToSection('sustainability')} className="hover:text-white transition-colors">Sustainability</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-500">Contact Info</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>289B Corporation Drive<br />Dolphin Estate, Ikoyi<br />Lagos State, Nigeria</p>
                <p>info@cdindustries.ng</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 CD Industries. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Quality Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;