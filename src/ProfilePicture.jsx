function ProfilePicture() {
  const handleClick = (e) => e.target.style.display = "none";

  return (
    <img
      onClick={(e) => handleClick(e)}
      src="https://th.bing.com/th/id/OIP.O4Lrw3QH_SZeKwid1-Ha7QAAAA?rs=1&pid=ImgDetMain"
    ></img>
  );
}

export default ProfilePicture;
