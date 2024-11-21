export interface AnimationContextType {
    isAnimated: boolean;
    setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>;
}

//Explination : 
/*

 setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>;

1-  setIsAnimated : Variable 
2-  React.Dispatch :  function of useState  ==> const [isAnimated, setIsAnimated] = useState(false);
3-  React.SetStateAction<boolean> : this can take two options ( direct value or function based on prev ) ==> 
    A) direct value : setIsAnimated(true);
    B) Function based on previous state : setIsAnimated((prev) => !prev);

*/

