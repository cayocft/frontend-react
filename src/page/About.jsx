import { useState } from 'react';
import './About.css';

export function About() {
    const [feedback, setFeedback] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setFeedback('El formulario todavía no está conectado a un servicio de envío.');
    }

    return (
        <main className="about-page">
            <section className="about-card" aria-labelledby="about-title">
                <header className="about-header">
                    <span className="about-eyebrow">Contacto</span>
                    <h1 id="about-title">Cuéntanos sobre ti</h1>
                    <p>Completa tus datos para que podamos identificarte.</p>
                </header>

                <form className="about-form" onSubmit={handleSubmit}>
                    <div className="about-fields">
                        <div className="about-field">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                id="nombre"
                                name="nombre"
                                type="text"
                                autoComplete="given-name"
                                placeholder="Tu nombre"
                                required
                            />
                        </div>

                        <div className="about-field">
                            <label htmlFor="apellido">Apellido</label>
                            <input
                                id="apellido"
                                name="apellido"
                                type="text"
                                autoComplete="family-name"
                                placeholder="Tu apellido"
                                required
                            />
                        </div>

                        <div className="about-field">
                            <label htmlFor="rut">RUT</label>
                            <input
                                id="rut"
                                name="rut"
                                type="text"
                                autoComplete="off"
                                placeholder="12.345.678-9"
                                aria-describedby="rut-hint"
                                required
                            />
                            <span className="about-field-hint" id="rut-hint">
                                Escríbelo con o sin puntos.
                            </span>
                        </div>

                        <div className="about-field">
                            <label htmlFor="correo">Correo electrónico</label>
                            <input
                                id="correo"
                                name="correo"
                                type="email"
                                autoComplete="email"
                                placeholder="nombre@ejemplo.cl"
                                required
                            />
                        </div>
                    </div>

                    <button className="about-submit" type="submit">
                        Enviar datos
                    </button>
                    <p className="about-feedback" aria-live="polite">{feedback}</p>
                </form>
            </section>
        </main>
    );
}
