import avatar from '../assets/cute_avatar-removebg-preview.png'
import reaper from '../assets/reaper2.png'
import Light from '../components/light.jsx'
import ParticleSystem from '../components/particleSystem.jsx'
import ParticleSystem2 from '../components/particleSystem2.jsx'

export default function HomePage() {
    return (
      <div >
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden', // Clipping any overflow
            zIndex: '-10', // Ensuring it's behind other elements
          }}
        >
          <img 
            src={reaper}
            style={{
              margin: 'auto',
              display: 'block',
              opacity: '0.1',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '100vw', // Fit within the viewport width
              maxHeight: '100vh', // Fit within the viewport height
              width: 'auto', // Maintain aspect ratio
              height: 'auto', // Maintain aspect ratio
              zIndex: '-10',
            }}
          />
        </div>
        <h2 style={{margin: 'auto', marginTop: '100px', display: 'block', color: 'white', textAlign: 'center'}}>Welcome</h2>
        <h1 style={{margin: 'auto', display: 'block', color: 'white', textAlign: 'center'}}>Choose your Path</h1>
        <a href="/newPage" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-145%, -20%)', width: '200px', height: '200px', display: 'flex', color: 'white', textAlign: 'center', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', zIndex: '10'}}>
          <h2>The Future</h2>
        </a>
        <a href="/errorPage" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(45%, -20%)', width: '200px', height: '200px', display: 'flex', color: 'white', textAlign: 'center', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', zIndex: '10'}}>
          <h2>The Void</h2>
        </a>
        
        <Light blurAmount={150} addStyles={{top: '50%', left: '50%', width: '200px', height: '200px', transform: 'translate(-150%, -10%)', backgroundColor: '#007FFF'}} />
        <Light blurAmount={50} addStyles={{top: '50%', left: '50%', width: '200px', height: '200px', transform: 'translate(-150%, -10%)', backgroundColor: '#007FFF'}} />
        

        <Light blurAmount={150} addStyles={{top: '50%', left: '50%', width: '200px', height: '200px', transform: 'translate(50%, -10%)', backgroundColor: 'red'}} />
        <Light blurAmount={50} addStyles={{top: '50%', left: '50%', width: '200px', height: '200px', transform: 'translate(50%, -10%)', backgroundColor: '#EE4B2B'}} />

        <div style={{position: 'absolute', zIndex: '-8', top: '0', left: '0', width: '100vw', height: '100vh'}}>
          <ParticleSystem color="#007FFF" location={Math.random() * window.innerWidth/4 + window.innerWidth/4}/>
        </div>
        <div style={{position: 'absolute', zIndex: '-8', top: '0', left: '0', width: '100vw', height: '100vh'}}>
          <ParticleSystem2 color="red"/>
        </div>    
      </div>
    )
}