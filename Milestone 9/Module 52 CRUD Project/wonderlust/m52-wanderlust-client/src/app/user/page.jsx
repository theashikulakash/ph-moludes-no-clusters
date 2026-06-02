import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const UserPage = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session?.user) {
		redirect("/login");
	}

	const { token } = await auth.api.getToken({
		headers: await headers(),
	});

	const sessionUser = session.user;

	let user = sessionUser;

	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/${sessionUser?.id}`, {
			headers: {
				authorization: `Bearer ${token}`,
			},
			cache: "no-store",
		});

		if (res.ok) {
			user = await res.json();
		}
	} catch (err) {
		console.error("Failed to load user from API:", err);
	}

	return (
		<div className="max-w-3xl mx-auto py-8">
			<h1 className="text-3xl font-bold mb-6">Your Profile</h1>

			<div className="flex items-center gap-6">
				{user?.image ? (
					<Image src={user.image} alt={user.name || "User"} width={120} height={120} className="rounded-full" />
				) : (
					<div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">👤</div>
				)}

				<div>
					<h2 className="text-2xl font-semibold">{user?.name || "No name"}</h2>
					<p className="text-sm text-gray-600">{user?.email}</p>
					{user?.createdAt && (
						<p className="text-sm text-gray-500">Joined {new Date(user.createdAt).toLocaleDateString()}</p>
					)}
				</div>
			</div>

			<section className="mt-8">
				<h3 className="text-xl font-medium mb-2">Profile Details</h3>
				<div className="space-y-2">
					<p><strong>Id:</strong> {user?.id || user?._id}</p>
					<p><strong>Name:</strong> {user?.name}</p>
					<p><strong>Email:</strong> {user?.email}</p>
					{user?.phone && <p><strong>Phone:</strong> {user.phone}</p>}
					{user?.role && <p><strong>Role:</strong> {user.role}</p>}
				</div>
			</section>
		</div>
	);
};

export default UserPage;

