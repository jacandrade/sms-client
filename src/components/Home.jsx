import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
    return (
        <div>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">Brand SMS</h1>
                    <h3>Bem vindo ao aplicativo de envio de SMS da Brand</h3>
                    <p>Para iniciar, clique no botão abaixo.</p>
                    <p>Em caso de problemas ou dúvidas, entre em contato conosco.</p>
                    <p>
                        <Link className="btn btn-primary btn-lg" to="/sms" 
                            role="button">Eviar SMS</Link>
                    </p>
                </div>
            </div>
            <hr />
        </div>
    );
}
