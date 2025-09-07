import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { X } from "lucide-react";

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
}

const CourseDialog = ({isOpen, onClose, courseName} : CourseModalProps) => {
  
  const [open, setOpen] = useState(isOpen)
  
     useEffect(() => {
      setOpen(isOpen);
    }, [isOpen]);
  
    const [formData, setFormData] = useState({
      name: "",
      phoneno: "",
      email: "",
      level: ""
    });
  
    const phoneNumber = "94717100072";
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
       e.preventDefault();
  
      // Format message
      const message = `
      Course Registration
      -----------------------
      Name: ${formData.name}
      Phone: ${formData.phoneno}
      Email: ${formData.email}
      Level: ${formData.level}`;
  
      const encodedMessage = encodeURIComponent(message);
      
      // Detect if device is mobile
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
      const url = isMobile
        ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}` // opens WhatsApp app on mobile
        : `https://wa.me/${phoneNumber}?text=${encodedMessage}`; // opens WhatsApp Web/Desktop
  
      window.open(url, "_blank");
      onClose();
    };

  return (
    <div>
      <Dialog open={open} onClose={onClose} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 w-full sm:max-w-sm data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
                <form onSubmit={handleSubmit} className="space-y-2">
                    <div className="bg-white px-4 pt-5 pb-2 sm:p-6 sm:pb-2">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left flex-grow">
                                <DialogTitle as="h3" className="text-base font-semibold text-gray-900 flex justify-between">
                                <span>Join {courseName}</span>
                                <button className='bg-none border-0 cursor-pointer' onClick={onClose}><X size={15}/></button>
                                </DialogTitle>
                                <div className="mt-5">
                                    <div className="mb-2">
                                        <label htmlFor="" className="text-sm font-medium leading-none">Full Name</label>
                                        <input 
                                        type="text" 
                                        name="name" 
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange} 
                                        placeholder="Enter your full name" 
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground md:text-sm mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                                        required/>
                                    </div>                                    
                                    <div className="mb-2">
                                        <label htmlFor="" className="text-sm font-medium leading-none">Phone No</label>
                                        <input 
                                        type="number" 
                                        name="phoneno" 
                                        id="phoneno"
                                        value={formData.phoneno}
                                        onChange={handleChange} 
                                        placeholder="Enter your mobile number" 
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground md:text-sm mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                                        required/>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="" className="text-sm font-medium leading-none">Email Address</label>
                                        <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address" 
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground md:text-sm mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                                        required/>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="" className="text-sm font-medium leading-none">Select Your Level</label>
                                        <select 
                                        name="level" 
                                        id="evel" 
                                        value={formData.level}
                                        onChange={handleChange}
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground md:text-sm mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                                        required>
                                            <option value="" selected disabled>Choose your level</option>
                                            <option value="Basic">Basic</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Working">Working</option>
                                            <option value="Expert">Expert</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pb-5 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded-md text-sm [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full bg-repairx-yellow hover:bg-repairx-yellow-dark text-repairx-black font-semibold transition-colors duration-200 sm:ml-3 sm:w-1/2"
                        >
                        Register Now
                        </button>
                        <button
                        type="button"
                        data-autofocus
                        onClick={onClose}
                        className="mt-3 inline-flex w-full justify-center cursor-pointer rounded-md bg-white px-3 py-2 text-sm  [&_svg]:size-4 [&_svg]:shrink-0 font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-200 transition-colors duration-200 sm:mt-0 sm:w-1/2"
                        >
                        Cancel
                        </button>
                    </div>
                </form>
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default CourseDialog