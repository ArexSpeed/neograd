import { useState } from "react";
import EffectsButtons from "./Effects/EffectsButtons";
import SettingsNavButtons from "./SettingsNav/Buttons";
import ViewButton from "./ViewCode/ViewButton";

const Builder = () => {
  const [activeNav, setActiveNav] = useState('Buttons');
  return (
    <section className="builder">
      <div className="builder__nav">
        <button className={`builder__nav-item ${activeNav === 'Buttons' && 'active'}`} onClick={() => setActiveNav('Buttons')}>
          Buttons
        </button>
        <button className={`builder__nav-item ${activeNav === 'Inputs' && 'active'}`} onClick={() => setActiveNav('Inputs')}>
          Inputs
        </button>
        <button className={`builder__nav-item ${activeNav === 'Text' && 'active'}`} onClick={() => setActiveNav('Text')}>
          Text
        </button>
      </div>
      <div className="builder__container">
        <div className="builder__settings">
          <SettingsNavButtons />
        </div>
        <div className="builder__wrapper">
          <div className="builder__wrapper-aside">
            <div className="builder__wrapper-nav">
              <button className="builder__wrapper-nav-item active">
                Effects
              </button>
            </div>
            <div className="builder__wrapper-container">
              <EffectsButtons />
            </div>
          </div>
          <div className="builder__wrapper-view">
            <div className="builder__wrapper-nav">
                <button className="builder__wrapper-nav-item active">
                  View
                </button>
                <button className="builder__wrapper-nav-item">
                  CSS
                </button>
                <button className="builder__wrapper-nav-item">
                  SCSS
                </button>
                <button className="builder__wrapper-nav-item">
                  React
                </button>
              </div>
              <div className="builder__wrapper-container">
                <ViewButton />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Builder;