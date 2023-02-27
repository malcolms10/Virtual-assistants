import "bulma/css/bulma.css"
import ProfileCard from "./profileCard"
import AlexaImg from "./images/alexa.png"
import CortanaImg from "./images/cortana.png"
import SiriImg from "./images/siri.png"

export default function App(params) {
    return(
        <>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
                
            

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title = "Alexa" desc = "i´ll help you buy stuff off Amazon" handle =   "@Alexa99" image = {AlexaImg}></ProfileCard>
                        </div>
                        <div className="column is-4">
                            <ProfileCard title = "Cortana" desc = "Personal assistant by microsoft" handle =    "@Cortana32" image = {CortanaImg}></ProfileCard>
                        </div>
                        <div className="column is-4">
                            <ProfileCard title = "Siri" desc = "i don´t get lot of updates anymore" handle =    "@Siri01" image = {SiriImg}></ProfileCard>
                        </div>
                    </div>
                </section>
            </div>

            
            
        </>
    )
}