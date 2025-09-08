import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { X } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

const ServiceDialog = ({ isOpen, onClose, serviceName }: ServiceModalProps) => {
  const [open, setOpen] = useState(isOpen)

   useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const [formData, setFormData] = useState({
    name: "",
    phoneno: "",
    model: "",
    issue: ""
  });

  const clearFields = () => {
      setFormData({
          name: "",
          phoneno: "",
          model: "",
          issue: ""
        });
    };
  

  const phoneNumber = "94717100072";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
     e.preventDefault();

    // Format message
    const message = `
    Repair Service Request
    -----------------------
    Name: ${formData.name}
    Phone: ${formData.phoneno}
    Model: ${formData.model}
    Issue: 
    ${formData.issue}`;

    const encodedMessage = encodeURIComponent(message);
    
    // Detect if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}` // opens WhatsApp app on mobile
      : `https://wa.me/${phoneNumber}?text=${encodedMessage}`; // opens WhatsApp Web/Desktop

    window.open(url, "_blank");
    closeDialog();
  };

  const closeDialog = () => {
      clearFields();
      onClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 w-full sm:max-w-sm data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
                <form onSubmit={handleSubmit} className="space-y-2">
                    <div className="bg-white px-4 pt-5 pb-2 sm:p-6 sm:pb-2">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left flex-grow">
                                <DialogTitle as="h3" className="text-base font-semibold text-gray-900 flex justify-between">
                                <span>Request {serviceName} Service</span>
                                <button className='bg-none border-0 cursor-pointer' onClick={closeDialog}><X size={15}/></button>
                                </DialogTitle>
                                <div className="mt-5 text-start">
                                    <div className="mb-2">
                                        <label htmlFor="" className="text-sm font-medium leading-none text-start">Full Name</label>
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
                                        <label htmlFor="" className="text-sm font-medium leading-none">Device Model</label>
                                        <input 
                                        type="text" 
                                        name="model" 
                                        id="model" 
                                        value={formData.model}
                                        onChange={handleChange}
                                        placeholder="e.g. iPhone 14 Pro, Samsung Galaxy S23" 
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground md:text-sm mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                                        required/>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="" className="text-sm font-medium leading-none">Describe the Issue</label>
                                        <textarea 
                                        name="issue" 
                                        id="issue"
                                        value={formData.issue}
                                        onChange={handleChange} 
                                        placeholder="Please describe the problem with your device..." 
                                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground md:text-sm mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                                        rows={3} 
                                        required></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pb-5 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md text-sm font-medium [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full bg-repairx-black hover:bg-repairx-gray text-white transition-colors duration-200 sm:ml-3 sm:w-1/2"
                        >
                        Submit Request
                        </button>
                        <button
                        type="button"
                        data-autofocus
                        onClick={closeDialog}
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

export default ServiceDialog