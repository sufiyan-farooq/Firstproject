import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function CheckOut() {
  const [amount, setAmount] = useState('0.00');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [num, setnum] = useState('');

  useEffect(() => {
    const storedAmount = JSON.parse(localStorage.getItem("totalPrice"));
    if (storedAmount) {
      setAmount(storedAmount); 
    }
    console.log(amount);
  }, [amount]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      toast.error('Name is required');
      return; 
    }
    if (!email) {
      toast.error('Email is required');
      return; 
    }
    if (!address) {
      toast.error('Address is required');
      return; 
    }
    if (!num) {
      toast.error('Phone Information is required');
      return; 
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Address:", address);
    console.log("Phone Info:", num);
toast.success('Thank For Your Order')
    setName('');
    setEmail('');
    setAddress('');
    setnum('');
    setAmount("")

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Total Amount: ${amount}</h3>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <Input 
            placeholder="Enter your name" 
            className="w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}  
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input 
            type="email" 
            required
            placeholder="Enter your email" 
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Address</label>
          <Input 
            placeholder="Enter your address" 
            className="w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}  
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone </label>
          <Input 
            placeholder="Phone number" 
            className="w-full"
            required
           type="number"
            value={num}
            onChange={(e) => setnum(e.target.value)}  
          />
        </div>

        <button  className="bg-blue-500 w-full text-white px-4 py-2 rounded mt-4" type="submit"   onClick={handleSubmit}>
          Pay Now
        </button >
        <ToastContainer/>
      </div>
    </div>
  );
}
