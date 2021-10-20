import React from 'react'
import '../styles/NewArtist.css'

const NewArtist = (props) => {
    let lArrow = "\u003C";
    let rArrow = "\u003E";
    return (
        <div>
            <div className="cardGui ">
                    <div className="guiItem1">
                        <h3>Create a new Artist card</h3>
                    </div>

                    <div className="middleBlock">
                    <div className="arrow" onClick={props.minus}>{lArrow}</div>
                        <div className="guiItem2 guiForm">
                            <input type="text" className="guiInput " placeholder="Artist"/>
                            <input type="text" className="guiInput " placeholder="Album 1"/>
                            <input type="text" className="guiInput " placeholder="Album 2"/>
                            <div className="guiSelect">
                                <label htmlFor="type">Choose a type: </label>
                                <select name="type" id="type" >
                                    <option value="dark">Dark</option>
                                    <option value="electric">Electric</option>
                                    <option value="psychic">Psychic</option>
                                    <option value="steel">Steel</option>
                                    <option value="water">Water</option>
                                    <option value="fire">Fire</option>
                                    <option value="normal">Normal</option>
                                    <option value="ghost">Ghost</option>
                                    <option value="grass">Grass</option>
                                    <option value="fighting">Fighting</option>
                                </select>
                            </div>
                        </div>
                        <div className="arrow" onClick={props.plus}>{rArrow}</div>
                    </div>


                    <div className="guiItem3">
                        <button className="guiBtn cancel" onClick={props.cancel}>
                            Cancel
                        </button>
                        <button className="guiBtn create">
                            Create
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default NewArtist
