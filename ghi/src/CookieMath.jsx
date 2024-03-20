import { useState } from "react"


export default function CookieMath() {
    const [butter, setButter] = useState("")
    return (
        <>
        <label>
            Butter amount (grams): &ensp;
            <input value={butter} onChange={(e) => setButter(e.target.value)} />
        </label>
        <p>Sugar: &ensp; {Math.round(butter * .4444)}g</p>
        <p>Brown Sugar: &ensp; {Math.round(butter * 1.083333)}g</p>
        <p>Bread Flour: &ensp; {Math.round(butter * 1.222222)}g</p>
        <p>All Purpose Flour: &ensp; {Math.round(butter * .444444)}g</p>
        <p>Baking Soda: &ensp; {math.fraction(butter * .00416666)}tsp</p>
        </>
    )
}
