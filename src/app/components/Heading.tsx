export function Heading(){
    return <div className="p-4 md:p-6 text-center bg-white rounded-lg shadow-md relative overflow-hidden">
    {/* Gradient background effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-15 rounded-lg"></div>
  
    <h1 className="mb-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl relative z-10">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
        Habit
      </span>{" "}
      Tracker
    </h1>
    <p className="text-base font-medium text-gray-600 sm:text-lg lg:text-xl max-w-xl mx-auto relative z-10">
      Track your habits effortlessly and build a better tomorrow, one step at a time.
    </p>
  
    {/* "Built by Vikash Sharma" section */}
    <p className="mt-6 text-sm text-gray-500 italic relative z-10">
      Built by{" "}
      <span className="font-semibold text-blue-500">Vikash Sharma</span>
    </p>
  </div>
  
  
  
  
}
