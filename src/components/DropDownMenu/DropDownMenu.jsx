import React, { useState } from 'react'
import './DropDownMenu.css'

function DropDownMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const dropdownClasses = isDropdownOpen ? 'dropdown-container dropdown-open' : 'dropdown-container'

  return (
    <div className="dropdown-menu">
      <button
        type="button"
        className="menu-button"
        onClick={toggleDropdown}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d={`M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 
              6.55228 2 6Z`}
            fill="currentColor"
          />
          <path
            d={`M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845
              21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z`}
            fill="currentColor"
          />
          <path
            d={`M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645
             22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z`}
            fill="currentColor"
          />
        </svg>
      </button>
      <div className={dropdownClasses}>
        <ul className="dropdown-list">
          <li className="sectionTop">AJUSTES</li>
          <li className="list2">Temas</li>
          <li className="list2">Todos los ajustes</li>
          <li className="list2">Atajos de búsqueda !Bang</li>
          <li className="sectionTop">ESENCIALES DE PRIVACIDAD</li>
          <li className="list2">Búsqueda Privada</li>
          <li className="list2">App y Extensión</li>
          <li className="sectionTop">POR QUÉ PRIVACIDAD</li>
          <li className="list2">Blog sobre Privacidad</li>
          <li className="list2">Boletín Informativo de Privacidad</li>
          <li className="list2">Ayuda a Difundir la Privacidad</li>
          <li className="sectionTop">SABER MÁS</li>
          <li className="list2">Sobre Nosotros</li>
          <li className="list2">Política de Privacidad</li>
          <li className="list2">Oportunidades de trabajo</li>
          <li className="list2">kit de Prensa</li>
          <li className="sectionTop">MANTÉN EL CONTACTO</li>
          <li className="list2">Twitter</li>
          <li className="list2">Reddit</li>
          <li className="list2">Ayuda</li>
        </ul>
      </div>
    </div>
  )
}
export default DropDownMenu
