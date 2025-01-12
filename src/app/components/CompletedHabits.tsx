import axios from "axios";


interface habitInterface {
    id: number;
    title: string;
    description: string;
    frequency: string;
    completed: boolean;
  }

interface CompletedHabitsProps {

    allHabits: habitInterface[];
  
}
  
  
  
export function CompletedHabits({ allHabits }: CompletedHabitsProps){
   console.log(allHabits)

   async function handleRemove(id:number,title:string) {
    await axios.delete("http://localhost:3000/api/", { data: { id, title } });
    window.location.reload();
  }


    return(
      <div className="flex flex-col p-6 bg-white shadow-md border border-gray-300 w-full max-w-lg gap-6 rounded-lg mx-auto md:mx-0">
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
        Completed Habits
      </h3>
    
      {/* Habit List */}
      <div className="flex flex-col max-h-96 overflow-y-auto space-y-4">
        {allHabits.filter(habit => habit.completed).map((habit, key) => (
          <div
            key={key}
            className="flex flex-col p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h4 className="text-lg font-medium text-gray-700">{habit.title}</h4>
            <span className="text-sm text-green-500 font-semibold">Completed</span>

            <button
          className="px-3 py-1 text-sm font-medium text-white bg-red-400 rounded-lg shadow hover:bg-red-500 transition"
          onClick={() => handleRemove(habit.id, habit.title)}
        >
          Remove
        </button>

          </div>
        ))}
        {/* If no habits are completed */}
        {allHabits.filter(habit => habit.completed).length === 0 && (
          <p className="text-sm text-gray-500 text-center">No completed habits yet.</p>
        )}
      </div>
      
    </div>
    

    )
}