import { useDispatch, useSelector } from 'react-redux';
import { getButtonSettings, setSizes, setAllSizes, setRadius, setAllRadius, setColors, setBorder } from '../../context/slices/buttonSettings';

const SettingsNavButtons = () => {
  const dispatch = useDispatch();
  const button = useSelector(getButtonSettings);

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
        <div className="row">
          <span className="settingsNav__span">Bg</span>
          <input
            type="color"
            defaultValue={button.colors.bg}
            onChange={(e) =>
              dispatch(setColors({ type: "bg", value: e.target.value }))
            }
          />
        </div>
        <div className="row">
          <span className="settingsNav__span">C1</span>
          <input
            type="color"
            defaultValue={button.colors.c1}
            onChange={(e) =>
              dispatch(setColors({ type: "c1", value: e.target.value }))
            }
          />
        </div>
        <div className="row">
          <span className="settingsNav__span">C2</span>
          <input
            type="color"
            defaultValue={button.colors.c2}
            onChange={(e) =>
              dispatch(setColors({ type: "c2", value: e.target.value }))
            }
          />
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
      <section className="col">
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
      </section>
    </div>
  );
}

export default SettingsNavButtons;
