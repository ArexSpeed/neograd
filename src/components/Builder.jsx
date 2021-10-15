import { useState } from "react";
import ButtonCSS from "./Code/Buttons/ButtonCSS";
import ButtonRSC from "./Code/Buttons/ButtonRSC";
import EffectsButtons from "./Effects/EffectsButtons";
import SettingsNavButtons from "./SettingsNav/Buttons";
import ViewButton from "./ViewCode/ViewButton";

const Builder = () => {
  const [activeNav, setActiveNav] = useState('Buttons');
  const [activeViewCode, setActiveViewCode] = useState('View');
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
                <button 
                  className={`builder__wrapper-nav-item ${activeViewCode === 'View' && 'active'}`}
                  onClick={() => setActiveViewCode('View')}
                >
                  View
                </button>
                <button 
                  className={`builder__wrapper-nav-item ${activeViewCode === 'CSS' && 'active'}`}
                  onClick={() => setActiveViewCode('CSS')}
                >
                  CSS
                </button>
                <button 
                  className={`builder__wrapper-nav-item ${activeViewCode === 'React' && 'active'}`}
                  onClick={() => setActiveViewCode('React')}
                >
                  React
                </button>
              </div>
              <div className="builder__wrapper-container">
                {activeViewCode === 'View' && (
                  <ViewButton />
                )}
                {activeViewCode === 'CSS' && (
                  <ButtonCSS />
                )}
                {activeViewCode === 'React' && (
                  <ButtonRSC />
                )}

              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Builder;