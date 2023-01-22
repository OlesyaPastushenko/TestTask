import { createContext } from "react";
import { useState } from "react";

interface IValue {
    value: string,
    setValue: (value: string)=>void
}

export const InputContext = createContext<IValue>({
    value: "",
    setValue: ()=>{}
})

export const ValueState =({children}:{children: React.ReactNode}) => {
    const [value, setValue] = useState("")

    return (
        <InputContext.Provider value = {{value, setValue}}>
            {children}
        </InputContext.Provider>
    )

}




