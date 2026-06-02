"use client";
import { Button, Input } from "@heroui/react";
import { useState, useMemo } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { LuSend } from "react-icons/lu";

export default function BookButton({ destination }) {
  const { data: session } = authClient.useSession();
  const [loading, setLoading] = useState(false);
  
  // State for the 2 inputs
  const [bookingDate, setBookingDate] = useState("");
  const [numPersons, setNumPersons] = useState(1);

  // Dynamic Total Sum
  const totalPrice = useMemo(() => {
    return destination.price * (numPersons > 0 ? numPersons : 1);
  }, [numPersons, destination.price]);

  const handleBook = async () => {
    if (!session) return toast.warn("Please log in to book!");
    if (!bookingDate) return toast.error("Please select a date.");
    
    setLoading(true);
    try {
      const response = await fetch(`${process.env.VIBE_TREK_SERVER_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.user.id,
          destinationId: destination._id,
          date: bookingDate,
          guests: numPersons,
          totalPaid: totalPrice,
        }),
      });

      if (response.ok) {
        toast.success(`Trip booked for ${bookingDate}!`);
        setBookingDate("");
        setNumPersons(1);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to book trip.");
      }
    } catch (error) {
      toast.error(error.message || "Booking failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 p-6 rounded-2xl mx-auto shadow-2xl space-y-4 w-full md:w-[350px]">
      {/* Date Input - Triggers Native Calendar Popup */}
      <Input
        type="date"
        label="Select Date"
        placeholder="Select Date"
        variant="bordered"
        labelPlacement="outside"
        value={bookingDate}
        onChange={(e) => setBookingDate(e.target.value)}
        className="text-black rounded-2xl bg-gray-100"
      />

      {/* Person Input */}
      <Input
        type="number"
        label="Number of Persons"
        placeholder="1"
        variant="bordered"
        labelPlacement="outside"
        value={numPersons.toString()}
        onChange={(e) => {
          const val = parseInt(e.target.value, 10);
          if (!isNaN(val) && val > 0) {
            setNumPersons(val);
          }
        }}
        min="1"
        className="text-black rounded-2xl bg-gray-100"
      />

      <div className="flex justify-between items-center py-2">
        <span className="font-bold text-slate-600">Total:</span>
        <span className="text-2xl font-black text-cyan-600">${totalPrice}</span>
      </div>

      <Button 
        onPress={handleBook}
        isLoading={loading}
        startContent={!loading && <LuSend />}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl h-12 shadow-lg"
      >
        Book Now
      </Button>
    </div>
  );
}