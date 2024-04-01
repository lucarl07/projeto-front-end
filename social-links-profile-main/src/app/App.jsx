/* eslint-disable react/prop-types */
/** Main App Components
 * By: lucarl07
 */

// Importing CSS from App.css:
import './App.css';

// Importing external images:
import imgAvatar from '../assets/images/avatar-jessica.jpeg'

const PersonInfo = (props) => {
    return (
        <div>
            <img src={props.photo} alt="Foto de perfil do(a) usuário(a)" />
            <article>
                <h1>{props.fullName}</h1>
                <p>{props.location}</p>
            </article>
        </div>
    );
}

const SocialMedia = (props) => {
    return (
        <>
            <p>&quot;{props.quote}&quot;</p>

            <ul className='btnList'>
                <li className='listItem'>
                    <button className='btn'>GitHub</button>
                </li>
                <li className='listItem'>
                    <button className='btn'>Frontend Mentor</button>
                </li>
                <li className='listItem'>
                    <button className='btn'>Linkedin</button>
                </li>
                <li className='listItem'>
                    <button className='btn'>Twitter</button>
                </li>
                <li className='listItem'>
                    <button className='btn'>Instagram</button>
                </li>
            </ul>
        </>
    );
}

// Complete output:
const App = () => {
    return (
        <section className='float'>
            <PersonInfo fullName="Jessica Randall" location="London, United Kingdom" photo={imgAvatar} />
            <SocialMedia quote="Front-end developer and avid reader." />
        </section>
    );
}

export default App;