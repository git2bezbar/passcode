export interface CustomDotProps {
  isActive: boolean;
  isFinished: boolean;
  isValid: boolean;
}

export default function CustomDot({ isActive, isFinished, isValid }: CustomDotProps) {
  return(
    <div className={`w-6 h-6 ${ isActive ? isFinished ? isValid ? "bg-valid" : "bg-invalid" : "bg-very-light-blue" : "bg-azureish-white"} rounded-full border-4 drop-shadow-tiny`}></div>
  )
}
