import React from 'react';
import './Form.css';

class Form extends React.Component
{
    render()
    {
        return(
            <form name="newForm">

                <div className="form-group">
                    <label> User Name *
                        <input type="text" className="form-control" maxLength="40" />
                    </label>
                </div>

                <div className="form-group">
                    <label> Email *
                        <input type="email" className="form-control" maxLength="50" />
                    </label>
                </div>

                <div className="form-group">
                    <label>Select Troop *
                        <select className="form-control drop">
                            <option selected="Barbarian">Barbarian</option>
                            <option selected="Archer">Archer</option>
                            <option selected="Giant">Giant</option>
                            <option selected="Balloons">Balloons</option>
                            <option selected="Dragon">Dragon</option>
                            <option selected="Pekka">Pekka</option>
                        </select>
                    </label>

                </div>


                <div className="form-group">
                    <label> Password *
                        <input type="password" className="form-control" minLength="8" />
                    </label>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
      </form>
        );
    }
}

export default Form;