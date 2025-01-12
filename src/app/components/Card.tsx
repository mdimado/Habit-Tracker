import axios from "axios";

export function Card({
  id,
  title,
  description,
  frequency,
  
}: {
  id: number;
  title: string;
  description: string;
  frequency: string;
  
}) {
  async function handleRemove() {
    await axios.delete("http://localhost:3000/api/", { data: { id, title } });
    window.location.reload();
  }

  async function handleComplete(){
    await axios.put("http://localhost:3000/api",{id,title})
    window.location.reload();
  }

  return (
    <div className="max-w-xs p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <svg
            className="w-6 h-6 text-blue-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
          </svg>
          <span className="text-sm font-semibold text-gray-600">Habit</span>
        </div>
        <div className="px-2 py-1 text-xs font-semibold text-white bg-green-400 rounded-full">
          {frequency}
        </div>
      </div>

      {/* Title */}
      <h5 className="text-lg font-bold text-gray-800 mb-2">{title}</h5>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-4">{description}</p>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          className="px-3 py-1 text-sm font-medium text-white bg-red-400 rounded-lg shadow hover:bg-red-500 transition"
          onClick={handleRemove}
        >
          Remove
        </button>
        <button
          className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-lg shadow hover:bg-green-600 transition"
          onClick={handleComplete}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
