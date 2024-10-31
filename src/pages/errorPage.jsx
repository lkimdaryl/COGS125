import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page" style={{ textAlign: "center", width: '100vw', height: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>This is the void</h1>
        <p>Nothing is here but darkness</p>
        <a href="/" style={{textDecoration: 'none', color: 'white'}}>Go back</a>
      </div>
    );
}