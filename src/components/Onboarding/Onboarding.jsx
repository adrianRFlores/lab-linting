import "./Onboarding.css"
import React from "react"

function Onboarding() {
  return (
    <div className="Onboarding">
      <h1>
        No almacenamos tu <br /> información personal. Nunca.
      </h1>
      <p>
        Nuestra politica de privacidad es sencilla: No <br />
        recolectamos o compartimos tu informacion personal.
      </p>
      <button
        className="installBtn"
        type="button"
      >
        Instala DuckDuckGo
      </button>
      <div className="LastImage">
        <img
          width="1200"
          height="460"
          alt=""
          src="https://duckduckgo.com/assets/onboarding/bathroomguy/1-monster-v2--pre-animation.svg"
        />
      </div>
    </div>
  )
}

export default Onboarding
