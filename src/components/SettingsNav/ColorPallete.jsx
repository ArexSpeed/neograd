const colors = [
['#b0ff57', '#76ff03', '#32cb00', '#00feca'],
['#75a7ff', '#2979ff', '#004ecb', '#45f3ff'],
['#ff616f', '#ff1744', '#c4001d', '#eb0450'],
['#df78ef', '#ab47bc', '#790e8b', '#6e0dd0'],
['#ffff72', '#ffeb3b', '#c8b900', '#ccff02'],
['#ff9f00', '#ff7d00', '#e55300', '#ff3c00'],
['#ff77a9', '#ec407a', '#b4004e', '#ff1199'],
['#dadce0', '#ffffff', '#9aa0a6', '#eafbff'],
['#3c4043', '#202124', '#000000', '#2c2c2c'],
['#edc967', '#ffd700', '#ae8625', '#cfaa01'],
['#d8d8d8', '#c0c0c0', '#757575', '#7285a5'],
['#e0ab76', '#a52a2a', '#442424', '#c3732a'],
]

const ColorPallete = ({ setOpenPallete }) => {
  return (
    <div className="pallete">
      <table className="pallete__table">
        <thead>
          <tr>
            <th>light</th>
            <th>normal</th>
            <th>dark</th>
            <th>neon</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((color,i) => (
            <tr key={i}>
              <td><button className="pallete__color" style={{ background: color[0]}} onClick={() => setOpenPallete(false)}></button></td>
              <td><button className="pallete__color" style={{ background: color[1]}} onClick={() => setOpenPallete(false)}></button></td>
              <td><button className="pallete__color" style={{ background: color[2]}} onClick={() => setOpenPallete(false)}></button></td>
              <td><button className="pallete__color" style={{ background: color[3]}} onClick={() => setOpenPallete(false)}></button></td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  )
}

export default ColorPallete
