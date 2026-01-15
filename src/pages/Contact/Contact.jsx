import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';
import styles from './Contact.module.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Formata a mensagem para o WhatsApp
        const text = `Olá, meu nome é ${formData.name}. ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/5547992406258?text=${encodedText}`;

        // Abre o WhatsApp em nova aba
        window.open(whatsappUrl, '_blank');
    };

    return (
        <main className={styles.contact}>
            {/* Cabeçalho da Página */}
            <PageHeader
                tag="Contato"
                title="Vamos conversar?"
                description="Entre em contato para agendarmos uma reunião e transformarmos seu sonho em realidade."
            />

            {/* Seção de Formulário e Informações */}
            <section className={styles.section}>
                <div className={styles.grid}>
                    {/* Coluna do Formulário */}
                    <div className={styles.formColumn}>
                        <h2 className={styles.columnTitle}>Envie uma mensagem</h2>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="Seu nome completo"
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Mensagem</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    placeholder="Como podemos ajudar?"
                                    rows="5"
                                    required
                                />
                            </div>
                            <Button type="submit" variant="primary" fullWidth>
                                Enviar para WhatsApp
                            </Button>
                        </form>
                    </div>

                    {/* Coluna de Informações */}
                    <div className={styles.infoColumn}>
                        <h2 className={styles.columnTitle}>Informações</h2>
                        <div className={styles.infoList}>
                            <div className={styles.infoItem}>
                                <h3 className={styles.infoLabel}>Localização</h3>
                                <p className={styles.infoText}>Joinville, Santa Catarina</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h3 className={styles.infoLabel}>WhatsApp</h3>
                                <a
                                    href="https://wa.me/5547992406258"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.infoLink}
                                >
                                    (47) 99240-6258
                                </a>
                            </div>
                            <div className={styles.infoItem}>
                                <h3 className={styles.infoLabel}>Instagram</h3>
                                <a
                                    href="https://instagram.com/leticiawurges_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.infoLink}
                                >
                                    @leticiawurges_
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;
