import './home.css'
import HomeScene from '../../components/scene/homeScene'

export default function Home() {
    const openLink = (link) => {
        window.open(link, '_blank');
    }

    return (
        <>
            <div id='text-container'>
                <div id='intro-text'>
                    <h2>Welcome</h2>
                    <p>Take a look at this portfolio, showcasing cognitive science projects that integrates design principles and interactive technologies.</p>
                    <h1>Explore Coginitive Design Projects →</h1>
                    
                </div>
                <div id='projects'>
                    <div className='project' onClick={() => openLink('inch-foot-yard.pdf')}/>
                    <div className='project' onClick={() => openLink('experiment-protocol.pdf')}/>
                </div>
                <div id='project-description'>
                    <div>
                        <h3>Inch/Foot/Yard Design</h3>
                        <p>
                            Explore Figma prototypes illustrating different design choices based on spatial scales.
                        </p>
                        <div className='button-container'>
                            <a target='_blank' href='https://www.figma.com/proto/PaFgYS8Is2MgX01kufVuKh/Inch-Foot-Yard-Scale-Designs?node-id=82-2&node-type=canvas&t=rzGuS06PJI8LCWHG-1&scaling=scale-down&content-scaling=fixed&page-id=44%3A67'><button>Inch Scale Prototype</button></a>
                            <a target='_blank' href='https://www.figma.com/proto/PaFgYS8Is2MgX01kufVuKh/Inch-Foot-Yard-Scale-Designs?node-id=21-451&node-type=canvas&t=AMd1Hid9WR4nqU84-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2396'><button>Foot Scale Prototype</button></a>
                            <a target='_blank' href='https://www.figma.com/proto/PaFgYS8Is2MgX01kufVuKh/Inch-Foot-Yard-Scale-Designs?node-id=83-37&node-type=canvas&t=D6j0UXJcW37riQy4-1&scaling=contain&content-scaling=fixed&page-id=1%3A2'><button>Yard Scale Prototype</button></a>
                            <a target='_blank' href='inch-foot-yard.pdf'><button>View PDF</button></a>
                        </div>
                    </div>
                    <div>
                        <h3>Experiment Protocol Design</h3>
                        <p>
                            Presents a carefully structured experimental design focused on exploring web user interaction patterns.
                        </p>
                        <a target='_blank' href='experiment-protocol.pdf'><button>View Protocol</button></a>
                    </div>
                </div>
            </div>  
            <div id='scene'>
                <HomeScene />
            </div>
        </>
    )
}