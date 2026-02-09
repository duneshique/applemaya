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
    <section id="contact" className="py-24 lg:py-32 bg-background-linen">
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
            className="text-4xl lg:text-6xl mb-4 text-text-warm font-display-en"
            style={{ 
              letterSpacing: '0.05em'
            }}
          >
            Contact
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-text-warm/70 font-sans-en"
            style={{ 
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
              className="text-2xl mb-8 text-text-warm font-display-en"
              style={{ 
                letterSpacing: '0.05em'
              }}
            >
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background-beige rounded-full text-accent-sage">
                  <Mail size={20} />
                </div>
                <div>
                  <p
                    className="text-text-warm/60 mb-1 font-sans-en text-sm"
                  >
                    Email
                  </p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=maya@applemaya.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-warm hover:text-accent-sage transition-colors font-sans-en"
                  >
                    maya@applemaya.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-background-beige rounded-full text-accent-sage">
                  <MapPin size={20} />
                </div>
                <div>
                  <p
                    className="text-text-warm/60 mb-1 font-sans-en text-sm"
                  >
                    Studio
                  </p>
                  <p
                    className="text-text-warm font-sans-en"
                  >
                    Ilsan, Gyeonggi-do, South Korea<br />
                  </p>
                </div>
              </div>
            </div>

            
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mt-12 p-6 bg-background-beige/30 rounded-2xl">
              <p
                className="text-text-warm/70 font-sans-en"
                style={{ 
                  lineHeight: '1.8',
                  fontSize: '15px'
                }}
              >
                "Every inquiry is a seed of possibility. Whether you're seeking floral designs
                for a special occasion or interested in my books, I'd love to hear from you."
              </p>
              <p
                className="mt-3 text-accent-sage font-display-en text-base"
              >
                — Hyejoung
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
