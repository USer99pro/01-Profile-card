import '../components/Profile_Card.css'
const Profilecrad = () => {
  return (
    <>
      <div className="profile-card">
        <div className="profile-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1280px-Cat_August_2010-4.jpg" />

        </div>

        <div className="profile-info">
            <h2>เกียรติศักดิ์ วชิรศิริกุล</h2>
            <p className="role">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ea nulla voluptate exercitationem temporibus sit eaque in? Porro, aliquid ut fugit eius aut veniam voluptatibus tempora error cumque illum nostrum?</p>
            <p className="bio">ดูการ์ตูน</p>
            <div className="social_link">
                <a className="btn" href="Https://github.com/USer99pro">GitHub</a>
                <a className="btn" href="https://facebook.com">Facebook</a>
                <a className="btn" href="https://instagram.com">instagram</a>

            </div>
        
        
        </div>
      </div>

    </>
  )
}

export default Profilecrad
