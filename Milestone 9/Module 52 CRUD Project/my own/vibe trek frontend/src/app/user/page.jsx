"use client";

import { useEffect, useState } from "react";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import {
  LuMail,
  LuUser,
  LuMapPin,
  LuLogOut,
  LuFlag,
  LuMap,
} from "react-icons/lu";

export default function UserProfile() {
  const { data: session, isPending } = authClient.useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserBookings = async () => {
      if (!session?.user?.id) {
        setBookings([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const res = await fetch(`${VIBE_TREK_SERVER_URL}/bookings/user/${session.user.id}`);
        if (!res.ok) {
          throw new Error("Unable to load bookings.");
        }

        const bookingData = await res.json();

        const enriched = await Promise.all(
          bookingData.map(async (booking) => {
            try {
              const destRes = await fetch(`${VIBE_TREK_SERVER_URL}/destination/${booking.destinationId}`);
              const destination = destRes.ok ? await destRes.json() : null;
              return { ...booking, destination };
            } catch (err) {
              return { ...booking, destination: null };
            }
          })
        );

        setBookings(enriched);
      } catch (err) {
        setError(err.message || "Failed to load your bookings.");
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUserBookings();
  }, [session]);

  const handleBookingDelete = (deletedId) => {
    setBookings((current) => current.filter((booking) => booking._id !== deletedId));
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-pulse text-cyan-600 font-bold">Loading your profile...</div>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Sign in to view your profile</h1>
          <p className="text-slate-600 mb-6">Your profile page shows name, email, bookings, and visited countries.</p>
          <Link href="/login" className="inline-flex items-center justify-center rounded-xl bg-cyan-600 px-6 py-3 text-white font-semibold hover:bg-cyan-700">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const user = session.user;
  const totalBookings = bookings.length;
  const totalGuests = bookings.reduce((sum, booking) => sum + (booking.guests || 0), 0);
  const totalSpent = bookings.reduce((sum, booking) => sum + (booking.totalPaid || 0), 0);
  const visitedCountries = [...new Set(bookings.map((booking) => booking.destination?.country).filter(Boolean))];
  const tripNames = [...new Set(bookings.map((booking) => booking.destination?.destinationName).filter(Boolean))];
  const upcomingTrips = bookings.filter((booking) => new Date(booking.date) >= new Date());

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <section className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
          <div className="h-32 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          <div className="relative px-8 pb-8">
            <div className="absolute -top-14 left-8">
              <Avatar className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt={user.name || "Traveler"}
                  src={user.image}
                  className="h-full w-full object-cover"
                />
                <Avatar.Fallback>{user.name?.charAt(0) || "T"}</Avatar.Fallback>
              </Avatar>
            </div>
            <div className="pt-20 md:flex md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900">{user.name || "Traveler"}</h1>
                <p className="text-slate-500 mt-2">{user.email}</p>
                <p className="mt-3 text-sm text-slate-400">Vibe Trek member</p>
              </div>
              <button
                onClick={() => authClient.signOut()}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                <LuLogOut size={18} /> Sign out
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_0.6fr] gap-6">
          <div className="space-y-6">
            <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Profile details</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Full name</p>
                  <p className="mt-2 text-lg font-semibold text-slate-800">{user.name || "N/A"}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Email</p>
                  <p className="mt-2 text-lg font-semibold text-slate-800">{user.email}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Total bookings</p>
                  <p className="mt-2 text-lg font-semibold text-slate-800">{totalBookings}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Visited countries</p>
                  <p className="mt-2 text-lg font-semibold text-slate-800">{visitedCountries.length}</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Trip summary</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-3xl bg-slate-50 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Upcoming trips</p>
                  <p className="mt-2 text-3xl font-bold text-cyan-600">{upcomingTrips.length}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Total guests</p>
                  <p className="mt-2 text-3xl font-bold text-cyan-600">{totalGuests}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Total spent</p>
                  <p className="mt-2 text-3xl font-bold text-cyan-600">${totalSpent}</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Recent bookings</h2>
                  <p className="text-sm text-slate-500">A quick view of your latest destinations.</p>
                </div>
                <Link href="/my-bookings" className="text-cyan-600 font-semibold hover:text-cyan-700">
                  View all
                </Link>
              </div>

              {loading ? (
                <div className="rounded-3xl bg-slate-50 p-6 text-center text-slate-500">Loading bookings...</div>
              ) : bookings.length === 0 ? (
                <div className="rounded-3xl bg-slate-50 p-6 text-center text-slate-500">
                  No bookings yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {bookings.slice(0, 3).map((booking) => (
                    <div key={booking._id} className="rounded-3xl bg-slate-50 p-4">
                      <p className="font-semibold text-slate-800">{booking.destination?.destinationName || "Unknown destination"}</p>
                      <p className="text-sm text-slate-500 mt-1">{booking.destination?.country || "Country unknown"}</p>
                      <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-600">
                        <div className="rounded-2xl bg-white p-3 shadow-sm">
                          <p className="font-semibold">Travel Date</p>
                          <p className="mt-1">{new Date(booking.date).toLocaleDateString()}</p>
                        </div>
                        <div className="rounded-2xl bg-white p-3 shadow-sm">
                          <p className="font-semibold">Guests</p>
                          <p className="mt-1">{booking.guests}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          <aside className="space-y-6">
            <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700">
                  <LuFlag size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Visited countries</h3>
                  <p className="text-sm text-slate-500">Locations from your bookings</p>
                </div>
              </div>
              {visitedCountries.length === 0 ? (
                <p className="text-slate-500">No visited countries yet.</p>
              ) : (
                <div className="space-y-2">
                  {visitedCountries.map((country) => (
                    <div key={country} className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-700">
                      {country}
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700">
                  <LuMap size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Your destinations</h3>
                  <p className="text-sm text-slate-500">Places you have booked so far</p>
                </div>
              </div>
              {tripNames.length === 0 ? (
                <p className="text-slate-500">No booked destinations yet.</p>
              ) : (
                <div className="space-y-2">
                  {tripNames.slice(0, 6).map((name) => (
                    <div key={name} className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-700">
                      {name}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </aside>
        </div>

        {error && (
          <div className="rounded-3xl bg-red-50 border border-red-100 p-6 text-red-700">{error}</div>
        )}
      </div>
    </div>
  );
}
