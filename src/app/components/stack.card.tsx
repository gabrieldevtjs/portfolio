export default function StackCard({ stacks }: { stacks: string[] }) {
    return (
      <div className="flex flex-wrap items-center py-2 justify-center gap-2">
        {stacks.map((stack, index) => (
          <span
            key={index}
            className="rounded-lg text-gray-700  border-2 border-black 0 px-3 py-1 hover:bg-indigo-700 hover:text-white hover:border-indigo-700 font-Kanit"
          >
            {stack}
          </span>
        ))}
      </div>
    );
  }
