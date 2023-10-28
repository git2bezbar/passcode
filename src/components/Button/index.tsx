export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button ({ children, onClick }: ButtonProps) {
  return (
    <button
      className="bg-very-light-blue text-white text-xl rounded-xl p-4 border-4 drop-shadow-normal border-black flex justify-center items-center hover:scale-90 transition-all grow"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
