import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import { CarType } from '../types/CarType';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  comments: string;
}

export const Modal: React.FC = () => {
  const { isOpen, selectedCar, closeModal } = useModal();
  const [formData, setFormData] = useState<FormData>({
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
    console.log('Form submitted:', formData);
    closeModal();
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-6">Agendar Visita</h2>
        {selectedCar ? (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{selectedCar.name}</h3>
            <p className="text-gray-600">Marca: {selectedCar.brand}</p>
            <p className="text-gray-600">Ano: {selectedCar.year}</p>
            <p className="text-gray-600">Preço: R$ {selectedCar.price.toLocaleString()}</p>
          </div>
        ) : (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Visita à Concessionária</h3>
            <p className="text-gray-600">Agende uma visita para conhecer nossa seleção de veículos premium</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Telefone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Data</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Horário</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Observações</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              rows={3}
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Agendar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 