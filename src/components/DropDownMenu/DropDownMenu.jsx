import React, { useState } from "react";
import "./DropDownMenu.css";

const DropDownMenu = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const dropdownClasses = isDropdownOpen ? "dropdown-container dropdown-open" : "dropdown-container";

    return (
        <div className="dropdown-menu">
            <button className="menu-button" onClick={toggleDropdown}>
                <img src='src/assets/more.png' className='hamburger'/>
            </button>
            <div className={dropdownClasses}>
                <ul className="dropdown-list">
                    <li className='sectionTop'>AJUSTES</li>
                    <li className='list2'>Temas</li>
                    <li className='list2'>Todos los ajustes</li>
                    <li className='list2'>Atajos de búsqueda !Bang</li>
                    <li className='sectionTop'>ESENCIALES DE PRIVACIDAD</li>
                    <li className='list2'>Búsqueda Privada</li>
                    <li className='list2'>App y Extensión</li>
                    <li className='sectionTop'>POR QUÉ PRIVACIDAD</li>
                    <li className='list2'>Blog sobre Privacidad</li>
                    <li className='list2'>Boletín Informativo de Privacidad</li>
                    <li className='list2'>Ayuda a Difundir la Privacidad</li>
                    <li className='sectionTop'>SABER MÁS</li>
                    <li className='list2'>Sobre Nosotros</li>
                    <li className='list2'>Política de Privacidad</li>
                    <li className='list2'>Oportunidades de trabajo</li>
                    <li className='list2'>kit de Prensa</li>
                    <li className='sectionTop'>MANTÉN EL CONTACTO</li>
                    <li className='list2'>Twitter</li>
                    <li className='list2'>Reddit</li>
                    <li className='list2'>Ayuda</li>
                </ul>
            </div>
        </div>
    );
}
export default DropDownMenu;