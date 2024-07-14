export interface TextProps {
  showText: boolean;
  setShowText: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CountdownTimerProps {
  initialTime: number;
  showText: boolean;
  setShowText: React.Dispatch<React.SetStateAction<boolean>>;
}
