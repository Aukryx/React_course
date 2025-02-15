function ProfilePicture(){
    const imageUrl = "./src/assets/profile_picture.png"
    const handleClick = (e) => e.target.style.display = "none"
    return(<img onClick={handleClick} src={imageUrl}></img>);
}

export default ProfilePicture