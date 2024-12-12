import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page" style={{ textAlign: "center", width: '100vw', height: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>We could not find this page.</h1>
        <a href="/" style={{textDecoration: 'none', color: 'white'}}>Go back</a>
      </div>
    );
}