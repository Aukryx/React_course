import profilePic from './assets/profile_picture.png'

function Card(){
return(
    <div className="card">
        <img src={profilePic} alt="Profile picture"></img>
        <h2 className="card-title">Aukryx</h2>
        <p className="card-text">Full Stack Developer Student and life enjoyer</p>
    </div>
);
}

export default Card