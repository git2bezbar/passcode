export interface PasscodeProps {
  children: React.ReactNode;
  isFinished: boolean;
  isValid: boolean;
}

export default function Passcode({ children, isFinished, isValid }: PasscodeProps) {
  return(
    <h1 className={`text-8xl ${isFinished ? isValid ? "text-valid" : "text-invalid" : "text-azureish-white"}  font-bold font-border drop-shadow-normal`}>
      { children }
    </h1>
  )
}
