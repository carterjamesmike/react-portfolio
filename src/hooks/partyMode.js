// const [theme, setTheme] = useState("primary-bg")


// const toggleTheme = () => {
//     if (theme === "primary-bg") {
//         setTheme('party');
//     } else {
//         setTheme('primary-bg');
//     }
// };

//export default toggleTheme;


import { useState } from "react";
  
export default function toggleTheme() {
    const [theme, setTheme] = useState("primary-bg");
    
  const toggleTheme = () => {
    if (theme === "primary-bg") {
        setTheme('party');
    } else {
        setTheme('primary-bg');
    }
    };
  
    
}