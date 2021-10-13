import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getButtonSettings, setSizes, setAllSizes, setRadius, setAllRadius, setColors, setBorder } from '../../context/slices/buttonSettings';
import ColorPallete from './ColorPallete';

const SettingsNavButtons = () => {
  const dispatch = useDispatch();
  const button = useSelector(getButtonSettings);
  const [openPallete1, setOpenPallete1] = useState(false);
  const [openPallete2, setOpenPallete2] = useState(false);
  const [inputColor1, setInputColor1] = useState(button.colors.c1);
  const [inputColor2, setInputColor2] = useState(button.colors.c2);
  const [borderOption, setBorderOption] = useState('Spec');

  //useEffect for setInput cause if add only onChange or onBlur then after clicking on pallete the value did not change, and just onChange is working very slow cause all items have to change
  useEffect(() => {
    setInputColor1(button.colors.c1)
  }, [button.colors.c1]);
  useEffect(() => {
    setInputColor2(button.colors.c2)
  }, [button.colors.c2]);

  return (
    <div className="settingsNav">
      {/* Sizes */}
      <section className="col">
        <div className="settingsNav__title">Sizes</div>
        <div className="row">
          <span className="settingsNav__span">W</span>
          <input
            type="number"
            className="settingsNav__input"
            value={button.sizes.width}
            onChange={(e) =>
              dispatch(setSizes({ type: "width", value: e.target.value }))
            }
          />
        </div>
        <div className="row">
          <span className="settingsNav__span">H</span>
          <input
            type="number"
            className="settingsNav__input"
            value={button.sizes.height}
            onChange={(e) =>
              dispatch(setSizes({ type: "height", value: e.target.value }))
            }
          />
        </div>
        <div className="col">
          <div className="row">
            <button
              className="settingsNav__button"
              onClick={() => dispatch(setAllSizes({ width: 30, height: 15 }))}
            >
              XS
            </button>
            <button
              className="settingsNav__button"
              onClick={() => dispatch(setAllSizes({ width: 50, height: 25 }))}
            >
              S
            </button>
            <button
              className="settingsNav__button"
              onClick={() => dispatch(setAllSizes({ width: 80, height: 40 }))}
            >
              M
            </button>
          </div>
          <div className="row">
            <button
              className="settingsNav__button"
              onClick={() => dispatch(setAllSizes({ width: 100, height: 50 }))}
            >
              L
            </button>
            <button
              className="settingsNav__button"
              onClick={() => dispatch(setAllSizes({ width: 150, height: 75 }))}
            >
              XL
            </button>
            <button
              className="settingsNav__button"
              onClick={() => dispatch(setAllSizes({ width: 200, height: 100 }))}
            >
              XXL
            </button>
          </div>
        </div>
      </section>
      {/* Radius */}
      <section className="col">
        <div className="settingsNav__title">Radius</div>
        <div className="row">
          <span className="settingsNav__span">T</span>
          <input
            type="number"
            className="settingsNav__input border-radiusTL"
            value={button.radius.top}
            onChange={(e) =>
              dispatch(setRadius({ type: "top", value: e.target.value }))
            }
          />
          <span className="settingsNav__span">R</span>
          <input
            type="number"
            className="settingsNav__input border-radiusTR"
            value={button.radius.right}
            onChange={(e) =>
              dispatch(setRadius({ type: "right", value: e.target.value }))
            }
          />
        </div>
        <div className="row">
          <span className="settingsNav__span">L</span>
          <input
            type="number"
            className="settingsNav__input border-radiusBL"
            value={button.radius.left}
            onChange={(e) =>
              dispatch(setRadius({ type: "left", value: e.target.value }))
            }
          />
          <span className="settingsNav__span">B</span>
          <input
            type="number"
            className="settingsNav__input border-radiusBR"
            value={button.radius.bottom}
            onChange={(e) =>
              dispatch(setRadius({ type: "bottom", value: e.target.value }))
            }
          />
        </div>
        <div className="col">
          <div className="row">
            <button
              className="settingsNav__button"
              onClick={() => dispatch(setAllRadius(4))}
            >
              XS
            </button>
            <button
              className="settingsNav__button"
              onClick={() => dispatch(setAllRadius(8))}
            >
              S
            </button>
            <button
              className="settingsNav__button"
              onClick={() => dispatch(setAllRadius(12))}
            >
              M
            </button>
          </div>
          <div className="row">
            <button
              className="settingsNav__button"
              onClick={() => dispatch(setAllRadius(16))}
            >
              L
            </button>
            <button
              className="settingsNav__button"
              onClick={() => dispatch(setAllRadius(24))}
            >
              XL
            </button>
            <button
              className="settingsNav__button"
              onClick={() => dispatch(setAllRadius(48))}
            >
              XXL
            </button>
          </div>
        </div>
      </section>
      {/* Colors */}
      <section className="col">
        <div className="settingsNav__title">Colors</div>
        <table className="settingsNav__table">
          <tr>
            <td>ViewBg</td>
            <td>
              <input
                type="color"
                defaultValue={button.colors.bg}
                onBlur={(e) =>
                  dispatch(setColors({ type: "bg", value: e.target.value }))
                }
              />
            </td>
          </tr>
          <tr>
            <td>Btn col</td>
            <td>
              <input
                type="color"
                value={inputColor1}
                onChange={(e) => setInputColor1(e.target.value)}
                onBlur={(e) =>
                  dispatch(setColors({ type: "c1", value: e.target.value }))
                }
              />
              <svg
                className="color-icon"
                onClick={() => setOpenPallete1(!openPallete1)}
                fill={button.colors.c1}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                  clipRule="evenodd"
                />
              </svg>
            </td>
          </tr>
          <tr>
            <td>2nd col</td>
            <td>
              <input
                type="color"
                value={inputColor2}
                onChange={(e) => setInputColor2(e.target.value)}
                onBlur={(e) =>
                  dispatch(setColors({ type: "c2", value: e.target.value }))
                }
              />
              <svg
                className="color-icon"
                onClick={() => setOpenPallete2(!openPallete2)}
                fill={button.colors.c2}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="color-icon"
                onClick={() =>
                  dispatch(setColors({ type: "c2", value: button.colors.c1 }))
                }
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </td>
          </tr>
        </table>
        {openPallete1 && (
          <ColorPallete type="c1" setOpenPallete={setOpenPallete1} />
        )}
        {openPallete2 && (
          <ColorPallete type="c2" setOpenPallete={setOpenPallete2} />
        )}
      </section>
      {/* Border */}
      <section className="col">
        <div className="settingsNav__title">
          Border
          <button className="settingsNav__title-button" onClick={() => setBorderOption('All')}>All</button>
          <button className="settingsNav__title-button" onClick={() => setBorderOption('Spec')}>Spec</button>
        </div>
        {borderOption === "All" ? (
          <div className="row">
            <span className="settingsNav__span">W</span>
            <input
              type="number"
              className="settingsNav__input border-top"
              value={button.border.top}
              onChange={(e) =>
                dispatch(setBorder({ type: "top", value: e.target.value }))
              }
            />
          </div>
        ) : (
          <>
            <div className="row">
              <span className="settingsNav__span">T</span>
              <input
                type="number"
                className="settingsNav__input border-top"
                value={button.border.top}
                onChange={(e) =>
                  dispatch(setBorder({ type: "top", value: e.target.value }))
                }
              />
              <span className="settingsNav__span">R</span>
              <input
                type="number"
                className="settingsNav__input border-right"
                value={button.border.right}
                onChange={(e) =>
                  dispatch(setBorder({ type: "right", value: e.target.value }))
                }
              />
            </div>
            <div className="row">
              <span className="settingsNav__span">B</span>
              <input
                type="number"
                className="settingsNav__input border-bottom"
                value={button.border.bottom}
                onChange={(e) =>
                  dispatch(setBorder({ type: "bottom", value: e.target.value }))
                }
              />
              <span className="settingsNav__span">L</span>
              <input
                type="number"
                className="settingsNav__input border-top"
                value={button.border.left}
                onChange={(e) =>
                  dispatch(setBorder({ type: "left", value: e.target.value }))
                }
              />
            </div>
          </>
        )}

        <div className="col">
          <div className="row">
            <button
              className="settingsNav__button"
              onClick={() =>
                dispatch(setBorder({ type: "type", value: "none" }))
              }
            >
              None
            </button>
            <button
              className="settingsNav__button border-solid"
              onClick={() =>
                dispatch(setBorder({ type: "type", value: "solid" }))
              }
            >
              Solid
            </button>
            <button
              className="settingsNav__button border-groove"
              onClick={() =>
                dispatch(setBorder({ type: "type", value: "groove" }))
              }
            >
              Groove
            </button>
            <button
              className="settingsNav__button border-double"
              onClick={() =>
                dispatch(setBorder({ type: "type", value: "double" }))
              }
            >
              Double
            </button>
          </div>
          <div className="row">
            <button
              className="settingsNav__button border-dotted"
              onClick={() =>
                dispatch(setBorder({ type: "type", value: "dotted" }))
              }
            >
              Doted
            </button>
            <button
              className="settingsNav__button border-dashed"
              onClick={() =>
                dispatch(setBorder({ type: "type", value: "dashed" }))
              }
            >
              Dashed
            </button>
            <button
              className="settingsNav__button border-ridge"
              onClick={() =>
                dispatch(setBorder({ type: "type", value: "ridge" }))
              }
            >
              Ridge
            </button>
          </div>
        </div>
      </section>
      {/* check values */}
      {/* <section className="col">
        <p>W: {button.sizes.width}</p>
        <p>H: {button.sizes.height}</p>
        <p>Radius</p>
        <p>
          T: {button.radius.top} R: {button.radius.right}
          L: {button.radius.left} B: {button.radius.bottom}{" "}
        </p>
      </section>
      <section className="col">
        <span>Bg:</span>{" "}
        <div
          style={{
            width: "100px",
            height: "40px",
            background: button.colors.bg,
          }}
        ></div>
        <span>C1:</span>{" "}
        <div
          style={{
            width: "100px",
            height: "40px",
            background: button.colors.c1,
          }}
        ></div>
        <span>C2:</span>{" "}
        <div
          style={{
            width: "100px",
            height: "40px",
            background: button.colors.c2,
          }}
        ></div>
      </section>
      <section className="col">
        <span>Border:</span> <span>{button.border.type}</span>
        <span>{button.border.top}</span>
        <span>{button.border.right}</span>
        <span>{button.border.bottom}</span>
        <span>{button.border.left}</span>
      </section> */}
    </div>
  );
}

export default SettingsNavButtons;
