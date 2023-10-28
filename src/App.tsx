import Passcode from "./components/Passcode";
import CustomDot from "./components/CustomDot";
import KeyPadButton from "./components/KeyPadButton";
import Button from "./components/Button";
import Snackbar from "./components/Snackbar";
import { useEffect, useReducer } from "react";

export default function App() {

  type State = {
    isValid: boolean;
    isFinished: boolean;
    currentNumber: number;
    currentPasscode: number;
    numberOfSum: number,
    passcode: number[];
  }

  const [state, dispatch] = useReducer((state: State, action: any) => {
    return { ...state, ...action };
  }, {
    isValid: true,
    isFinished: false,
    currentNumber: 0,
    currentPasscode: 0 || parseInt(localStorage.currentPasscode),
    numberOfSum: 0,
    passcode: [
      79,
      42,
      66,
      41,
      23,
      27,
    ],
  });

  const handleKeyPadClick = (i: number) => {
    if (state.numberOfSum < 10)
      dispatch({ 
        currentNumber: state.currentNumber + i,
        numberOfSum: state.numberOfSum + 1,
      });
  }

  const previousStep = () => {
    dispatch({ 
      currentPasscode: state.currentPasscode - 1,
      currentNumber: 0,
      numberOfSum: 0,
      isFinished: false,
    });
  }

  const nextStep = () => {
    dispatch({ 
      currentPasscode: state.currentPasscode + 1,
      currentNumber: 0,
      numberOfSum: 0,
      isFinished: false,
    });
  }

  useEffect(() => {
    if (state.currentNumber === state.passcode[state.currentPasscode] && state.numberOfSum === 10) {
      dispatch({ isValid: true, isFinished: true });
    } else if ((state.currentNumber >= state.passcode[state.currentPasscode] && state.numberOfSum !== 10) || 
      (state.currentNumber !== state.passcode[state.currentPasscode] && state.numberOfSum === 10)) {
      dispatch({ isValid: false, isFinished: true });
    }
  }, [state.currentNumber, state.numberOfSum]);

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("currentPasscode", state.currentPasscode);
  }, [state.currentPasscode]);

  return (
    <>
      <div className="min-h-screen min-w-screen bg-orange-red bg-grid flex flex-col justify-center items-center p-8 gap-8">
        <div className="absolute left-0 right-0 top-0 p-8 pb-16 sm:pb-12 flex justify-center items-center z-10">
          <div className={`max-w-md flex justify-center items-center grow gap-8 transition-all duration-500 ${state.isFinished ? "opacity-1 translate-y-0" : "opacity-0 -translate-y-full"}`}>
            <Snackbar isValid={state.isValid}>{state.isValid ? "Certified GOAT 🐐" : "Flop monumental j’ai jamais vu ça 💀"}</Snackbar>
          </div>
        </div>
        <Passcode isValid={state.isValid} isFinished={state.isFinished}>
          {state.currentPasscode > 2 ? "XX" : state.currentNumber}/{state.passcode[state.currentPasscode]}
        </Passcode>
        <div className="flex justify-center items-center gap-2">
          { Array.from({length: 10}, (_, i) => (
            <CustomDot key={i} isActive={state.numberOfSum > i} isValid={state.isValid} isFinished={state.isFinished}/>
          ))}
        </div>
        <div className="max-w-sm flex flex-wrap justify-center items-center gap-4">
          { Array.from({length: 9}, (_, i) => (
            <KeyPadButton key={i} onClick={() => { if (!state.isFinished) handleKeyPadClick(i); }}>{++i}</KeyPadButton>
          ))}
        </div>
        <div className="absolute left-0 right-0 bottom-0 p-8 pb-16 sm:pb-12 flex justify-center items-center z-10">
          <div className="max-w-md flex justify-center items-center grow gap-8">
            {state.currentPasscode > 0 && <Button onClick={previousStep}>Précédent</Button>}
            {state.currentPasscode < (state.passcode.length - 1) && <Button onClick={nextStep}>Suivant</Button>}
          </div>
        </div>
      </div>
    </>
  )
}
