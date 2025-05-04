import { useState } from "react";
import { Pencil, User } from "lucide-react";

const ProfileInterface = () => {
  const [profile, setProfile] = useState({
    name: "Obaid Ullah",
    email: "obaid@example.com",
    phone: "+1 234 567 8901",
    address: "Portland Par 127, Orlando, FL",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen  p-4 mt-4 ml-10 w-[95%]">
      <div className="flex w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Sidebar/Profile Summary */}
        <aside className="w-full md:w-1/3 lg:w-1/4 bg-blue-50 p-6 flex flex-col items-center justify-center">
          <div className="relative">
            <img
              src={profile.avatar}
              alt="Avatar"
              className="w-36 h-36 rounded-full object-cover border-4 border-blue-300 shadow-md"
            />
            <button className="absolute bottom-3 right-3 bg-white p-1 rounded-full shadow hover:bg-gray-100">
              <Pencil className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-center text-gray-800">
            {profile.name}
          </h2>
          <p className="text-sm text-gray-600 text-center">{profile.email}</p>
        </aside>

        {/* Main Profile Form */}
        <main className="flex-1 p-8">
          <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center gap-2">
            <User className="w-6 h-6" /> Profile Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              Save Changes
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileInterface;
