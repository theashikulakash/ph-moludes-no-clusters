"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

export function CancelBookingAlert({ bookingId, destinationName, onDeleted }) {
  const handleDelete = async () => {
    try {
      const res = await fetch(`${process.env.VIBE_TREK_SERVER_URL}/bookings/${bookingId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to cancel booking.");
      }

      toast.success("Booking cancelled successfully!");
      if (onDeleted) onDeleted(bookingId);
    } catch (error) {
      toast.error(error.message || "Error cancelling booking.");
    }
  };

  return (
    <AlertDialog>
      <Button className="text-red-500 rounded-full" variant="outline">
        <TrashBin /> Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel booking?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will cancel your booking for <strong>{destinationName}</strong>.
                You can book again later if you want.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary" className="text-black">
                Keep Booking
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
