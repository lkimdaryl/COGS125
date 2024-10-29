import avatar from '../assets/cute_avatar-removebg-preview.png'

export default function HomePage() {
    return (
      <>
      <div>Hello! My name is Kim</div>
      <div>This is my portfolio.</div>
      <img src={avatar} />
      <a href="/newPage">New Page</a>
      </>
    )
}