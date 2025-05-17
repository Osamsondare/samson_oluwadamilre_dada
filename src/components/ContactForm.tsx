import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import Button from './Button';
import emailjs from 'emailjs-com'; // Import EmailJS

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Send email using EmailJS
        const serviceId = 'service_dofl4x6'; // Replace with your EmailJS service ID
        const templateId = 'template_jsa6qk9'; // Replace with your EmailJS template ID
        const userId = 'AhXCZbMDnht-u787v'; // Replace with your EmailJS user ID
        
        const templateParams = {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Contact Form Submission',
          message: formData.message,
        };
        
        await emailjs.send(serviceId, templateId, templateParams, userId);
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error('Error sending message:', error);
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-darkBlue p-8 rounded-lg text-center"
        >
          <CheckCircle className="mx-auto text-neonCyan mb-4" size={48} />
          <h3 className="text-xl font-medium mb-2">Message Sent Successfully!</h3>
          <p className="text-gray-400">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name<span className="text-neonPink">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-darkBlue border rounded-md focus:outline-none focus:ring-2 focus:ring-neonCyan transition-colors ${
                errors.name ? 'border-neonPink' : 'border-gray-700'
              }`}
            />
            {errors.name && <p className="mt-1 text-sm text-neonPink">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email<span className="text-neonPink">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-darkBlue border rounded-md focus:outline-none focus:ring-2 focus:ring-neonCyan transition-colors ${
                errors.email ? 'border-neonPink' : 'border-gray-700'
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-neonPink">{errors.email}</p>}
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-darkBlue border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neonCyan transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message<span className="text-neonPink">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-darkBlue border rounded-md focus:outline-none focus:ring-2 focus:ring-neonCyan transition-colors ${
                errors.message ? 'border-neonPink' : 'border-gray-700'
              }`}
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-neonPink">{errors.message}</p>}
          </div>
          
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
            icon={isSubmitting ? null : <Send size={16} />}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;