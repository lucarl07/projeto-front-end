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
        <div className='personInfo'>
            <img src={props.photo} alt="Foto de perfil do(a) usuário(a)" />
            <article>
                <h1>{props.fullName}</h1>
                <p>{props.location}</p>
            </article>
        </div>
    );
}

const Quote = (props) => {
    return (
        <p className='quote'>
            &quot;{props.quote}&quot;
        </p>
    );
}

const AnchorButton = (props) => {
    return (
        <button className='btn'>
            <a href={props.href}>
                {props.name}
            </a>
        </button>
    );
}

const SocialMedia = () => {
    return (
        <div className='socialMedia'>
            <ul className='btnList'>
                <li className='listItem'>
                    <AnchorButton name='GitHub' href='' />
                </li>
                <li className='listItem'>
                    <AnchorButton name='Frontend Mentor' href='' />
                </li>
                <li className='listItem'>
                    <AnchorButton name='Linkedin' href='' />
                </li>
                <li className='listItem'>
                    <AnchorButton name='Twitter' href='' />
                </li>
                <li className='listItem'>
                    <AnchorButton name='Instagram' href='' />
                </li>
            </ul>
        </div>
    );
}

// Complete output:
const App = () => {
    return (
        <section className='float'>
            <PersonInfo fullName="Jessica Randall" location="London, United Kingdom" photo={imgAvatar} />
            <Quote quote="Front-end developer and avid reader." />
            <SocialMedia />
        </section>
    );
}

export default App;