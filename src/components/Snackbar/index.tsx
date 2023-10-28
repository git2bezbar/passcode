export interface SnackbarProps {
  children: React.ReactNode;
  isValid: boolean;
}

export default function Snackbar({ isValid, children }: SnackbarProps) {
  return (
    <div
      className={`${isValid ? "bg-valid text-black" : "bg-invalid text-white"} text-xl text-center rounded-xl p-4 px-12 border-4 drop-shadow-normal border-black flex justify-center items-center grow`}
    >
      {children}
    </div>
  )
}
