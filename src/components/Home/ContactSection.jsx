import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Formspree API call
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        alert('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setStatus('error');
      alert('Oops! There was a problem sending your message. Please try again or email directly.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FAF8F3]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl lg:text-6xl mb-4 text-[#3D3D3D] font-serif"
            style={{ 
              fontFamily: 'Fraunces, serif',
              letterSpacing: '0.05em'
            }}
          >
            Get In Touch
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-[#3D3D3D]/70 font-sans"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.8'
            }}
          >
            Let's create something beautiful together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-2xl mb-8 text-[#3D3D3D] font-serif"
              style={{ 
                fontFamily: 'Fraunces, serif',
                letterSpacing: '0.05em'
              }}
            >
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E8DCC8] rounded-full text-[#9CAF88]">
                  <Mail size={20} />
                </div>
                <div>
                  <p
                    className="text-[#3D3D3D]/60 mb-1 font-sans"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px'
                    }}
                  >
                    Email
                  </p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=maya@applemaya.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3D3D3D] hover:text-[#9CAF88] transition-colors font-sans"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    maya@applemaya.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E8DCC8] rounded-full text-[#9CAF88]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p
                    className="text-[#3D3D3D]/60 mb-1 font-sans"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px'
                    }}
                  >
                    Studio
                  </p>
                  <p
                    className="text-[#3D3D3D] font-sans"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Ilsan, Gyeonggi-do, South Korea<br />
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#E8DCC8]/30 rounded-2xl">
              <p
                className="text-[#3D3D3D]/70 italic font-sans"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.8',
                  fontSize: '15px'
                }}
              >
                "Every inquiry is a seed of possibility. Whether you're seeking floral designs
                for a special occasion or interested in my books, I'd love to hear from you."
              </p>
              <p
                className="mt-3 text-[#9CAF88] font-serif"
                style={{ 
                  fontFamily: 'Fraunces, serif',
                  fontSize: '16px'
                }}
              >
                — Maya
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-[#3D3D3D]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px'
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#E8DCC8]/30 border border-[#3D3D3D]/10 rounded-xl focus:outline-none focus:border-[#9CAF88] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-[#3D3D3D]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px'
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#E8DCC8]/30 border border-[#3D3D3D]/10 rounded-xl focus:outline-none focus:border-[#9CAF88] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-[#3D3D3D]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px'
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#E8DCC8]/30 border border-[#3D3D3D]/10 rounded-xl focus:outline-none focus:border-[#9CAF88] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-[#3D3D3D]"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px'
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#E8DCC8]/30 border border-[#3D3D3D]/10 rounded-xl focus:outline-none focus:border-[#9CAF88] transition-colors resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-[#9CAF88] text-white rounded-full tracking-[0.2em] transition-all hover:bg-[#B85C50] hover:shadow-lg flex items-center justify-center gap-2"
                style={{ fontSize: '13px', fontFamily: 'Inter, sans-serif' }}
              >
                <Send size={18} />
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
