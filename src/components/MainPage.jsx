import './debug.css'
import './MainPage.css'

import NavLayout from "./NavLayout"
import BodyLayout from "./BodyLayout"

export default function MainPage(){
    return <div className='mainPage'>
        <NavLayout></NavLayout>
        <BodyLayout></BodyLayout>
    </div>
}