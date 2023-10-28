export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function KeyPadButton({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-20 h-20 min-[390px]:w-24 min-[390px]:h-24 bg-very-light-blue text-white text-4xl rounded-xl border-4 drop-shadow-normal border-black flex justify-center items-center hover:scale-90 transition-all"
    >
      {children}
    </button>
  );
}
