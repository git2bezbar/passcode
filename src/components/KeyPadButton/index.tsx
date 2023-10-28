export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function KeyPadButton({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-24 h-24 bg-very-light-blue text-white text-4xl rounded-xl border-4 drop-shadow-normal border-black flex justify-center items-center hover:scale-90 transition-all"
    >
      {children}
    </button>
  );
}
