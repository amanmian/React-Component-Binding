import React from 'react';

class Home extends React.Component
{
    render()
    {
        let x="Clash of Clans Forum"
        // console.log(this.props);
        console.log(this.props.user)
        return(
            <div>
                This is my home component.
               <p> Co-sponsored By :  {this.props.name} </p>
               <h4>Hobbies:</h4>
               <ul>
                <strong>   {this.props.user.hobby.map((h12)=> <li>{h12}</li>)}  </strong>
                   {/* {this.props.user.hobby.map((hobby) => <li>{hobby}</li> )} */}
                   {/* {this.props.user.hobby.map((hobbies)=> <li> {hobbies} </li> )} */}
               </ul>
               <p> <strong> {x} </strong> </p>
               {this.props.children}
            </div>
        );
    }
}

export default Home;