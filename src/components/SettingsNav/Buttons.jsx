import React from 'react'

const SettingsNavButtons = () => {
  return (
    <div className="settingsNav">
      <section className="col">
        <div className="settingsNav__title">Sizes</div>
        <div className="row">
          <span className="settingsNav__span">W</span> 
          <input type="number" className="settingsNav__input" />
        </div>
        <div className="row">
          <span className="settingsNav__span">H</span> 
          <input type="number" className="settingsNav__input" />
        </div>
        <div className="col">
          <div className="row">
            <button className="settingsNav__button">XS</button>
            <button className="settingsNav__button">S</button>
            <button className="settingsNav__button">M</button>
          </div>
          <div className="row">
            <button className="settingsNav__button">L</button>
            <button className="settingsNav__button">XL</button>
            <button className="settingsNav__button">XXL</button>
          </div>
        </div>
      </section>
      {/* Radius */}
      <section className="col">
        <div className="settingsNav__title">Radius</div>
        <div className="row">
          <span className="settingsNav__span">T</span> 
          <input type="number" className="settingsNav__input border-radiusTL" />
          <span className="settingsNav__span">R</span> 
          <input type="number" className="settingsNav__input border-radiusTR" />
        </div>
        <div className="row">
          <span className="settingsNav__span">L</span> 
          <input type="number" className="settingsNav__input border-radiusBL" />
          <span className="settingsNav__span">B</span> 
          <input type="number" className="settingsNav__input border-radiusBR" />
        </div>
        <div className="col">
          <div className="row">
            <button className="settingsNav__button">XS</button>
            <button className="settingsNav__button">S</button>
            <button className="settingsNav__button">M</button>
          </div>
          <div className="row">
            <button className="settingsNav__button">L</button>
            <button className="settingsNav__button">XL</button>
            <button className="settingsNav__button">XXL</button>
          </div>
        </div>
      </section>
      {/* Colors */}
      <section className="col">
        <div className="settingsNav__title">Colors</div>
        <div className="row">
          <span className="settingsNav__span">Bg</span> 
          <input type="color" />
        </div>
        <div className="row">
          <span className="settingsNav__span">C1</span> 
          <input type="color" />
        </div>
        <div className="row">
          <span className="settingsNav__span">C2</span> 
          <input type="color" />
        </div>
      </section>
      {/* Gradient */}
      <section className="col">
        <div className="settingsNav__title">Gradient</div>
        <div className="row">
          <span className="settingsNav__span">G</span> 
          <input type="color" />
        </div>
      </section>
      {/* Border */}
      <section className="col">
        <div className="settingsNav__title">Border</div>
        <div className="row">
          <span className="settingsNav__span">T</span> 
          <input type="number" className="settingsNav__input border-top" />
          <span className="settingsNav__span">R</span> 
          <input type="number" className="settingsNav__input border-right" />
        </div>
        <div className="row">
          <span className="settingsNav__span">B</span> 
          <input type="number" className="settingsNav__input border-bottom" />
          <span className="settingsNav__span">L</span> 
          <input type="number" className="settingsNav__input border-left" />
        </div>
        <div className="col">
          <div className="row">
            <button className="settingsNav__button">None</button>
            <button className="settingsNav__button border-solid">Solid</button>
            <button className="settingsNav__button border-groove">Groove</button>
            <button className="settingsNav__button border-double">Double</button>
          </div>
          <div className="row">
            <button className="settingsNav__button border-dotted">Doted</button>
            <button className="settingsNav__button border-dashed">Dashed</button>
            <button className="settingsNav__button border-ridge">Ridge</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SettingsNavButtons;
