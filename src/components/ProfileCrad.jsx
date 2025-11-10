import '../components/Profile_Card.css';

const ProfileCard = () => {
  const profiles = [
    {
      name: "เกียรติศักดิ์ วชิรศิริกุล",
      role: "Frontend Developer",
      bio: "ชอบดูการ์ตูนและเขียนโค้ดในเวลาว่าง",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1280px-Cat_August_2010-4.jpg",
      links: {
        github: "https://github.com/USer99pro",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "สมชาย อินทร",
      role: "UI/UX Designer",
      bio: "ออกแบบประสบการณ์ผู้ใช้ให้เรียบง่ายและทันสมัย",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fwallpapers%2Fcat-4k-po.jpg&f=1&nofb=1&ipt=24ad126b06daa18d4db1a733642a62e14332d617295f12650d7ea04a7a23d0fb",
      links: {
        github: "#",
        facebook: "#",
        instagram: "#"
      }
    },
    {
      name: "จันทร์เพ็ญ วิริยะ",
      role: "Graphic Designer",
      bio: "รักการสร้างสรรค์ผลงานด้วยสีและแสง",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsite-547756.mozfiles.com%2Ffiles%2F547756%2Fmedium%2Fcatoutside.jpeg&f=1&nofb=1&ipt=675b371e7eba4f6e213319c25aaba71c4e459447d88327cd26bb4dd398419c9c",
      links: {
        github: "#",
        facebook: "#",
        instagram: "#"
      }
    },
       {
      name: "สมชาย อินทร",
      role: "UI/UX Designer",
      bio: "ออกแบบประสบการณ์ผู้ใช้ให้เรียบง่ายและทันสมัย",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fwallpapers%2Fcat-4k-po.jpg&f=1&nofb=1&ipt=24ad126b06daa18d4db1a733642a62e14332d617295f12650d7ea04a7a23d0fb",
      links: {
        github: "#",
        facebook: "#",
        instagram: "#"
      }
    },
        {
      name: "สมชาย อินทร",
      role: "UI/UX Designer",
      bio: "ออกแบบประสบการณ์ผู้ใช้ให้เรียบง่ายและทันสมัย",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fwallpapers%2Fcat-4k-po.jpg&f=1&nofb=1&ipt=24ad126b06daa18d4db1a733642a62e14332d617295f12650d7ea04a7a23d0fb",
      links: {
        github: "#",
        facebook: "#",
        instagram: "#"
      }
    },
        {
      name: "สมชาย อินทร",
      role: "UI/UX Designer",
      bio: "ออกแบบประสบการณ์ผู้ใช้ให้เรียบง่ายและทันสมัย",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.hdqwalls.com%2Fwallpapers%2Fcat-4k-po.jpg&f=1&nofb=1&ipt=24ad126b06daa18d4db1a733642a62e14332d617295f12650d7ea04a7a23d0fb",
      links: {
        github: "#",
        facebook: "#",
        instagram: "#"
      }
    },
  ];

  return (
    <div className="profile-container">
      {profiles.map((profile, index) => (
        <div className="profile-card" key={index}>
          <div className="profile-image">
            <img src={profile.image} alt={profile.name} />
          </div>

          <div className="profile-info">
            <h2>{profile.name}</h2>
            <p className="role">{profile.role}</p>
            <p className="bio">{profile.bio}</p>
            <div className="social-links">
              <a className="btn" href={profile.links.github}>GitHub</a>
              <a className="btn" href={profile.links.facebook}>Facebook</a>
              <a className="btn" href={profile.links.instagram}>Instagram</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
